define(function(require) {
  var $ = require('jquery');

  return {
    initialize: function() {
      if (DEBUG) {
        console.info('Wasabi/Cms initialized.');
      }
    }
  }
});
