<template>
  <div class="drag-listener">
    <slot></slot>
  </div>
</template>

<script>
  import DragListener from './DragListener';

  export default {
    name: 'drag-listener',

    props: {
      options: {
        type: Object,
        required: false,
        default: () => {}
      }
    },

    data() {
      return {
        dragListener: null
      }
    },

    mounted() {
      const options = {
        ...this.options,
        onDragStart: this.onDragStart.bind(this),
        onDragMove: this.onDragMove.bind(this),
        onDragEnd: this.onDragEnd.bind(this),
        onDragOver: this.onDragOver.bind(this),
        onDragBefore: this.onDragBefore.bind(this),
        onDragAfter: this.onDragAfter.bind(this),
        onDragCancel: this.onDragCancel.bind(this),
        onResetDrag: this.onResetDrag.bind(this),
        onCtrlPressed: this.onCtrlPressed.bind(this)
      };

      this.dragListener = new DragListener(this.$el, options);
    },

    methods: {
      addDropTarget(context, selector) {
        this.dragListener.addDropTarget(context.$el || context, selector);
      },

      onDragStart(event) {
        this.$root.draggableStore.dragging = true;
        this.$root.draggableStore.dragComponent = event.data.dragEl.__vue__;
        this.$root.draggableStore.ghostStyles = event.data.ghostStyles;
        if (typeof this.$root.draggableStore.dragComponent.onDragStart === 'function') {
          this.$root.draggableStore.dragComponent.onDragStart(this.$root.draggableStore);
        }
      },

      onDragMove(event) {
        this.$root.draggableStore.ghostStyles.transform = event.data.transform;
      },

      onDragEnd() {
        if (this.$root.draggableStore.dragTargetComponent !== null) {
          let type = null;
          if (this.$root.draggableStore.dragBeforeComponent !== null) {
            type = 'before';
          } else if (this.$root.draggableStore.dragAfterComponent !== null) {
            type = 'after';
          } else if (this.$root.draggableStore.dragOverComponent !== null) {
            type = 'over';
          }
          if (type !== null && typeof this.$root.draggableStore.dragTargetComponent.onDrop === 'function') {
            this.$root.draggableStore.dragTargetComponent.onDrop(type, this.$root.draggableStore.dragComponent);
          }
        }
        this.onResetDrag();
        this.$root.draggableStore.dragging = false;
        this.$root.draggableStore.dragComponent = null;
        this.$root.draggableStore.dropMode = 'move';
        this.$root.draggableStore.ghostStyles = {};
        this.$root.draggableStore.title = '';
      },

      onDragCancel() {
        this.onResetDrag();
        this.$root.draggableStore.dragging = false;
        this.$root.draggableStore.dragComponent = null;
        this.$root.draggableStore.dropMode = 'move';
        this.$root.draggableStore.ghostStyles = {};
        this.$root.draggableStore.title = '';
      },

      onDragOver(event) {
        const targetComponent = event.data.dropTarget.current.__vue__;
        let canReceiveDrop = false;
        if (typeof targetComponent.canReceiveDrop === 'function') {
          canReceiveDrop = targetComponent.canReceiveDrop('over', this.$root.draggableStore.dragComponent, event.data);
        }
        this.$root.draggableStore.dragOverComponent = canReceiveDrop ? targetComponent : null;
        this.$root.draggableStore.dragBeforeComponent = null;
        this.$root.draggableStore.dragAfterComponent = null;
        this.$root.draggableStore.dragTargetComponent = targetComponent;
      },

      onDragBefore(event) {
        const targetComponent = event.data.dropTarget.current.__vue__;
        let canReceiveDrop = false;
        if (typeof targetComponent.canReceiveDrop === 'function') {
          canReceiveDrop = targetComponent.canReceiveDrop('before', this.$root.draggableStore.dragComponent, event.data);
        }
        if (!canReceiveDrop && typeof targetComponent.changeDropTarget === 'function') {
          if (targetComponent.changeDropTarget('before', this.$root.draggableStore.dragComponent, event.data)) {
            return;
          }
        }
        this.$root.draggableStore.dragOverComponent = null;
        this.$root.draggableStore.dragBeforeComponent = canReceiveDrop ? targetComponent : null;
        this.$root.draggableStore.dragAfterComponent = null;
        this.$root.draggableStore.dragTargetComponent = targetComponent;
      },

      onDragAfter(event) {
        const targetComponent = event.data.dropTarget.current.__vue__;
        let canReceiveDrop = false;
        if (typeof targetComponent.canReceiveDrop === 'function') {
          canReceiveDrop = targetComponent.canReceiveDrop('after', this.$root.draggableStore.dragComponent, event.data);
        }
        if (!canReceiveDrop && typeof targetComponent.changeDropTarget === 'function') {
          if (targetComponent.changeDropTarget('after', this.$root.draggableStore.dragComponent, event.data)) {
            return;
          }
        }
        this.$root.draggableStore.dragOverComponent = null;
        this.$root.draggableStore.dragBeforeComponent = null;
        this.$root.draggableStore.dragAfterComponent = canReceiveDrop ? targetComponent : null;
        this.$root.draggableStore.dragTargetComponent = targetComponent;
      },

      onResetDrag() {
        this.$root.draggableStore.dragOverComponent = null;
        this.$root.draggableStore.dragBeforeComponent = null;
        this.$root.draggableStore.dragAfterComponent = null;
        this.$root.draggableStore.dragTargetComponent = null;
      },

      onCtrlPressed() {
        this.$root.draggableStore.dropMode = this.$root.draggableStore.dropMode === 'move' ? 'copy' : 'move';
      }
    }
  }
</script>

<style lang="scss">
  .draggable--is-dragging {
    cursor: grabbing;
  }
</style>
