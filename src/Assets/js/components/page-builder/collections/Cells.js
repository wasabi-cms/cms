define(function (require) {

  var Backbone = require('backbone');
  var Cell = require('wasabi.cms.package/components/page-builder/models/Cell');

  var CellsCollection = Backbone.Collection.extend({
    collectionType: 'CellsCollection',
    model: Cell
  });

  return CellsCollection;

});
