define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Handlebars = require('handlebars');

  var CellView = BaseContentView.extend({
    viewType: 'Cell',

    template: Handlebars.compile($('#pb-cell').html()),

    events: {
      'drag-over': 'onDragOver',
      'click .cell-wrapper': 'selectCell'
    },

    initialize: function(options) {
      this.iterateOver = this.model.modules;
      this.contentContainer = '.cell-wrapper';
      BaseContentView.prototype.initialize.call(this, options);

      this.pageBuilder.droppableViews.push(this);

      this.model.on('change:selected', this.onChangeSelectedState, this);
    },

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

    canDrop: function(draggable) {
      if (typeof draggable.viewType === 'undefined') {
        return false;
      }
      return draggable.viewType === 'Module';
    },

    onDragOver: function(event, originalEvent, draggable) {
      // when the draggable intersects the placeholder to nothing
      if (draggable.hitTest(originalEvent.pageX, originalEvent.pageY, draggable.$placeholder)) {
        return;
      }

      // get all items of this view
      var $items = this.$contentContainer.find('> div').filter(function (index, item) {
        var $item = $(item);
        return (
          !$item.hasClass('placeholder') && !$item.hasClass('dragging') &&
          $item.css('display') !== 'none'
        );
      });
      var $intersectedItem = null;
      var action = 'append';

      $items.each(function () {
        var min = $(this).offset().top - draggable.$win.scrollTop();
        var max = min + $(this).outerHeight();
        var currentY = originalEvent.pageY - draggable.$win.scrollTop();
        var middle = parseInt((min + max) / 2);
        if (currentY <= middle) {
          $intersectedItem = $(this);
          action = 'before';
          return false;
        }
        if (currentY > middle) {
          $intersectedItem = $(this);
          action = 'after';
          return false;
        }
      });

      if ($intersectedItem === null && $items.length > 0) {
        return;
      }

      if (action === 'append' && $items.length === 0) {
        this.$contentContainer.append(draggable.$placeholder);
      } else if (action === 'before') {
        $intersectedItem.before(draggable.$placeholder);
      } else {
        $intersectedItem.after(draggable.$placeholder);
      }
    }
  });

  return CellView;
});