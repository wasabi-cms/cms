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
use DateTime;

/**
 * Class Content
 *
 * @property int id
 * @property int page_id
 * @property int language_id
 * @property string content
 * @property int created_by_user_id
 * @property int modified_by_user_id
 * @property DateTime created
 * @property DateTime modified
 */
class Content extends Entity
{
    /**
     * Accessible fields.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true
    ];
}
