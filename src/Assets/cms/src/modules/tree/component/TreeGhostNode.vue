<template>
  <div class="tree--ghost-node" :class="containerClasses()">
    <div class="tree--ghost-node--details">
      <div class="tree--ghost-node--image" :class="imageClasses()"></div>
      <div class="tree--ghost-node--name">{{ dragObject.name }}</div>
    </div>
    <div class="tree--ghost--node--info">
      <span v-if="dropMode === 'copy'">Zum Verschieben Strg drücken</span>
      <span v-if="dropMode === 'move'">Zum Kopieren Strg drücken</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tree-ghost-node',

    props: {
      dragObject: {
        type: Object,
        required: true
      },
      dragOver: {
        type: Object,
        required: true
      },
      dragBefore: {
        type: Object,
        required: true
      },
      dragAfter: {
        type: Object,
        required: true
      },
      dragTargetEl: {
        type: Element,
        required: false,
        default: null
      },
      dropMode: {
        type: String,
        required: true
      }
    },

    computed: {

      dragTargetIndex() {
        if (this.dragTargetEl === null) {
          return -1;
        }
        return Array.from(this.dragTargetEl.parentNode.children).indexOf(this.dragTargetEl);
      },

      dragTargetSiblingCount() {
        if (this.dragTargetEl === null) {
          return 'nope';
        }
        return this.dragTargetEl.parentNode.children.length;
      }
    },

    methods: {
      containerClasses() {
        return {
          'tree--ghost-node__denied':
            typeof this.dragOver.id === 'undefined' &&
            typeof this.dragBefore.id === 'undefined' &&
            typeof this.dragAfter.id === 'undefined'
        }
      },

      imageClasses() {
        return {
          'tree--ghost-node--image__denied':
            typeof this.dragOver.id === 'undefined' &&
            typeof this.dragBefore.id === 'undefined' &&
            typeof this.dragAfter.id === 'undefined',
          'tree--ghost-node--image__move-into': this.dropMode === 'move' && typeof this.dragOver.id !== 'undefined',
          'tree--ghost-node--image__move-before': this.dropMode === 'move' && typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex === 0,
          'tree--ghost-node--image__move-after': this.dropMode === 'move' && typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
          'tree--ghost-node--image__move-between':
            this.dropMode === 'move' &&
            (
              typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex !== 0 ||
              typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
            ),
          'tree--ghost-node--image__copy-into': this.dropMode === 'copy' && typeof this.dragOver.id !== 'undefined',
          'tree--ghost-node--image__copy-before': this.dropMode === 'copy' && typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex === 0,
          'tree--ghost-node--image__copy-after': this.dropMode === 'copy' && typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
          'tree--ghost-node--image__copy-between':
            this.dropMode === 'copy' &&
            (
              typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex !== 0 ||
              typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
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
  .tree--ghost-node {
    display: none;
    padding: 5px;
    background-color: #deebff;
    border: 1px solid #ccc;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .tree--ghost-node__denied {
    background-color: #f6d3cf;
    border: 1px solid #d66c68;
  }

  .tree--ghost-node--details {
    display: flex;
  }

  .tree--ghost-node--image {
    width: 18px;
    height: 18px;
    background: transparent no-repeat 50% 50%;
  }

  .tree--ghost-node--image__denied {
    background-image: url(../img/tree-drag-denied.png);
  }

  .tree--ghost-node--image__move-after {
    background-image: url(../img/tree-drag-move-after.png);
  }

  .tree--ghost-node--image__move-before {
    background-image: url(../img/tree-drag-move-before.png);
  }

  .tree--ghost-node--image__move-between {
    background-image: url(../img/tree-drag-move-between.png);
  }

  .tree--ghost-node--image__move-into {
    background-image: url(../img/tree-drag-move-into.png);
  }

  .tree--ghost-node--image__copy-after {
    background-image: url(../img/tree-drag-copy-after.png);
  }

  .tree--ghost-node--image__copy-before {
    background-image: url(../img/tree-drag-copy-before.png);
  }

  .tree--ghost-node--image__copy-between {
    background-image: url(../img/tree-drag-copy-between.png);
  }

  .tree--ghost-node--image__copy-into {
    background-image: url(../img/tree-drag-copy-into.png);
  }

  .tree--ghost-node--name {
    padding-left: 3px;
    width: calc(100% - 18px);
    font-size: 13px;
    line-height: 18px;
  }

  .tree--ghost--node--info {
    padding: 5px 5px 2px;
    font-size: 13px;
    line-height: 18px;
  }
</style>
