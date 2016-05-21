define(function (require) {

  var Backbone = require('backbone');
  var ModulesCollection = require('wasabi.cms.package/components/page-builder/collections/Modules');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  var CellModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'Cell',

    /**
     * Initialize the Cell model.
     *
     * @returns {CellModel}
     */
    initialize: function () {
      var data = this.get('data');
      if (data) {
        this.modules = new ModulesCollection(data);
        this.unset('data');
      }
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      return this;
    },

    /**
     * Get the current colWidth of this cell.
     *
     * @returns {number}
     */
    getColWidth: function () {
      return this.get('meta').get('grid').get('colWidth');
    },

    /**
     * Set the current colWidth of this cell.
     *
     * @param {number} colWidth
     */
    setColWidth: function (colWidth) {
      this.get('meta').get('grid').set('colWidth', colWidth);
    },

    getData: function () {
      var data = {
        meta: this.get('meta').toJSON(),
        data: []
      };
      this.modules.each(function (moduleModel) {
        data.data.push(moduleModel.getData());
      });
      return data;
    }

  });

  return CellModel;

});
