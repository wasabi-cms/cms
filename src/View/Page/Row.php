<?php

namespace Wasabi\Cms\View\Page;

class Row extends ContentElement
{
    public $viewCell;

    /**
     * Holds all cells of this row.
     *
     * @var Cell[]
     */
    public $data = [];

    public function __construct($rowDefintion)
    {
        parent::__construct($rowDefintion);

        foreach ($rowDefintion['data'] as $cellDefintion) {
            $this->data[] = new Cell($cellDefintion);
        }
    }
}
