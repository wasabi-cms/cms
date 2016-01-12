<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var array $pages
 * @var array $closedPages
 * @var string $reorderUrl
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
?>
<div class="table-head row">
    <div class="grid-1-16 center"><?= __d('wasabi_cms', 'Sort') ?></div>
    <div class="grid-9-16"><?= __d('wasabi_cms', 'Page <small class="layout">Layout</small> <small class="collection">Collection</small> <small class="collection-item">Item</small>') ?></div>
    <div class="grid-2-16 center"><?= __d('wasabi_cms', 'Status') ?></div>
    <div class="grid-2-16 center"><?= __d('wasabi_cms', 'Preview') ?></div>
    <div class="grid-2-16 center"><?= __d('wasabi_cms', 'Actions') ?></div>
</div>
<ul id="pages" class="table-body" data-reorder-url="<?= $reorderUrl ?>">
    <?php echo $this->CmsPage->renderTree($pages, $closedPages, \Cake\Core\Configure::read('content_language.id')); ?>
</ul>
