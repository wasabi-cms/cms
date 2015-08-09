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

echo $this->Form->hidden('content');

if ($this->request->params['action'] == 'edit') {
    echo $this->Form->input('id', ['type' => 'hidden']);
}
?>
    <ul class="tabs row" data-tabify-id="page">
        <li class="active" data-tabify-target="general"><a href="javascript:void(0)"><?php echo __d('wasabi_cms', 'General') ?></a></li>
        <li data-tabify-target="layout"><a href="javascript:void(0)"><?php echo __d('wasabi_cms', 'Layout') ?></a></li>
        <li data-tabify-target="urls"<?php echo ($this->request->params['action'] === 'add') ? ' data-tabify-disabled="1"' : '' ?>><a href="javascript:void(0)"><?php echo __d('wasabi_cms', 'URLs') ?></a></li>
    </ul>
    <div class="tab-content" data-tabify-tab="general" data-tabify-id="page">
        <?php
        echo $this->Form->input('name', array('label' => __d('wasabi_cms', 'Page Name')));
        echo $this->Form->input('title', array('label' => __d('wasabi_cms', 'Page Title')));
        echo $this->Form->input('meta_description', array('label' => __d('wasabi_cms', 'Meta Description'), 'type' => 'textarea', 'rows' => 2, 'info' => __d('wasabi_cms', 'Describe in short what this page is about.')));
        echo $this->Form->input('cached', array('options' => array('1' => __d('wasabi_cms', 'Yes'), '0' => __d('wasabi_cms', 'No')), 'label' => __d('wasabi_cms', 'Enable Caching?')));
        ?>
    </div>
    <div class="tab-content" data-tabify-tab="layout" data-tabify-id="page" style="display: none;">
        <?php echo $this->Form->input('layout_id', array('options' => $layouts, 'label' => __d('wasabi_cms', 'Layout'), 'info' => __d('wasabi_cms', 'Choose a layout for this page.'))); ?>
        <div class="form-row row">
            <label><?php echo __d('wasabi_cms', 'Layout Fields') ?>:</label>
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
                <?php echo $this->element('Wasabi/Cms.Pages/routes'); ?>
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
echo $this->element('Wasabi/Cms.Pages/page-builder-templates.hbs');

$layout = false;
$contentAreas = array();
if ($this->request->params['action'] === 'edit' && !empty($page->layout)) {
    $layout = $page->getLayout();
    $contentAreas = $layout->getContentAreas();
}

/*if ($layout !== false && !empty($contentAreas)): */?><!--
    <ul class="tabs row mtop" data-tabify-id="content-areas">
        <?php /*$i = 0; foreach ($contentAreas as $contentAreaId => $contentAreaName): */?>
            <li<?/*= ($i === 0) ? ' class="active"' : '' */?> data-tabify-target="<?/*= $contentAreaId */?>"><a href="javascript:void(0)"><?/*= $contentAreaName */?></a></li>
            <?php /*$i++; endforeach; */?>
    </ul>
    <?php /*$i = 0; foreach ($contentAreas as $contentAreaId => $contentAreaName): */?>
        <div class="tab-content" data-tabify-tab="<?/*= $contentAreaId */?>" data-tabify-id="content-areas"<?/*= ($i > 0) ? ' style="display: none;"' : '' */?>>
            blub <?/*= $i */?>
        </div>
        <?php /*$i++; endforeach; */?>
--><?php /*endif; */?>