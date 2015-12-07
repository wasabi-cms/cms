<?php

namespace Wasabi\Cms\Controller\Frontend;

use Cake\Core\Configure;
use Wasabi\Cms\Model\Entity\Page;
use Wasabi\Cms\Model\Table\PagesTable;
use Wasabi\Cms\View\Layout\Layout;
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

        /** @var Page $page */
        $page = $this->Pages->find()
            ->where([
                $this->Pages->aliasField('id') => $pageId
            ])
            ->contain([
                'Current'
            ])
            ->first();

        Wasabi::page($page);

        $page->initializeContentAreas();

        $this->viewBuilder()->theme($page->getTheme()->getNameForViewBuilder());
        $this->viewBuilder()->layout($page->getLayout()->name());
        $this->viewBuilder()->className($page->getTheme()->getViewClassNameForViewBuilder());
    }
}
