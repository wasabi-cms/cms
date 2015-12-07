<?php

namespace Wasabi\Cms\Event;

use Cake\Event\Event;
use Cake\Event\EventListenerInterface;
use Wasabi\Cms\View\Theme\ThemeManager;

class ThemeListener implements EventListenerInterface
{
    /**
     * Returns a list of events this object is implementing. When the class is registered
     * in an event manager, each individual method will be associated with the respective event.
     *
     * @return array
     */
    public function implementedEvents()
    {
        return [
            'Wasabi.Cms.registerTheme' => [
                'callable' => 'registerTheme'
            ]
        ];
    }

    /**
     * @param Event $event
     * @param string $theme
     */
    public function registerTheme(Event $event, $theme)
    {
        ThemeManager::registerTheme($theme);
    }
}
