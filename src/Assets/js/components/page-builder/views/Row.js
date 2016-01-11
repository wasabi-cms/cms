define(function (require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');
  var CellView = require('wasabi.cms.package/components/page-builder/views/Cell');

  var RowView = Marionette.CompositeView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Row',

    /**
     * The template used to render the Row view.
     */
    template: '#pb-row',
    childViewContainer: '.cells',
    childView: CellView,

    childViewOptions: function() {
      return {
        parent: this
      }
    },

    /**
     * DOM events handled by this view.
     */
    events: {
      'click .delete-row': 'onDeleteRow'
    },

    /**
     * Collection events handles by this view.
     */
    collectionEvents: {
      'add': 'syncCellHeight',
      'remove': 'syncCellHeight',
      'change': 'syncCellHeight'
    },

    /**
     * Initialize the Row view.
     *
     * @param {Object} options
     */
    initialize: function (options) {
      this.collection = this.model.cells;

      WS.eventBus.on('syncAllCellHeights', _.bind(this.syncCellHeight, this));
    },

    /**
     * onRender callback
     * Called after the view has been rendered.
     */
    onRender: function () {
      this.$el.attr('data-type', 'row');
      this.$dragHandle = this.$('.row-sort');
      this.initializeDraggable();
    },

    /**
     * afterInitPlaceholder callback
     *
     * Called whenever a placeholder for this view is created.
     * Adjust the placholder minHeight to not contain the bottom margin
     * and add 1px (needed to avoid height flicker).
     *
     * @param {jQuery} $placeholder
     */
    afterInitPlaceholder: function ($placeholder) {
      $placeholder.css('minHeight', $placeholder.css('height').split('px')[0] - this.$el.css('marginBottom').split('px')[0] + 1);
    },

    /**
     * Get the placeholder width of this view.
     * This is called before the draggable clone's position is animated on top of the placeholder.
     *
     * @returns {Number}
     */
    getPlaceholderWidth: function () {
      return this.$placeholder.outerWidth() + 20;
    },

    /**
     * Synchronize the height of all cells of this row.
     *
     * @param {Event} event
     */
    syncCellHeight: function (event) {
      var maxHeight = 0;
      this.$childViewContainer.find('.cell-wrapper').css('minHeight', '').each(function (i, c) {
        maxHeight = Math.max(maxHeight, $(c).outerHeight());
      }).css('minHeight', maxHeight);
    },

    /**
     * Event handler
     * Handle deletion of a row.
     *
     * @param {Event} event
     */
    onDeleteRow: function (event) {
      this.$el.fadeOut(_.bind(function() {
        setTimeout(_.bind(function() {
          this._parent.collection.remove(this.model);
          WS.Cms.views.pageBuilder.model.rebuildContentData();
        }, this), 200);
      }, this));
    }

  });

  RowView.prototype = $.extend(RowView.prototype, DraggableMixin);

  return RowView;
});
