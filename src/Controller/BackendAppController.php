<?php
/**
 * Wasabi Cms Backend App Controller
 *
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
namespace Wasabi\Cms\Controller;

/**
 * Class BackendAppController
 *
 * @property \Wasabi\Core\Controller\Component\GuardianComponent $Guardian
 */
class BackendAppController extends \Wasabi\Core\Controller\BackendAppController
{
    /**
     * The name of the View class this controller sends output to.
     *
     * @var string
     */
    public $viewClass = 'Wasabi/Cms.App';

    /**
     * initialization hook method
     */
    public function initialize()
    {
        parent::initialize();
    }
}
