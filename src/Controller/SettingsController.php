<?php

namespace Wasabi\Cms\Controller;

use Wasabi\Cms\Model\Table\ThemeSettingsTable;
use Wasabi\Core\Model\Entity\GeneralSetting;

/**
 * Class SettingsController
 */
class SettingsController extends BackendAppController
{
    /**
     * theme action
     * GET | POST
     */
    public function theme()
    {
        $keys = [
            'Theme_id'
        ];

        /** @var ThemeSettingsTable $ThemeSettings */
        $ThemeSettings = $this->loadModel('Wasabi/Cms.ThemeSettings');

        $settings = $ThemeSettings->getKeyValues(new GeneralSetting(), $keys);

        if ($this->request->is('post') && !empty($this->request->data)) {
            $settings = $ThemeSettings->newEntity($this->request->data);
            if (!$settings->errors()) {
                if ($ThemeSettings->saveKeyValues($settings, $keys)) {
                    $this->Flash->success(__d('wasabi_cms', 'The theme settings have been updated.'));
                    $this->redirect(['action' => 'theme']);
                    return;
                } else {
                    $this->Flash->error($this->dbErrorMessage);
                }
            } else {
                $this->Flash->error($this->formErrorMessage);
            }
        }
        $this->set([
            'settings' => $settings,
            'themes' => \Wasabi\Cms\View\Theme\ThemeManager::getThemesForSelect()
        ]);
    }
}
