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
namespace Wasabi\Cms\Routing\Filter;

use Cake\Core\Plugin;
use Cake\Utility\Inflector;
use Wasabi\Core\Routing\Filter\AssetFilter;

class ThemeAssetFilter extends AssetFilter
{
    /**
     * Builds asset file path based of url.
     *
     * @param string $url Asset URL
     * @return string Absolute path for asset file
     */
    protected function _getAssetFile($url)
    {
        $parts = explode('/', $url);
        if (count($parts) > 2 && $parts[0] === 'themes' ) {
            $theme = $parts[1] ?? false;
            $plugin = $theme !== false ? 'Wasabi/Theme/' . Inflector::camelize($theme) : false;
            if ($plugin && Plugin::loaded($plugin)) {
                $type = $parts[2] ?? false;
                switch ($type) {
                    case 'css':
                        $themeWebroot = Plugin::path($plugin) . 'webroot' . DS . 'css' . DS;
                        break;
                    case 'js':
                        $themeWebroot = Plugin::path($plugin) . 'src' . DS . 'Assets' . DS . 'js' . DS;
                        break;
                    default:
                        return parent::_getAssetFile($url);
                        break;
                }
                return $themeWebroot . implode(DS, array_slice($parts, 3));
            }
        }
        return parent::_getAssetFile($url);
    }

}

