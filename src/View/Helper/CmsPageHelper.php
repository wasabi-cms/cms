<?php

namespace Wasabi\Cms\View\Helper;

use Cake\View\Helper;
use Wasabi\Core\View\Helper\HtmlHelper;

/**
 * Class CmsPageHelper
 * @property HtmlHelper Html
 */
class CmsPageHelper extends Helper
{
    /**
     * Helpers used by this helper.
     *
     * @var array
     */
    public $helpers = [
        'Html' => [
            'className' => 'Wasabi/Core.Html'
        ]
    ];

    /**
     * Renders a complete tree of pages without the toplevel ul element.
     *
     * @param array $pages
     * @param array $closedPages
     * @param integer $langId
     * @param integer|null $level
     * @return string
     */
    public function renderTree($pages, $closedPages, $langId, $level = null) {
        if (empty($pages)) {
            $newPageLink = $this->Html->link(
                __d('wasabi_cms', 'Please add your first Page'),
                [
                    'plugin' => 'Wasabi/Cms',
                    'controller' => 'Pages',
                    'action' => 'add'
                ],
                [
                    'title' => __d('wasabi_cms', 'Add your first Page')
                ]
            );
            return '<li class="center">' . __d('wasabi_cms', 'There are no pages yet. {0}.', $newPageLink) . '</li>';
        }

        $output = '';

        $depth = ($level !== null) ? $level : 1;
        foreach ($pages as $page) {
            $closed = false;
            $classes =  ['page'];
            if (in_array($page->id, $closedPages)) {
                $closed = true;
                $classes[] = 'closed';
            }

            $pageRow = $this->_View->element('Wasabi/Cms.Pages/__page-row', [
                'page' => $page,
                'closed' => $closed,
                'langId' => $langId
            ]);

            if (!empty($page->children)) {
                $pageRow .= '<ul' . ($closed ? ' style="display: none;"' : '') . '>' . $this->renderTree($page->children, $closedPages, $langId, $depth + 1) . '</ul>';
            } else {
                $classes[] = 'no-children';
            }

            $output .= '<li class="' . join(' ', $classes) . '" data-cms-page-id="' . $page->id . '">' . $pageRow . '</li>';
        }

        return $output;
    }
}
