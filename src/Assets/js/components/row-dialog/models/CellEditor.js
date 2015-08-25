define(function(require) {

  var Backbone = require('backbone');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  var CellEditorModel = Backbone.Model.extend({

    /**
     * Initialize the CellEditorModel
     * - setup meta with MetaModel
     *
     * @returns {CellEditorModel}
     */
    initialize: function() {
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      return this;
    },

    /**
     * Get the current colWidth of this cell.
     *
     * @returns {number}
     */
    getColWidth: function() {
      return this.get('meta').get('grid').get('colWidth');
    },

    /**
     * Set the current colWidth of this cell.
     *
     * @param {number} colWidth
     */
    setColWidth: function(colWidth) {
      this.get('meta').get('grid').set('colWidth', colWidth);
    },

    /**
     * Get the baseWidth of this cell.
     *
     * @returns {number}
     */
    getBaseWidth: function() {
      return this.get('meta').get('grid').get('baseWidth');
    },

    /**
     * Set the baseWidth of this cell.
     *
     * @param {number} baseWidth
     */
    setBaseWidth: function(baseWidth) {
      this.get('meta').get('grid').set('baseWidth', baseWidth);
    }

  });

  return CellEditorModel;

});
