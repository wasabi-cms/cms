<?php

namespace Wasabi\Cms\View;

use App\View\AppView;
use Cake\Utility\Inflector;
use FrankFoerster\Asset\View\Helper\AssetHelper;
use Wasabi\Cms\View\Helper\MenuHelper;
use Wasabi\Cms\View\Helper\MetaHelper;
use Wasabi\Cms\WasabiCms;

/**
 * Class ThemeView
 *
 * @property MetaHelper Meta
 * @property AssetHelper Asset
 * @property MenuHelper Menu
 */
class ThemeView extends AppView
{
    /**
     * Initialization hook method.
     */
    public function initialize()
    {
        parent::initialize();

        $this->loadHelper('Meta', ['className' => 'Wasabi/Cms.Meta']);
        $this->loadHelper('Asset', ['className' => 'FrankFoerster/Asset.Asset']);
        $this->loadHelper('Menu', ['className' => 'Wasabi/Cms.Menu']);
    }

    /**
     * Get the view cell for the given $contentArea.
     *
     * @param $contentArea
     * @return \Cake\View\Cell
     */
    public function contentArea($contentArea)
    {
        return $this->cell('Wasabi/Cms.ContentArea', [$contentArea]);
    }

    public function bodyCssClass()
    {
        $page = WasabiCms::page();
        $classes = [];
        $classes[] = 'layout-' . Inflector::dasherize($page->layout);
        $classes[] = 'page-' . Inflector::dasherize($page->slug);

        return implode(' ', $classes);
    }
}
