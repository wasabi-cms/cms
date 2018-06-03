<?php

namespace Wasabi\Cms\Controller\Api;

use Cake\Event\Event;
use Cake\Http\Exception\MethodNotAllowedException;
use Wasabi\Cms\Controller\BackendAppController;
use Wasabi\Cms\Model\Table\PagesTable;
use Wasabi\Core\Wasabi;

/**
 * Class PagesController
 *
 * @property PagesTable Pages
 */
class PagesController extends BackendAppController
{
    public function initialize()
    {
        parent::initialize();

        $this->loadComponent('RequestHandler');
        $this->loadModel('Wasabi/Cms.Pages');
    }

    public function beforeFilter(Event $event)
    {
        parent::beforeFilter($event);

        if (!$this->request->is('ajax')) {
            throw new MethodNotAllowedException();
        }
    }

    public function index()
    {
        $pages = $this->Pages->findForObjectTree();

        $data = [
            'rootNode' => [
                'title' => Wasabi::setting('Core.instance_name'),
                'root' => true,
                'children' => $this->Pages->findChildIdsOf(null)->toArray()
            ],
            'nodes' => $pages->toArray()
        ];

        $this->set('data', $data);
        $this->set('_serialize', ['data']);
    }

    public function create()
    {
        $parentId = $this->request->getData('parentId');

        $recalculatePagePositions = false;
        $page = $this->Pages->create($this->request, $recalculatePagePositions);

        if ($this->Pages->save($page)) {
            if ($recalculatePagePositions) {
                $this->Pages->recalculatePosition($parentId);
            }
            $page->set('title', $page->current_revision->title);

            $data = [
                'page' => $page,
                'updateChildNodesOf' => $page->parent_id,
                'childNodes' => $this->Pages->findDirectChildrenOf($page->parent_id)
            ];

            $this->set('data', $data);
        } else {
            if (!empty($page->getErrors())) {
                $this->set('error', $this->formErrorMessage);
                $this->set('entityErrors', $page->getErrors());
            } else {
                $this->set('error', $this->dbErrorMessage);
            }
        }

        $this->set('_serialize', ['data', 'error', 'entityErrors']);
    }
}
