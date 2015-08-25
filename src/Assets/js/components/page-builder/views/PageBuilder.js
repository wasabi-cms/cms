define(function(require) {

  var $ = require('jquery');
  var _ = require('underscore');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var RowDialogView = require('wasabi.cms.package/components/row-dialog/views/RowDialog');
  var ModuleDialogView = require('wasabi.cms.package/components/module-dialog/views/ModuleDialog');
  var ContentAreaView = require('wasabi.cms.package/components/page-builder/views/ContentArea');

  /**
   * This is the main view of the Page Builder interface.
   */
  var PageBuilderView = Marionette.CompositeView.extend({

    /**
     * The main template of the page builder.
     */
    template: '#pb-page-builder',

    childView: ContentAreaView,

    childViewContainer: '.page-builder-content',

    /**
     * Holds all dialogs of the page builder.
     */
    dialogs: {},

    /**
     * The hidden form input element where data is written to.
     */
    $hiddenDataField: null,

    /**
     * Holds all droppable views.
     * These are used for hit tests against draggable views.
     */
    droppableViews: [],

    /**
     * The content element view classes used to render all content elements.
     */
    //contentViewClasses: {
    //  ContentArea: require('wasabi.cms.package/views/ContentArea'),
    //  Row: require('wasabi.cms.package/views/Row'),
    //  Cell: require('wasabi.cms.package/views/Cell'),
    //  Module: require('wasabi.cms.package/views/Module')
    //},

    /**
     * DOM events handled by this view..
     */
    events: {
      'click [data-add="module"]': 'showAddModuleDialog',
      'click [data-add="row"]': 'showAddRowDialog'
    },

    modelEvents: {
      'change:data': 'updateHiddenDataField'
    },

    /**
     * Initialize the Page Builder
     */
    initialize: function(options) {
      // create all dialog boxes that the page builder uses
      this.dialogs = {
        module: WS.createView(ModuleDialogView, {
          pageBuilder: this
        }),
        row: WS.createView(RowDialogView, {
          pageBuilder: this
        })
      };

      this.$hiddenDataField = options.$hiddenDataField;

      this.collection = this.model.contentAreas;

      // Handle a new content element being added to the collection to display it in the interface.
      //this.model.content.on('add', this.onAddContent, this);

      // Store the model data in the hidden field whenever it changes.
      //this.model.on('change:data', this.updateHiddenDataField, this);
    },

    onRender: function() {
      this.$el.addClass('page-builder');
      this.eventBus.trigger('pb-page-builder-rendered', this);
    },

    /**
     * Render the page builder interface.
     *
     * @returns {PageBuilderView}
     */
    //render: function() {
    //  this.$el.html(this.template());
    //  this.$el.addClass('page-builder');
    //  this.$el.attr('data-page-builder', this.cid);
    //  this.$contentContainer = this.$('.page-builder-content');
    //  this.eventBus.trigger('pb-page-builder-rendered', this);
    //  return this;
    //},

    /**
     * Attach the page builder to the given container.
     *
     * @param {jQuery} $container
     * @param {Object=} options
     * @returns {PageBuilderView}
     */
    //attach: function($container, options) {
    //  options = _.extend({
    //    dialog: false
    //  }, options);
    //  if (options.dialog) {
    //    // Add the builder to a dialog.
    //  } else {
    //    // Attach the page builder to the given $container.
    //    this.$el.appendTo($container);
    //    this.eventBus.trigger('pb-attached-to-container', [this, $container]);
    //  }
    //
    //  this.attachedToDOM = true;
    //
    //  return this;
    //},

    /**
     * Set the hidden data field used to store data
     * and load its content into the page builder instance.
     *
     * @param {String} field
     * @returns {PageBuilderView}
     */
    setDataField: function(field) {
      this.$hiddenDataField = $(field);

      var fieldData = this.$hiddenDataField.val();

      if (fieldData !== '') {
        var data = {};

        try {
          data = JSON.parse(fieldData);
        } catch (err) {
          data = {};
        }

        this.model.loadFormData(data);
      }

      return this;
    },

    showAddModuleDialog: function() {
      this.dialogs.module.render();
    },

    showAddRowDialog: function() {
      this.dialogs.row
        .setType('add')
        .render();
    },

    /**
     * Select the given contentElement.
     * Sets the 'selected' value on the model of the previously selected contentElement to false.
     * Sets the 'selected' value on the model contentElement to true.
     * Also stores the selection on the page builder model.
     *
     * @param contentElement
     */
    //selectElement: function(contentElement) {
    //  var previousSelection = this.model.get('selected');
    //  if (previousSelection !== contentElement) {
    //    if (typeof previousSelection !== 'undefined') {
    //      previousSelection.model.set('selected', false);
    //    }
    //    contentElement.model.set('selected', true);
    //    this.model.set('selected', contentElement);
    //  }
    //},

    /**
     * Called whenever a new content model is added to the content collection.
     *
     * @param contentModel
     * @param collection
     * @param options
     */
    //onAddContent: function(contentModel, collection, options) {
    //  options = _.extend({
    //    skipAnimation: false
    //  }, options);
    //
    //  /** @var {ContentAreaView|RowView|CellView|ModuleView} contentViewClass */
    //  var contentViewClass = this.getViewClass(contentModel.modelName);
    //
    //  // Instantiate a new view for the provided model
    //  var contentView = WS.createView(contentViewClass, {
    //    model: contentModel,
    //    pageBuilder: this,
    //    parent: this
    //  });
    //
    //  // and render it.
    //  contentView.render();
    //
    //  // Attach the content to the page builder DOM.
    //  if (typeof options.at === 'undefined' || collection.length <= 1) {
    //    // Insert the content at the end of the container.
    //    contentView.$el.appendTo(this.$contentContainer);
    //  } else {
    //    // Insert the content at a specific position
    //    contentView.$el.insertAfter(
    //      this.$contentContainer.find('> div').eq(options.at - 1)
    //    );
    //  }
    //},

    /**
     * Get the corresponding view class for the
     * provided modelName.
     *
     * @param modelName
     * @returns {*}
     */
    //getViewClass: function(modelName) {
    //  return this.contentViewClasses[modelName];
    //},

    /**
     * Update the value of the hidden data field.
     *
     * @param model
     * @param {Object} data
     */
    updateHiddenDataField: function(model, data) {
      this.$hiddenDataField.val(JSON.stringify(data));
    }

  });

  return PageBuilderView;
});
