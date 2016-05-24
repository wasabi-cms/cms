<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Cake\Form\Form $form
 */
echo $this->Flash->render('module');
echo $this->Form->create($form, ['templates' => 'Wasabi/Core.form_templates']);
echo $this->Form->input('content', ['type' => 'textarea', 'id' => 'text-content']);
echo $this->Form->end();
