<?php

namespace Wasabi\Cms\View\Module;

use Cake\Form\Form;
use Cake\Utility\Hash;
use Cake\View\View;
use Wasabi\Core\Wasabi;

abstract class Module extends Form
{
    /**
     * Name (translated) of the module.
     *
     * @var string
     */
    protected $_name;

    /**
     * Group (translated) of the module.
     *
     * @var string
     */
    protected $_group;

    /**
     * Description (translated) of the module.
     *
     * @var string
     */
    protected $_description;

    /**
     * Holds the absolute path of the module folder.
     *
     * @var null|string
     */
    protected $_path = null;

    /**
     * Holds the icon class of this module.
     *
     * @var string
     */
    protected $_icon = 'icon-cogs';

    /**
     * Holds the data for this module instance used to render the module in the frontend.
     *
     * @var array|null
     */
    public $data = null;

    /**
     * Constructor
     *
     * @param array|null $data
     */
    public function __construct($data = null)
    {
        if (method_exists($this, 'initialize')) {
            $this->initialize();
        }

        $this->data = $data;
    }

    /**
     * Get or set the name of the module.
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
     * Get or set the group of the module.
     *
     * @param null|string $group
     * @return null|string
     */
    public function group($group = null)
    {
        if ($group !== null) {
            $this->_group = $group;
        }
        return $this->_group;
    }

    /**
     * Get or set the icon of the module.
     *
     * @param null|string $icon
     * @return null|string
     */
    public function icon($icon = null)
    {
        if ($icon !== null) {
            $this->_icon = $icon;
        }
        return $this->_icon;
    }

    /**
     * Get or set the description of the module.
     *
     * @param null|string $description
     * @return null|string
     */
    public function description($description = null)
    {
        if ($description !== null) {
            $this->_description = $description;
        }
        return $this->_description;
    }

    /**
     * Get or set the path of this module.
     *
     * @param null|string $moduleFilePath
     * @return null|string
     */
    public function path($moduleFilePath = null)
    {
        if ($moduleFilePath !== null) {
            $this->_path = dirname($moduleFilePath);
        }
        return $this->_path;
    }

    /**
     * Render the output for this module (out.ctp).
     *
     * @return string
     */
    public function render()
    {
        if (method_exists($this, 'beforeRender')) {
            $this->beforeRender();
        }

        $template = $this->path() . DS . 'out.mustache';

        if (!file_exists($template)) {
            user_error(__d('wasabi_cms', 'Template "{0}" for module {1} not found.', $template, $this->name()));
        }

        $viewClass = Wasabi::getTheme()->getClassNameForInitialization();
        /** @var View $view */
        $view = new $viewClass();
        $output = $view->element('Wasabi/Cms.module', [
            'template' => $template,
            'data' => $this->data
        ]);

        return $output;
    }

    /**
     * Render the Form for this module (in.ctp).
     *
     * @return string
     */
    public function renderForm()
    {
        $template = $this->path() . DS . 'in.ctp';

        if (!file_exists($template)) {
            user_error(__d('wasabi_cms', 'Template "{0}" for module {1} not found.', $template, $this->name()));
        }

        $viewClass = Wasabi::getTheme()->getClassNameForInitialization();
        /** @var View $view */
        $view = new $viewClass();
        $output = $view->element('Wasabi/Cms.module', [
            'template' => $template,
            'form' => $this
        ]);

        return $output;
    }

    /**
     * Called when the form data is valid.
     * Handle, transform and return the data in an array format so it can
     * be json encoded and sent back to the client.
     *
     * @param array $data
     * @return array
     */
    public function process(array $data)
    {
        $processedData = [
            'meta' => Hash::get($data, 'meta'),
            'data' => []
        ];
        $processedData['meta']['title'] = $this->name();
        unset($data['meta']);
        foreach ($data as $attr => $value) {
            $processedData['data'][$attr] = $value;
        }
        return $processedData;
    }
}
