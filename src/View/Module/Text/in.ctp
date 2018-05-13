<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Cake\Form\Form $form
 */
?>
<?= $this->Flash->render('module') ?>
<?= $this->Form->create($form, ['class' => 'module--richt-text']) ?>
<div class="form-row">
    <label><?= __d('module_text', 'Content') ?></label>
    <div class="field">
        <?= $this->Form->control('content', ['type' => 'textarea', 'id' => false, 'label' => false, 'class' => 'medium-editor-content']) ?>
        <div class="medium-editor"><?= $this->request->data['content'] ?? '' ?></div>
        <a href="javascript:void(0)" class="medium-editor-show-code"><?= __d('module_text', 'Code Preview') ?></a>
        <xmp class="medium-editor-code"></xmp>
    </div>
</div>
<?= $this->Form->end() ?>
