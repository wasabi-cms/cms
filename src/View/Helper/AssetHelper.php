<?php

namespace Wasabi\Cms\View\Helper;

use Cake\Utility\Inflector;

class AssetHelper extends \FrankFoerster\Asset\View\Helper\AssetHelper
{
    /**
     * Output a link stylesheet tag for a specific css file and optionally
     * append a last modified timestamp to clear the browser cache.
     *
     * @param string $path The path to the css file relative to WEBROOT
     * @param string $theme The name of a theme.
     * @param bool $appendTime Whether to append a last modified timestamp to the url.
     * @return string
     */
    public function themeCss($path, $theme, $appendTime = true)
    {
        $href = $this->_getThemeUrl($path, $theme, $appendTime);
        return '<link rel="stylesheet" type="text/css" href="' . $href . '">';
    }

    /**
     * Output a script tag for a specific js file and optionally
     * append a last modified timestamp to clear the browser cache.
     *
     * @param string $path The path to the css file relative to the app or plugin webroot.
     * @param string $theme The name of a theme.
     * @param bool $appendTime Whether to append a last modified timestamp to the url.
     * @return string
     */
    public function themeJs($path, $theme, $appendTime = true)
    {
        $src = $this->_getThemeUrl($path, $theme, $appendTime);
        return '<script type="text/javascript" src="' . $src . '"></script>';
    }

    /**
     * Get the asset url for a specific file of a theme.
     *
     * @param string $path The path to the css file relative to the app or plugin webroot.
     * @param string $theme The name of a theme.
     * @param bool $appendTime Whether to append a last modified timestamp to the url.
     * @return string
     */
    protected function _getThemeUrl($path, $theme, $appendTime)
    {
        $absPath = $this->_getBasePath($theme) . $path;
        $time = $appendTime ? $this->_getModifiedTime($absPath) : '';
        $parts = explode('/', $theme);
        $theme = end($parts);
        $path = 'themes/' . Inflector::underscore($theme) . $path;
        return $this->Url->assetUrl($path) . $time;
    }
}
