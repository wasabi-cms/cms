define(function (require) {

  var Backbone = require('backbone');
  var ModuleModel = require('wasabi.cms.package/components/module-dialog/models/ModuleModel');

  return Backbone.Collection.extend({
    model: ModuleModel
  });

});
