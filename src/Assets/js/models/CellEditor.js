define(function(require) {

  var Backbone = require('backbone');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  var CellEditorModel = Backbone.Model.extend({

    initialize: function(attributes, options) {
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      var data = this.get('data');
      if (typeof data !== 'undefined' && data.length) {
        _.each(data, _.bind(function(cell, i) {
          this.addCell(cell);
        }, this))
      }
    },

    getColWidth: function() {
      return this.get('meta').get('grid').get('colWidth');
    },

    setColWidth: function(colWidth) {
      this.get('meta').get('grid').set('colWidth', colWidth);
    },

    getBaseWidth: function() {
      return this.get('meta').get('grid').get('baseWidth');
    }

  });

  return CellEditorModel;

});
