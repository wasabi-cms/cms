define(function(require) {

  var $ = require('jquery');
  var Handlebars = require('handlebars');
  var BaseView = require('common/BaseView');

  var CellEditorView = BaseView.extend({

    template: '',

    events: {
      'mousedown .resize-handle': 'onMouseDown'
    },

    initialize: function(options) {
      this.rowEditor = options.rowEditor;
      this.template = Handlebars.compile($('#pb-cell-editor').html());
      this.$doc = $(document);

      var currentIndex = this.model.collection.indexOf(this.model);
      this.leftCell = this.model.collection.at(currentIndex - 1);
      this.rightCell = this.model;

      this.model.get('meta').get('grid').on('change:colWidth', this.updateCell, this);
    },

    render: function() {
      var grid = this.model.get('meta').get('grid');
      this.setElement(this.template({
        grid: grid.toJSON(),
        cellWidth: '<span class="cell-colwidth">' + grid.get('colWidth') + '</span>/' + grid.get('baseWidth')
      }));
      this.$dragHandle = this.$('.resize-handle');
      this.rowEditor.$content.append(this.$el);
    },

    updateCell: function() {
      var colWidth = this.model.getColWidth();
      var baseWidth = this.model.getBaseWidth();

      this.$el.attr('class', '');
      this.$el.addClass('grid-' + colWidth + '-' + baseWidth);
      this.$('.cell-width').html('<span class="cell-colwidth">' + colWidth + '</span>/' + baseWidth);
    },

    onMouseDown: function(event) {
      if (event.currentTarget !== this.$dragHandle[0]) {
        return;
      }
      event.preventDefault();

      this.baseWidth = this.rowEditor.$content.width();
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

      if (diffPercent <= -1) {
        var newLeftColWidth = this.leftCell.getColWidth() - 1;
        if (newLeftColWidth >= 1) {
          this.leftCell.setColWidth(this.leftCell.getColWidth() - 1);
          this.rightCell.setColWidth(this.rightCell.getColWidth() + 1);
          this.startX = event.pageX;
        }
      }

      if (diffPercent >= 1) {
        var newRightColWidth = this.rightCell.getColWidth() - 1;
        if (newRightColWidth >= 1) {
          this.rightCell.setColWidth(this.rightCell.getColWidth() - 1);
          this.leftCell.setColWidth(this.leftCell.getColWidth() + 1);
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
    }

  });

  return CellEditorView;

});
