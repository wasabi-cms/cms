<?php

namespace Wasabi\Cms\View\Page;

abstract class ContentElement
{
    public $viewCell;

    public function __construct($elements)
    {
        $this->viewCell = $this->_getViewCell();
    }

    protected function _getViewCell()
    {
        return 'Wasabi/Cms.' . substr(strrchr(get_class($this), '\\'), 1);
    }
}
