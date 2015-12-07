<?php

namespace Wasabi\Cms\View\Cell;

use Cake\View\Cell;
use Wasabi\Core\Wasabi;

class ContentAreaCell extends Cell
{
    /**
     * Render a content area id for the current page.
     *
     * @param string $contentAreaId the id of the content area to render
     */
    public function display($contentAreaId)
    {
        $this->set('contentArea', Wasabi::page()->getContentArea($contentAreaId));
    }
}
