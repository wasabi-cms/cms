define(function (require) {

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
    dragOver: function (event, draggable) {
      // when the draggable intersects the placeholder to nothing
      if (draggable.hitTest(event.pageX, event.pageY, draggable.$placeholder)) {
        return;
      }

      if (!this.$childViewContainer) {
        this.$childViewContainer = this.$(this.childViewContainer);
      }

      // get all items of this view
      var $items = this.$childViewContainer.find('> div').filter(function (index, item) {
        var $item = $(item);
        return (
          !$item.hasClass('placeholder') && !$item.hasClass('dragging') &&
          $item.css('display') !== 'none'
        );
      });
      var $intersectedItem = null;
      var action = null;

      // Iterate over each item and determine the proper dom manipulation action.
      $items.each(function () {
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

      var $placeholderParent = draggable.$placeholder.parent();

      switch (action) {
        case 'append':
          this.$childViewContainer.append(draggable.$placeholder);
          break;
        case 'before':
          $intersectedItem.before(draggable.$placeholder);
          break;
        case 'after':
          $intersectedItem.after(draggable.$placeholder);
          break;
      }

      $placeholderParent.trigger('placeholder-moved');
      draggable.$placeholder.parent().trigger('placeholder-moved');
    },

    /**
     * drop callback
     * Called whenever a draggable view is dropped on a droppable view.
     *
     * @param draggable
     */
    drop: function (draggable) {
      var at = draggable.$placeholder.index() - 1;
      var targetCollection = this.collection;

      // Check if the draggable position has really changed
      //if (typeof targetCollection.at(at) !== 'undefined') {
      //    if (targetCollection.at(at).cid === draggable.model.cid) {
      //        return;
      //    }
      //}

      // If it has changed, then remove the model from its old collection and add it
      // to the new collection at the specified position.
      draggable._parent.collection.remove(draggable.model, {silent: true});
      targetCollection.add(draggable.model, {at: at, silent: true});
      draggable._parent = this;

      // Force the pageBuilder to rebuild the value of the $contentField
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    }

  };

  return DroppableMixin;

});
