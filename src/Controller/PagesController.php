<?php
/**
 * Wasabi Cms PagesController
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
namespace Wasabi\Cms\Controller;
use Cake\Network\Exception\BadRequestException;
use Cake\Network\Exception\MethodNotAllowedException;
use Cake\Network\Exception\NotFoundException;
use Cake\Utility\Hash;
use Wasabi\Cms\Model\Table\PagesTable;

/**
 * Class PagesController
 *
 * @property PagesTable $Pages
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
    }

    /**
     * Index action
     * GET
     */
    public function index()
    {
        $pages = $this->Pages->find('threaded')->order(['lft' => 'ASC']);
        $this->set('pages', $pages);
    }

    /**
     * Add action
     * GET | POST
     */
    public function add()
    {
        $page = $this->Pages->newEntity();
        if ($this->request->is('post') && !empty($this->request->data)) {
            $this->Pages->patchEntity($page, $this->request->data);
            if ($this->Pages->save($page)) {
                $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been created.', $page->name));
                $this->redirect(['action' => 'index']);
                return;
            } else {
                $this->Flash->error($this->formErrorMessage);
            }
        }
        $this->set('page', $page);
    }

    /**
     * Edit Action
     * GET | PUT
     *
     * @param $id
     */
    public function edit($id)
    {
        if (!$id || !$this->Pages->exists(['id' => $id])) {
            throw new NotFoundException();
        }
        if (!$this->request->is(['get', 'put'])) {
            throw new MethodNotAllowedException();
        }

        $page = $this->Pages->get($id);

        if ($this->request->is('put')) {
            $this->Pages->patchEntity($page, $this->request->data);
            if ($this->Menus->save($page)) {
                $this->Flash->success(__d('wasabi_cms', 'The page <strong>{0}</strong> has been saved.', $page->name));
                $this->redirect(['action' => 'index']);
                return;
            } else {
                $this->Flash->error($this->formErrorMessage);
            }
        }
        $this->set([
            'page' => $page
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
        if (!$id || !$this->Pages->exists(['id' => $id])) {
            throw new NotFoundException();
        }
        if (!$this->request->is(['post'])) {
            throw new MethodNotAllowedException();
        }

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
