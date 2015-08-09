define(function(require) {

  var Backbone = require('backbone');

  return Backbone.Model.extend({
    modelName: 'Grid',

    defaults: {
      colWidth: 1,
      baseWidth: 16
    }

  });

});
