define(function (require) {

  var Backbone = require('backbone');
  var CellsCollection = require('wasabi.cms.package/components/page-builder/collections/Cells');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  var RowModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'Row',

    /**
     * Initialize the Row model.
     *
     * @returns {RowModel}
     */
    initialize: function () {
      var data = this.get('data');
      if (data) {
        this.cells = new CellsCollection(data);
        this.unset('data');
      }
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      return this;
    },

    getData: function () {
      var data = {
        meta: this.get('meta').toJSON(),
        data: []
      };
      this.cells.each(function (cellModel) {
        data.data.push(cellModel.getData());
      });
      return data;
    }

  });

  return RowModel;

});
