define(function (require) {

  var _ = require('underscore');
  var Backbone = require('backbone');
  var ContentAreaCollection = require('wasabi.cms.package/components/page-builder/collections/ContentAreas');

  var PageBuilderModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'PageBuilder',

    /**
     * Initialize the page builder model.
     *
     * @returns {PageBuilderModel}
     */
    initialize: function () {
      var contentAreas = this.get('content');
      if (contentAreas) {
        this.contentAreas = new ContentAreaCollection(contentAreas);
        this.unset('content');
      }
      return this;
    },

    /**
     * Load the data into the page builder instance.
     *
     * @param {Object} data
     */
    loadFormData: function (data) {
      // Initially destroy all content that currently exists.
      // This will also destroy all associated views.
      //this.emptyOut();

      // Silently set the data.
      //this.set('data', data, {silent: true});

      // If no content is supplied we finish early.
      //if (typeof data.content === 'undefined') {
      //  WS.eventBus.trigger('pb-form-data-loaded');
      //  return;
      //}

      // Process each content entry.
      //_.each(data.content, _.bind(function (contentElement, i) {
      //  this.addContentElement(contentElement, {skipAnimation: true});
      //}, this));
    },

    /**
     * Add a content element to the content collection.
     *
     * @param {Object} data
     * @param {Object} options
     */
    //addContentElement: function(data, options) {
    //  options = _.extend({
    //    skipAnimation: false
    //  }, options);
    //
    //  /** @var {ContentAreaModel|RowModel|CellModel|ModuleModel} modelClass **/
    //  var modelClass = this.models[data.meta.type];
    //  var modelInstance = new modelClass(data, {
    //    pageBuilder: this,
    //    parent: this,
    //    collection: this.content
    //  });
    //
    //  this.content.add(modelInstance, options);
    //},

    /**
     * Empty out all content areas + rows and their subsequent rows, cells and
     * modules.
     */
    //emptyOut: function() {
    //  _.invoke(this.content.toArray(), 'destroy');
    //  this.content.reset();
    //},

    /**
     * Rebuild the data for all content within the page builder instance.
     */
    rebuildContentData: function () {
      var data = [];
      this.contentAreas.each(function (contentAreaModel) {
        data.push(contentAreaModel.getData());
      });
      this.set('data', data);
    }
  });

  return PageBuilderModel;

});
