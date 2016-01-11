<?php
/**
 * @var \Wasabi\ThemeDefault\View\ThemeDefaultView $this
 * @var \Cake\Form\Form $form
 */
echo $this->Form->create($form);
echo $this->Form->input('content', ['type' => 'textarea', 'id' => false]);
echo $this->Form->end();
