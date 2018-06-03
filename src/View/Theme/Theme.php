<?php

namespace Wasabi\Cms\View\Theme;

use Cake\Core\Exception\Exception;
use Cake\Utility\Text;
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
     * Holds an array of all registered layouts.
     *
     * @var array
     */
    protected $_registeredLayouts = [];

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

        if (method_exists($this, 'registerLayouts')) {
            $this->_registeredLayouts = $this->registerLayouts();
            if (empty($this->_registeredLayouts)) {
                throw new Exception(Text::insert('Please register at least one layout with the theme ":theme"', ['theme' => $this->_id]));
            }
        }

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
            $results[$layout->getId()] = $layout->name();
        }

        return $results;
    }

    /**
     * Get the default layout of the theme.
     *
     * @return Layout
     */
    public function getDefaultLayout()
    {
        $layout = $this->_registeredLayouts[0];

        if (!$this->_layoutsInitialized) {
            $this->_initLayout($layout);
        }

        return $this->_layouts[$layout];
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
            throw new Exception(Text::insert('Layout ":layout" for theme ":theme" does not exist.', ['layout' => $id, 'theme' => $this->id()]));
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

    public function getClassNameForInitialization()
    {
        list($plugin, ) = namespaceSplit(get_class($this));
        return $plugin . '\\View\\' . $this->name() . 'ThemeView';
    }

    /**
     * Initialize all layouts for the current theme.
     *
     * @return void
     */
    protected function _initLayouts()
    {
        foreach ($this->_registeredLayouts as $layout) {
            $this->_initLayout($layout);
        }

        $this->_layoutsInitialized = true;
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
            throw new Exception(Text::insert('The layout ":layout" could not be instatiated. Check the namespace and file location.', ['layout' => $layoutClass]));
        }

        $this->_layouts[$layout->getId()] = $layout;
    }

    /**
     * Extract the id from the theme class name.
     *
     * @return string
     */
    protected function _extractId()
    {
        list(, $className) = namespaceSplit(get_class($this));
        $id = explode('Theme', $className)[0];

        if (!$className || !$id) {
            user_error(Text::insert('The theme class :class has an invalid name. The name has to end with "Theme".', ['class' => $className]));
        }

        return $id;
    }
}
