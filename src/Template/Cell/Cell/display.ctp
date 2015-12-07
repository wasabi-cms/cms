<?php
/**
 * @var \Wasabi\ThemeDefault\View\ThemeDefaultView $this
 * @var \Wasabi\Cms\View\Page\Cell $cell
 */
?>
<div class="g--<?= $cell->grid->colWidth ?>-<?= $cell->grid->baseWidth ?>">
<?php foreach ($cell->data as $module) {
    echo $this->cell($module->viewCell, [$module]);
} ?>
</div>
