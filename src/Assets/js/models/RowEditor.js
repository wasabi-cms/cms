define(function(require) {

  var Backbone = require('backbone');
  var MetaModel = require('wasabi.cms.package/models/Meta');
  var CellsCollection = require('wasabi.cms.package/collections/Cells');
  var CellEditorModel = require('wasabi.cms.package/models/CellEditor');

  var RowEditorModel = Backbone.Model.extend({

    initialize: function(attributes, options) {
      this.cells = new CellsCollection();
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      var data = this.get('data');
      if (typeof data !== 'undefined' && data.length) {
        _.each(data, _.bind(function(cell, i) {
          this.addCell(cell);
        }, this))
      }
    },

    addCell: function(data) {
      this.cells.add(new CellEditorModel(data));
    }

  });

  return RowEditorModel;

});
