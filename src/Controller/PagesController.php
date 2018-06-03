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
namespace Wasabi\Cms\Controller;
use Cake\Core\Configure;
use Cake\Database\Connection;
use Cake\Network\Exception\BadRequestException;
use Cake\Network\Exception\MethodNotAllowedException;
use Cake\Routing\Router;
use Cake\Utility\Hash;
use Composer\Config;
use Wasabi\Cms\Model\Entity\PageRevision;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Cms\Model\Table\PagesTable;
use Wasabi\Cms\View\Module\ModuleManager;
use Wasabi\Cms\View\Theme\ThemeManager;
use Wasabi\Cms\WasabiCms;
use Wasabi\Core\Model\Table\RoutesTable;
use Wasabi\Core\Routing\RouteTypes;
use Wasabi\Core\Wasabi;

/**
 * Class PagesController
 *
 * @property PagesTable $Pages
 * @property RoutesTable $Routes
 */
class PagesController extends BackendAppController
{
    /**
     * Initialization hook method.
     */
//    public function initialize()
//    {
//        parent::initialize();
//        $this->loadComponent('RequestHandler');
//        $this->loadModel('Wasabi/Core.Routes');
//    }

    /**
     * Index action
     * GET
     *
     * @return void
     */
    public function index()
    {
        $pages = $this->Pages->find('threaded')
//            ->contain(['Collections'])
            ->order(['lft' => 'ASC']);

        $this->set([
            'pages' => $pages,
            'closedPageIds' => isset($_COOKIE['closed_pages']) ? json_decode($_COOKIE['closed_pages'], true) : []
        ]);
    }

    /**
     * Add action
     * GET|POST
     *
     * @param int|null $parentId
     * @return void
     */
    public function add($parentId = null)
    {
        /** @var Page $page */
        $page = $this->Pages->newEntity();

        ThemeManager::theme(Wasabi::setting('Cms.Theme.id'));

        if ($this->request->is('post')) {
            $this->request = $this->request->withData('parent_id', $parentId);
        } else {
            $page->layout = 'Default';
            $page->current = [
                (new PageRevision())->set('content', json_encode($page->getLayout()->content()))
            ];
            $page->display_page_title_suffix = true;
        }

        if ($page->meta_robots_index === null) {
            $page->meta_robots_index = (bool)Configure::read('Settings.Cms.SEO.meta-robots-index');
        }

        if ($page->meta_robots_follow === null) {
            $page->meta_robots_follow = (bool)Configure::read('Settings.Cms.SEO.meta-robots-follow');
        }

        $this->set([
            'page' => $page,
            'layouts' => ThemeManager::theme()->getLayoutsForSelect(),
            'availableModules' => ModuleManager::getAvailableModules(),
            'attributes' => $page->getLayout()->attributes(),
            'changeAttributesUrl' => Router::url([
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'attributes',
                'id' => $page->id
            ])
        ]);
    }

    /**
     * Add action
     * GET | POST
     *
     * @param string $parentId
     */
//    public function add($parentId = null)
//    {
//        /** @var Page $page */
//        $page = $this->Pages->newEntity();
//
//        ThemeManager::theme(Wasabi::setting('Cms.Theme.id'));
//
//        if ($this->request->is('post') && !empty($this->request->data)) {
//            $this->request->data['parent_id'] = $parentId;
//
//            /** @var Connection $conn */
//            $conn = $this->Pages->connection();
//            $conn->begin();
//            $this->Pages->behaviors()->unload('Translate');
//            $page = $this->Pages->newEntity([
//                'name' => $this->request->data('name'),
//                'parent_id' => $this->request->data('parent_id'),
//                'layout' => $this->request->data('layout')
//            ]);
//
//            if ($this->Pages->save($page, ['associated' => false])) {
//                $this->Pages->behaviors()->load('Translate', PagesTable::$translateOptions);
//
//                $page = $this->Pages->patchEntity($page, $this->request->data);
//                if ($this->Pages->save($page)) {
//                    $conn->commit();
//                    $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been created.', $page->name));
//                    $this->redirect(['action' => 'index']);
//                    return;
//                } else {
//                    $conn->rollback();
//                    $this->Flash->error($this->formErrorMessage);
//                }
//            } else {
//                $conn->rollback();
//                $this->Flash->error($this->formErrorMessage);
//            }
//        } else {
//            $page->layout = 'Default';
//            $page->current = [
//                (new Content())->set('content', json_encode($page->getLayout()->content()))
//            ];
//            $page->display_page_title_suffix = true;
//        }
//
//        if ($page->meta_robots_index === null) {
//            $page->meta_robots_index = (bool)Configure::read('Settings.Cms.SEO.meta-robots-index');
//        }
//
//        if ($page->meta_robots_follow === null) {
//            $page->meta_robots_follow = (bool)Configure::read('Settings.Cms.SEO.meta-robots-follow');
//        }
//
//        $this->set([
//            'page' => $page,
//            'layouts' => ThemeManager::theme()->getLayoutsForSelect(),
//            'availableModules' => ModuleManager::getAvailableModules(),
//            'attributes' => $page->getLayout()->attributes(),
//            'changeAttributesUrl' => Router::url([
//                'plugin' => 'Wasabi/Cms',
//                'controller' => 'Pages',
//                'action' => 'attributes'
//            ])
//        ]);
//    }

    /**
     * Edit Action
     * GET | PUT
     *
     * @param $id
     */
//    public function edit($id)
//    {
//        $this->request->allowMethod(['get', 'put']);
//
//        /** @var Page $page */
//        $page = $this->Pages->get($id, ['contain' => ['Current', 'Attributes', 'Collections']]);
//
//        ThemeManager::theme(Wasabi::setting('Cms.Theme.id'));
//
//        if ($this->request->is('put')) {
//            $page = $this->Pages->patchEntity($page, $this->request->data);
//            if ($this->Pages->save($page)) {
//                $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been saved.', $page->name));
//                $this->redirect(['action' => 'index']);
//                return;
//            } else {
//                $this->Flash->error($this->formErrorMessage);
//            }
//        } else {
//            /** @var Content $current */
//            $current = $page->current;
//            if (!is_array($current) &&
//                get_class($current) === 'Wasabi\Cms\Model\Entity\Content' &&
//                $current->isNew()
//            ) {
//                $defaultLayout = ThemeManager::theme()->getLayout('Default');
//                $page->current = [
//                    (new Content())->set('content', json_encode($defaultLayout->content()))
//                ];
//            }
//        }
//
//        if ($page->meta_robots_index === null) {
//            $page->meta_robots_index = (bool)Configure::read('Settings.Cms.SEO.meta-robots-index');
//        }
//
//        if ($page->meta_robots_follow === null) {
//            $page->meta_robots_follow = (bool)Configure::read('Settings.Cms.SEO.meta-robots-follow');
//        }
//
//        $routes = $this->Routes
//            ->findAllFor('Wasabi/Cms.Pages', $id, Wasabi::contentLanguage()->id)
//            ->order([$this->Routes->aliasField('url') => 'asc']);
//
//        $this->set([
//            'page' => $page,
//            'layouts' => ThemeManager::theme()->getLayoutsForSelect(),
//            'availableModules' => ModuleManager::getAvailableModules(),
//            'changeAttributesUrl' => Router::url([
//                'plugin' => 'Wasabi/Cms',
//                'controller' => 'Pages',
//                'action' => 'attributes'
//            ]),
//            'attributes' => $page->getLayout()->attributes(),
//            'routes' => $routes,
//            'routeTypes' => RouteTypes::getForSelect(),
//            'formRoute' => $this->Routes->newEntity([
//                'type' => ($routes->count() >= 1) ? RouteTypes::TYPE_REDIRECT_ROUTE : RouteTypes::TYPE_DEFAULT_ROUTE
//            ])
//        ]);
//
//        $this->render('add');
//    }

    /**
     * Delete action
     * POST
     *
     * @param string $id
     */
//    public function delete($id)
//    {
//        $this->request->allowMethod('post');
//
//        /** @var Page $page */
//        $page = $this->Pages->get($id);
//
//        if ($this->Pages->delete($page)) {
//            $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been deleted.', $page->name));
//        } else {
//            $this->Flash->error($this->dbErrorMessage);
//        }
//
//        $this->redirect(['action' => 'index']);
//        return;
//    }

    /**
     * Clone/copy an existing page action
     * POST
     *
     * @param string $id
     */
//    public function copy($id)
//    {
//        $this->request->allowMethod('post');
//
//        $page = $this->Pages->get('id');
//    }

    /**
     * reorderPages action
     * AJAX POST
     */
//    public function reorderPages()
//    {
//        if (!$this->request->isAll(['ajax', 'post'])) {
//            throw new MethodNotAllowedException();
//        }
//
//        if (empty($this->request->data)) {
//            throw new BadRequestException();
//        }
//
//        $this->request->data = Hash::map($this->request->data, '{n}', function($page) {
//            if ($page['parent_id'] === 'null') {
//                $page['parent_id'] = null;
//            }
//            return $page;
//        });
//
//        $pages = $this->Pages->patchEntities($this->Pages->find('all'), $this->request->data, ['associated' => false]);
//
//        /** @var Connection $connection */
//        $connection = $this->Pages->connection();
//        $connection->begin();
//        foreach ($pages as $page) {
//            $this->Pages->behaviors()->unload('Tree');
//            if (!$this->Pages->save($page)) {
//                $connection->rollback();
//                break;
//            }
//        }
//        if ($connection->inTransaction()) {
//            $connection->commit();
//            $status = 'success';
//            $flashMessage = __d('wasabi_cms', 'The page positions have been updated.');
//        } else {
//            $status = 'error';
//            $flashMessage = $this->dbErrorMessage;
//        }
//
//        $this->set([
//            'status' => $status,
//            'flashMessage' => $flashMessage,
//            '_serialize' => ['status', 'flashMessage']
//        ]);
//
//        $this->RequestHandler->renderAs($this, 'json');
//    }

//    public function attributes($id)
//    {
//        $layout = $this->request->query['layout'];
//        $layout = WasabiCms::getTheme()->getLayout($layout);
//        $attributes = $layout->attributes();
//
//        $page = $this->Pages->get($id, ['contain' => ['Attributes']]);
//
//        $this->set([
//            'page' => $page,
//            'attributes' => $attributes
//        ]);
//
//        $this->viewBuilder()->layout(false);
//    }
}
