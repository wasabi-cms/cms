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

use ArrayObject;
use Cake\Event\Event;
use Cake\ORM\Behavior\TranslateBehavior;
use Cake\ORM\Table;
use Cake\Utility\Inflector;
use Cake\Validation\Validator;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Core\Wasabi;

/**
 * Class PagesTable
 *
 * @property ContentsTable Contents
 * @method TranslateBehavior locale($locale)
 */
class PagesTable extends Table
{
    /**
     * Holds the options for the Translate behavior.
     *
     * @var array
     */
    public static $translateOptions = [
        'fields' => [
            'name',
            'slug'
        ]
    ];

    /**
     * Initialize a table instance. Called after the constructor.
     *
     * @param array $config Configuration options passed to the constructor
     */
    public function initialize(array $config)
    {
        $this->table('cms_pages');

        $this->hasMany('Contents', [
            'className' => 'Wasabi/Cms.Contents',
            'foreignKey' => 'page_id',
        ]);

        $this->hasMany('Current', [
            'className' => 'Wasabi/Cms.Contents',
            'foreignKey' => 'page_id',
            'finder' => 'Current'
        ]);

        $this->addBehavior('Translate', self::$translateOptions);

        $this->addBehavior('Tree');
        $this->addBehavior('Timestamp');

        $this->locale(Wasabi::contentLanguage()->iso2);
    }

    /**
     * Default validation rules.
     *
     * @param Validator $validator
     * @return Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->notEmpty('name', __d('wasabi_cms', 'Please enter a name for this page.'))
            ->notEmpty('layout', __d('wasabi_cms', 'Please select a layout for this page.'));
        return $validator;
    }

    /**
     * beforeSave callback
     *
     * - create a slug based on the name of the page
     *
     * @param Event $event
     * @param Page $entity
     * @param ArrayObject $options
     */
    public function beforeSave(Event $event, Page $entity, ArrayObject $options)
    {
        $entity->slug = strtolower(Inflector::slug($entity->name));

        if (!$entity->isNew() && !$this->contentHasChanged($entity)) {
            // If we edit a page and the page content has not changed,
            // then we unset the "current" property to not create the
            // same content entry in the contents table.
            $entity->unsetProperty('current');
        }
    }

    public function contentHasChanged(Page $page)
    {
        $latestContent = $this->Contents->find()
            ->select(['Contents.content'])
            ->where([
                'Contents.page_id' => $page->id,
                'Contents.language_id' => Wasabi::contentLanguage()->id
            ])
            ->order(['Contents.modified' => 'DESC'])
            ->limit(1)
            ->hydrate(false)
            ->first();

        if (empty($latestContent)) {
            return true;
        }

        if (empty($page->current[0])) {
            return false;
        }

        return (md5($latestContent['content']) !== md5($page->current[0]->content));
    }
}
