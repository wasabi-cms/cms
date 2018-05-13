<?php

namespace Wasabi\Cms\View\Theme;

use Cake\Core\Exception\Exception;
use Cake\Core\Plugin;
use Cake\Filesystem\Folder;

class ThemeManager
{
    /**
     * Holds all registered themes that will be initialized as individual theme objects.
     *
     * @var array
     */
    protected static $_registeredThemes = [];

    /**
     * Holds all available theme objects.
     *
     * @var Theme[]
     */
    protected static $_themes = [];

    /**
     * The currently active theme.
     *
     * @var Theme
     */
    protected static $_theme = null;

    /**
     * Determines if the theme manager initialized all registered themes.
     *
     * @var boolean
     */
    protected static $_initialized = false;

    /**
     * Register all available themes in the composer classloader and load them as plugin.
     *
     * @return void
     */
    public static function loadThemes()
    {
        $themesFolder = new Folder(APP . 'Themes');
        $themes = $themesFolder->read()[0];
        $loader = require ROOT . DS . 'vendor' . DS . 'autoload.php';
        foreach ($themes as $theme) {
            $loader->addPsr4('WasabiTheme\\' . $theme . '\\', [$themesFolder->path . DS . $theme . DS . 'src']);
            Plugin::load('WasabiTheme/' . $theme, [
                'path' => $themesFolder->path . DS . $theme . DS,
                'bootstrap' => true,
                'routes' => false
            ]);
        }
    }

    /**
     * Register the given $theme.
     *
     * @param string $theme
     * @throws Exception
     * @return void
     */
    public static function registerTheme($theme)
    {
        if (in_array($theme, self::$_registeredThemes)) {
            throw new Exception(__d('wasabi_cms', 'The Theme "{0}" is already registered.', $theme));
        }

        self::$_registeredThemes[] = $theme;
    }

    /**
     * Initialize all available themes.
     *
     * @return void
     */
    public static function init()
    {
        foreach (self::$_registeredThemes as $registeredTheme) {
            $theme = self::_initializeTheme($registeredTheme);
            self::$_themes[$theme->id()] = $theme;
        }

        self::$_initialized = true;
    }

    /**
     * Get or set the currently active theme.
     *
     * @param string $theme the id of the theme
     * @return Theme
     */
    public static function theme($theme = null)
    {
        if (!self::$_initialized) {
            self::init();
        }

        if ($theme !== null) {
            if (!isset(self::$_themes[$theme])) {
                throw new Exception(__d('wasabi_cms', 'Theme "{0}" does not exist.', $theme));
            }
            self::$_theme = self::$_themes[$theme];
        }

        return self::$_theme;
    }

    /**
     * Get all themes for a form select input.
     *
     * @return array
     */
    public static function getThemesForSelect()
    {
        if (!self::$_initialized) {
            self::init();
        }

        $results = [];
        foreach (self::$_themes as $theme) {
            $results[$theme->id()] = $theme->name();
        }

        return $results;
    }

    /**
     * Initialize a single registered theme.
     *
     * @param string $registeredTheme
     * @return Theme
     */
    protected static function _initializeTheme($registeredTheme)
    {
        list($theme, $themeName) = pluginSplit($registeredTheme);
        $themeNamespace = preg_replace('/\\//', '\\', $theme);
        $themeClass = $themeNamespace . '\\' . $themeName;

        try {
            $theme = new $themeClass();
        } catch (Exception $e) {
            throw new Exception(__d('wasabi_core', 'The theme "{0}" could not be instatiated. Check the namespace and file location.', $themeClass));
        }

        return $theme;
    }
}
