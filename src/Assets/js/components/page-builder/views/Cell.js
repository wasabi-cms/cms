define(function (require) {

  var $ = require('jquery');
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
      'placeholder-moved': 'onPlaceholderMoved',
      'mousedown .resize-handle': 'onMouseDown'
    },

    /**
     * Model events handles by this view.
     */
    modelEvents: {
      'change:selected': 'onChangeSelectedState'
    },

    /**
     * Initialize the Cell view.
     *
     * @param {Object} options
     */
    initialize: function (options) {
      this.collection = this.model.modules;
      this.parent = options.parent;
      this.$doc = $(document);

      this.listenTo(this.model.get('meta').get('grid'), 'change:colWidth', this.render, this);

      WS.Cms.views.pageBuilder.droppableViews.push(this);
    },

    onRender: function () {
      var grid = this.model.get('meta').get('grid');
      if (this.gridClass) {
        this.$el.removeClass(this.gridClass);
      }
      this.gridClass = 'grid-' + grid.get('colWidth') + '-' + grid.get('baseWidth');
      this.$el.addClass(this.gridClass);

      this.$el.attr('data-type', 'cell');

      this.$dragHandle = this.$('.resize-handle');
    },

    templateHelpers: function () {
      return {
        colWidth: _.bind(function () {
          var grid = this.model.get('meta').get('grid');
          return grid.get('colWidth');
        }, this),
        baseWidth: _.bind(function () {
          var grid = this.model.get('meta').get('grid');
          return grid.get('baseWidth');
        }, this)
      };
    },

    onMouseDown: function (event) {
      if (event.currentTarget !== this.$dragHandle[0]) {
        return;
      }
      event.preventDefault();

      this.baseWidth = this._parent.$childViewContainer.width();
      this.baseColWidth = this.baseWidth / this.model.get('meta').get('grid').get('baseWidth');
      this.startX = event.pageX;

      this.$doc.on('mousemove', _.bind(this.onMouseMove, this));
      this.$doc.on('mouseup', _.bind(this.onMouseUp, this));

      $('body').addClass('cursor-force--col-resize');
      this.$dragHandle.addClass('hover');
      this._parent.showCellWidths();
    },

    onMouseMove: function (event) {
      if (!this.isDragging) {
        this.isDragging = true;
      }

      var diff = -(this.startX - event.pageX);
      var diffPercent = diff / this.baseColWidth;
      var leftCell = this.model.collection.at(this.model.collection.indexOf(this.model) - 1);

      if (diffPercent <= -1) {
        // left cell - 1, this.model + 1
        var newLeftColWidth = leftCell.getColWidth() - 1;
        if (newLeftColWidth >= 1) {
          leftCell.setColWidth(leftCell.getColWidth() - 1);
          this.model.setColWidth(this.model.getColWidth() + 1);
          this.startX = event.pageX;
        }
      }

      if (diffPercent >= 1) {
        // left cell + 1, this.model - 1
        var newColWidth = this.model.getColWidth() - 1;
        if (newColWidth >= 1) {
          leftCell.setColWidth(leftCell.getColWidth() + 1);
          this.model.setColWidth(this.model.getColWidth() - 1);
          this.startX = event.pageX;
        }
      }
    },

    onMouseUp: function (event) {
      this.$dragHandle.removeClass('hover');
      $('body').removeClass('cursor-force--col-resize');

      this.$doc.off('mousemove');
      this.$doc.off('mouseup');

      if (this.isDragging) {
        event.preventDefault();
        this.isDragging = false;
        this._parent.hideCellWidths();
        WS.Cms.views.pageBuilder.model.rebuildContentData();
      }
    },

    /**
     * Mark this Cell view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    selectCell: function (event) {
      WS.Cms.views.pageBuilder.selectElement(this);
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
     * Synchronize the cell height of all neighbor cells whenever the placeholder changes position.
     *
     * @param {Event} event
     */
    onPlaceholderMoved: function (event) {
    },

    /**
     * canDrop callback
     * Called whenever a draggable view is moved over this view.
     * Return true to allow dropping of the draggable, false otherwise.
     *
     * @param draggable
     * @returns {boolean}
     */
    canDrop: function (draggable) {
      if (typeof draggable.viewType === 'undefined') {
        return false;
      }
      return draggable.viewType === 'Module';
    }

  });

  CellView.prototype = $.extend(CellView.prototype, DroppableMixin);

  return CellView;
});
