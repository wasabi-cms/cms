define(function (require) {

  var Backbone = require('backbone');

  var GridModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'Grid',

    /**
     * Default attributes for instances of this model.
     */
    defaults: {
      colWidth: 1,
      baseWidth: 16
    }

  });

  return GridModel;

});
