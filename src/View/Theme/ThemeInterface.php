<?php

namespace Wasabi\Cms\View\Theme;

interface ThemeInterface
{
    /**
     * Initialize the theme.
     *
     * @return void
     */
    public function initialize();

    /**
     * Register all layouts the theme provides.
     *
     * @return array
     */
    public function registerLayouts();
}
