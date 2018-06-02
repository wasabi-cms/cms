<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 */
use Cake\Core\Configure;

$this->extend('Wasabi/Core.default');

$this->append('head_css');
echo $this->Asset->css('css/cms' . (!Configure::read('debug') ? '.min.css' : '.css'), 'Wasabi/Cms');
echo $this->Asset->css('css/tree.css', 'Wasabi/Cms');
$this->end();

$debugJavascript = (Configure::read('debug') && Configure::read('debugJS'));

$this->append('backend-js-assets');
    echo $this->Asset->js('js/cms' . (!$debugJavascript ? '.min' : '') . '.js', 'Wasabi/Cms');
$this->end();

$this->append('backend-js-assets-after-init');
    echo $this->Asset->js('js/vendor' . (!$debugJavascript ? '.min' : '') . '.js', 'Wasabi/Cms');
    echo $this->Asset->js('js/tree' . (!$debugJavascript ? '.min' : '') . '.js', 'Wasabi/Cms');
$this->end();

$this->append('backend-js');?>
window.WS.configureModule('Wasabi/Cms', <?= json_encode([
    'assetUrl' => $this->Url->build('/wasabi/cms'),
    'baseUrl' => $this->Url->build(['plugin' => 'Wasabi/Cms', 'controller' => 'Pages', 'action' => 'index']),
    'apiPagesUrl' => $this->Url->build(['plugin' => 'Wasabi/Cms', 'controller' => 'Pages', 'action' => 'index', 'prefix' => 'api', '_method' => 'GET'])
]) ?>);
<?php $this->end();

$this->start('content-area'); ?>
<div class="cms--pages">
    <?= $this->Flash->render('auth') ?>
    <?= $this->Html->titlePad() ?>
    <?= $this->Flash->render('flash') ?>
    <?= $this->fetch('content') ?>
</div>
<?php $this->end();
