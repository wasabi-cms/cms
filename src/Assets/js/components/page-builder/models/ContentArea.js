define(function(require) {

  var Backbone = require('backbone');
  var ContentCollection = require('wasabi.cms.package/components/page-builder/collections/Content');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  var ContentAreaModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'ContentArea',

    /**
     * Initialize the ContentArea model.
     * - setup content with ContentCollection
     *
     * @returns {ContentAreaModel}
     */
    initialize: function() {
      var content = this.get('data');
      if (content) {
        this.content = new ContentCollection(content);
        this.unset('data');
      }
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      return this;
    },

    getData: function() {
      var data = {
        meta: this.get('meta').toJSON(),
        data: []
      };
      this.content.each(function(contentModel) {
        data.data.push(contentModel.getData());
      });
      return data;
    }

  });

  return ContentAreaModel;

});
