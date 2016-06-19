<?php

namespace Wasabi\Cms;

class CollectionItems extends BaseCollection
{
    /**
     * Get the collections instance.
     *
     * @return CollectionItems
     */
    protected static function _instance() {
        static $instance;
        if (!$instance) {
            $instance = new CollectionItems();
        }
        return $instance;
    }
}
