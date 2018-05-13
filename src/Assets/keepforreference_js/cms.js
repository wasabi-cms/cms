define(function (require) {

  var $ = require('jquery');
  var _ = require('underscore');
  var WS = require('wasabi');

  return {
    /**
     * Initialize the wasabi.cms module.
     */
    initialize: function (options) {
      _.extend(this, options);

      WS.Cms = {
        collections: {},
        models: {},
        views: {}
      };

      var $body = $('body');
      if ($body.hasClass('wasabi-cms--pages-add') || $body.hasClass('wasabi-cms--pages-edit')) {
        WS.createView(require('wasabi.cms.package/sections/PagesAddEdit'), {
          el: $body
        });
      }

      if ($body.hasClass('wasabi-cms--pages-index')) {
        WS.createView(require('wasabi.cms.package/views/PagesIndexView'));
      }

      if ($body.hasClass('wasabi-cms--menus-edit')) {
        WS.createView(require('wasabi.cms.package/sections/MenusEdit'));
      }

      if (DEBUG) {
        console.info('Wasabi/Cms initialized.');
      }
    }
  };
});
