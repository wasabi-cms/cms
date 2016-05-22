<?php
/**
 * @var \Cake\View\View $this
 * @var \Wasabi\Cms\View\Page\ContentArea $contentArea
 */

if ($contentArea !== false) {
    foreach ($contentArea->data ?? [] as $contentElement) {
        echo $this->cell($contentElement->viewCell, [$contentElement]);
    }
}
