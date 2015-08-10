define(function(require) {

  var DroppableMixin = {

    events: {
      'drag-over': 'onDragOver',
      'drag-over-forbidden': 'onDragOverForbidden',
      'drag-out': 'onDragOut',
      'dropped': 'onDropped'
    },

    droppable: function(options) {
      options = options || {};

      this.$el.data('view', this);
      this.$el.data('collection', this.collection);
      this.collection.view = this;
      return this;
    },

    canDrop: function(draggableView) {
      return true;
    },

    onDragOver: function() {
      this.$el.addClass('dragover');
    },

    onDragOverForbidden: function() {
      this.$el.addClass('dragover-forbidden');
    },

    onDragOut: function() {
      this.$el.removeClass('dragover dragover-forbidden');
    },

    /**
     * Called when a draggable view is dropped into a droppable view.
     * Should be implemented by the child class.
     *
     * @param event
     * @param draggableView
     */
    onDropped: function(event, draggableView) {
      console.info('Implement the "onDropped" method on the child class!');
    }

  };

  return DroppableMixin;

});