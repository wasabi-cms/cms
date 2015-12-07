<?php

namespace Wasabi\Cms\View\Cell;

use Cake\View\Cell;
use Wasabi\Cms\View\Page\Row;

class RowCell extends Cell
{
    /**
     * Render a single row.
     *
     * @param Row $row
     */
    public function display($row)
    {
        $this->set('row', $row);
    }
}
