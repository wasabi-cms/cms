<?php

namespace Wasabi\Cms\Model\Entity;

use Cake\ORM\Entity;

/**
 * Class Collection
 *
 * @property string type
 * @property string identifier
 */
class Collection extends Entity
{
    const TYPE_COLLECTION = 'collection';
    const TYPE_ITEM = 'item';
}
