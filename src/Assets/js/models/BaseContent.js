define(function(require) {

  var Backbone = require('backbone');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  return Backbone.Model.extend({
    pageBuilder: null,
    parent: null,

    initialize: function(attributes, options) {
      this.pageBuilder = options.pageBuilder;
      this.parent = options.parent;

      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      var data = this.get('data');
      if (data.length) {
        _.each(data, _.bind(function(contentElement, i) {
          this.addContentElement(contentElement, {skipAnimation: true});
        }, this))
      }

      return this;
    },

    addContentElement: function(data, options) {
      options = _.extend({
        skipAnimation: false
      }, options);

      /** @var {ContentAreaModel|RowModel|CellModel|ModuleModel} modelClass **/
      var modelClass = this.pageBuilder.models[data.meta.type];
      var collection = this.getCollection();
      var modelInstance = new modelClass(data, {
        pageBuilder: this.pageBuilder,
        parent: this,
        collection: collection
      });

      collection.add(modelInstance, options);
    },

    getCollection: function() {
      return Backbone.Collection.extend({});
    },

    /**
     * Get all data for the current model instance.
     *
     * @returns {{meta: *, data: Array}}
     */
    getData: function() {
      var data = [];
      var collection = this.getCollection();
      if (typeof collection !== 'function' && collection.models.length > 0) {
        // If the current model has a collection of other content models, then retrieve
        // their data.
        data = collection.getData();
      } else {
        // Else return the data attribute of this model.
        data = this.get('data');
      }
      return {
        meta: this.get('meta').toJSON(),
        data: data
      }
    }

  });

});
