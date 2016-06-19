<?php

namespace Wasabi\Cms\Model\Entity;

use Cake\ORM\Entity;
use DateTime;

/**
 * Class PublishableEntity
 *
 * @property string page_title
 * @property bool display_page_title_suffix
 * @property string meta_description
 * @property bool|null meta_robots_index
 * @property bool|null meta_robots_follow
 * @property Datetime|null published
 * @property DateTime modified
 * @property array attributes
 */
class PublishableEntity extends Entity
{
    /**
     * Whether to display meta tags for published and modified dates of the entity.
     *
     * @var bool
     */
    public $displayMetaDates = false;

    /**
     * Whether to display article:* meta tags.
     *
     * @var bool
     */
    public $displayArticleMetaTags = false;
}
