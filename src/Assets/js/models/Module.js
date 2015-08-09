define(function(require) {

  var ContentModel = require('wasabi.cms.package/models/BaseContent');

  var ModuleModel = ContentModel.extend({
    modelName: 'Module',

    initialize: function(attributes, options) {
      // Call the super::initialize() method with the current context.
      ContentModel.prototype.initialize.call(this, attributes, options);

      return this;
    }

  });

  return ModuleModel;

});
