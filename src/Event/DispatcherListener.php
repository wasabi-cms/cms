<?php

namespace Wasabi\Cms\Event;

use Cake\Cache\Cache;
use Cake\Core\Configure;
use Cake\Event\Event;
use Cake\Event\EventListenerInterface;
use Cake\Network\Request;
use Cake\Network\Response;

class DispatcherListener implements EventListenerInterface
{
    public function implementedEvents()
    {
        return [
            'Dispatcher.beforeDispatch' => [
                'callable' => 'beforeDispatch',
                'priority' => 20
            ],
            'Dispatcher.afterDispatch' => [
                'callable' => 'afterDispatch'
            ]
        ];
    }

    public function beforeDispatch(Event $event, Request $request, Response $response)
    {
        if (Configure::read('debug')) {
            return;
        }

        $cacheKey = $this->_getCacheKey($request);
        if ($cacheKey !== false) {
            $content = Cache::read($cacheKey, 'wasabi/cms/pages');

            if ($content !== false) {
                $response->body($content);
                $event->result = $response;
            }
        }
    }

    public function afterDispatch(Event $event, Request $request, Response $response)
    {
        if (Configure::read('debug') || !isset($request->params['cache']) || $request->params['cache'] !== true) {
            return;
        }

        unset($request->params['cache']);

        $cacheKey = $this->_getCacheKey($request);

        if ($cacheKey !== false) {
            $content = $response->body();
            Cache::write($cacheKey, $content, 'wasabi/cms/pages');
        }
    }

    protected function _getCacheKey(Request $request)
    {
        $requestPath = join('.', [
            $request->params['plugin'],
            $request->params['controller'],
            $request->params['action']
        ]);

        switch ($requestPath) {
            case 'Wasabi/Cms.Frontend/Pages.view':
                $pageId = $request->params['pass'][0];
                $languageId = $request->params['pass'][1];
                $pageNr = $request->params['pass'][2];
                $cacheKey = 'page_' . $pageId . '_' . $languageId . '_' . $pageNr;
                break;
            default:
                $cacheKey = false;
                break;
        }

        return $cacheKey;
    }
}
