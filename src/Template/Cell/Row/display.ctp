<?php
/**
 * @var \Cake\View\View $this
 * @var \Wasabi\Cms\View\Page\Row $row
 */
?>
<div class="grid row">
<?php foreach ($row->data ?? [] as $cell) {
    echo $this->cell($cell->viewCell, [$cell]);
} ?>
</div>
