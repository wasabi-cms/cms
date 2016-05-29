<?php

namespace Wasabi\Cms\View\Cell;

use Cake\View\Cell;
use Wasabi\Cms\View\Page\Container;
use Wasabi\Core\Wasabi;

class ContainerCell extends Cell
{
    /**
     * Render a content area id for the current page.
     *
     * @param Container $container
     */
    public function display($container)
    {
        $this->set('container', $container);
    }
}
