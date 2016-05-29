<?php

namespace Wasabi\Cms\View\Module\Text;

use Cake\View\View;

class Context
{
    public function __construct(View $view, array $data)
    {
        $this->_view = $view;

        foreach ($data as $key => $value) {
            $this->$key = $value;
        }
    }
}
