<?php
/**
 * @var \Wasabi\ThemeDefault\View\ThemeDefaultView $this
 * @var \Wasabi\Cms\View\Page\Row $row
 */
?>
<div class="row">
<?php foreach ($row->data as $cell) {
    echo $this->cell($cell->viewCell, [$cell]);
} ?>
</div>
