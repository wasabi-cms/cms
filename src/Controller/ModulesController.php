<?php

namespace Wasabi\Cms\Controller;

use Wasabi\Cms\View\Module\Module;
use Wasabi\Core\Wasabi;
use Wasabi\ThemeDefault\View\ThemeDefaultView;

class ModulesController extends BackendAppController
{
    /**
     * Initialization hook method
     */
    public function initialize()
    {
        parent::initialize();

        $this->loadComponent('RequestHandler');
    }

    /**
     * edit action
     * POST
     */
    public function edit() {
        if ($this->request->is('post') && !empty($this->request->data)) {
            $data = $this->request->data('data');
            if (!$data) {
                $data = [];
            }

            $moduleClass = $this->request->data('meta.moduleId');
            /** @var Module $form */
            $form = new $moduleClass();
            $form->execute($data);

            if ($this->request->data('fetch') === '1') {
                $rendered = $form->renderForm();
                $this->set([
                    'module' => $rendered,
                    '_serialize' => ['module']
                ]);
            } else {

            }
        }
    }
}
