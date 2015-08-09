define(function(require) {

  var Backbone = require('backbone');
  var GridModel = require('wasabi.cms.package/models/grid');

  var MetaModel = Backbone.Model.extend({
    modelName: 'Meta',

    defaults: {
      type: '',
      grid: {}
    },

    /**
     * Initialize the meta model used by all other page builder models.
     *
     * @param {Object} attributes
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
    }
  });

  return MetaModel;

});
