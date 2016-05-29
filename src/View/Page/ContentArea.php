<?php

namespace Wasabi\Cms\View\Page;

use Cake\Utility\Hash;
use Wasabi\Cms\View\Layout\Grid;

class ContentArea
{
    /**
     * Content area id.
     *
     * @var string
     */
    public $id;

    /**
     * Content area name.
     *
     * @var string
     */
    public $name;

    /**
     * Content area grid.
     *
     * @var Grid
     */
    public $grid;

    /**
     * Holds all child content objects.
     *
     * @var Row[]|Module[]
     */
    public $data;

    public function __construct($contentAreaDefintion)
    {
        $this->id = Hash::get($contentAreaDefintion, 'meta.contentAreaId');
        $this->name = Hash::get($contentAreaDefintion, 'meta.name');
        $this->grid = new Grid(
            Hash::get($contentAreaDefintion, 'meta.grid.colWidth', 0),
            Hash::get($contentAreaDefintion, 'meta.grid.baseWidth', 0)
        );

        $this->_initializeContentElements($contentAreaDefintion['data']);
    }

    protected function _initializeContentElements($contentElements)
    {
        foreach ($contentElements as $contentElement) {
            $contentType = Hash::get($contentElement, 'meta.type');

            switch ($contentType) {
                case 'Row':
                    $this->data[] = new Row($contentElement);
                    break;
                case 'Module':
                    $this->data[] = new Module($contentElement);
                    break;
                case 'Container':
                    $this->data[] = new Container($contentElement);
            }
        }
    }
}
