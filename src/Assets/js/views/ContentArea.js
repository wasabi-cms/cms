define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Cocktail = require('cocktail');
  var DroppableMixin = require('wasabi.cms.package/views/DroppableMixin');
  var Handlebars = require('handlebars');

  var ContentAreaView = BaseContentView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'ContentArea',

    /**
     * The template used to render the ContentArea view.
     */
    template: Handlebars.compile($('#pb-content-area').html()),

    /**
     * Holds a reference to the .content-area div.
     */
    $contentArea: {},

    /**
     * DOM events handled by this view.
     */
    events: {
      'click .ca-content': 'selectContentArea'
    },

    /**
     * Initialize the ContentArea view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      this.contentContainer = '.ca-content';
      this.iterateOver = this.model.content;
      BaseContentView.prototype.initialize.call(this, options);

      this.pageBuilder.droppableViews.push(this);

      this.model.on('change:selected', this.onChangeSelectedState, this);
    },

    /**
     * Construct and return a json object that is passed to the template
     * for rendering.
     *
     * @returns {{contentAreaId: *, name: *, grid: *}}
     */
    getTemplateData: function() {
      return {
        contentAreaId: this.model.get('meta').get('contentAreaId'),
        name: this.model.get('meta').get('name'),
        grid: this.model.get('meta').get('grid').toJSON()
      }
    },

    /**
     * afterRender callback
     */
    afterRender: function() {
      this.$contentArea = this.$('.content-area');
    },

    /**
     * Mark this ContentArea view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    selectContentArea: function(event) {
      if (!$(event.target).is('.ca-content')) {
        return false;
      }
      this.pageBuilder.selectElement(this);
    },

    /**
     * Update the visual selection state of this ContentArea view.
     * Triggered whenever the 'selected' attribute of the model changes.
     *
     * @param model
     * @param {boolean} value
     */
    onChangeSelectedState: function(model, value) {
      this.$contentArea.toggleClass('content-area--selected', value);
    },

    /**
     * canDrop callback
     * Called whenever a draggable view is moved over this view.
     * Return true to allow dropping of the draggable, false otherwise.
     *
     * @param draggable
     * @returns {boolean}
     */
    canDrop: function(draggable) {
      if (typeof draggable.viewType === 'undefined') {
        return false;
      }
      return (draggable.viewType === 'Row' || draggable.viewType === 'Module');
    }

  });

  Cocktail.mixin(ContentAreaView, DroppableMixin);

  return ContentAreaView;
});
