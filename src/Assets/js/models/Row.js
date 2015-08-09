define(function(require) {

  var ContentModel = require('wasabi.cms.package/models/BaseContent');
  var CellsCollection = require('wasabi.cms.package/collections/Cells');

  var RowModel = ContentModel.extend({
    modelName: 'Row',

    initialize: function(attributes, options) {
      // The content collection of this model.
      this.cells = new CellsCollection();

      // Call the super::initialize() method with the current context.
      ContentModel.prototype.initialize.call(this, attributes, options);

      return this;
    },

    /**
     * Get the collection of this model.
     * Used by the super::initialize() method
     *
     * @returns {CellsCollection}
     */
    getCollection: function() {
      return this.cells;
    }

  });

  return RowModel;

});
