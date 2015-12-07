<?php
/**
 * Wasabi CMS
 * Copyright (c) Frank Förster (http://frankfoerster.com)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Frank Förster (http://frankfoerster.com)
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace Wasabi\Cms\Model\Table;

use Cake\Core\Configure;
use Cake\Event\Event;
use Cake\ORM\Query;
use Cake\ORM\Table;
use Wasabi\Cms\Model\Entity\Content;
use Wasabi\Core\Wasabi;

/**
 * Class ContentsTable
 */
class ContentsTable extends Table
{
    /**
     * Initialize a table instance. Called after the constructor.
     *
     * @param array $config
     */
    public function initialize(array $config)
    {
        $this->table('cms_contents');
        $this->addBehavior('Timestamp');
    }

    /**
     * beforeSave callback
     *
     * @param Event $event
     * @param Content $entity
     * @param \ArrayObject $options
     */
    public function beforeSave(Event $event, Content $entity, \ArrayObject $options)
    {
        $entity->language_id = Wasabi::contentLanguage()->id;
        $entity->created_by_user_id = Wasabi::user()->id;
        $entity->modified_by_user_id = Wasabi::user()->id;
    }

    /**
     * Find the current (latest) content revision.
     *
     * @param Query $query
     * @param array $options
     * @return Query
     */
    public function findCurrent(Query $query, array $options)
    {
        $query
            ->where(['Current.language_id' => Wasabi::contentLanguage()->id])
            ->order(['Current.modified' => 'DESC'])->limit(1);
        return $query;
    }
}
