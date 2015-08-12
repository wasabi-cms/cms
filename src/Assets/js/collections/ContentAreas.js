define(function(require) {

  var BaseCollection = require('wasabi.cms.package/collections/BaseCollection');
  var ContentArea = require('wasabi.cms.package/models/ContentArea');

  var ContentAreasCollection =  BaseCollection.extend({
    collectionType: 'ContentAreasCollection',
    model: ContentArea
  });

  return ContentAreasCollection;

});
