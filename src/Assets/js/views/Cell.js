define(function(require) {

  var $ = require('jquery');
  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Cocktail = require('cocktail');
  var DroppableMixin = require('wasabi.cms.package/views/DroppableMixin');
  var Handlebars = require('handlebars');

  var CellView = BaseContentView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Cell',

    /**
     * The template used to render the Cell view.
     */
    templateSelector: '#pb-cell',

    /**
     * DOM events handled by this view.
     */
    events: {
      'click .cell-wrapper': 'selectCell'
    },

    /**
     * Initialize the Cell view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      this.iterateOver = this.model.modules;
      this.contentContainer = '.cell-wrapper';
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
        grid: this.model.get('meta').get('grid').toJSON()
      };
    },

    /**
     * Mark this Cell view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    selectCell: function(event) {
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
      this.$el.toggleClass('cell--selected', value);
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
      return draggable.viewType === 'Module';
    }

  });

  Cocktail.mixin(CellView, DroppableMixin);

  return CellView;
});