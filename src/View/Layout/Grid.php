<?php

namespace Wasabi\Cms\View\Layout;

use Cake\Core\Exception\Exception;

class Grid
{
    /**
     * The column width.
     *
     * @var int
     */
    public $colWidth = 0;

    /**
     * The base width.
     *
     * @var int
     */
    public $baseWidth = 0;

    /**
     * Grid constructor.
     *
     * @param int $colWidth
     * @param int $baseWidth
     */
    public function __construct($colWidth, $baseWidth)
    {
        if ($colWidth > $baseWidth) {
            throw new Exception('The column width of a grid cannot be greater than its base width.');
        }

        $this->colWidth = $colWidth;
        $this->baseWidth = $baseWidth;
    }

    /**
     * Return an array of the grid.
     * This is used to create the json of the page builder.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'colWidth' => $this->colWidth,
            'baseWidth' => $this->baseWidth
        ];
    }
}
