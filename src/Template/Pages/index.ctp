<?php
/**
 * @var \Wasabi\Core\View\AppView $this
 * @var array $pages
 */

$this->Html->setTitle(__d('wasabi_cms', 'Pages'));
$this->Html->setSubTitle(__d('wasabi_cms', 'Management'));
$this->Html->addAction(
    $this->Guardian->protectedLink(
        '<i class="icon-plus"></i>',
        [
            'plugin' => 'Wasabi/Cms',
            'controller' => 'Pages',
            'action' => 'add'
        ],
        [
            'title' => __d('wasabi_cms', 'Create a new Page'),
            'class' => 'add',
            'escapeTitle' => false
        ])
);
var_dump($pages);
?>
