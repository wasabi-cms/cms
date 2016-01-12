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
use Cake\I18n\I18n;
use Cake\Network\Exception\BadRequestException;
use Cake\Network\Exception\MethodNotAllowedException;
use Cake\Routing\Router;
use Cake\Utility\Hash;
use Wasabi\Cms\Model\Entity\Content;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Cms\Model\Table\PagesTable;
use Wasabi\Cms\View\Module\ModuleManager;
use Wasabi\Cms\View\Theme\ThemeManager;
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
    public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
        $this->loadModel('Wasabi/Core.Routes');
    }

    /**
     * Index action
     * GET
     */
    public function index()
    {
        $pages = $this->Pages->find('threaded')->order(['lft' => 'ASC']);
        $this->set([
            'pages' => $pages,
            'closedPages' => isset($_COOKIE['closed_pages']) ? json_decode($_COOKIE['closed_pages'], true) : [],
            'reorderUrl' => Router::url([
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'reorderPages'
            ])
        ]);
    }

    /**
     * Add action
     * GET | POST
     *
     * @param string $parentId
     */
    public function add($parentId = null)
    {
        /** @var Page $page */
        $page = $this->Pages->newEntity();

        ThemeManager::theme(Wasabi::setting('Cms.Theme.id'));

        if ($this->request->is('post') && !empty($this->request->data)) {
            $page = $this->Pages->patchEntity($page, $this->request->data);
            if ($this->Pages->save($page)) {
                $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been created.', $page->name));
                $this->redirect(['action' => 'index']);
                return;
            } else {
                $this->Flash->error($this->formErrorMessage);
            }
        } else {
            $defaultLayout = ThemeManager::theme()->getLayout('Default');
            $page->current = [
                (new Content())->set('content', json_encode($defaultLayout->content()))
            ];

//            $page->set(
//                'content',
//                json_encode([
//                    'content' => [
//                        [
//                            'meta' => [
//                                'type' => 'ContentArea',
//                                'contentAreaId' => 'after_head',
//                                'name' => 'After Head',
//                                'grid' => [
//                                    'colWidth' => 16,
//                                    'baseWidth' => 16
//                                ]
//                            ],
//                            'data' => []
//                        ],
//                        [
//                            'meta' => [
//                                'type' => 'ContentArea',
//                                'contentAreaId' => 'main',
//                                'name' => 'Main',
//                                'grid' => [
//                                    'colWidth' => 12,
//                                    'baseWidth' => 16
//                                ]
//                            ],
//                            'data' => [
//                                [
//                                    'meta' => [
//                                        'type' => 'Row',
//                                    ],
//                                    'data' => [
//                                        [
//                                            'meta' => [
//                                                'type' => 'Cell',
//                                                'grid' => [
//                                                    'colWidth' => 16,
//                                                    'baseWidth' => 16
//                                                ]
//                                            ],
//                                            'data' => []
//                                        ]
//                                    ]
//                                ],
//                                [
//                                    'meta' => [
//                                        'type' => 'Row'
//                                    ],
//                                    'data' => [
//                                        [
//                                            'meta' => [
//                                                'type' => 'Cell',
//                                                'grid' => [
//                                                    'colWidth' => 4,
//                                                    'baseWidth' => 16
//                                                ]
//                                            ],
//                                            'data' => [
//                                                [
//                                                    'meta' => [
//                                                        'type' => 'Module',
//                                                        'moduleId' => 'flicker-slider',
//                                                        'title' => 'Flicker Slider',
//                                                        'description' => 'bla blub'
//                                                    ],
//                                                    'data' => [
//                                                        'foo' => 'bar'
//                                                    ]
//                                                ],
//                                                [
//                                                    'meta' => [
//                                                        'type' => 'Module',
//                                                        'moduleId' => 'flicker-slider',
//                                                        'title' => 'Flicker Slider',
//                                                        'description' => 'bla blub2'
//                                                    ],
//                                                    'data' => [
//                                                        'foo' => 'bar'
//                                                    ]
//                                                ]
//                                            ]
//                                        ],
//                                        [
//                                            'meta' => [
//                                                'type' => 'Cell',
//                                                'grid' => [
//                                                    'colWidth' => 4,
//                                                    'baseWidth' => 16
//                                                ]
//                                            ],
//                                            'data' => []
//                                        ],
//                                        [
//                                            'meta' => [
//                                                'type' => 'Cell',
//                                                'grid' => [
//                                                    'colWidth' => 4,
//                                                    'baseWidth' => 16
//                                                ]
//                                            ],
//                                            'data' => []
//                                        ],
//                                        [
//                                            'meta' => [
//                                                'type' => 'Cell',
//                                                'grid' => [
//                                                    'colWidth' => 4,
//                                                    'baseWidth' => 16
//                                                ]
//                                            ],
//                                            'data' => []
//                                        ]
//                                    ]
//                                ]
//                            ]
//                        ],
//                        [
//                            'meta' => [
//                                'type' => 'ContentArea',
//                                'contentAreaId' => 'sidebar',
//                                'name' => 'Sidebar',
//                                'grid' => [
//                                    'colWidth' => 4,
//                                    'baseWidth' => 16
//                                ]
//                            ],
//                            'data' => []
//                        ],
//                    ]
//                ])
//            );
        }

        $this->set([
            'page' => $page,
            'layouts' => ThemeManager::theme()->getLayoutsForSelect(),
            'availableModules' => ModuleManager::getAvailableModules(),
            'changeAttributesUrl' => Router::url([
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'attributes'
            ]),
        ]);
    }

    /**
     * Edit Action
     * GET | PUT
     *
     * @param $id
     */
    public function edit($id)
    {
        $this->request->allowMethod(['get', 'put']);

        $page = $this->Pages->get($id, ['contain' => 'Current']);

        ThemeManager::theme(Wasabi::setting('Cms.Theme.id'));

        if ($this->request->is('put')) {
            $page = $this->Pages->patchEntity($page, $this->request->data);
            if ($this->Pages->save($page)) {
                $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been saved.', $page->name));
                $this->redirect(['action' => 'index']);
                return;
            } else {
                $this->Flash->error($this->formErrorMessage);
            }
        } else {
            /** @var Content $current */
            $current = $page->current;
            if (!is_array($current) &&
                get_class($current) === 'Wasabi\Cms\Model\Entity\Content' &&
                $current->isNew()
            ) {
                $defaultLayout = ThemeManager::theme()->getLayout('Default');
                $page->current = [
                    (new Content())->set('content', json_encode($defaultLayout->content()))
                ];
            }
        }

        $this->set([
            'page' => $page,
            'layouts' => ThemeManager::theme()->getLayoutsForSelect(),
            'availableModules' => ModuleManager::getAvailableModules(),
            'changeAttributesUrl' => Router::url([
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'attributes'
            ]),
            'routes' => $this->Routes
                ->findAllFor('Wasabi/Cms.Pages', $id, Wasabi::contentLanguage()->id)
                ->order([$this->Routes->aliasField('url') => 'asc']),
            'routeTypes' => RouteTypes::getForSelect()
        ]);

        $this->render('add');
    }

    /**
     * Delete action
     * POST
     *
     * @param string $id
     */
    public function delete($id)
    {
        $this->request->allowMethod('post');

        /** @var Page $page */
        $page = $this->Pages->get($id);

        if ($this->Pages->delete($page)) {
            $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been deleted.', $page->name));
        } else {
            $this->Flash->error($this->dbErrorMessage);
        }

        $this->redirect(['action' => 'index']);
        return;
    }

    /**
     * Clone/copy an existing page action
     * POST
     *
     * @param string $id
     */
    public function copy($id)
    {
        $this->request->allowMethod('post');

        $page = $this->Pages->get('id');
    }

    /**
     * reorderPages action
     * AJAX POST
     */
    public function reorderPages()
    {
        if (!$this->request->isAll(['ajax', 'post'])) {
            throw new MethodNotAllowedException();
        }

        if (empty($this->request->data)) {
            throw new BadRequestException();
        }

        $this->request->data = Hash::map($this->request->data, '{n}', function($page) {
            if ($page['parent_id'] === 'null') {
                $page['parent_id'] = null;
            }
            return $page;
        });

        $pages = $this->Pages->patchEntities($this->Pages->find('all'), $this->request->data);
        $this->Pages->connection()->begin();
        foreach ($pages as $page) {
            $this->Pages->behaviors()->unload('Tree');
            if (!$this->Pages->save($page)) {
                $this->Pages->connection()->rollback();
                break;
            }
        }
        if ($this->Pages->connection()->inTransaction()) {
            $this->Pages->connection()->commit();
            $status = 'success';
            $flashMessage = __d('wasabi_cms', 'The page positions have been updated.');
        } else {
            $status = 'error';
            $flashMessage = $this->dbErrorMessage;
        }

        $this->set([
            'status' => $status,
            'flashMessage' => $flashMessage,
            '_serialize' => ['status', 'flashMessage']
        ]);

        $this->RequestHandler->renderAs($this, 'json');
    }
}
