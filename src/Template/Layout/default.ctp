<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 */
use Cake\Core\Configure;

$this->extend('Wasabi/Core.default');

$this->append('head_css');
echo $this->Asset->css('cms' . (!Configure::read('debug') ? '.min' : ''), 'Wasabi/Cms');
$this->end();

$this->start('requirejs'); ?>
            require.config({
                paths: {
                    'wasabi.cms': '../../wasabi_cms/js/cms',
                    'wasabi.cms.package': '../../wasabi_cms/js'
                }
            });
            WS.registerModule('wasabi.cms', <?= json_encode($this->get('jsCmsOptions', [])) ?>);
<?php
$this->end();

echo $this->fetch('content');
