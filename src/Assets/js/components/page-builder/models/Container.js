define(function (require) {

  var Backbone = require('backbone');
  var ContainerContentCollection = require('wasabi.cms.package/components/page-builder/collections/ContainerContent');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  var ContainerModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'Container',

    /**
     * Initialize the ContentArea model.
     * - setup content with ContentCollection
     *
     * @returns {ContainerModel}
     */
    initialize: function () {
      var content = this.get('data');
      if (content) {
        this.content = new ContainerContentCollection(content);
        this.unset('data');
      }
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      return this;
    },

    getData: function () {
      var data = {
        meta: this.get('meta').toJSON(),
        data: []
      };
      this.content.each(function (contentModel) {
        data.data.push(contentModel.getData());
      });
      return data;
    }

  });

  return ContainerModel;

});
