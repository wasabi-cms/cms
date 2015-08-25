define(function(require) {

  var WS = require('wasabi');
  var Marionette = require('marionette');
  var DroppableMixin = require('wasabi.cms.package/views/DroppableMixin');
  var ModuleView = require('wasabi.cms.package/components/page-builder/views/Module');

  var CellView = Marionette.CompositeView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Cell',

    /**
     * The template used to render the Cell view.
     */
    template: '#pb-cell',
    childViewContainer: '.cell-wrapper',
    childView: ModuleView,

    /**
     * DOM events handled by this view.
     */
    events: {
      'click .cell-wrapper': 'selectCell',
      'placeholder-moved': 'onPlaceholderMoved'
    },

    /**
     * Initialize the Cell view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      this.collection = this.model.modules;

      WS.Cms.views.pageBuilder.droppableViews.push(this);

      //this.model.on('change:selected', this.onChangeSelectedState, this);
      //this.model.modules.on('add', this.parent.syncCellHeight, this.parent);
      //this.model.modules.on('remove', this.parent.syncCellHeight, this.parent);
    },

    onRender: function() {
      var grid = this.model.get('meta').get('grid');
      if (this.gridClass) {
        this.$el.removeClass(this.gridClass);
      }
      this.gridClass = 'grid-' + grid.get('colWidth') + '-' + grid.get('baseWidth');
      this.$el.addClass(this.gridClass);

      this.$el.attr('data-type', 'cell');

      this.$dragHandle = this.$('.resize-handle');
    },

    /**
     * Construct and return a json object that is passed to the template
     * for rendering.
     *
     * @returns {{contentAreaId: *, name: *, grid: *}}
     */
    //getTemplateData: function() {
    //  return {
    //    grid: this.model.get('meta').get('grid').toJSON()
    //  };
    //},

    /**
     * Mark this Cell view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    //selectCell: function(event) {
    //  this.pageBuilder.selectElement(this);
    //},

    /**
     * Update the visual selection state of this ContentArea view.
     * Triggered whenever the 'selected' attribute of the model changes.
     *
     * @param model
     * @param {boolean} value
     */
    //onChangeSelectedState: function(model, value) {
    //  this.$el.toggleClass('cell--selected', value);
    //},

    onPlaceholderMoved: function(event) {
      this._parent.syncCellHeight(event);
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

  CellView.prototype = $.extend(CellView.prototype, DroppableMixin);

  return CellView;
});