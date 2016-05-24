<?php
/**
 * Wasabi Cms Menu Event Listener
 *
 * Wasabi CMS
 * Copyright (c) Frank Förster (http://frankfoerster.com)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Frank Förster (http://frankfoerster.com)
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace Wasabi\Cms\Event;

use Cake\Event\Event;
use Cake\Event\EventListenerInterface;
use Cake\Network\Request;
use Cake\ORM\TableRegistry;
use Wasabi\Cms\Model\Entity\MenuItem;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Cms\View\Helper\MenuHelper;
use Wasabi\Core\Menu;
use Wasabi\Core\Wasabi;

class MenuListener implements EventListenerInterface
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
            'Wasabi.Backend.Menu.initMain' => [
                'callable' => 'initBackendMenuMainItems',
                'priority' => 2000
            ],
            'Wasabi.Backend.MenuItems.getLinkTypes' => [
                'callable' => 'getLinkTypesForMenuItem',
                'priority' => 2000
            ],
            'Wasabi.Frontend.MenuItems.Entity.render' => [
                'callable' => 'renderMenuItem',
                'priority' => 2000
            ],
            'Wasabi.Frontend.MenuItems.Entity.isActive' => [
                'callable' => 'isMenuItemActive'
            ]
        ];
    }

    /**
     * Initialize the backend main menu items.
     *
     * @param Event $event
     */
    public function initBackendMenuMainItems(Event $event)
    {
        /** @var Menu $menu the "backend.main" Nav instance */
        $menu = $event->subject();

        $menu
            ->addMenuItem([
                'alias' => 'cms-pages',
                'name' => __d('wasabi_cms', 'Pages'),
                'parent' => 'content',
                'priority' => 1,
                'url' => [
                    'plugin' => 'Wasabi/Cms',
                    'controller' => 'Pages',
                    'action' => 'index'
                ]
            ])
            ->addMenuItem([
                'alias' => 'menus',
                'name' => __d('wasabi_cms', 'Menus'),
                'priority' => 2000,
                'url' => [
                    'plugin' => 'Wasabi/Cms',
                    'controller' => 'Menus',
                    'action' => 'index'
                ],
                'icon' => 'icon-menu',
            ])
            ->addMenuItem([
                'alias' => 'settings_theme',
                'name' => __d('wasabi_core', 'Theme'),
                'priority' => 50,
                'parent' => 'settings',
                'url' => [
                    'plugin' => 'Wasabi/Cms',
                    'controller' => 'Settings',
                    'action' => 'theme'
                ],
                'matchAction' => true
            ]);
    }

    /**
     * Get available link types for menu items (wasabi backend).
     *
     * @param Event $event
     */
    public function getLinkTypesForMenuItem(Event $event)
    {
        $Pages = TableRegistry::get('Wasabi/Cms.Pages');
        $pages = $Pages->find('treeList', [
            'keyPath' => 'id',
            'valuePath' => 'name',
            'spacer' => '. . . '
        ])->toArray();

        if (!$pages) {
            return;
        }

        /** @var string $group */
        $group = __d('wasabi_core', 'Cms Pages');

        $results = [];

        foreach ($pages as $id => $name) {
            $key = json_encode([
                'type' => 'entity',
                'model' => 'Wasabi/Cms.Pages',
                'id' => $id
            ]);
            $results[$key] = $name;
        }

        $event->result[$group] = $results;
    }

    public function renderMenuItem(Event $event, MenuHelper $helper)
    {
        /** @var MenuItem $menuItem */
        $menuItem = $event->subject();

        if (
            $menuItem->foreign_model !== 'Wasabi/Cms.Pages' ||
            $menuItem->get('Pages')['id'] === null
        ) {
            return;
        }

        $PagesTable = TableRegistry::get('Wasabi/Cms.Pages');

        try {
            /** @var Page $page */
            $page = $PagesTable->get($menuItem->get('Pages')['id']);
            $event->result = $helper->Html->link($menuItem->name, $menuItem->get('Routes')['url']);
            $event->stopPropagation();
        } catch (\Exception $e) {
        }
    }

    public function isMenuItemActive(Event $event, Request $request)
    {
        /** @var MenuItem $menuItem */
        $menuItem = $event->subject();
        $pageId = $menuItem->get('Pages')['id'] ?? null;

        if (
            $menuItem->foreign_model !== 'Wasabi/Cms.Pages' ||
            $pageId === null
        ) {
            return;
        }

        if ((int)$pageId === Wasabi::page()->id) {
            $event->result = true;
            $event->stopPropagation();
        }
    }
}
