<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Wasabi\Cms\Model\Entity\Page $page
 * @var array $pageTypes
 * @var array $collections
 * @var array $collectionItems
 * @var array $themes
 * @var array $layouts
 * @var string $changeAttributesUrl
 * @var array $routeTypes
 * @var array $availableModules
 */

use Cake\Core\Configure;

$this->set('jsCmsOptions', [
    'translations' => [
        'dialog' => [
            'addRow' => [
                'title' => __d('wasabi_cms', 'Add Row'),
                'primaryAction' => __d('wasabi_cms', 'Add Row')
            ],
            'editRow' => [
                'title' => __d('wasabi_cms', 'Edit Row'),
                'primaryAction' => __d('wasabi_cms', 'Save')
            ],
            'addModule' => [
                'title' => __d('wasabi_cms', 'Add Module'),
                'primaryAction' => __d('wasabi_cms', 'Close')
            ],
            'editModule' => [
                'title' => __d('wasabi_cms', 'Edit Module'),
                'primaryAction' => __d('wasabi_cms', 'Save'),
                'secondaryAction' => __d('wasabi_cms', 'Cancel')
            ]
        ]
    ],
    'modules' => $availableModules,
    'moduleAction' => $this->Url->build(['plugin' => 'Wasabi/Cms', 'controller' => 'Modules', 'action' => 'edit'], true)
]);

if ($this->request->params['action'] == 'add') {
    $this->Html->setTitle(__d('wasabi_cms', 'Add a new Page') . '<span class="lang">' . Configure::read('contentLanguage')->iso2 . '</span>');
} else {
    $this->Html->setTitle(__d('wasabi_cms', 'Edit Page') . '<span class="lang">' . Configure::read('contentLanguage')->iso2 . '</span>');
    $this->Html->setSubTitle($page->name);
}

echo $this->Form->create($page, [
    'novalidate' => true,
    'class' => 'page-form'
]);

echo $this->Form->hidden('current.0.content', ['class' => 'page-content']);

if ($this->request->params['action'] == 'edit') {
    echo $this->Form->input('id', ['type' => 'hidden', 'id' => 'page-id']);
}
?>
    <ul class="tabs row" data-tabify-id="page">
        <li class="active" data-tabify-target="general"><a href="javascript:void(0)"><?php echo __d('wasabi_cms', 'General') ?></a></li>
        <li data-tabify-target="layout"><a href="javascript:void(0)"><?php echo __d('wasabi_cms', 'Layout') ?></a></li>
        <li data-tabify-target="urls"<?php echo ($this->request->params['action'] === 'add') ? ' data-tabify-disabled="1"' : '' ?>><a href="javascript:void(0)"><?php echo __d('wasabi_cms', 'URLs') ?></a></li>
    </ul>
    <div class="tab-content" data-tabify-tab="general" data-tabify-id="page">
        <?php
        echo $this->Form->input('name', [
            'label' => __d('wasabi_cms', 'Page Name')
        ]);
        echo $this->Form->input('page_title', [
            'label' => __d('wasabi_cms', 'Title')
        ]);
        echo $this->Form->input('display_page_title_suffix', [
            'type' => 'checkbox',
            'label' => __d('wasabi_cms', 'display title suffix'),
            'templateVars' => [
                'formRowInfo' => __d('wasabi_cms', 'Check this checkbox to display the page title suffix configured under Settings > General.')
            ]
        ]);
        echo $this->Form->input('meta_description', [
            'label' => __d('wasabi_cms', 'Meta Description'),
            'templateVars' => [
                'info' => __d('wasabi_cms', 'Describe in short what this page is about.')
            ],
            'type' => 'textarea',
            'rows' => 2,
        ]);
        echo $this->Form->input('cached', [
            'options' => [
                '1' => __d('wasabi_cms', 'Yes'),
                '0' => __d('wasabi_cms', 'No')
            ],
            'label' => __d('wasabi_cms', 'Enable Caching?')
        ]);
        ?>
    </div>
    <div class="tab-content" data-tabify-tab="layout" data-tabify-id="page" style="display: none;" data-attributes-url="<?= $this->Url->build([
        'plugin' => 'Wasabi/Cms',
        'controller' => 'Pages',
        'action' => 'attributes',
        'id' => $page->id
    ]) ?>">
        <?php echo $this->Form->input('layout', [
            'options' => $layouts,
            'label' => __d('wasabi_cms', 'Layout'),
            'templateVars' => [
                'info' => __d('wasabi_cms', 'Choose a layout for this page.')
            ]
        ]); ?>
        <div class="form-row row">
            <label><?php echo __d('wasabi_cms', 'Layout Attributes') ?></label>
            <div class="field layout-attributes" data-change-url="<?php echo $this->Url->build('/cms/pages/attributes', true) ?>">
                <?php echo $this->element('Wasabi/Cms.Pages/layout-attributes'); ?>
            </div>
        </div>
    </div>
<?php if ($this->request->params['action'] === 'edit'): ?>
    <div class="tab-content" data-tabify-tab="urls" data-tabify-id="page" style="display: none;">
        <div class="form-row row">
            <label><?php echo __d('cms', 'Default URL slug') ?></label>
            <div class="field no-input">
                <?php
                if ($page->slug) {
                    echo $page->slug;
                } else {
                    echo '-';
                }
                ?>
            </div>
        </div>
        <div class="form-row row">
            <label><?php echo __d('wasabi_cms', 'URLs') ?>:</label>
            <div class="field routes">
                <?php echo $this->element('Wasabi/Cms.Pages/routes', [
                    'routes' => $routes,
                    'routeTypes' => $routeTypes,
                    'model' => 'Wasabi/Cms.Pages',
                    'element' => 'Wasabi/Cms.Pages/routes'
                ]); ?>
            </div>
        </div>
    </div>
<?php endif; ?>
    <div class="page-builder-wrapper">
        <div class="page-builder-loader">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
    </div>
    <div class="form-controls">
        <?= $this->Form->button(
            __d('wasabi_cms', 'Save'),
            [
                'div' => false,
                'class' => 'button'
            ]
        ) ?>
        <?= $this->Html->link(
            __d('wasabi_cms', 'Cancel'),
            [
                'plugin' => 'Wasabi/Cms',
                'controller' => 'Pages',
                'action' => 'index'
            ],
            [
                'class' => 'cancel'
            ]
        ) ?>
    </div>
<?php
echo $this->Form->end();
echo $this->element('Wasabi/Cms.Pages/page-builder-templates');
