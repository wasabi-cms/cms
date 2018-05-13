define(function (require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var Routes = require('wasabi.cms.package/views/Routes');
  var PageBuilder = require('wasabi.cms.package/components/page-builder/models/PageBuilder');
  var PageBuilderView = require('wasabi.cms.package/components/page-builder/views/PageBuilder');
  var ModuleRichText = require('wasabi.cms.package/views/ModuleRichText');

  require('jquery.livequery');

  return Marionette.ItemView.extend({

    template: false,

    ui: {
      layout: '#layout',
      tab: '.tab-content[data-tabify-tab="layout"]',
      layoutAttributes: '.field.layout-attributes'
    },

    events: {
      'change @ui.layout': 'loadAttributes'
    },

    initialize: function() {
      WS.Cms.views.routes = WS.createView(Routes);

      this.initPageBuilder();
      this.initModules();

      this.render();
    },

    initPageBuilder: function() {
      // Create the page builder model.
      var $hiddenDataField = $('input.page-content');
      var val = $hiddenDataField.val();
      var pageBuilderModel = new PageBuilder((val !== '') ? JSON.parse($hiddenDataField.val()) : {});

      // Create the view to display the page builder.
      WS.Cms.views.pageBuilder = WS.createView(PageBuilderView, {
        model: pageBuilderModel,
        $hiddenDataField: $hiddenDataField
      });

      WS.eventBus.on('pb-page-builder-rendered', function () {
        $('.page-builder-loader').fadeOut(200, function () {
          $('.page-builder-wrapper').html(WS.Cms.views.pageBuilder.el);
        });
      });

      WS.Cms.views.pageBuilder.render();
    },

    initModules: function() {
      $('.module--richt-text').livequery(function() {
        WS.createView(ModuleRichText, {
          el: this
        });
      });
    },

    loadAttributes: function() {
      var layout = this.ui.layout.val();
      var attributesUrl = this.ui.tab.attr('data-attributes-url') + '?layout=' + layout;

      $.ajax({
        url: attributesUrl,
        dataType: 'html'
      }).then(_.bind(function (response) {
        this.ui.layoutAttributes.html(response);
      }, this));
    }

  });

});
