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

/**
 * Class MenuItem
 *
 * @property int id
 * @property int menu_id
 * @property int parent_id
 * @property int lft
 * @property int rght
 * @property string name
 * @property string type
 * @property string target
 * @property string external_link
 * @property string foreign_model
 * @property int foreign_id
 * @property string plugin
 * @property string controller
 * @property string action
 * @property string params
 * @property string query
 * @property \DateTime created
 * @property \DateTime modified
 */
class MenuItem extends Entity
{
    const TYPE_ENTITY = 'entity';
    const TYPE_EXTERNAL = 'external';
    const TYPE_CUSTOM = 'custom';
}
