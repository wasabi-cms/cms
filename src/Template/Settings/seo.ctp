<?php
/**
 * @var \Wasabi\Core\View\AppView $this
 * @var \Wasabi\Core\Model\Entity\GeneralSetting $settings
 */

$this->Html->setTitle(__d('wasabi_cms', 'Search Engine Optimization Settings'));
echo $this->Form->create($settings, ['context' => ['table' => 'Wasabi/Cms.SeoSettings']]);
echo $this->Form->widget('section', [
    'title' => __d('wasabi_cms', 'General SEO Settings'),
    'description' => __d('wasabi_cms', 'Setup your onpage SEO configuration.')
]);
echo $this->Form->control('SEO__application-name', [
    'label' => __d('wasabi_cms', 'Application Name'),
    'templateVars' => [
        'info' => __d('wasabi_cms', 'Enter your application name that will be added as meta tag to every page.')
    ]
]);
echo $this->Form->control('SEO__google-site-verification', [
    'label' => __d('wasabi_cms', 'Google Site Verification'),
    'templateVars' => [
        'info' => __d('wasabi_cms', 'Enter your Google site verification token.')
    ]
]);
echo $this->Form->widget('section', [
    'title' => __d('wasabi_cms', 'Robots'),
    'description' => __d('wasabi_cms', 'Setup your robots configuration.')
]);
echo $this->Form->control('SEO__meta-robots-index', [
    'type' => 'toggleSwitch',
    'onLabel' => 'index',
    'offLabel' => 'noindex',
    'templateVars' => [
        'formRowLabel' => __d('wasabi_cms', 'Meta Robots'),
        'formRowInfo' => __d('wasabi_cms', 'Whether to allow Search Engines to index all pages. This setting can be overridden on each page.')
    ]
]);
echo $this->Form->control('SEO__meta-robots-follow', [
    'type' => 'toggleSwitch',
    'onLabel' => 'follow',
    'offLabel' => 'nofollow',
    'templateVars' => [
        'formRowLabel' => __d('wasabi_cms', 'Follow Links'),
        'formRowInfo' => __d('wasabi_cms', 'Whether to allow Search Engines to follow links sitewide. This setting can be overridden on each page.')
    ]
]);
echo $this->Form->control('SEO__meta-robots-noodp', [
    'type' => 'toggleSwitch',
    'onLabel' => __d('wasabi_cms', 'enabled'),
    'offLabel' => __d('wasabi_cms', 'disabled'),
    'templateVars' => [
        'formRowLabel' => __d('wasabi_cms', 'Force <code>noodp</code> meta robots tag sitewide'),
        'formRowInfo' => __d('wasabi_cms', 'Prevents search engines from using the DMOZ description in the search results for all pages on this site. Note: If you set a custom description for a page, it will have the noodp tag regardless of this setting.')
    ]
]);
echo $this->Form->control('SEO__display-search-box', [
    'type' => 'toggleSwitch',
    'onLabel' => __d('wasabi_cms', 'yes'),
    'offLabel' => __d('wasabi_cms', 'no'),
    'templateVars' => [
        'formRowLabel' => __d('wasabi_cms', 'Display search box in search results.'),
        'formRowInfo' => __d('wasabi_cms', 'Tells Google whether you want to display a search box beneath the search results for your site.')
    ]
]);
echo $this->Form->widget('section', [
    'title' => __d('wasabi_cms', 'Social Accounts'),
    'description' => __d('wasabi_cms', 'To inform Google about your social profiles, we need to know their URLs. For each, pick the main account associated with this site and please enter them below.')
]);
echo $this->Form->control('SEO__Social__facebook_url', [
    'label' => __d('wasabi_cms', 'Facebook Page URL')
]);
echo $this->Form->control('SEO__Social__facebook_page_id', [
    'type' => 'text',
    'label' => __d('wasabi_cms', 'Facebook Page ID')
]);
echo $this->Form->control('SEO__Social__twitter_username', [
    'label' => __d('wasabi_cms', 'Twitter Username')
]);
echo $this->Form->control('SEO__Social__instagram_url', [
    'label' => __d('wasabi_cms', 'Instagram URL')
]);
echo $this->Form->control('SEO__Social__linkedin_url', [
    'label' => __d('wasabi_cms', 'LinkedIn URL')
]);
echo $this->Form->control('SEO__Social__myspace_url', [
    'label' => __d('wasabi_cms', 'MySpace URL')
]);
echo $this->Form->control('SEO__Social__pinterest_url', [
    'label' => __d('wasabi_cms', 'Pinterest URL')
]);
echo $this->Form->control('SEO__Social__youtube_url', [
    'label' => __d('wasabi_cms', 'Youtube URL')
]);
echo $this->Form->control('SEO__Social__googleplus_url', [
    'label' => __d('wasabi_cms', 'Google+ URL')
]);

echo $this->Html->div('form-controls');
echo $this->Form->button(__d('wasabi_cms', 'Save'), ['div' => false, 'class' => 'button']);
echo $this->Guardian->protectedLink(__d('wasabi_cms', 'Cancel'), [
    'plugin' => 'Wasabi/Cms',
    'controller' => 'Settings',
    'action' => 'seo'
]);
echo $this->Html->tag('/div');
echo $this->Form->end();
