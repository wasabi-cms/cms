define(function(require) {

  var Backbone = require('backbone');
  var GridModel = require('wasabi.cms.package/models/Grid');

  var MetaModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'Meta',

    /**
     * Default attributes for instances of this model.
     */
    defaults: {
      type: ''
    },

    /**
     * Initialize the meta model used by all other page builder models.
     *
     * @param {Object} attributes
     * @param {Object} options
     * @returns {MetaModel}
     */
    initialize: function(attributes, options) {
      this.set('type', attributes.type);

      if (typeof attributes.grid !== 'undefined') {
        this.set('grid', new GridModel({
          colWidth: attributes.grid.colWidth,
          baseWidth: attributes.grid.baseWidth
        }));
      }

      return this;
    },

    getData: function() {
      var grid = this.get('grid');
      var meta = this.toJSON();
      if (grid) {
        meta.grid = grid.toJSON();
      }
      return meta;
    }

  });

  return MetaModel;

});
