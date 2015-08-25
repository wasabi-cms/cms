define(function(require) {

  var $ = require('jquery');
  var BaseView = require('common/BaseView');
  var Marionette = require('marionette');

  var CellEditorView = Marionette.ItemView.extend({
    tagName: 'div',
    template: '#pb-cell-editor',

    events: {
      'mousedown .resize-handle': 'onMouseDown',
      'click .cell-remove': 'removeCell',
      'click .cell-wrapper': 'selectCell'
    },

    modelEvents: {
      'change:selected': 'selectedChanged'
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

    templateHelpers: function() {
      return {
        colWidth: _.bind(function() {
          var grid = this.model.get('meta').get('grid');
          return grid.get('colWidth');
        }, this),
        baseWidth: _.bind(function() {
          var grid = this.model.get('meta').get('grid');
          return grid.get('baseWidth');
        }, this)
      }
    },

    selectedChanged: function(cell, selected) {
      this.$el.toggleClass('cell--selected', selected);
    },

    initialize: function(options) {
      this.$doc = $(document);
      this.listenTo(this.model.get('meta').get('grid'), 'change:colWidth', this.render, this);
      this.listenTo(this.model.get('meta').get('grid'), 'change:baseWidth', this.render, this);
    },

    onMouseDown: function(event) {
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
    },

    onMouseMove: function(event) {
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

    onMouseUp: function(event) {
      this.$dragHandle.removeClass('hover');
      $('body').removeClass('cursor-force--col-resize');

      this.$doc.off('mousemove');
      this.$doc.off('mouseup');

      if (this.isDragging) {
        event.preventDefault();
        this.isDragging = false;
      }
    },

    removeCell: function(event) {
      event.preventDefault();
      event.stopPropagation();
      this.triggerMethod('delete:cell', this.model);
    },

    selectCell: function() {
      this.triggerMethod('select:cell', this.model.cid);
    }

  });

  return CellEditorView;

});
