<?php

namespace Wasabi\Cms\Controller;

use Wasabi\Cms\Model\Table\SeoSettingsTable;
use Wasabi\Cms\Model\Table\ThemeSettingsTable;
use Wasabi\Cms\View\Theme\ThemeManager;
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
            'themes' => ThemeManager::getThemesForSelect()
        ]);
    }

    /**
     * seo action
     * GET | POST
     */
    public function seo()
    {
        $keys = [
            'SEO__application-name',
            'SEO__google-site-verification',
            'SEO__meta-robots-index',
            'SEO__meta-robots-follow',
            'SEO__meta-robots-noodp',
            'SEO__display-search-box',
            'SEO__Social__facebook_url',
            'SEO__Social__facebook_page_id',
            'SEO__Social__twitter_username',
            'SEO__Social__instagram_url',
            'SEO__Social__linkedin_url',
            'SEO__Social__myspace_url',
            'SEO__Social__pinterest_url',
            'SEO__Social__youtube_url',
            'SEO__Social__googleplus_url'
        ];

        /** @var SeoSettingsTable $SeoSettings */
        $SeoSettings = $this->loadModel('Wasabi/Cms.SeoSettings');

        $settings = $SeoSettings->getKeyValues(new GeneralSetting(), $keys);

        if ($this->request->is('post') && !empty($this->request->data)) {
            $this->request->data['SEO__Social__twitter_username'] = ltrim(trim($this->request->data['SEO__Social__twitter_username']), '@');
            $settings = $SeoSettings->newEntity($this->request->data);
            if (!$settings->errors()) {
                if ($SeoSettings->saveKeyValues($settings, $keys)) {
                    $this->Flash->success(__d('wasabi_cms', 'The SEO settings have been updated.'));
                    $this->redirect(['action' => 'seo']);
                    return;
                } else {
                    $this->Flash->error($this->dbErrorMessage);
                }
            } else {
                $this->Flash->error($this->formErrorMessage);
            }
        }
        $this->set([
            'settings' => $settings
        ]);
    }
}
