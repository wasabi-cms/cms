<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var array $menus
 */

$this->Html->setTitle(__d('wasabi_cms', 'Menus'));
$this->Html->setSubTitle(__d('wasabi_cms', 'Management'));
$this->Html->addAction(
    $this->Guardian->protectedLink(
        '<i class="icon-plus"></i>',
        [
            'plugin' => 'Wasabi/Cms',
            'controller' => 'Menus',
            'action' => 'add'
        ],
        [
            'title' => __d('wasabi_cms', 'Create a new Menu'),
            'class' => 'add',
            'escape' => false
        ])
); ?>
<table class="list menus valign-middle">
    <thead>
    <tr>
        <th class="t-1-12 center"><?= $this->Filter->sortLink('ID', 'id') ?></th>
        <th class="t-5-12"><?= $this->Filter->sortLink(__d('wasabi_cms', 'Menu Name'), 'name') ?></th>
        <th class="t-4-12"><?= $this->Filter->sortLink(__d('wasabi_cms', '# Menu Items'), 'menu_item_count') ?></th>
        <th class="t-2-12 center"><?= __d('wasabi_core', 'Actions') ?></th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($menus as $key => $m) {
        echo $this->element('../Menus/__menu-row', ['m' => $m]);
    }
    ?>
    </tbody>
</table>
