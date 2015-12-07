<?php

namespace Wasabi\Cms\View\Page;

use Cake\Utility\Hash;
use Wasabi\Cms\View\Layout\Grid;

class Cell extends ContentElement
{
    /**
     * Holds the grid representing the size of this cell.
     *
     * @var Grid
     */
    public $grid;

    /**
     * Holds all modules of this cell.
     *
     * @var Module[]
     */
    public $data = [];

    public function __construct($cellDefinition)
    {
        parent::__construct($cellDefinition);

        $this->grid = new Grid(
            Hash::get($cellDefinition, 'meta.grid.colWidth', 0),
            Hash::get($cellDefinition, 'meta.grid.baseWidth', 0)
        );

        foreach ($cellDefinition['data'] as $moduleDefintion) {
            $this->data[] = new Module($moduleDefintion);
        }
    }
}
