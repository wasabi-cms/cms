<?php

namespace Wasabi\Cms\Event;

use Cake\Event\Event;
use Cake\Event\EventListenerInterface;
use Cake\ORM\TableRegistry;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Core\Model\Entity\Route;
use Wasabi\Core\Wasabi;

class RouteListener implements EventListenerInterface
{
    /**
     * Returns a list of events this object is implementing. When the class is registered
     * in an event manager, each individual method will be associated with the respective event.
     *
     * @return array
     */
    public function implementedEvents()
    {
        return [
            'Wasabi.Routes.parse' => [
                'callable' => 'parseRoute'
            ],
            'Wasabi.Routes.match' => [
                'callable' => 'matchRoute'
            ],
            'Wasabi.Routes.Query.published.decorate' => [
                'callable' => 'decoratePublishedQuery'
            ]
        ];
    }

    /**
     * @param Event $event
     * @param Route $route
     * @param int|bool $pageNumber
     */
    public function parseRoute(Event $event, $route, $pageNumber)
    {
        $params = [];

        switch ($route->model) {
            case 'Wasabi/Cms.Pages':
                $params = [
                    'plugin' => 'Wasabi/Cms',
                    'controller' => 'Frontend/Pages',
                    'action' => 'view',
                    'pass' => [
                        $route->foreign_key,
                        $route->language_id,
                        ($route->page_type === 'collection' && $pageNumber !== false) ? $pageNumber : false
                    ]
                ];
                break;
        }

        if (!empty($params)) {
            $event->result['params'] = $params;
            $event->stopPropagation();
        }
    }

    public function matchRoute(Event $event, array $url)
    {
        if (!isset($url['model']) || $url['model'] !== 'Wasabi/Cms.Pages') {
            return;
        }

        $RoutesTable = TableRegistry::get('Wasabi/Core.Routes');
        $route = $RoutesTable->find()
            ->select([
                'url'
            ])
            ->where([
                'model' => $url['model'],
                'foreign_key' => $url['foreign_key'] ?? 0,
                'language_id' => $url['language_id'] ?? 0,
                'redirect_to IS' => null
            ])
            ->hydrate(false)
            ->first();

        if (!empty($route)) {
            $event->result = $route['url'];
            $event->stopPropagation();
        }
    }

    /**
     * Decorate the given query by joining the PagesTable.
     *
     * @param Event $event
     * @return void
     */
    public function decoratePublishedQuery(Event $event)
    {
        $query = $event->subject();
        
        // Join the PagesTable
        $query
            ->select(['Pages.id'])
            ->join([
                'Pages' => [
                    'table' => 'cms_pages',
                    'type' => 'LEFT',
                    'conditions' => [
                        'MenuItems.foreign_model = "Wasabi/Cms.Pages"',
                        'MenuItems.foreign_id = Pages.id',
                        'Pages.status' => Page::STATUS_PUBLISHED
                    ]
                ]
            ]);
    }
}
