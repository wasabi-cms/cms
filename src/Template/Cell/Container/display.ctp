<?php
/**
 * @var \Cake\View\View $this
 * @var \Wasabi\Cms\View\Page\Container $container
 */
$containerElement = $container->meta['containerElement'] ?? 'div';
if (!in_array($containerElement, ['article', 'section', 'div'])) {
    $containerElement = 'div';
}
$class = !empty($container->meta['cssClasses'] ?? null) ? $container->meta['cssClasses'] : false;
$useInnerContainer = (bool)($container->meta['useInnerContainer'] ?? false);
$innerClass = !empty($container->meta['innerCssClasses'] ?? null) ? $container->meta['innerCssClasses'] : false;
?>
<<?= $containerElement ?><?= ($class !== false) ? ' class="' . $class . '"' : '' ?>>
<?php if ($useInnerContainer): ?><div<?= ($innerClass !== false) ? ' class="' . $innerClass . '"' : '' ?>><?php endif; ?>
    <?php if ($container !== false) {
        foreach ($container->data ?? [] as $contentElement) {
            echo $this->cell($contentElement->viewCell, [$contentElement]);
        }
    } ?>
<?php if ($useInnerContainer): ?></div><?php endif; ?>
</<?= $containerElement ?>>
