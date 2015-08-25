define(function(require) {

  var Backbone = require('backbone');
  var MetaModel = require('wasabi.cms.package/models/Meta');
  var EditorCellsCollection = require('wasabi.cms.package/components/row-dialog/collections/EditorCells');
  var CellEditorModel = require('wasabi.cms.package/components/row-dialog/models/CellEditor');

  var RowEditorModel = Backbone.Model.extend({

    /**
     * Initialize the RowEditorModel.
     * - setup cells with EditorCellsCollection
     * - setup meta with MetaModel
     *
     * @returns {RowEditorModel}
     */
    initialize: function() {
      var cells = this.get('data');
      if (cells) {
        this.cells = new EditorCellsCollection(cells);
        this.unset('data');
      }
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      return this;
    },

    /**
     * Add a new cell to the cells collection using the provided attributes.
     *
     * @param {Object} attributes
     */
    addCell: function(attributes) {
      this.cells.add(new CellEditorModel(attributes));
    }

  });

  return RowEditorModel;

});
