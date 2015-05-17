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
namespace Wasabi\Cms\View;

/**
 * Class AppView
 */
class AppView extends \Wasabi\Core\View\AppView
{
    /**
     * The default layout to render.
     *
     * @var string
     */
    public $layout = 'Wasabi/Cms.default';

    /**
     * Initialization hook method.
     */
    public function initialize()
    {
        parent::initialize();
    }
}
