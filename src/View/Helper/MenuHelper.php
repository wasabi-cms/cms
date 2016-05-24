<?php

namespace Wasabi\Cms\View\Helper;

/**
 *
 * PHP 5
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the below copyright notice.
 *
 * @copyright     Copyright 2013, Frank Förster (http://frankfoerster.com)
 * @link          http://github.com/frankfoerster/wasabi
 * @package       Wasabi
 * @subpackage    Wasabi.Plugin.Core.View.Helper
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
use Cake\Event\Event;
use Cake\Event\EventManager;
use Cake\ORM\Query;
use Cake\ORM\TableRegistry;
use Cake\View\Helper;
use Cake\View\Helper\HtmlHelper;
use Cake\View\View;
use Wasabi\Cms\Model\Entity\MenuItem;
use Wasabi\Cms\Model\Table\MenuItemsTable;

/**
 * @property HtmlHelper $Html
 * @property View $_View
 */

class MenuHelper extends Helper {

	/**
	 * Helpers used by this helper.
	 *
	 * @var array
	 */
	public $helpers = array(
		'Html'
	);

	public function render($menuId = null, $options = array()) {
		if ($menuId === null) {
			return '';
		}
		$defaults = array(
			'maxDepth' => 2,
			'separator' => 'li',
			'path' => array(),
			'hasChildrenClass' => 'has-children'
		);
		$options = array_merge($defaults, $options);
        /** @var MenuItemsTable $MenuItemsTable */
        $MenuItemsTable = TableRegistry::get('Wasabi/Cms.MenuItems');
		$menuItems = $MenuItemsTable->findPublishedThreaded($menuId);
		return $this->_renderTreeLevel($menuItems, $options);
	}

    /**
     * @TODO
     * @param $menuItems
     * @param $options
     * @param int $depth
     * @param bool $subActiveFound
     * @return string
     */
	protected function _renderTreeLevel(Query $menuItems, $options, $depth = 0, &$subActiveFound = false) {
		$output = '';

		foreach ($menuItems as $menuItem) {
            $classes = [];
			$content = $this->_renderMenuItem($menuItem);
			if ($this->_isActive($menuItem)) {
				$classes[] = 'active';
				$subActiveFound = true;
			}

			if (!empty($menuItem->children) && ($depth + 1 <= $options['maxDepth'])) {
				$sub = false;
				$classes[] = $options['hasChildrenClass'];

				$content .= '<ul>';
				$content .= $this->_renderTreeLevel($menuItem['children'], $options, $depth + 1, $sub);
				$content .= '</ul>';

				if ($sub === true) {
					$classes[] = 'active';
					$subActiveFound = true;
				}
			}

            if ($content !== '') {
                if (!empty($classes)) {
                    $output .= '<li class="' . join(' ', array_unique($classes)) . '">';
                } else {
                    $output .= '<li>';
                }
                $output .= $content;
                $output .= '</li>';
            }
		}

		return $output;
	}

	protected function _renderMenuItem(MenuItem $menuItem) {
		$output = '';

        switch ($menuItem->type) {
            case MenuItem::TYPE_ENTITY:
                $event = new Event('Wasabi.Frontend.MenuItems.Entity.render', $menuItem, [$this]);
                EventManager::instance()->dispatch($event);
                $output .= $event->result;
                break;

            case MenuItem::TYPE_CUSTOM:
                break;

            case MenuItem::TYPE_EXTERNAL:
                $output .= '<a href="' . $menuItem->external_link . '" title="' . $menuItem->name . '">' . $menuItem->name . '</a>';
                break;
        }

		return $output;
	}

	protected function _isActive(MenuItem $menuItem) {
        switch ($menuItem->type) {
            case MenuItem::TYPE_ENTITY:
                $event = new Event('Wasabi.Frontend.MenuItems.Entity.isActive', $menuItem, [$this->request]);
                EventManager::instance()->dispatch($event);
                return $event->result;

            case MenuItem::TYPE_CUSTOM:
                return (
                    $this->request->params['plugin'] === $menuItem->plugin &&
                    $this->request->params['controller'] === $menuItem->controller &&
                    $this->request->params['action'] === $menuItem->action
                );

            default:
                return false;
        }
	}
}
