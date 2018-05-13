var wasabiCmsPath  = '../../../../wasabi/cms/ASSETS';

require.config({
  config: {
    moment: {
      noGlobal: true
    }
  },
  paths: {
    'wasabi.cms': wasabiCmsPath + '/js/cms',
    'wasabi.cms.package': wasabiCmsPath + '/js',
    'medium': wasabiCmsPath + '/js/vendor/medium-editor/dist/js/medium-editor'
  },
  shim: {

  }
});

if (typeof DEBUG === 'undefined') {
  DEBUG = true;
}
