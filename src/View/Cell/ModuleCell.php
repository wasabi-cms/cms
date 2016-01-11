<?php

namespace Wasabi\Cms\View\Cell;

use Cake\View\Cell;

class ModuleCell extends Cell
{
    /**
     * Render a single module.
     *
     * @param \Wasabi\Cms\View\Page\Module $module
     */
    public function display($module)
    {
        $this->set('module', $module);
    }
}
