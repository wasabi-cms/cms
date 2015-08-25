define(function(require) {

  var Backbone = require('backbone');
  var CellEditorModel = require('wasabi.cms.package/components/row-dialog/models/CellEditor');

  var EditorCellsCollection = Backbone.Collection.extend({
    collectionType: 'EditorCellsCollection',
    model: CellEditorModel
  });

  return EditorCellsCollection;

});
