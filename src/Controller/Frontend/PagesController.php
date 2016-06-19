<?php

namespace Wasabi\Cms\Controller\Frontend;

use Cake\Core\Configure;
use Cake\Event\Event;
use Wasabi\Cms\Model\Table\PagesTable;
use Wasabi\Cms\WasabiCms;
use Wasabi\Core\Wasabi;

/**
 * Class PagesController
 *
 * @property PagesTable Pages
 */
class PagesController extends FrontendAppController
{
    public function initialize()
    {
        parent::initialize();
    }

    public function view($pageId, $languageId, $pageNumber)
    {
        Wasabi::loadLanguages($languageId);

        $this->loadModel('Wasabi/Cms.Pages');

        $page = $this->Pages->getForFrontend($pageId);
        $startPage = $this->Pages->getStartPage();
        $titleSuffix = Configure::read('Settings.Core.html_title_suffix');
        $instanceName = Configure::read('Settings.Core.instance_name');

        WasabiCms::page($page);
        WasabiCms::startPage($startPage);
        WasabiCms::titleSuffix($titleSuffix);
        WasabiCms::instanceName($instanceName);

        $page->initializeContentAreas();

        $this->viewBuilder()->theme($page->getTheme()->getNameForViewBuilder());
        $this->viewBuilder()->layout($page->getLayout()->name());
        $this->viewBuilder()->className($page->getTheme()->getViewClassNameForViewBuilder());

        $this->set([
            'page' => $page
        ]);
    }

    public function afterFilter(Event $event)
    {
        if (!Configure::read('debug')) {
            $this->request->params['cache'] = true;
        }

        return parent::afterFilter($event);
    }
}
