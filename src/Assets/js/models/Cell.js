define(function(require) {

  var ContentModel = require('wasabi.cms.package/models/BaseContent');
  var ModulesCollection = require('wasabi.cms.package/collections/Modules');

  var CellModel = ContentModel.extend({

    /**
     * The name of this model.
     */
    modelName: 'Cell',

    /**
     * Initialize the Cell model.
     *
     * @param {Object} attributes
     * @param {Object} options
     * @returns {CellModel}
     */
    initialize: function(attributes, options) {
      // The content collection of this model.
      this.modules = new ModulesCollection();

      // Call the super::initialize() method with the current context.
      ContentModel.prototype.initialize.call(this, attributes, options);

      return this;
    },

    /**
     * Get the collection of this model.
     * Used by the super::initialize() method
     *
     * @returns {ModulesCollection}
     */
    getCollection: function() {
      return this.modules;
    }

  });

  return CellModel;

});
