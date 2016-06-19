<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 */
use Cake\Core\Configure;

$this->extend('Wasabi/Core.default');

$this->append('head_css');
echo $this->Asset->css('css/cms' . (!Configure::read('debug') ? '.min.css' : '.css'), 'Wasabi/Cms');
$this->end();

if (!Configure::read('debug')) {
    $this->append('js-files');
    echo $this->Asset->js('js/cms.js', 'Wasabi/Cms');
    $this->end();
}

$this->start('requirejs'); ?>
<?php if (Configure::read('debug')): ?>
    require.config({
        paths: {
            'wasabi.cms': '../../../../wasabi/cms/ASSETS/js/cms',
            'wasabi.cms.package': '../../../../wasabi/cms/ASSETS/js'
        }
    });
    require(['wasabi.cms.package/cms_common'], function() {
        WS.registerModule('wasabi.cms', <?= json_encode($this->get('jsCmsOptions', [])) ?>, {
            debug: <?= Configure::read('debug') ? 'true' : 'false' ?>
        });
        WS.boot();
    });
<?php else: ?>
    WS.registerModule('wasabi.cms', <?= json_encode($this->get('jsCmsOptions', [])) ?>, {
        debug: <?= Configure::read('debug') ? 'true' : 'false' ?>
    });
    WS.boot();
<?php endif; ?>
<?php
$this->end();

echo $this->fetch('content');

//require.config({
//        paths: {
//    'wasabi.cms': '../js/cms'
//        }
//    });
