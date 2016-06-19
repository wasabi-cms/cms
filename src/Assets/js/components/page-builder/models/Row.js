define(function (require) {

  var Backbone = require('backbone');
  var CellsCollection = require('wasabi.cms.package/components/page-builder/collections/Cells');
  var MetaModel = require('wasabi.cms.package/models/Meta');
  var CellModel = require('wasabi.cms.package/components/page-builder/models/Cell');

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

    /**
     * Add a new cell to the cells collection using the provided attributes.
     *
     * @param {Object} attributes
     */
    addCell: function (attributes) {
      this.cells.add(new CellModel(attributes));
    },

    getData: function () {
      var data = {
        meta: this.get('meta').getData(),
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
