<?php
/**
 * Routes configuration
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

use Cake\Routing\Router;
use Cake\Routing\RouteBuilder;

Router::scope('/backend/cms', ['plugin' => 'Wasabi/Cms'], function (RouteBuilder $routes) {

    $routes->scope('/pages', ['controller' => 'Pages'], function (RouteBuilder $routes) {
        $routes->connect('/', ['action' => 'index']);
        $routes->connect('/add/:parentId', ['action' => 'add'], ['pass' => ['parentId'], 'parentId' => '[0-9]+']);
        $routes->connect('/add', ['action' => 'add']);
        $routes->connect('/reorder-pages', ['action' => 'reorderPages']);
        $routes->connect('/edit/:id', ['action' => 'edit'], ['pass' => ['id'], 'id' => '[0-9]+']);
        $routes->connect('/delete/:id', ['action' => 'delete'], ['pass' => ['id'], 'id' => '[0-9]+']);
        $routes->connect('/clone/:id', ['action' => 'copy'], ['pass' => ['id'], 'id' => '[0-9]+']);
        $routes->connect('/publish/:id', ['action' => 'publish'], ['pass' => ['id'], 'id' => '[0-9]+']);
        $routes->connect('/unpublish/:id', ['action' => 'unpublish'], ['pass' => ['id'], 'id' => '[0-9]+']);
    });

    /**
     * Connect a route for the index action of any controller.
     * And a more general catch all route for any action.
     *
     * The `fallbacks` method is a shortcut for
     *    `$routes->connect('/:controller', ['action' => 'index'], ['routeClass' => 'InflectedRoute']);`
     *    `$routes->connect('/:controller/:action/*', [], ['routeClass' => 'InflectedRoute']);`
     *
     * You can remove these routes once you've connected the
     * routes you want in your application.
     */
    $routes->fallbacks();
});
