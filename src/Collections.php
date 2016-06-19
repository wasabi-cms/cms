<?php

namespace Wasabi\Cms;

class Collections extends BaseCollection
{
    /**
     * Get the collections instance.
     *
     * @return Collections
     */
    protected static function _instance() {
        static $instance;
        if (!$instance) {
            $instance = new Collections();
        }
        return $instance;
    }
}
