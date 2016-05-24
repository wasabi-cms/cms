<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 */
use Cake\Core\Configure;

$this->extend('Wasabi/Core.default');

$this->append('head_css');
echo $this->Asset->css('cms' . (!Configure::read('debug') ? '.min' : ''), 'Wasabi/Cms');
$this->end();

if (!Configure::read('debug')) {
    $this->append('js-files');
    echo $this->Asset->js('cms', 'Wasabi/Cms');
    $this->end();
}

$this->start('requirejs'); ?>
<?php if (Configure::read('debug')): ?>
    require.config({
        paths: {
            'wasabi.cms': '../../wasabi/cms/js/cms',
            'wasabi.cms.package': '../../wasabi_cms/js'
        }
    });
<?php else: ?>
    require.config({
        paths: {
            'wasabi.cms': '../js/cms'
        }
    });
<?php endif; ?>
    WS.registerModule('wasabi.cms', <?= json_encode($this->get('jsCmsOptions', [])) ?>, {
        debug: <?= Configure::read('debug') ? 'true' : 'false' ?>
    });
<?php
$this->end();

echo $this->fetch('content');
