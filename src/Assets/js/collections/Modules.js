define(function(require) {

  var BaseCollection = require('wasabi.cms.package/collections/BaseCollection');
  var Module = require('wasabi.cms.package/models/Module');

  var ModulesCollection = BaseCollection.extend({
    collectionType: 'ModulesCollection',
    model: Module
  });

  return ModulesCollection;

});
