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
    template: '#pb-Row',
    childViewContainer: '.pb-Row-cells',
    childView: CellView,

    childViewOptions: function() {
      return {
        parent: this
      };
    },

    /**
     * DOM events handled by this view.
     */
    events: {
      'click .pb-Row-edit': 'onEditRow',
      'click .pb-Row-duplicate': 'onDuplicateRow',
      'click .pb-Row-clear': 'onClearRow',
      'click .pb-Row-delete': 'onDeleteRow'
    },

    /**
     * Initialize the Row view.
     *
     * @param {Object} options
     */
    initialize: function (options) {
      this.collection = this.model.cells;
    },

    /**
     * onRender callback
     * Called after the view has been rendered.
     */
    onRender: function () {
      this.$el.attr('data-type', 'row');
      this.$dragHandle = this.$('.pb-Row-move');
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
     * Event handler
     * Handle editing of a row.
     *
     * @param {Event} event
     */
    onEditRow: function (event) {
      WS.Cms.views.pageBuilder.showEditRowDialog(this.model);
    },

    /**
     * Event handler
     * Handle duplication of a row.
     *
     * @param {Event} event
     */
    onDuplicateRow: function (event) {
      var index = this._parent.collection.indexOf(this.model);
      var clone = $.extend(true, {}, this.model.getData());
      this._parent.collection.add(clone, {at: index + 1});
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    },

    /**
     * Event handler
     * Handle clearing the row content.
     *
     * @param {Event} event
     */
    onClearRow: function (event) {
      this.model.cells.each(function (cell) {
        cell.modules.reset();
      });
      WS.Cms.views.pageBuilder.model.rebuildContentData();
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
    },

    showCellWidths: function() {
      this.$el.addClass('pb-Row-cells--resizing');
    },

    hideCellWidths: function() {
      this.$el.removeClass('pb-Row-cells--resizing');
    }

  });

  RowView.prototype = $.extend(RowView.prototype, DraggableMixin);

  return RowView;
});
