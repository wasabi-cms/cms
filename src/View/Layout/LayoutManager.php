<?php
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
 * @subpackage    Wasabi.Plugin.Cms.Lib
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

namespace Wasabi\Cms\View\Layout;

use Cake\Core\Exception\Exception;
use Cake\Filesystem\Folder;

class LayoutManager
{
	/**
	 * Holds all available layout objects.
	 *
	 * @var Layout[]
	 */
	protected static $_layouts = [];

	/**
	 * Determines if the layout manager has been initialized.
	 *
	 * @var boolean
	 */
	protected static $_initialized = false;

	/**
	 * Initialize all available layouts.
	 *
	 * @return void
	 */
	protected static function _init()
	{
		$layoutFolder = new Folder(APP. 'View' . DS . 'Layout' . DS . 'Cms', false);
		$layoutFolders = $layoutFolder->read(true)[0];
		if (!empty($layoutFolders)) {
			foreach ($layoutFolders as $folder) {
				$file = $layoutFolder->path . DS . $folder . DS . $folder . '.php';
				if (file_exists($file)) {
					$className = 'App\\View\\Layout\\Cms\\' . $folder . '\\' . $folder;
					/** @var Layout $layout */
					$layout = new $className();
					self::$_layouts[$layout->getId()] = $layout;
				}
			}
		}
		self::$_initialized = true;
	}

	/**
	 * Get all available layouts.
	 *
	 * @return array|Layout[]
	 */
	public static function getLayoutList()
	{
		if (!self::$_initialized) {
			self::_init();
		}
		return self::$_layouts;
	}

	/**
	 * Get all available layouts for select options.
	 *
	 * @return array
	 */
	public static function getLayoutsForSelect()
	{
		if (!self::$_initialized) {
			self::_init();
		}

		$results = [];
		foreach (self::$_layouts as $layout) {
			$results[$layout->getId()] = $layout->getName();
		}

		return $results;
	}

	/**
	 * Get a single layout by id.
	 *
	 * @param string $id
	 * @return Layout
	 * @throws Exception
	 */
	public static function getLayout($id)
	{
		if (!self::$_initialized) {
			self::_init();
		}
		if (!isset(self::$_layouts[$id])) {
			throw new Exception(__d('wasabi_cms', 'No Layout with id {0} exists.', $id));
		}

		return self::$_layouts[$id];
	}

	/**
	 * Return true if layout exists, false otherwise.
	 *
	 * @param string $id
	 * @return boolean
	 */
	public static function layoutExists($id)
	{
		return isset(self::$_layouts[$id]);
	}
}
