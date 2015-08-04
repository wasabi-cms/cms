<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Wasabi\Cms\Model\Entity\Page $page
 * @var array $pageTypes
 * @var array $collections
 * @var array $collectionItems
 * @var array $layouts
 * @var string $changeAttributesUrl
 */

use Cake\Core\Configure;

if ($this->request->params['action'] == 'add') {
    $this->Html->setTitle(__d('wasabi_cms', 'Add a new Page') . '<span class="lang">' . Configure::read('contentLanguage')->iso2 . '</span>');
} else {
    $this->Html->setTitle(__d('wasabi_cms', 'Edit Page') . '<span class="lang">' . Configure::read('contentLanguage')->iso2 . '</span>');
    $this->Html->setSubTitle($page->name);
}

echo $this->Form->create($page, [
    'novalidate' => true,
    'class' => 'page-form',
//    'templates' => 'Wasabi/Cms.form_templates'
]);
if ($this->request->params['action'] == 'edit') {
    echo $this->Form->input('id', ['type' => 'hidden']);

    $this->start('Cms.requireJs');
    echo "WS.get('wasabi.cms').routes();";
    $this->end();
}
?>
<div class="row">
    <div class="page-main">
        <div class="box box--general">
            <div class="box-title"><?= __d('wasabi_cms', 'General') ?></div>
            <div class="box-content">
                <?= $this->Form->input('name', [
                    'label' => [
                        'text' => __d('wasabi_cms', 'Page Name'),
//                        'class' => 'visuallyhidden'
                    ],
                    'placeholder' => __d('wasabi_cms', 'Enter page title')
                ]) ?>
                <?= $this->Form->input('page_title', ['label' => __d('wasabi_cms', 'Page Title')]) ?>
                <?= $this->Form->input('meta_description', ['label' => __d('wasabi_cms', 'Meta Description'), 'type' => 'textarea', 'rows' => 2, 'info' => __d('wasabi_cms', 'Describe in short what this page is about.')]) ?>
            </div>
        </div>
    </div>
    <div class="page-aside">
        <div class="box box--cache">
            <div class="box-title"><?= __d('wasabi_cms', 'Caching') ?></div>
            <div class="box-content"><?= $this->Form->input('cached', ['options' => array('1' => __d('wasabi_cms', 'Yes'), '0' => __d('wasabi_cms', 'No')), 'label' => __d('wasabi_cms', 'Enable Caching?')]) ?></div>
        </div>
        <div class="box box--layout">
            <div class="box-title"><?= __d('wasabi_cms', 'Layout') ?></div>
            <div class="box-content">
                <?= $this->Form->input('cms_layout', [
                    'options' => $layouts,
                    'label' => [
                        'text' => __d('wasabi_cms', 'Layout'),
                        'class' => 'visuallyhidden'
                    ],
                    'info' => __d('wasabi_cms', 'Choose a layout for this page.')
                ]); ?>
                <div class="form-row row">
                    <label class="visuallyhidden"><?= __d('wasabi_cms', 'Layout Fields') ?>:</label>
                    <div class="field layout-attributes" data-change-url="<?= $changeAttributesUrl ?>">
                        <?= $this->element('Wasabi/Cms.Pages/layout-attributes') ?>
                    </div>
                </div>
            </div>
        </div>
        <?php if ($this->request->params['action'] != 'add'): ?>
        <div class="box box--urls">
            <div class="box-title"><?= __d('wasabi_cms', 'URLs') ?></div>
            <div class="box-content">
                <div class="form-row row">
                    <label><?= __d('wasabi_cms', 'Default URL slug') ?></label>
                    <div class="field no-input">
                        <?php
                            if (isset($this->request->data['CmsPage']) && isset($this->request->data['CmsPage']['slug'])) {
                                echo $this->request->data['CmsPage']['slug'];
                            } else {
                                echo '-';
                            }
                        ?>
                    </div>
                </div>
                <div class="form-row row">
                    <label><?= __d('wasabi_cms', 'URLs') ?>:</label>
                    <div class="field routes">
                        <?= $this->element('Wasabi/Cms.Pages/routes') ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
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

$layout = false;
$contentAreas = array();
if ($this->request->params['action'] === 'edit' && !empty($page->layout)) {
    $layout = $page->getLayout();
    $contentAreas = $layout->getContentAreas();
}

if ($layout !== false && !empty($contentAreas)): ?>
    <ul class="tabs row mtop" data-tabify-id="content-areas">
        <?php $i = 0; foreach ($contentAreas as $contentAreaId => $contentAreaName): ?>
            <li<?= ($i === 0) ? ' class="active"' : '' ?> data-tabify-target="<?= $contentAreaId ?>"><a href="javascript:void(0)"><?= $contentAreaName ?></a></li>
            <?php $i++; endforeach; ?>
    </ul>
    <?php $i = 0; foreach ($contentAreas as $contentAreaId => $contentAreaName): ?>
        <div class="tab-content" data-tabify-tab="<?= $contentAreaId ?>" data-tabify-id="content-areas"<?= ($i > 0) ? ' style="display: none;"' : '' ?>>
            blub <?= $i ?>
        </div>
        <?php $i++; endforeach; ?>
<?php endif; ?>