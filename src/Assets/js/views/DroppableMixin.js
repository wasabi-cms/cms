define(function(require) {

  var WS = require('wasabi');

  var DroppableMixin = {

    /**
     * dragOver callback
     * Called whenever a draggable view is dragged over a droppable view
     * that accepts the drop (canDrop).
     *
     * @param {Event} event
     * @param draggable
     */
    dragOver: function(event, draggable) {
      // when the draggable intersects the placeholder to nothing
      if (draggable.hitTest(event.pageX, event.pageY, draggable.$placeholder)) {
        return;
      }

      // get all items of this view
      var $items = this.$contentContainer.find('> div').filter(function(index, item) {
        var $item = $(item);
        return (
          !$item.hasClass('placeholder') &&
          !$item.hasClass('dragging') &&
          $item.css('display') !== 'none'
        );
      });
      var $intersectedItem = null;
      var action = null;

      // Iterate over each item and determine the proper dom manipulation action.
      $items.each(function() {
        var min = $(this).offset().top - draggable.$win.scrollTop();
        var max = min + $(this).outerHeight();
        var currentY = event.pageY - draggable.$win.scrollTop();
        var middle = parseInt((min + max) / 2);
        if (currentY <= middle) {
          $intersectedItem = $(this);
          action = 'before';
          return false;
        }
        if (currentY > middle && currentY <= max) {
          $intersectedItem = $(this);
          action = 'after';
          return false;
        }
      });

      if ($intersectedItem === null && $items.length === 0) {
        action = 'append';
      }

      switch (action) {
        case 'append':
          this.$contentContainer.append(draggable.$placeholder);
          break;
        case 'before':
          $intersectedItem.before(draggable.$placeholder);
          break;
        case 'after':
          $intersectedItem.after(draggable.$placeholder);
          break;
      }

      if (draggable.viewType === 'Module') {
        WS.eventBus.trigger('placeholder-moved');
      }
    },

    /**
     * drop callback
     * Called whenever a draggable view is dropped on a droppable view.
     *
     * @param draggable
     */
    drop: function(draggable) {
      var at = draggable.$placeholder.index() - 1;
      var targetCollection = this.model.getCollection();

      // Check if the draggable position has really changed
      if (
        typeof targetCollection.at(at) !== 'undefined' &&
        targetCollection.at(at).cid === draggable.model.cid
      ) {
        return;
      }

      // If it has changed, then remove the model from its old collection and add it
      // to the new collection at the specified position.
      draggable.model.parent.getCollection().remove(draggable.model);
      targetCollection.add(draggable.model, {at: at});

      // Update the paren to the new parent model.
      draggable.model.parent = this.model;

      // Force the pageBuilder to rebuild the value of the $contentField
      draggable.model.pageBuilder.rebuildContentField();
    }

  };

  return DroppableMixin;

});