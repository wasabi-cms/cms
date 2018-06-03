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
 * Class PageRevision
 *
 * @property string id
 * @property string page_id
 * @property string title
 * @property string|null navigation_name
 * @property string slug
 * @property string excerpt
 * @property string content
 * @property string|null theme
 * @property string layout
 * @property string|null page_title
 * @property bool|null display_page_title_suffix
 * @property string|null meta_description
 * @property bool|null meta_robots_index
 * @property bool|null meta_robots_follow
 * @property string|null area_css_classes
 * @property string|null additional_css_classes
 * @property string data
 * @property int|null image_id
 * @property int|null social_media_image_id
 * @property string status
 * @property int created_by
 * @property DateTime created
 */
class PageRevision extends Entity
{
}
