define(function(require) {

  var Backbone = require('backbone');
  var ContentArea = require('wasabi.cms.package/models/ContentArea');

  var ContentAreasCollection =  Backbone.Collection.extend({
    collectionType: 'ContentAreasCollection',
    model: ContentArea
  });

  return ContentAreasCollection;

});
