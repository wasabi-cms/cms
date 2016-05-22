<?php

namespace Wasabi\Cms\View;

use App\View\AppView;
use Cake\Utility\Inflector;
use Wasabi\Cms\View\Helper\AssetHelper;
use Wasabi\Cms\View\Helper\MenuHelper;
use Wasabi\Cms\View\Helper\MetaHelper;
use Wasabi\Core\Wasabi;

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
        $this->loadHelper('Asset', ['className' => 'Wasabi/Cms.Asset']);
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
        $page = Wasabi::page();
        $classes = [];
        $classes[] = 'layout-' . Inflector::dasherize($page->layout);
        $classes[] = 'page-' . Inflector::dasherize($page->slug);

        return implode(' ', $classes);
    }
}
