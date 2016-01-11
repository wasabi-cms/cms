define(function (require) {

  var Backbone = require('backbone');
  var RowModel = require('wasabi.cms.package/components/page-builder/models/Row');
  var ModuleModel = require('wasabi.cms.package/components/page-builder/models/Module');

  /**
   * The Content collection can hold the content models
   * ContentArea, Row and Module.
   *
   * Each of these models extend the base model Content.
   */
  var ContentCollection = Backbone.Collection.extend({
    collectionType: 'ContentCollection',

    model: function (attributes, options) {
      switch (attributes.meta.type) {
        case 'Row':
          return new RowModel(attributes, options);
        case 'Module':
          return new ModuleModel(attributes, options);
        default:
          return new Backbone.Model(attributes, options);
      }
    },

    addRow: function (data) {
      this.add(new RowModel(data));
    },

    addModule: function (data) {
      this.add(new ModuleModel(data));
    }
  });

  return ContentCollection;

});
