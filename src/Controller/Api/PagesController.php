<?php

namespace Wasabi\Cms\Controller\Api;

use Cake\Core\Configure;
use Cake\Event\Event;
use Cake\Network\Exception\NotFoundException;
use Wasabi\Cms\Controller\BackendAppController;

class PagesController extends BackendAppController
{
    public function initialize()
    {
        parent::initialize();

        $this->loadComponent('RequestHandler');
    }

    public function beforeFilter(Event $event)
    {
        parent::beforeFilter($event);

        $this->viewBuilder()->setClassName('Json');
//        $this->RequestHandler->renderAs($this, 'json');
    }

    public function index()
    {
        var_dump('ok');die;
    }

    public function create()
    {
        throw new \Exception('dfghdfh');

        $data = [
            'blub' => 'ok'
        ];

        $this->set('b', $data);
        $this->set('_serialize', ['b']);

//        return $this->response->withType('json');
    }
}
