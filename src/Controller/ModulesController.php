<?php

namespace Wasabi\Cms\Controller;

use Wasabi\Cms\View\Module\Module;

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
            if (isset($this->request->data['data'])) {
                foreach ($this->request->data['data'] ?? [] as $attribute => $value) {
                    $this->request->data[$attribute] = $value;
                    unset($this->request->data['data'][$attribute]);
                }
                if (empty($this->request->data['data'])) {
                    unset($this->request->data['data']);
                }
            }

            $data = $this->request->data ?? [];

            $moduleClass = $this->request->data('meta.moduleId');
            /** @var Module $form */
            $form = new $moduleClass();

            $formSubmitted = $this->request->data('fetch') !== '1';

            if (!$formSubmitted) {
                $this->_renderModule($form);
            } else if ($form->execute($data)) {
                $formData = $form->process($data);
                $this->set([
                    'module' => $formData,
                    '_serialize' => ['module']
                ]);
            } else {
                $this->Flash->error($this->formErrorMessage, 'module');
                $this->_renderModule($form, true);
            }
        }
    }

    protected function _renderModule(Module $form, $error = false)
    {
        $rendered = $form->renderForm();
        $this->set([
            'error' => $error ? 1 : 0,
            'module' => $rendered,
            '_serialize' => ['error', 'module']
        ]);
    }
}
