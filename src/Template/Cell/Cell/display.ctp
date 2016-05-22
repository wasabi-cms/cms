<?php
/**
 * @var \Cake\View\View $this
 * @var \Wasabi\Cms\View\Page\Cell $cell
 */
?>
<div class="grid-<?= $cell->grid->colWidth ?>-<?= $cell->grid->baseWidth ?>">
<?php foreach ($cell->data ?? [] as $module) {
    echo $this->cell($module->viewCell, [$module]);
} ?>
</div>
