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

use Cake\Event\Event;
use Cake\ORM\Query;
use Cake\ORM\Table;
use Cake\Utility\Text;
use Wasabi\Cms\Model\Entity\PageRevision;
use Wasabi\Core\Wasabi;

/**
 * Class PageRevisionsTable
 */
class PageRevisionsTable extends Table
{
    /**
     * Initialize a table instance. Called after the constructor.
     *
     * @param array $config
     */
    public function initialize(array $config)
    {
        $this->setTable('wasabi_cms_page_revisions');
        $this->addBehavior('Timestamp');
    }

    /**
     * beforeSave callback
     *
     * @param Event $event
     * @param PageRevision $entity
     * @param \ArrayObject $options
     */
    public function beforeSave(Event $event, PageRevision $entity, \ArrayObject $options)
    {
        $entity->slug = strtolower(Text::slug($entity->title));
//        $entity->language_id = Wasabi::contentLanguage()->id;
        $entity->created_by = Wasabi::user()->id;
//        $entity->modified_by_user_id = Wasabi::user()->id;
    }

    /**
     * Find the current (latest) content revision.
     *
     * @param Query $query
     * @return Query
     */
    public function findCurrent(Query $query)
    {
        return $query->order(['Current.modified' => 'DESC'])->limit(1);
    }

    /**
     * Find the latest page revision for the given $pageId.
     *
     * @param string $pageId
     * @return array|\Cake\Datasource\EntityInterface|null
     */
    public function findLatestRevision($pageId)
    {
        $query = $this->find();

        return $this->findCurrent($query)
            ->select(['content'])
            ->where([
                'page_id' => $pageId
            ])
            ->first();
    }
}
