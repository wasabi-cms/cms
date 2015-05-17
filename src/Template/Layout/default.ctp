<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 */
use Cake\Routing\Router;

$this->extend('Wasabi/Core.default');

$this->start('requirejs'); ?>
            require.config({
                paths: {
                    'wasabi.cms': '../../wasabi_cms/js/cms'
                }
            });
            WS.registerModule('wasabi.cms', {});
<?php
$this->end();

echo $this->fetch('content');