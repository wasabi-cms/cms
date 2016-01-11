<?php
/**
 * Wasabi Cms Plugin bootstrap
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

use Cake\Cache\Cache;
use Cake\Core\Configure;
use Cake\Core\Plugin;
use Cake\Event\EventManager;
use Wasabi\Cms\Event\MenuListener;
use Wasabi\Cms\Event\RouteListener;
use Wasabi\Cms\Event\ThemeListener;
use Wasabi\Cms\View\Module\ModuleManager;

try {
    // Load and apply the Wasabi Core cache config.
    Configure::load('Wasabi/Cms.cache', 'default');
    foreach (Configure::consume('Cache') as $key => $config) {
        Cache::config($key, $config);
    }
} catch (\Exception $e) {
    die($e->getMessage() . "\n");
}

// Configure plugin translation paths.
Configure::write('App.paths.locales', array_merge(Configure::read('App.paths.locales'), [Plugin::path('Wasabi/Cms') . 'src' . DS . 'Locale' . DS]));

// Register module path.
ModuleManager::registerModulePath(Plugin::path('Wasabi/Cms') . 'src' . DS . 'View' . DS . 'Module' . DS);

EventManager::instance()->on(new RouteListener());
EventManager::instance()->on(new ThemeListener());
EventManager::instance()->on(new MenuListener());
