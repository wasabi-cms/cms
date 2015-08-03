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
use Wasabi\Cms\View\Layout\LayoutManager;

class Page extends Entity
{
    const STATUS_DRAFT = 0;
    const STATUS_PUBLISHED = 1;
    const STATUS_UNPUBLISHED = 2;

    /**
     * Accessible fields.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true
    ];

    /**
     * Holds all available statuses of a page.
     *
     * @var array
     */
    protected $_statuses = [];

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
    }

    /**
     * @return mixed|\Wasabi\Cms\View\Layout\Layout
     */
    public function getLayout()
    {
        return LayoutManager::getLayout($this->layout);
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
}
