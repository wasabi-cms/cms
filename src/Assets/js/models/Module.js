define(function(require) {

  var ContentModel = require('wasabi.cms.package/models/BaseContent');

  var ModuleModel = ContentModel.extend({

    /**
     * The name of this model.
     */
    modelName: 'Module',

    /**
     * Initialize the Module model.
     *
     * @param {Object} attributes
     * @param {Object} options
     * @returns {ModuleModel}
     */
    initialize: function(attributes, options) {
      // Call the super::initialize() method with the current context.
      ContentModel.prototype.initialize.call(this, attributes, options);

      return this;
    }

  });

  return ModuleModel;

});
