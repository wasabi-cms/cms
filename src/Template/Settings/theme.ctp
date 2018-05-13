<?php
/**
 * @var \Wasabi\Core\View\AppView $this
 * @var \Wasabi\Core\Model\Entity\GeneralSetting $settings
 * @var array $themes
 */

$this->Html->setTitle(__d('wasabi_cms', 'Theme Settings'));
echo $this->Form->create($settings, ['context' => ['table' => 'Wasabi/Cms.ThemeSettings']]);
echo $this->Form->widget('section', [
    'title' => __d('wasabi_cms', 'Theme Settings'),
    'description' => __d('wasabi_cms', 'Control your overall page theme.')
]);
echo $this->Form->control('Theme__id', [
    'label' => __d('wasabi_cms', 'Theme'),
    'options' => $themes
]);
echo $this->Html->div('form-controls');
echo $this->Form->button(__d('wasabi_cms', 'Save'), ['div' => false, 'class' => 'button']);
echo $this->Guardian->protectedLink(__d('wasabi_cms', 'Cancel'), [
    'plugin' => 'Wasabi/Cms',
    'controller' => 'Settings',
    'action' => 'theme'
]);
echo $this->Html->tag('/div');
echo $this->Form->end();
