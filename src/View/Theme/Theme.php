<?php

namespace Wasabi\Cms\View\Theme;

use Cake\Core\Exception\Exception;
use Wasabi\Cms\View\Layout\Layout;

abstract class Theme
{
    /**
     * Id of the theme.
     *
     * @var string
     */
    protected $_id;

    /**
     * Name (translated) of the theme.
     *
     * @var string
     */
    protected $_name;

    /**
     * Determines whether the layouts for this theme have been initialized or not.
     *
     * @var bool
     */
    protected $_layoutsInitialized = false;

    /**
     * Holds all initialized layouts for this theme.
     *
     * @var Layout[]
     */
    protected $_layouts = [];

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->_id = $this->_extractId();

        if (method_exists($this, 'initialize')) {
            $this->initialize();
        }
    }

    /**
     * Get the id of the theme.
     *
     * @return string
     */
    public function id()
    {
        return $this->_id;
    }

    /**
     * Get or set the name of the theme.
     *
     * @param null|string $name
     * @return null|string
     */
    public function name($name = null)
    {
        if ($name !== null) {
            $this->_name = $name;
        }
        return $this->_name;
    }

    /**
     * Get all layouts of this theme for a form select input.
     *
     * @return array
     */
    public function getLayoutsForSelect()
    {
        if (!$this->_layoutsInitialized) {
            $this->_initLayouts();
        }

        $results = [];
        foreach ($this->_layouts as $layout) {
            $results[$layout->id()] = $layout->name();
        }

        return $results;
    }

    /**
     * Get a single layout by id.
     *
     * @param string $id
     * @return Layout
     * @throws Exception
     */
    public function getLayout($id)
    {
        if (!$this->_layoutsInitialized) {
            $this->_initLayout($id);
        }
        if (!isset($this->_layouts[$id])) {
            throw new Exception(__d('wasabi_cms', 'Layout "{0}" for theme "{1}" does not exist.', $id, $this->id()));
        }

        return $this->_layouts[$id];
    }

    /**
     * Get the theme name for use in view builder.
     *
     * @return string
     */
    public function getNameForViewBuilder()
    {
        list($plugin, ) = namespaceSplit(get_class($this));
        $plugin = preg_replace('/\\\/', '/', $plugin);
        return $plugin;
    }

    /**
     * Get the view class name for use in view builder.
     *
     * @return string
     */
    public function getViewClassNameForViewBuilder()
    {
        list($plugin, $theme) = namespaceSplit(get_class($this));
        $plugin = preg_replace('/\\\/', '/', $plugin);
        return $plugin . '.' . $theme;
    }

    /**
     * Initialize all layouts for the current theme.
     */
    protected function _initLayouts()
    {
        $layouts = [];

        if (method_exists($this, 'registerLayouts')) {
            $layouts = $this->registerLayouts();
        }

        foreach ($layouts as $layout) {
            $this->_initLayout($layout);
        }
    }

    /**
     * Initialize a single layout.
     *
     * @param string $layout
     */
    protected function _initLayout($layout)
    {
        list($theme, ) = namespaceSplit(get_class($this));
        $layoutClass = $theme . '\\View\\Layout\\' . $layout . 'Layout';

        try {
            /** @var Layout $layout */
            $layout = new $layoutClass();
        } catch (Exception $e) {
            throw new Exception(__d('wasabi_core', 'The theme "{0}" could not be instatiated. Check the namespace and file location.', $themeClass));
        }

        $this->_layouts[$layout->id()] = $layout;
    }

    /**
     * Extract the id from the theme class name.
     *
     * @return string
     */
    protected function _extractId()
    {
        list(, $className) = namespaceSplit(get_class($this));
        $id = explode('Theme', $className)[1];

        if (!$className || !$id) {
            user_error(__d('wasabi_cms', 'The theme class {0} has an invalid name. The name has to start with "Theme".', $className));
        }

        return $id;
    }
}
