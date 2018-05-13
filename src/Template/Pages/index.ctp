<?php
/**
 * @var \Wasabi\Cms\View\AppView $this
 * @var \Cake\Collection\CollectionInterface $pages
 * @var array $closedPageIds
 */

$leftPanelWidth = isset($_COOKIE['wasabi_cms_tree_width']) ? (int)$_COOKIE['wasabi_cms_tree_width'] : false;
$leftPanelCollapsed = isset($_COOKIE['wasabi_cms_tree_collapsed']) ? (bool)$_COOKIE['wasabi_cms_tree_collapsed'] : false;

?>

<div class="content--wrapper cms--content--tree<?= $leftPanelCollapsed ? ' collapsed' : '' ?>" data-scrollbar="<?= htmlentities(json_encode(['autoshow' => true])) ?>"<?= $leftPanelWidth !== false ? ' style="width:' . $leftPanelWidth . 'px"' : '' ?>>
    <div id="object-tree-actions"></div>
    <div id="object-tree"></div>
</div>
<div class="content--wrapper cms--content--active" data-init="gm-scrollbar"<?= $leftPanelWidth !== false ? ' style="width: calc(100% - ' . $leftPanelWidth . 'px)"' : '' ?>>
    <div class="gm-scrollbar -vertical"><div class="thumb"></div></div>
    <div class="gm-scrollbar -horizontal"><div class="thumb"></div></div>
    <div class="gm-scroll-view">
        <div class="content--padding"></div>
    </div>
    <div class="cms--content--split">
        <div class="cms--content--split--bar"></div>
        <div class="cms--content--split--handle"></div>
    </div>
</div>
