<?php

namespace Wasabi\Cms;

use Cake\Core\Configure;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Cms\View\Theme\Theme;
use Wasabi\Cms\View\Theme\ThemeManager;
use Wasabi\Core\Wasabi;

class WasabiCms
{
    /**
     * Holds the current page entity.
     *
     * @var Page
     */
    protected static $_page;

    /**
     * Holds the start page entity.
     *
     * @var Page
     */
    protected static $_startPage;

    /**
     * Holds the page title suffix.
     *
     * @var string
     */
    protected static $_titleSuffix;

    /**
     * Holds the CMS instance name / app name.
     *
     * @var string
     */
    public static $instanceName;

    /**
     * Get or set the current page.
     *
     * @param null|Page $page
     * @return null|Page
     */
    public static function page($page = null)
    {
        if ($page !== null) {
            self::$_page = $page;
        }
        return self::$_page;
    }

    /**
     * Get or set the start page.
     *
     * @param null|Page $page
     * @return null|Page
     */
    public static function startPage($page = null)
    {
        if ($page !== null) {
            self::$_startPage = $page;
        }
        return self::$_startPage;
    }

    /**
     * Get the theme instance.
     *
     * @return Theme
     */
    public static function getTheme()
    {
        return ThemeManager::theme(Wasabi::setting('Cms.Theme.id'));
    }

    public static function titleSuffix($suffix = null)
    {
        if ($suffix !== null) {
            self::$_titleSuffix = $suffix;
        }
        return self::$_titleSuffix;
    }

    public static function instanceName($instanceName = null)
    {
        if ($instanceName !== null) {
            self::$instanceName = $instanceName;
        }
        return self::$instanceName;
    }
}
