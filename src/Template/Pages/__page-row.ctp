<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var bool $closed
 * @var \Wasabi\Cms\Model\Entity\Page $page
 */

use Wasabi\Cms\Collections;
use Wasabi\Cms\Model\Entity\Collection;

$collection = false;
$collectionItem = false;
if ($page->collection !== null) {
    if ($page->collection->type === Collection::TYPE_COLLECTION) {
        $collection = Collections::getDisplayName($page->collection->identifier);
    }
    if ($page->collection->type === Collection::TYPE_ITEM) {
        $collectionItem = Collections::getDisplayName($page->collection->identifier);
    }
}
?>
<div class="row table-body--row">
    <div class="table-body--cell grid-1-16 center">
        <a href="javascript:void(0)" class="move" title="<?= __d('wasabi_cms', 'Change the position of this Page') ?>"><i class="icon-grab"></i></a>
    </div>
    <div class="table-body--cell grid-9-16">
        <div class="page-info">
            <span class="expander wicon-<?= ($closed ? 'expand' : 'collapse') ?>"></span>
            <span class="wicon-page"></span>
            <?= $this->Html->link(
                $page->name,
                [
                    'plugin' => 'Wasabi/Cms',
                    'controller' => 'Pages',
                    'action' => 'edit',
                    'id' => $page->id
                ], [
                    'title' => __d('wasabi_cms', 'Edit this Page')
                ]
            ) ?>
            <div class="page-meta">
                <small class="layout">Layout Name<?php #= $page->getLayout()->name() ?></small>
                <?= ($collection ? ' <small class="collection">' . $collection . '</small>' : '') ?>
                <?= ($collectionItem ? ' <small class="collection-item">' . $collectionItem . '</small>' : '') ?>
            </div>
        </div>
    </div>
    <div class="table-body--cell grid-2-16 center">
        <?= $this->Html->link(
            $page->getStatus(),
            [
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'toggle',
                'id' => $page->id
            ],
            [
                'title' => ($page->status === \Wasabi\Cms\Model\Entity\Page::STATUS_DRAFT) ? __d('wasabi_cms', 'Publish this page') : __d('wasabi_cms', 'Unpublish this page')
            ]
        ) ?>
    </div>
    <div class="table-body--cell grid-2-16 center">
        <?= $this->Html->link(
            '<i class="wicon-preview"></i>',
            [
                'plugin' => 'Wasabi/Cms',
                'controller' => 'FrontendPages',
                'action' => 'preview',
                'id' => $page->id
            ],
            [
                'title' => __d('wasabi_cms', 'Preview this Page'),
                'target' => '_blank',
                'escapeTitle' => false
            ]
        ) ?>
    </div>
    <div class="table-body--cell grid-2-16 center">
        <?= $this->Html->link(
            '<i class="wicon-add"></i>',
            [
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'add',
                'parentId' => $page->id
            ],
            [
                'title' => __d('wasabi_cms', 'Add a new child Page'),
                'escapeTitle' => false
            ]
        ) ?>
        <?= $this->Html->link(
            '<i class="wicon-remove"></i>',
            [
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'delete',
                'id' => $page->id
            ],
            [
                'title' => __d('wasabi_cms', 'Delete this Page'),
                'escapeTitle' => false,
                'data-toggle' => 'confirm',
                'data-method' => 'post',
                'data-modal-header' => __d('wasabi_cms', 'Delete Page'),
                'data-modal-body' => '<p>' . __d('wasabi_cms', 'Do you really want to delete Page <strong>{0}</strong>?', $page->name) . '</p>',
            ]
        ) ?>
        <?= $this->Html->link(
            '<i class="wicon-copy"></i>',
            [
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'copy',
                'id' => $page->id
            ],
            [
                'title' => __d('wasabi_cms', 'Create a clone of this Page'),
                'escapeTitle' => false
            ]
        ) ?>
    </div>
</div>
