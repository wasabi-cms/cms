<?php

namespace Wasabi\Cms\View\Page;

use Cake\Utility\Hash;

class Module extends ContentElement
{
    /**
     * Holds an initialized module instance.
     *
     * @var \Wasabi\Cms\View\Module\Module
     */
    public $instance;

    public function __construct($moduleDefintion)
    {
        parent::__construct($moduleDefintion);

        $moduleClass = Hash::get($moduleDefintion, 'meta.moduleId');
        if ($moduleClass) {
            $this->instance = new $moduleClass(Hash::get($moduleDefintion, 'data'));
        }
    }
}
