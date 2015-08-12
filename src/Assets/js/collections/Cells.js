define(function(require) {

  var BaseCollection = require('wasabi.cms.package/collections/BaseCollection');
  var Cell = require('wasabi.cms.package/models/Cell');

  var CellsCollection = BaseCollection.extend({
    collectionType: 'CellsCollection',
    model: Cell
  });

  return CellsCollection;

});
