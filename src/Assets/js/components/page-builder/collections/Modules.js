define(function (require) {

  var Backbone = require('backbone');
  var Module = require('wasabi.cms.package/components/page-builder/models/Module');

  var ModulesCollection = Backbone.Collection.extend({
    collectionType: 'ModulesCollection',
    model: Module
  });

  return ModulesCollection;

});
