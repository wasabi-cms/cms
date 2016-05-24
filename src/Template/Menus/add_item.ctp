<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Wasabi\Cms\Model\Entity\Menu $menu
 * @var \Wasabi\Cms\Model\Entity\MenuItem $menuItem
 * @var array $linkTypes
 */
$isEdit = false;
if ($this->request->params['action'] === 'add_item') {
    $this->Html->setTitle(__d('wasabi_cms', 'Add a new Menu Item'));
} else {
    $this->Html->setTitle(__d('wasabi_cms', 'Edit Menu Item'));
    $this->Html->setSubTitle($this->request->data('name'));
    $isEdit = true;
}
$this->Html->addAction($this->Guardian->protectedLink(
    __d('wasabi_cms', 'Back to {0} Menu', [$menu->get('name')]),
    [
        'plugin' => 'Wasabi/Cms',
        'controller' => 'Menus',
        'action' => 'edit',
        $menu->get('id')
    ],
    [
        'class' => 'no-icon'
    ]
));

echo $this->Form->create($menuItem, ['class' => 'no-top-section']);
    if ($isEdit) {
        echo $this->Form->input('id', ['type' => 'hidden']);
    }
    echo $this->Form->input('name', ['label' => __d('wasabi_cms', 'Menu Item Name')]);
    echo $this->Form->input('link_to', ['options' => $linkTypes, 'empty' => __d('wasabi_core', 'Please Choose...')]);
    echo $this->Html->div('form-controls');
        echo $this->Form->button('<span>' . __d('wasabi_core', 'Save') . '</span>', ['div' => false, 'class' => 'button']);
        echo $this->Guardian->protectedLink(__d('wasabi_core', 'Cancel'), [
            'plugin' => 'Wasabi/Cms',
            'controller' => 'Menus',
            'action' => 'edit',
            $menu->get('id')
        ]);
    echo $this->Html->tag('/div');
echo $this->Form->end();
