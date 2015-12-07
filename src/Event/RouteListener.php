<?php

namespace Wasabi\Cms\Event;

use Cake\Event\Event;
use Cake\Event\EventListenerInterface;
use Wasabi\Core\Model\Entity\Route;

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
}
