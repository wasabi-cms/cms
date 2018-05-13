<template>
  <div class="object--tree">
    <gemini-scrollbar :autoshow="true" ref="scrollContainer">
      <div class="object--tree--inner">
        <tree-root-node :object="rootNode"></tree-root-node>
        <tree-draggable :objects="objects" :options="draggableOptions" :refs="this.$refs"></tree-draggable>
      </div>
    </gemini-scrollbar>
  </div>
</template>


<script>

  import TreeDraggable from './component/TreeDraggable.vue';
  import TreeRootNode from './component/TreeRootNode.vue';
  import GeminiScrollbar from '../../components/GeminiScrollbar.vue';

  export default {
    name: 'app-tree',

    components: {
      GeminiScrollbar,
      TreeDraggable,
      TreeRootNode
    },

    data() {
      return {
        draggableOptions: {
          draggable: '.tree--node',
          dropTarget: '.tree--node--details',
          dragActiveClass: 'tree--drag-active',
          positionGhostToPointer: true,
          ghostOffsetTop: 15,
          ghostOffsetLeft: 15
        },
        rootNode: {
          name: 'Wasabi CMS Site'
        }
      }
    },

    computed: {
      objects() {
        return this.$store.state.tree.objects
      }
    },
  }
</script>

<style scoped lang="scss">
  .object--tree {
    height: calc(100% - 65px);
  }

  .object--tree--inner {
    padding: 10px 5px;
  }
</style>
