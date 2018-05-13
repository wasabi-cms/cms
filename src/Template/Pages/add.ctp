<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Wasabi\Cms\Model\Entity\Page $page
 * @var array $layouts
 * @var string $changeAttributesUrl
 * @var array $availableModules
 */

use Cake\Core\Configure;

$isAddAction = ($this->request->getParam('action') === 'add');

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

if ($isAddAction) {
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

if (!$isAddAction) {
    echo $this->Form->control('id', ['type' => 'hidden', 'id' => 'page-id']);
}
?>
    <?= $this->Form->control('pageRevision.title', [
        'label' => __d('wasabi_cms', 'Title')
    ]) ?>
    <ul class="tabs row" data-tabify-id="page">
        <li data-tabify-target="layout"><a href="javascript:void(0)"><?= __d('wasabi_cms', 'Layout') ?></a></li>
        <li data-tabify-target="seo"><a href="javascript:void(0)"><?= __d('wasabi_cms', 'SEO') ?></a></li>
        <li data-tabify-target="urls"<?= ($isAddAction) ? ' data-tabify-disabled="1"' : '' ?>><a href="javascript:void(0)"><?= __d('wasabi_cms', 'URLs') ?></a></li>
    </ul>
    <div class="tab-content" data-tabify-tab="layout" data-tabify-id="page" data-attributes-url="<?= $changeAttributesUrl ?>">
        <?php echo $this->Form->control('layout', [
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
    <div class="tab-content" data-tabify-tab="seo" data-tabify-id="page" style="display: none">
        <?php
        echo $this->Form->control('page_title', [
            'label' => __d('wasabi_cms', 'Title')
        ]);
        echo $this->Form->control('display_page_title_suffix', [
            'type' => 'toggleSwitch',
            'onLabel' => __d('wasabi_cms', 'yes'),
            'offLabel' => __d('wasabi_cms', 'no'),
            'templateVars' => [
                'formRowLabel' => __d('wasabi_cms', 'Display Title Suffix'),
                'formRowInfo' => __d('wasabi_cms', 'Whether to display the page title suffix configured under Settings > General.')
            ]
        ]);
        echo $this->Form->control('meta_description', [
            'label' => __d('wasabi_cms', 'Meta Description'),
            'templateVars' => [
                'info' => __d('wasabi_cms', 'Describe in short what this page is about.')
            ],
            'type' => 'textarea',
            'rows' => 2,
        ]);
        echo $this->Form->control('meta_robots_index', [
            'type' => 'toggleSwitch',
            'onLabel' => 'index',
            'offLabel' => 'noindex',
            'templateVars' => [
                'formRowLabel' => __d('wasabi_cms', 'Meta Robots Index'),
                'formRowInfo' => __d('wasabi_cms', 'Whether to allow Search Engines to index this page.')
            ]
        ]);
        echo $this->Form->control('meta_robots_follow', [
            'type' => 'toggleSwitch',
            'onLabel' => 'follow',
            'offLabel' => 'nofollow',
            'templateVars' => [
                'formRowLabel' => __d('wasabi_cms', 'Meta Robots Follow'),
                'formRowInfo' => __d('wasabi_cms', 'Whether to allow Search Engines to follow links on this page.')
            ]
        ]);
        ?>
    </div>
<?php if (!$isAddAction): ?>
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
            <label><?php echo __d('wasabi_cms', 'URLs') ?></label>
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
<?= $this->Form->end() ?>
<?= $this->element('Wasabi/Cms.Pages/page-builder-templates') ?>
