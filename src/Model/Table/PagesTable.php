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
use Cake\Core\Configure;
use Cake\Event\Event;
use Cake\Http\ServerRequest;
use Cake\ORM\Query;
use Cake\ORM\ResultSet;
use Cake\ORM\Table;
use Cake\Utility\Hash;
use Cake\Utility\Text;
use Cake\Validation\Validator;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Cms\View\Theme\ThemeManager;
use Wasabi\Core\Wasabi;

/**
 * Class PagesTable
 *
 * @property PageRevisionsTable PageRevisions
 * @property PageRevisionsTable CurrentRevision
 * @property PagesTable Children
 * //method TranslateBehavior locale($locale)
 */
class PagesTable extends Table
{
    const INSERT_AT_END = 'end';
    const INSERT_BEFORE = 'before';
    const INSERT_AFTER = 'after';

    /**
     * The position interval between adjacent pages on the same level (same parentId).
     *
     * @var int
     */
    public $positionInterval = 64;
    /**
     * Holds the options for the Translate behavior.
     *
     * @var array
     */
//    public static $translateOptions = [
//        'fields' => [
//            'name',
//            'slug'
//        ]
//    ];

    /**
     * Initialize a table instance. Called after the constructor.
     *
     * @param array $config Configuration options passed to the constructor
     */
    public function initialize(array $config)
    {
        $this->setTable('wasabi_cms_pages');

//        $this->hasOne('Collections', [
//            'className' => 'Wasabi/Cms.Collections',
//            'dependent' => true
//        ]);
//
//        $this->hasMany('Contents', [
//            'className' => 'Wasabi/Cms.Contents',
//            'foreignKey' => 'page_id',
//            'dependent' => true
//        ]);
//
        $this->hasOne('CurrentRevision', [
            'className' => 'Wasabi/Cms.PageRevisions',
            'foreignKey' => 'page_id',
            'finder' => 'Current'
        ]);

        $this->hasMany('Children', [
            'className' => 'Wasabi/Cms.Pages',
            'foreignKey' => 'parent_id'
        ]);
//
//        $this->hasMany('Attributes', [
//            'className' => 'Wasabi/Cms.Attributes',
//            'foreignKey' => 'foreign_key',
//            'conditions' => [
//                'model' => 'Wasabi/Cms.Pages',
//                'language_id' => Wasabi::contentLanguage()->id
//            ],
//            'dependent' => true
//        ]);
//
//        $this->hasMany('Routes', [
//            'className' => 'Wasabi/Core.Routes',
//            'foreignKey' => 'foreign_key',
//            'conditions' => [
//                'model' => 'Wasabi/Cms.Pages'
//            ],
//            'dependent' => true
//        ]);
//
//        $this->addBehavior('Translate', self::$translateOptions);

//        $this->addBehavior('Tree');
        $this->addBehavior('Timestamp');

//        $this->locale(Wasabi::contentLanguage()->iso2);
    }

    /**
     * Create a new page entity from the given request.
     *
     * @param ServerRequest $request
     * @param $recalculatePagePositions
     * @return \Cake\Datasource\EntityInterface|Page
     */
    public function create(ServerRequest $request, &$recalculatePagePositions)
    {
        $parentId = $request->getData('parentId');
        $targetId = $request->getData('targetId');
        $insert = $request->getData('insert');
        $title = $request->getData('title');
        $pageType = $request->getData('pageType');
        $pagePosition = $this->positionInterval;
        $languageId = empty($parentId) ? Configure::read('languages.frontend.0')->id : null;
        $themeId = Wasabi::setting('Cms.Theme.id');
        $theme = null;

        ThemeManager::setTheme($themeId);
        $layout = ThemeManager::getTheme()->getDefaultLayout();

        if ($insert === self::INSERT_AT_END) {
            // Insert the page at the end of the $parentId level.
            // Find the last page on the root level and determine its position $lastPagePosition.
            // Then add the PagesTable::$positionInterval to the $lastPagePosition and use the result
            // as the new page position.
            $lastPageOnRootLevel = $this->findLastPageOnLevel($parentId);
            if (!empty($lastPageOnRootLevel)) {
                $pagePosition += $lastPageOnRootLevel->position;
            }
        }

        if ($insert === self::INSERT_BEFORE) {
            // Insert the page before the given $targetId on the $parentId level.
            // Find the position of the $targetId and subtract PagesTable::$positionInterval/2.
            $targetPage = $this->findTargetPage($targetId);
            if (!empty($targetPage)) {
                $pagePosition = $targetPage->position - $pagePosition/2;
                $recalculatePagePositions = true;
            }
        }

        if ($insert === self::INSERT_AFTER) {
            // Insert the page after the given $targetId on the $parentId level.
            // Find the position of the $targetId and add PagesTable::$positionInterval/2.
            $targetPage = $this->findTargetPage($targetId);
            if (!empty($targetPage)) {
                $pagePosition = $targetPage->position + $pagePosition/2;
                $recalculatePagePositions = true;
            }
        }

        return $this->patchEntity(
            $this->newEntity(),
            [
                'parent_id' => $parentId,
                'position' => $pagePosition,
                'language_id' => $languageId,
                'page_type' => $pageType,
                'current_revision' => [
                    'title' => $title,
                    'theme' => $theme,
                    'layout' => $layout->getId()
                ]
            ],
            [
                'associated' => [
                    'CurrentRevision'
                ]
            ]
        );
    }

    public function recalculatePosition($parentId)
    {
        /** @var ResultSet $pages */
        $pages = $this->find()
            ->select(['id', 'position'])
            ->where(($parentId === null) ? ['parent_id IS NULL'] : ['parent_id' => $parentId])
            ->order(['position' => 'ASC'])
            ->all();

        $position = 0;
        foreach ($pages as $page) {/** @var Page $page */
            $position += $this->positionInterval;
            $page->position = $position;
        }

        $this->saveMany($pages, ['associated' => false]);
    }

    public function findForObjectTree()
    {
        $query = $this->find();

        return $query
            ->select([
                'id',
                'parent_id',
                'position',
                'page_type',
                'language_id',
                'title' => $this->CurrentRevision->aliasField('title'),
            ])
            ->contain([
                $this->Children->getAlias() => function (Query $query) {
                    return $query
                        ->select([
                            'id',
                            'parent_id'
                        ])->order([
                            'position' => 'asc'
                        ]);
                },
                $this->CurrentRevision->getAlias()
            ])
            ->order([
                'parent_id' => 'asc',
                'position' => 'asc'
            ])
            ->map(function(Page $page) {
                if (!empty($page->children)) {
                    $page->children = Hash::extract($page->children, '{n}.id');
                }
                return $page;
            });
    }

    public function findChildIdsOf($parentId)
    {
        return $this->find()
            ->select(['id'])
            ->where(($parentId === null) ? ['parent_id IS NULL'] : ['parent_id' => $parentId])
            ->order(['position' => 'asc'])
            ->extract('id');
    }

    /**
     * Find the last page on a nesting level for the given $parentId.
     *
     * @param int $parentId
     * @return array|\Cake\Datasource\EntityInterface|null|Page
     */
    public function findLastPageOnLevel($parentId)
    {
        return $this->find()
            ->select(['id', 'position'])
            ->where(($parentId === null) ? ['parent_id IS NULL'] : ['parent_id' => $parentId])
            ->order(['position' => 'DESC'])
            ->first();
    }

    /**
     * Find the target page by the given $targetId.
     *
     * @param $targetId
     * @return array|\Cake\Datasource\EntityInterface|null|Page
     */
    public function findTargetPage($targetId)
    {
        return $this->find()
            ->select(['id', 'position'])
            ->where(['id' => $targetId])
            ->first();
    }

    public function findDirectChildrenOf($parentId)
    {
        $query = $this->find()
            ->where(empty($parentId) ? [$this->aliasField('parent_id') . ' IS NULL'] : [$this->aliasField('parent_id') => $parentId])
            ->order([$this->aliasField('position') => 'ASC']);

        return $this->decorateForObjectTree($query);
    }

    public function decorateForObjectTree(Query $query)
    {
        return $query
            ->select($this)
            ->select([
                'title' => $this->CurrentRevision->aliasField('title')
            ])
            ->contain([
                $this->CurrentRevision->getAlias()
            ]);
    }

    /**
     * Default validation rules.
     *
     * @param Validator $validator
     * @return Validator
     */
//    public function validationDefault(Validator $validator)
//    {
//        $validator
//            ->notEmpty('name', __d('wasabi_cms', 'Please enter a name for this page.'))
//            ->notEmpty('layout', __d('wasabi_cms', 'Please select a layout for this page.'));
//        return $validator;
//    }

    /**
     * beforeSave callback
     *
     * - unset the curren_revision property if the entity is not new and the revision has not changed
     * - set created_by to the currently logged in user on creation
     *
     * @param Event $event
     * @param Page $entity
     * @param ArrayObject $options
     */
    public function beforeSave(Event $event, Page $entity, ArrayObject $options)
    {
        if (!$entity->isNew() && $entity->hasValue('current_revision') && !$this->contentHasChanged($entity)) {
            // If we edit a page and the page content has not changed,
            // then we unset the "current" property to not create the
            // same content entry in the contents table.
            $entity->unsetProperty('current_revision');
        }

        if ($entity->isNew()) {
            $entity->created_by = Wasabi::user()->id;
        }
    }

//    public function afterSave(Event $event, Page $entity, ArrayObject $options)
//    {
//        Cache::clear(false, 'wasabi/cms/pages');
//    }

    public function contentHasChanged(Page $page)
    {
        $latestContent = $this->PageRevisions->findLatestRevision($page->id);

        if (empty($latestContent)) {
            return true;
        }

        if (empty($page->current_revision)) {
            return false;
        }

        return (md5($latestContent->content['content']) !== md5($page->current[0]->content));
    }

    /**
     * Find a single page including content and attributes for output in the frontend.
     *
     * @param int $pageId The page id.
     * @return Page|null
     */
//    public function getForFrontend($pageId)
//    {
//        return $this->find()
//            ->contain(['Current', 'Attributes'])
//            ->formatResults([$this, 'formatAttributes'])
//            ->where([$this->aliasField('id') => $pageId])
//            ->first();
//    }

    /**
     * Get the start page /.
     *
     * @return Page|null
     */
//    public function getStartPage()
//    {
//        return $this->find()->order(['lft ASC'])->first();
//    }

//    public function formatAttributes(ResultSet $results) {
//        /** @var Page $page */
//        $page = $results->first();
//        $attributes = [];
//        /** @var Attribute $attr */
//        foreach ($page->attributes as $attr) {
//            if (empty($attr->content)) {
//                continue;
//            }
//            $attributes[$attr->name] = $attr->content;
//        }
//        $page->attributes = $attributes;
//        return [$page];
//    }
}
