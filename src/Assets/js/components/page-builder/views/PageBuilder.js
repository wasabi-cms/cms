define(function (require) {

  var $ = require('jquery');
  var _ = require('underscore');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var RowDialogView = require('wasabi.cms.package/components/row-dialog/views/RowDialog');
  var ModuleDialogView = require('wasabi.cms.package/components/module-dialog/views/ModuleDialog');
  var EditModuleDialog = require('wasabi.cms.package/components/edit-module-dialog/views/EditModuleDialog');
  var ContentAreaView = require('wasabi.cms.package/components/page-builder/views/ContentArea');

  /**
   * This is the main view of the Page Builder interface.
   */
  var PageBuilderView = Marionette.CompositeView.extend({

    /**
     * The main template of the page builder.
     */
    template: '#pb-PageBuilder',

    childView: ContentAreaView,

    childViewContainer: '.pb-PageBuilder-content',

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

    ui: {
      'moduleDialogBtn': '[data-add="module"]',
      'rowDialogBtn': '[data-add="row"]',
      'containerBtn': '[data-add="container"]'
    },

    /**
     * DOM events handled by this view..
     */
    events: {
      'click @ui.moduleDialogBtn': 'showAddModuleDialog',
      'click @ui.rowDialogBtn': 'showAddRowDialog',
      'click @ui.containerBtn': 'addContainer'
    },

    /**
     * Model events handles by this view.
     */
    modelEvents: {
      'change:data': 'updateHiddenDataField'
    },

    /**
     * Initialize the Page Builder
     */
    initialize: function (options) {
      // create all dialog boxes that the page builder uses
      this.dialogs = {
        module: WS.createView(ModuleDialogView, {
          pageBuilder: this
        }),
        row: WS.createView(RowDialogView, {
          pageBuilder: this
        }),
        editModule: WS.createView(EditModuleDialog, {
          pageBuilder: this
        })
      };

      this.$hiddenDataField = options.$hiddenDataField;

      this.collection = this.model.contentAreas;

      WS.eventBus.on('add-module', _.bind(this.addModule, this));
    },

    onRender: function () {
      this.$el.addClass('pb-PageBuilder');
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
    setDataField: function (field) {
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

    showAddModuleDialog: function () {
      this.dialogs.module.render();
    },

    showAddRowDialog: function () {
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
    selectElement: function (contentElement) {
      var previousSelection = this.model.get('selected');
      if (previousSelection !== contentElement) {
        if (typeof previousSelection !== 'undefined') {
          previousSelection.model.set('selected', false);
        }
        contentElement.model.set('selected', true);
        this.model.set('selected', contentElement);
      }
    },

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
    updateHiddenDataField: function (model, data) {
      this.$hiddenDataField.val(JSON.stringify({
        content: data
      }));
    },

    addContainer: function () {
      var data = {
        meta: {
          type: 'Container',
          title: 'Container',
          cssClasses: '',
          containerElement: 'section',
          useInnerContainer: false,
          innerCssClasses: ''
        },
        data: []
      };
      var selectedElement = this.model.get('selected');
      if (!selectedElement) {
        selectedElement = this.children.first();
      }
      if (selectedElement.viewType === 'ContentArea') {
        selectedElement.collection.addContainer(data);
      }// else if (selectedElement.viewType === 'Cell') {
      //   selectedElement.collection.addContainer(data);
      // }
      this.model.rebuildContentData();
    },

    /**
     * Add a row to the selected or the last content area if none is selected.
     *
     * @param data
     */
    addRow: function (data) {
      var selectedElement = this.model.get('selected');
      if (!selectedElement) {
        selectedElement = this.children.first();
      }
      if (selectedElement.viewType === 'ContentArea') {
        selectedElement.collection.addRow(data);
      } else if (selectedElement.viewType === 'Cell') {
        selectedElement._parent._parent.collection.addRow(data);
      }
      this.model.rebuildContentData();
    },

    addModule: function(data) {
      var selectedElement = this.model.get('selected');
      if (!selectedElement) {
        selectedElement = this.children.first();
      }
      if (selectedElement.viewType === 'ContentArea' || selectedElement.viewType === 'Cell' || selectedElement.viewType === 'Container') {
        selectedElement.collection.addModule(data);
        this.model.rebuildContentData();
      }
    }

  });

  return PageBuilderView;
});
