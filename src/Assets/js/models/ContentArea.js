define(function(require) {

  var ContentModel = require('wasabi.cms.package/models/BaseContent');
  var ContentCollection = require('wasabi.cms.package/collections/Content');

  var ContentAreaModel = ContentModel.extend({

    /**
     * The name of this model.
     */
    modelName: 'ContentArea',

    /**
     * Initialize the ContentArea model.
     *
     * @param {Object} attributes
     * @param {Object} options
     * @returns {ContentAreaModel}
     */
    initialize: function(attributes, options) {
      // The content collection of this model.
      this.content = new ContentCollection();

      // Call the super::initialize() method with the current context.
      ContentModel.prototype.initialize.call(this, attributes, options);

      return this;
    },

    /**
     * Get the collection of this model.
     * Used by the super::initialize() method
     *
     * @returns {ContentCollection}
     */
    getCollection: function() {
      return this.content;
    }

  });

  return ContentAreaModel;

});
