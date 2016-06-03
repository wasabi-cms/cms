<?php

namespace Wasabi\Cms\Model\Table;

use Cake\Event\Event;
use Cake\ORM\Table;
use Wasabi\Cms\Model\Entity\Attribute;
use Wasabi\Core\Wasabi;

class AttributesTable extends Table
{
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->table('cms_attributes');

        $this->addBehavior('Timestamp');
    }

    public function beforeSave(Event $event, Attribute $attribute)
    {
        if (!$attribute->language_id) {
            $attribute->language_id = Wasabi::contentLanguage()->id;
        }

        if ($attribute->content === '') {
            $attribute->content = null;
        }
    }
}
