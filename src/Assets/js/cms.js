define(function(require) {

  var $ = require('jquery');
  var _ = require('underscore');
  var WS = require('wasabi');
  var Routes = require('wasabi.cms.package/views/Routes');
  var PageBuilder = require('wasabi.cms.package/components/page-builder/models/PageBuilder');
  var PageBuilderView = require('wasabi.cms.package/components/page-builder/views/PageBuilder');

  /**
   * Initialize the Routes view for page add/edit.
   */
  function _routes() {
    WS.Cms.views.routes = WS.createView(Routes);
  }

  /**
   * Initialize the PageBuilder for page add/edit.
   */
  function _pageBuilder() {
    // Create the page builder model.
    var $hiddenDataField = $('input[name="content"]');
    var val = $hiddenDataField.val();
    var pageBuilderModel = new PageBuilder((val !== '') ? JSON.parse($hiddenDataField.val()) : {});

    // Create the view to display the page builder.
    WS.Cms.views.pageBuilder = WS.createView(PageBuilderView, {
      model: pageBuilderModel,
      $hiddenDataField: $hiddenDataField
    });

    WS.eventBus.on('pb-page-builder-rendered', function() {
      $('.page-builder-loader').fadeOut(200, function() {
        $('.page-builder-wrapper').html(WS.Cms.views.pageBuilder.el);
      });
    });

    WS.Cms.views.pageBuilder.render();
  }

  return {
    /**
     * Initialize the wasabi.cms module.
     */
    initialize: function(options) {
      _.extend(this, options);

      WS.Cms = {
        collections: {},
        models: {},
        views: {}
      };

      var $body = $('body');
      if ($body.hasClass('wasabi-cms--pages-add') || $body.hasClass('wasabi-cms--pages-edit')) {
        _routes();
        _pageBuilder();
      }

      if (DEBUG) {
        console.info('Wasabi/Cms initialized.');
      }
    }
  }
});
