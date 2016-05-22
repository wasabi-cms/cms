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
namespace Wasabi\Cms\Model\Entity;

use Cake\ORM\Entity;
use Cake\Utility\Hash;
use DateTime;
use Wasabi\Cms\View\Page\ContentArea;
use Wasabi\Cms\View\Layout\Layout;
use Wasabi\Cms\View\Theme\Theme;
use Wasabi\Cms\View\Theme\ThemeManager;
use Wasabi\Core\Wasabi;

/**
 * Class Page
 *
 * @property int id
 * @property int parent_id
 * @property int lft
 * @property int rght
 * @property string name
 * @property string slug
 * @property string theme
 * @property string layout
 * @property string page_title
 * @property string meta_description
 * @property int status
 * @property DateTime created
 * @property DateTime modified
 * @property Content[] current
 */
class Page extends Entity
{
    const STATUS_DRAFT = 0;
    const STATUS_PUBLISHED = 1;
    const STATUS_UNPUBLISHED = 2;

    /**
     * Holds all available statuses of a page.
     *
     * @var array
     */
    protected $_statuses = [];

    /**
     * Holds the layout instance for this page.
     *
     * @var null
     */
    protected $_layout = null;

    /**
     * Holds all initialized content areas for this page.
     *
     * @var ContentArea[]
     */
    protected $_contentAreas = [];

    /**
     * Constructor
     *
     * @param array $properties
     * @param array $options
     */
    public function __construct(array $properties = [], array $options = [])
    {
        parent::__construct($properties, $options);

        $this->_statuses = [
            self::STATUS_DRAFT => __d('wasabi_cms', 'draft'),
            self::STATUS_PUBLISHED => __d('wasabi_cms', 'published'),
            self::STATUS_UNPUBLISHED => __d('wasabi_cms', 'unpublished')
        ];

        if (!$this->current) {
            $this->current = new Content();
        }
    }

    /**
     * Get the theme instance for this page.
     *
     * @return Theme
     */
    public function getTheme()
    {
        return ThemeManager::theme(Wasabi::setting('Cms.Theme.id'));
    }

    /**
     * Get the layout instance for this page.
     *
     * @return Layout
     */
    public function getLayout()
    {
        return $this->getTheme()->getLayout($this->layout);
    }

    /**
     * Retrieve the current status of a page.
     *
     * @return mixed
     * @throws \Exception
     */
    public function getStatus()
    {
        if (isset($this->_statuses[(int) $this->status])) {
            return $this->_statuses[(int) $this->status];
        }
        throw new \Exception('Status "' . $this->status . '" not found for Page with id ' . $this->id . '.');
    }

    public function initializeContentAreas()
    {
        $content = $this->_getContent();

        foreach ($content as $contentAreaDefintion)
        {
            $contentArea = new ContentArea($contentAreaDefintion);

            $this->_contentAreas[$contentArea->id] = $contentArea;
        }
    }

    /**
     * Get an initialized content area of this page.
     *
     * @param string $contentAreaId
     * @return ContentArea|false
     */
    public function getContentArea($contentAreaId)
    {
        return Hash::get($this->_contentAreas, $contentAreaId, false);
    }

    /**
     * Get the content of the page either as array ($asArray = true) or as json string ($asArray = false).
     *
     * @param bool $asArray
     * @return array|string
     */
    protected function _getContent($asArray = true)
    {
        if (!empty($this->current) &&
            !empty($this->current[0]) &&
            !empty($this->current[0]->content)
        ) {
            if ($asArray) {
                $content = json_decode($this->current[0]->content, true);
                return Hash::get($content, 'content', []);
            }
            return $this->current[0]->content;
        }

        if ($asArray) {
            return [];
        }

        return '';
    }
}
