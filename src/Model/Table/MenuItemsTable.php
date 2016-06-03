<?php
/**
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
namespace Wasabi\Cms\Model\Table;

use Cake\Event\Event;
use Cake\Event\EventManager;
use Cake\ORM\Query;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Wasabi\Cms\Model\Entity\MenuItem;

/**
 * Class MenuItemsTable
 */
class MenuItemsTable extends Table
{
    /**
     * The maximum nesting level of menu items.
     */
    const MAXIMUM_NESTING_LEVEL = 2;

    /**
     * Initialize a table instance. Called after the constructor.
     *
     * @param array $config Configuration options passed to the constructor
     */
    public function initialize(array $config)
    {
        $this->table('cms_menu_items');

        $this->belongsTo('Menus', [
            'className' => 'Wasabi/Cms.Menus'
        ]);

        $this->addBehavior('CounterCache', ['Menus' => ['menu_item_count']]);
        $this->addBehavior('Tree');
        $this->addBehavior('Timestamp');
    }

    /**
     * Default validation rules.
     *
     * @param Validator $validator
     * @return Validator
     */
    public function validationDefault(Validator $validator)
    {
        return $validator->notEmpty('name', __d('wasabi_core', 'Please enter a name for the menu item.'));
    }

    /**
     * Set the scope of the menu item to a specific $menuId.
     *
     * @param string $menuId
     */
    public function setScope($menuId)
    {
        $this->behaviors()->Tree->config('scope', [
            'menu_id' => $menuId
        ]);
    }

    public function beforeSave(Event $event, MenuItem $item)
    {
        $linkTo = $item->get('link_to') ?? false;

        if (!$linkTo) {
            return;
        }

        $linkTo = json_decode($linkTo, true);

        $linkType = $linkTo['type'] ?? false;
        if (!$linkType) {
            return;
        }
        switch ($linkType) {
            case 'entity':
                if (!isset($linkTo['model']) || !isset($linkTo['id'])) {
                    return;
                }
                $item->type = $linkType;
                $item->foreign_model = $linkTo['model'];
                $item->foreign_id = $linkTo['id'];
                break;
            case 'external':
                break;
            case 'custom':
                break;
        }
    }

    /**
     * @TODO
     * @param $menuId
     * @return array|Query
     */
    public function findPublishedThreaded($menuId)
    {
        $query = $this->find('threaded')
            ->select($this)
            ->where(['menu_id' => $menuId]);

        EventManager::instance()->dispatch(new Event('Wasabi.Routes.Query.published.decorate', $query));

        return $query;
    }
}
