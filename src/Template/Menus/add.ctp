<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Wasabi\Cms\Model\Entity\Menu $menu
 * @var \Wasabi\Cms\Model\Entity\MenuItem $menuItems
 */

use Cake\Routing\Router;
use Wasabi\Cms\Model\Table\MenuItemsTable;

$isEdit = false;
if ($this->request->params['action'] === 'add') {
    $this->Html->setTitle(__d('wasabi_cms', 'Create a new Menu'));
} else {
    $this->Html->setTitle(__d('wasabi_cms', 'Edit Menu'));
    $this->Html->setSubTitle($menu->get('name'));
    $isEdit = true;
}

$nameOpts = ['label' => __d('wasabi_cms', 'Menu Name')];

if (!$isEdit) {
    $nameOpts['autofocus'] = '';
}

echo $this->Form->create($menu, ['class' => 'no-top-section']);

if ($isEdit) {
    echo $this->Form->input('id', ['type' => 'hidden']);
}
echo $this->Form->input('name', $nameOpts); ?>
<div class="form-row row">
    <label class="cursor--default"><?= __d('wasabi_cms', 'Menu Items') ?></label>
    <div class="field<?= (!$isEdit) ? ' no-input' : '' ?>">
        <?php if($isEdit): ?>
            <div class="message--info message--no-dismiss"><?= __d('wasabi_cms', 'Tip: The maximum nesting level is <strong>{0}</strong>.', MenuItemsTable::MAXIMUM_NESTING_LEVEL) ?></div>
            <div class="table-head row">
				<div class="grid-10-16"><?= __d('wasabi_cms', 'Menu Item') ?></div>
				<div class="grid-2-16 center"><?= __d('wasabi_cms', 'Status') ?></div>
				<div class="grid-2-16 center"><?= __d('wasabi_cms', 'Sort') ?></div>
				<div class="grid-2-16 center"><?= __d('wasabi_core', 'Actions') ?></div>
			</div>
            <ul class="menu-items table-body" data-maximum-nesting-level="<?= MenuItemsTable::MAXIMUM_NESTING_LEVEL ?>" data-reorder-url="<?= Router::url([
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Menus',
                'action' => 'reorderItems'
            ]) ?>">
                <?php if(!empty($menuItems = $menuItems->toArray())): ?>
                    <?= $this->Menu->renderTree($menuItems) ?>
                <?php else: ?>
                    <li class="no-items center"><?= __d('wasabi_cms', 'This Menu has no items yet.') ?></li>
                <?php endif; ?>
            </ul>
            <div class="bottom-links">
                <?= $this->Guardian->protectedLink(
                    __d('wasabi_cms', 'Add a new Menu Item'),
                    [
                        'plugin' => 'Wasabi/Cms',
                        'controller' => 'Menus',
                        'action' => 'addItem',
                        'menuId' => $menu['id']
                    ]
                ) ?>
            </div>
        <?php else: ?>
            <?= __d('wasabi_cms', 'You can start adding Menu Items after you created the Menu.') ?>
        <?php endif; ?>
    </div>
</div>
<div class="form-controls"><?php
    echo $this->Form->button(__d('wasabi_core', 'Save'), ['div' => false, 'class' => 'button']);
    echo $this->Guardian->protectedLink(
        __d('wasabi_core', 'Cancel'),
        [
            'plugin' => 'Wasabi/Cms',
            'controller' => 'Menus',
            'action' => 'index'
        ]
    );
?></div>
<?= $this->Form->end() ?>
