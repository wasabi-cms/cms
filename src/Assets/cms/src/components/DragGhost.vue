<template>
  <div class="drag-ghost" :class="containerClasses()" :style="ghostStyles">
    <div class="drag-ghost--details">
      <div class="drag-ghost--image" :class="imageClasses()"></div>
      <div class="drag-ghost--name">{{ title }}</div>
    </div>
    <div class="drag-ghost--info">
      <span v-if="dropMode === 'copy'">Zum Verschieben Strg drücken</span>
      <span v-if="dropMode === 'move'">Zum Kopieren Strg drücken</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'drag-ghost',

    computed: {
      title() {
        return this.$root.draggableStore.title;
      },

      dropMode() {
        return this.$root.draggableStore.dropMode;
      },

      ghostStyles() {
        return this.$root.draggableStore.ghostStyles;
      },

      dragTargetIndex() {
        if (this.$root.draggableStore.dragTargetComponent === null) {
          return -1;
        }
        return Array.from(this.$root.draggableStore.dragTargetComponent.$el.parentNode.children).indexOf(this.$root.draggableStore.dragTargetComponent.$el);
      },

      dragTargetSiblingCount() {
        if (this.$root.draggableStore.dragTargetComponent === null) {
          return 'nope';
        }
        return this.$root.draggableStore.dragTargetComponent.$el.parentNode.children.length;
      }
    },

    methods: {
      containerClasses() {
        return {
          'drag-ghost__denied':
            this.$root.draggableStore.dragging === true &&
            this.$root.draggableStore.dragOverComponent === null &&
            this.$root.draggableStore.dragBeforeComponent === null &&
            this.$root.draggableStore.dragAfterComponent === null
        }
      },

      imageClasses() {
        return {
          'drag-ghost--image__denied':
            this.$root.draggableStore.dragging === true &&
            this.$root.draggableStore.dragOverComponent === null &&
            this.$root.draggableStore.dragBeforeComponent === null &&
            this.$root.draggableStore.dragAfterComponent === null,
          'drag-ghost--image__move-into':
            this.$root.draggableStore.dropMode === 'move' &&
            this.$root.draggableStore.dragOverComponent !== null,
          'drag-ghost--image__move-before':
            this.$root.draggableStore.dropMode === 'move' &&
            this.$root.draggableStore.dragBeforeComponent !== null &&
            this.dragTargetIndex === 0,
          'drag-ghost--image__move-after':
            this.$root.draggableStore.dropMode === 'move' &&
            this.$root.draggableStore.dragAfterComponent !== null &&
            this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
          'drag-ghost--image__move-between':
            this.$root.draggableStore.dropMode === 'move' &&
            (
              this.$root.draggableStore.dragBeforeComponent !== null && this.dragTargetIndex !== 0 ||
              this.$root.draggableStore.dragAfterComponent !== null && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
            ),
          'drag-ghost--image__copy-into':
            this.$root.draggableStore.dropMode === 'copy' &&
            this.$root.draggableStore.dragOverComponent !== null,
          'drag-ghost--image__copy-before':
            this.$root.draggableStore.dropMode === 'copy' &&
            this.$root.draggableStore.dragBeforeComponent !== null &&
            this.dragTargetIndex === 0,
          'drag-ghost--image__copy-after':
            this.$root.draggableStore.dropMode === 'copy' &&
            this.$root.draggableStore.dragAfterComponent !== null &&
            this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
          'drag-ghost--image__copy-between':
            this.$root.draggableStore.dropMode === 'copy' &&
            (
              this.$root.draggableStore.dragBeforeComponent !== null && this.dragTargetIndex !== 0 ||
              this.$root.draggableStore.dragAfterComponent !== null && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
            )
        }
      }
    },

    mounted() {
      document.body.insertBefore(this.$el, document.body.lastChild);
    }
  };
</script>

<style scoped lang="scss">
  .drag-ghost {
    display: none;
    padding: 5px;
    background-color: #deebff;
    border: 1px solid #ccc;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .drag-ghost__denied {
    background-color: #f6d3cf;
    border: 1px solid #d66c68;
  }

  .drag-ghost--details {
    display: flex;
  }

  .drag-ghost--image {
    width: 18px;
    height: 18px;
    background: transparent no-repeat 50% 50%;
  }

  .drag-ghost--image__denied {
    background-image: url(../img/tree-drag-denied.png);
  }

  .drag-ghost--image__move-after {
    background-image: url(../img/tree-drag-move-after.png);
  }

  .drag-ghost--image__move-before {
    background-image: url(../img/tree-drag-move-before.png);
  }

  .drag-ghost--image__move-between {
    background-image: url(../img/tree-drag-move-between.png);
  }

  .drag-ghost--image__move-into {
    background-image: url(../img/tree-drag-move-into.png);
  }

  .drag-ghost--image__copy-after {
    background-image: url(../img/tree-drag-copy-after.png);
  }

  .drag-ghost--image__copy-before {
    background-image: url(../img/tree-drag-copy-before.png);
  }

  .drag-ghost--image__copy-between {
    background-image: url(../img/tree-drag-copy-between.png);
  }

  .drag-ghost--image__copy-into {
    background-image: url(../img/tree-drag-copy-into.png);
  }

  .drag-ghost--name {
    padding-left: 3px;
    width: calc(100% - 18px);
    font-size: 13px;
    line-height: 18px;
  }

  .drag-ghost--info {
    padding: 5px 5px 2px;
    font-size: 13px;
    line-height: 18px;
  }
</style>
