define(function (require) {

  var Marionette = require('marionette');
  var CellEditorView = require('wasabi.cms.package/components/row-dialog/views/CellEditor');

  var RowEditorView = Marionette.CompositeView.extend({
    tagName: 'div',
    className: 'row-editor',
    childView: CellEditorView,
    childViewContainer: '.cells',
    template: '#pb-row-editor',

    childEvents: {
      'select:cell': 'selectCell',
      'delete:cell': 'deleteCell'
    },

    ui: {
      rowLayoutSelect: '#rowLayoutSelect'
    },

    events: {
      'change @ui.rowLayoutSelect': 'updateLayout'
    },

    initialize: function (options) {
      this.dialog = options.dialog;
      this.collection = this.model.cells;
    },

    onRender: function () {
      this.$el.attr('data-type', 'row');
    },

    selectCell: function (cellView, cid) {
      this.collection.each(function (model) {
        if (model.cid === cid) {
          model.set('selected', true);
        } else {
          model.set('selected', false);
        }
      });
    },

    deleteCell: function (cellView, cell) {
      var cellIndex = this.collection.indexOf(cell);
      var leftCell = (cellIndex - 1) < 0 ? undefined : this.collection.at(cellIndex - 1);
      var rightCell = (cellIndex + 1) > this.collection.models.length ? undefined : this.collection.at(cellIndex + 1);
      var hasLeftCell = (typeof leftCell !== 'undefined');
      var hasRightCell = (typeof rightCell !== 'undefined');

      if (!hasLeftCell && !hasRightCell) {
        return;
      }

      if (hasLeftCell) {
        leftCell.get('meta').get('grid').set('colWidth', leftCell.get('meta').get('grid').get('colWidth') + cell.get('meta').get('grid').get('colWidth'));
      } else {
        rightCell.get('meta').get('grid').set('colWidth', rightCell.get('meta').get('grid').get('colWidth') + cell.get('meta').get('grid').get('colWidth'));
      }

      this.collection.remove(cell);
      this.render();
    },

    updateLayout: function (event) {
      var $select = $(event.currentTarget);
      var value = $select.val();
      if (value === '') {
        return;
      }

      var parts = value.split(':');
      var baseWidth = parseInt(parts[0]);
      var colWidth = parseInt(parts[1]);
      var cols = baseWidth / colWidth;

      var currentNumberOfCols = this.collection.models.length;

      if (cols > currentNumberOfCols) {
        // add new cols
        for (var i = 0, length = cols - currentNumberOfCols; i < length; i++) {
          this.model.addCell({
            meta: {
              type: 'Cell',
              grid: {
                colWidth: colWidth,
                baseWidth: baseWidth
              }
            },
            data: []
          });
        }
      }

      if (cols < currentNumberOfCols) {
        // remove cols from end
        this.collection.remove(this.collection.slice(cols - currentNumberOfCols));
      }

      // update the colWidth and baseWidth of all cells
      this.collection.each(function (cell) {
        cell.setColWidth(colWidth);
        cell.setBaseWidth(baseWidth);
      });
    }

  });

  return RowEditorView;

});
