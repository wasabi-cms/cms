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
namespace Wasabi\Cms\View\Helper;

use Cake\Core\Configure;
use Cake\Routing\Router;
use Cake\View\Helper;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Cms\Model\Entity\PublishableEntity;
use Wasabi\Cms\WasabiCms;
use Wasabi\Core\Wasabi;

/**
 * Class MetaHelper
 *
 * @property \Cake\View\Helper\UrlHelper Url
 */
class MetaHelper extends Helper
{
    const ATTR_NAME = 'name';
    const ATTR_PROP = 'propery';

    /**
     * Helpers used by this helper.
     *
     * @var array
     */
    public $helpers = [
        'Url'
    ];

	/**
     * Render the viewport meta tag.
     *
     * @param string $content viewport content
     * @return string
     */
    public function viewport($content)
    {
        return $this->_render(self::ATTR_NAME, __FUNCTION__, $content);
    }

    /**
     * Render the page title.
     *
     * @param Page $page The page.
     * @return string
     */
    public function title($page)
    {
        return '<title>' . $this->_getTitle($page) . '</title>';
    }

    /**
     * Render the description meta tag.
     *
     * @param string $content description content
     * @return string
     */
    public function description($content)
    {
        return $this->_render(self::ATTR_NAME, __FUNCTION__, $content);
    }

    /**
     * Render the application-name meta tag.
     *
     * @param string $content application-name content
     * @return string
     */
    public function applicationName($content)
    {
        return $this->_render(self::ATTR_NAME, 'application-name', $content);
    }

    /**
     * Render the robots meta tag.
     *
     * @param PublishableEntity $entity The entity, e.g. Page or Post.
     * @return string
     */
    public function robots($entity)
    {
        $robots = [];

        $index = (bool)Configure::read('Settings.Cms.SEO.meta-robots-index');
        if ($entity->meta_robots_index !== null) {
            $index = $entity->meta_robots_index;
        }
        $robots[] = ($index) ? 'index' : 'noindex';

        $follow = (bool)Configure::read('Settings.Cms.SEO.meta-robots-follow');
        if ($entity->meta_robots_follow !== null) {
            $follow = $entity->meta_robots_follow;
        }
        $robots[] = ($follow) ? 'follow' : 'nofollow';

        $noodp = (bool)Configure::read('Settings.Cms.SEO.meta-robots-noodp') || !empty($entity->meta_description);
        if ($noodp) {
            $robots[] = 'noodp';
        }

        return $this->_render(self::ATTR_NAME, __FUNCTION__, join(',', $robots));
    }

    /**
     * Render all og meta tags.
     *
     * @param PublishableEntity $entity The entity, e.g. Page or Post.
     * @return string
     */
    public function opengraph($entity)
    {
        $attributes = [
            'og:locale' => Wasabi::contentLanguage()->lang,
            'og:type' => $entity->attributes['og:type'] ?? 'article',
            'og:title' => $this->_getTitle($entity),
            'og:description' => $entity->attributes['og:description'] ?? $entity->meta_description,
            'og:url' => Router::url(null, true),
            'og:site_name' => Configure::read('Settings.Cms.SEO.application-name')
        ];

        if ($entity->displayMetaDates) {
            $attributes['og:updated_time'] = $entity->modified->format('c');
        }

        $fbPageId = Configure::read('Settings.Cms.SEO.Social.facebook_page_id');
        if ($fbPageId !== null) {
            $attributes['fb:admins'] = $fbPageId;
        }

        $out = '';
        foreach ($attributes as $property => $content) {
            if ($property === 'og:title') {
                $out .= $this->_render(self::ATTR_PROP, $property, $content, self::ATTR_NAME, 'dcterms.title');
            } else {
                $out .= $this->_render(self::ATTR_PROP, $property, $content);
            }
        }

        return $out;
    }

    /**
     * Render all twitter tags.
     *
     * @param PublishableEntity $entity The entity, e.g. Page or Post.
     * @return string
     */
    public function twitter($entity)
    {
        $twitterName = Configure::read('Settings.Cms.SEO.Social.twitter_username');
        if ($twitterName !== null) {
            $twitterName = '@' . $twitterName;
        }

        $attributes = [
            'twitter:card' => 'summary',
            'twitter:title' => $this->_getTitle($entity),
            'twitter:description' => $entity->attributes['og:description'] ?? $entity->meta_description,
            'twitter:image' => $this->_getSocialImage($entity),
            'twitter:site' => $twitterName,
            'twitter:creator' => $twitterName,
        ];

        $out = '';
        foreach ($attributes as $property => $content) {
            $out .= $this->_render(self::ATTR_NAME, $property, $content);
        }

        return $out;
    }

    /**
     * Render all article meta tags.
     *
     * @param PublishableEntity $entity The entity, e.g. Page or Post.
     * @return string
     */
    public function article($entity)
    {
        if (!$entity->displayArticleMetaTags) {
            return '';
        }

        $attributes = [
            'article:publisher' => Configure::read('Settings.Cms.SEO.Social.facebook_url'),
            'article:tag' => '',
            'article:section' => ''
        ];

        if ($entity->displayMetaDates) {
            $attributes['article:published_time'] = ($entity->published !== null) ? $entity->published->format('c') : null;
            $attributes['article:modified_time'] = $entity->modified->format('c');
        }

        $out = '';
        foreach ($attributes as $property => $content) {
            $out .= $this->_render(self::ATTR_PROP, $property, $content);
        }

        return $out;
    }

    /**
     * Render the DC.date.issued meta tag.
     *
     * @param PublishableEntity $entity The entity, e.g. Page or Post.
     * @return string
     */
    public function dcDateIssued($entity)
    {
        if (!$entity->displayMetaDates) {
            return '';
        }
        $published = ($entity->published !== null) ? $entity->published->format('c') : null;
        return $this->_render(self::ATTR_PROP, 'DC.date.issued', $published);
    }

    /**
     * Render the google site verification meta tag.
     *
     * @return string
     */
    public function googleSiteVerification()
    {
        $token = Configure::read('Settings.Cms.SEO.google-site-verification');
        if (empty($token)) {
            return '';
        }
        return $this->_render(self::ATTR_NAME, 'google-site-verification', $token);
    }

    /**
     * Render the google nositelinkssearchbox meta tag to not display a search box beneath the
     * search engine result for your site.
     *
     * @return string
     */
    public function displaySearchBox()
    {
        $displaySearchBox = (bool)Configure::read('Settings.Cms.SEO.display-search-box');
        if ($displaySearchBox) {
            return '';
        }
        return $this->_render(self::ATTR_NAME, 'google', 'nositelinkssearchbox');
    }

    /**
     * Render the ld+json script tag to set the schema.org context for a page.
     *
     * @return string
     */
    public function ldJson()
    {
        $attributes = [
            '@context' => 'http://schema.org',
            '@type' => 'WebSite',
            'url' => $this->Url->build('/', true),
            'potentialAction' => [
                '@type' => 'SearchAction',
                'query-input' => 'required name=search_term_string',
                'target' => $this->Url->build([
                    'plugin' => 'Wasabi/Cms',
                    'controller' => 'Frontend/Search',
                    'action' => 'search',
                    'language_id' => Wasabi::contentLanguage()->id
                ], true) . '?q={search_term_string}'
            ]
        ];

        if (!empty(WasabiCms::$instanceName)) {
            $attributes['name'] = WasabiCms::$instanceName;
        }

        $sameAsKeys = [
            'Settings.Cms.SEO.Social.facebook_url',
            'Settings.Cms.SEO.Social.instagram_url',
            'Settings.Cms.SEO.Social.linkedin_url',
            'Settings.Cms.SEO.Social.myspace_url',
            'Settings.Cms.SEO.Social.pinterest_url',
            'Settings.Cms.SEO.Social.youtube_url',
            'Settings.Cms.SEO.Social.googleplus_url'
        ];
        $sameAs = [];

        foreach ($sameAsKeys as $key) {
            $setting = Configure::read($key);
            if (!empty($setting)) {
                $sameAs[] = $setting;
            }
        }

        $twitterName = Configure::read('Settings.Cms.SEO.Social.twitter_username');
        if (!empty($twitterName)) {
            $sameAs[] = 'https://twitter.com/' . $twitterName;
        }

        if (!empty($sameAs)) {
            $attributes['sameAs'] = $sameAs;
        }

        return '<script type="application/ld+json">' . json_encode($attributes) . '</script>';
    }

    /**
     * Render a meta tag with the given $attr name, $property and its $content.
     *
     * @param string $attr The attribute, e.g. name or description.
     * @param string $property The property name.
     * @param string $content The property content.
     * @param bool|string $secAttr
     * @param bool|string $secProp
     * @return string
     */
    protected function _render($attr, $property, $content, $secAttr = false, $secProp = false)
    {
        if (empty($content)) {
            return '';
        }
        $secOutput = '';
        if ($secAttr !== false && $secProp !== false) {
            $secOutput = ' ' . $secAttr . '="' . $secProp . '"';
        }
        return '<meta ' . $attr . '="' . $property . '"' . $secOutput . ' content="' . $content . '">';
    }

    /**
     * Get the title for the given $entity.
     *
     * @param PublishableEntity $entity The entity, e.g. Page or Post.
     * @return string
     */
    protected function _getTitle($entity)
    {
        $title = $entity->page_title;
        if ((bool)$entity->display_page_title_suffix) {
            $title .= WasabiCms::titleSuffix();
        }
        return $title;
    }

    /**
     * Get the social image for the given $entity.
     *
     * @param PublishableEntity $entity The entity, e.g. Page or Post.
     * @return string
     */
    protected function _getSocialImage($entity)
    {
    }
}
