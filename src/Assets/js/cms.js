define(function(require) {
  var $ = require('jquery');
  var WS = require('wasabi');
  var Routes = require('wasabi.cms.package/views/Routes');

  return {
    initialize: function() {
      WS.Cms = {
        views: {}
      };
      if (DEBUG) {
        console.info('Wasabi/Cms initialized.');
      }
    },
    routes: function() {
      WS.Cms.views.routes = WS.createView(Routes);
    }
  }
});
