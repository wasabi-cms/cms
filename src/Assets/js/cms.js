define(function(require) {
  var $ = require('jquery');
  var WS = require('wasabi');
  var Routes = require('wasabi.cms.package/views/Routes');
  var PageBuilder = require('wasabi.cms.package/models/PageBuilder');
  var PageBuilderView = require('wasabi.cms.package/views/PageBuilder');

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
    var pageBuilderModel = new PageBuilder();
    var $loader = $('.page-builder-loader');

    // Create the view to display the page builder.
    var pageBuilderView = WS.createView(PageBuilderView, {
      model: pageBuilderModel
    });

    WS.eventBus.on('pb-page-builder-rendered', function() {
      $loader.fadeOut(200, function() {
        pageBuilderView.attach($('.page-builder-wrapper'));
      });
    });

    pageBuilderView.render();
    pageBuilderView.setDataField('input[name="content"]');

    WS.Cms.views.pageBuilder = pageBuilderView;

    //WS.Cms.collections.contentAreas = new ContentAreas()
  }

  return {
    /**
     * Initialize the wasabi.cms module.
     */
    initialize: function() {
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
