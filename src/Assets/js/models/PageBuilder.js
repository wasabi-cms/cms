define(function(require) {

  var _ = require('underscore');
  var Backbone = require('backbone');
  var ContentCollection = require('wasabi.cms.package/collections/Content');

  return Backbone.Model.extend({
    /**
     * The name of this model.
     */
    modelName: 'PageBuilder',

    /**
     * Holds the content collection.
     */
    content: {},

    /**
     * Holds all content element model classes.
     */
    models: {
      ContentArea: require('wasabi.cms.package/models/ContentArea'),
      Row: require('wasabi.cms.package/models/Row'),
      Cell: require('wasabi.cms.package/models/Cell'),
      Module: require('wasabi.cms.package/models/Module')
    },

    /**
     * Initialize the page builder model.
     */
    initialize: function() {
      // Collection that holds content areas or rows.
      this.content = new ContentCollection();
    },

    /**
     * Load the data into the page builder instance.
     *
     * @param {Object} data
     */
    loadFormData: function(data) {
      // Initially destroy all content that currently exists.
      // This will also destroy all associated views.
      this.emptyOut();

      // Silently set the data.
      this.set('data', data, {silent: true});

      // If no content is supplied we finish early.
      if (typeof data.content === 'undefined') {
        WS.eventBus.trigger('pb-form-data-loaded');
        return;
      }

      // Process each content entry.
      _.each(data.content, _.bind(function (contentElement, i) {
        this.addContentElement(contentElement, {skipAnimation: true});
      }, this));
    },

    /**
     * Add a content element to the content collection.
     *
     * @param {Object} data
     * @param {Object} options
     */
    addContentElement: function(data, options) {
      options = _.extend({
        skipAnimation: false
      }, options);

      /** @var {ContentAreaModel|RowModel|CellModel|ModuleModel} modelClass **/
      var modelClass = this.models[data.meta.type];
      var modelInstance = new modelClass(data, {
        pageBuilder: this,
        parent: this,
        collection: this.content
      });

      this.content.add(modelInstance, options);
    },

    /**
     * Empty out all content areas + rows and their subsequent rows, cells and
     * modules.
     */
    emptyOut: function() {
      _.invoke(this.content.toArray(), 'destroy');
      this.content.reset();
    }
  });

});
