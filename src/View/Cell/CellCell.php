<?php

namespace Wasabi\Cms\View\Cell;

use Cake\View\Cell;

class CellCell extends Cell
{
    /**
     * Render a single cell.
     *
     * @param \Wasabi\Cms\View\Page\Cell $cell
     */
    public function display($cell)
    {
        $this->set('cell', $cell);
    }
}
