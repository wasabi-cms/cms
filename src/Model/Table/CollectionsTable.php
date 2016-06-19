<?php

namespace Wasabi\Cms\Model\Table;

use Cake\ORM\Table;

class CollectionsTable extends Table
{
    /**
     * Initialization hook method.
     *
     * @param array $config
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->table('cms_collections');
    }
}
