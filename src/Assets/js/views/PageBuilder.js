define(function(require) {

  var $ = require('jquery');
  var _ = require('underscore');
  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  /**
   * This is the main view of the Page Builder interface.
   */
  var PageBuilderView = BaseView.extend({
    /**
     * The main template of the page builder.
     */
    template: Handlebars.compile($('#pb-page-builder').html()),

    /**
     * Holds all dialogs of the page builder.
     */
    dialogs: {},

    /**
     * The hidden form input element where data is written to.
     */
    $hiddenDataField: null,

    /**
     * Json representation of the current data.
     */
    data: {},

    /**
     * Tells wheter the page builder has been attached to the DOM.
     */
    attachedToDOM: false,

    /**
     * Holds the content container of the page builder.
     */
    $contentContainer: {},

    /**
     * The content element view classes used to render all content elements.
     */
    contentViewClasses: {
      ContentArea: require('wasabi.cms.package/views/ContentArea'),
      Row: require('wasabi.cms.package/views/Row'),
      Cell: require('wasabi.cms.package/views/Cell'),
      Module: require('wasabi.cms.package/views/Module')
    },

    /**
     * All DOM events the page builder handles.
     */
    events: {
      'click [data-add="module"]': 'showAddModuleDialog',
      'click [data-add="row"]': 'showAddRowDialog'
    },

    /**
     * All global events the page builder handles (triggered through WS.eventBus).
     */
    globalEvents: {
      'pb-content-change': 'handleContentChange',
      'pb-display-builder': 'handleDisplayBuilder'
    },

    /**
     * Initialize the Page Builder
     */
    initialize: function(options) {
      // create all dialog boxes that the page builder uses
      this.dialogs = {
        module: null,
        row: null
      };

      // set row dialog type to 'create'

      // Handle a new content element being added to the collection to display it in the interface.
      this.model.content.on('add', this.onAddContent, this);

      // Store the model data in the hidden field whenever it changes.
      //this.model.on('change:data', this.storeModelData, this);
    },

    /**
     * Render the page builder interface.
     *
     * @returns {PageBuilderView}
     */
    render: function() {
      this.$el.html(this.template());
      this.$el.addClass('page-builder');
      this.$contentContainer = this.$('.page-builder-content');
      this.eventBus.trigger('pb-page-builder-rendered', this);
      return this;
    },

    /**
     * Attach the page builder to the given container.
     *
     * @param {jQuery} $container
     * @param {Object=} options
     * @returns {PageBuilderView}
     */
    attach: function($container, options) {
      options = _.extend({
        dialog: false
      }, options);
      if (options.dialog) {
        // Add the builder to a dialog.
      } else {
        // Attach the page builder to the given $container.
        this.$el.appendTo($container);
        this.eventBus.trigger('pb-attached-to-container', [this, $container]);
      }

      this.attachedToDOM = true;

      return this;
    },

    /**
     * Set the hidden data field used to store data
     * and load its content into the page builder instance.
     *
     * @param {String} field
     * @returns {PageBuilderView}
     */
    setDataField: function(field) {
      this.$hiddenDataField = $(field);
      this.$hiddenDataField.data('page-builder', this);

      var fieldData = this.$hiddenDataField.val();

      if (fieldData !== '') {
        var data = {};

        try {
          data = JSON.parse(fieldData);
        } catch (err) {
          data = {};
        }

        this.model.loadFormData(data);
        this.data = data;
      }

      return this;
    },

    showAddWidgetDialog: function() {

    },

    showAddRowDialog: function() {

    },

    /**
     * Select the given contentElement.
     * Sets the 'selected' value on the model of the previously selected contentElement to false.
     * Sets the 'selected' value on the model contentElement to true.
     * Also stores the selection on the page builder model.
     *
     * @param contentElement
     */
    selectElement: function(contentElement) {
      var previousSelection = this.model.get('selected');
      if (previousSelection !== contentElement) {
        if (typeof previousSelection !== 'undefined') {
          previousSelection.model.set('selected', false);
        }
        contentElement.model.set('selected', true);
        this.model.set('selected', contentElement);
      }
    },

    onAddContent: function(contentModel, collection, options) {
      options = _.extend({
        skipAnimation: false
      }, options);

      /** @var {ContentAreaView|RowView|CellView|ModuleView} contentViewClass */
      var contentViewClass = this.contentViewClasses[contentModel.modelName];
      var contentView = new contentViewClass({
        model: contentModel,
        pageBuilder: this,
        parent: this
      });
      contentView.render();

      // Attach the content to the page builder DOM.
      if (typeof options.at === 'undefined' || collection.length <= 1) {
        // Insert the content at the end of the container.
        contentView.$el.appendTo(this.$contentContainer);
      } else {
        // Insert the content at a specific position
        contentView.$el.insertAfter(
          this.$contentContainer.find('> div').eq(options.at - 1)
        );
      }
    },

    getViewClass: function(modelName) {
      return this.contentViewClasses[modelName];
    },

    storeModelData: function() {

    },

    handleContentChange: function() {

    },

    handleDisplayBuilder: function() {

    }

  });

  return PageBuilderView;
});
