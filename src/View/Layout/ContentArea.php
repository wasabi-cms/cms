<?php

namespace Wasabi\Cms\View\Layout;

use Cake\Utility\Inflector;

class ContentArea
{
    /**
     * The id of this content area.
     * (underscored name)
     *
     * @var string
     */
    protected $_id;

    /**
     * The name of this content area.
     *
     * @var string
     */
    protected $_name;

    /**
     * The grid for this content area.
     *
     * @var Grid
     */
    protected $_grid;

    /**
     * ContentArea constructor.
     *
     * @param string $name
     * @param int $colWidth
     * @param int $baseWidth
     */
    public function __construct($name, $colWidth, $baseWidth)
    {
        $this->_name = $name;
        $this->_id = Inflector::underscore($this->_name);
        $this->_grid = new Grid($colWidth, $baseWidth);
    }


    public function toArray()
    {
        return [
            'meta' => [
                'type' => 'ContentArea',
                'contentAreaId' => $this->_id,
                'name' => $this->_name,
                'grid' => $this->_grid->toArray()
            ],
            'data' => []
        ];
    }
}
