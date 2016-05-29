<?php

namespace Wasabi\Cms\View\Page;

use Cake\Utility\Hash;

class Container extends ContentElement
{
    public $viewCell;

    public $meta = [];

    /**
     * Holds all content elements of this row.
     *
     * @var Row[]|Module[]
     */
    public $data = [];

    /**
     * Container constructor.
     * @param $containerDefinition
     */
    public function __construct($containerDefinition)
    {
        parent::__construct($containerDefinition);

        $this->meta = $containerDefinition['meta'];

        foreach ($containerDefinition['data'] as $contentElement) {
            $contentType = Hash::get($contentElement, 'meta.type');

            switch ($contentType) {
                case 'Row':
                    $this->data[] = new Row($contentElement);
                    break;
                case 'Module':
                    $this->data[] = new Module($contentElement);
                    break;
            }
        }
    }
}
