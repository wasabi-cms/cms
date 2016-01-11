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
use Cake\ORM\TableRegistry;
use Wasabi\Cms\Config;
use Wasabi\Core\Menu;

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
                'priority' => Config::$priority
            ],
            'Wasabi.Backend.MenuItems.getLinkTypes' => [
                'callable' => 'getLinkTypesForMenuItem',
                'priority' => Config::$priority
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
        $pages = $Pages->find('treeList')
            ->select([
                $Pages->aliasField('id'),
                $Pages->aliasField('name')
            ])
            ->toArray();

        if (!$pages) {
            return;
        }

        /** @var string $group */
        $group = __d('wasabi_core', 'Cms Pages');

        $results = [];

        foreach ($pages as $id => $name) {
            $key = json_encode([
                'type' => 'object',
                'object' => 'Wasabi/Cms.Page',
                'id' => $id
            ]);
            $results[$key] = $name;
        }

        $event->result[$group] = $results;
    }
}
