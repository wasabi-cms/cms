<template>
  <div class="object--tree">
    <gemini-scrollbar :autoshow="true" ref="scrollContainer">
      <div class="object--tree--inner">
        <tree-root-node :object="rootNode"></tree-root-node>
        <drag-listener ref="dragListener" :options="draggableOptions">
          <tree :nodes="nodes" ref="tree" :parentRefs="$refs"></tree>
        </drag-listener>
      </div>
    </gemini-scrollbar>
    <drag-ghost></drag-ghost>
  </div>
</template>

<script>

  import TreeRootNode from './component/TreeRootNode.vue';
  import Tree from './component/Tree.vue';
  import DragGhost from '../../components/DragGhost.vue';
  import DragListener from '../../components/DragListener.vue';
  import GeminiScrollbar from '../../components/GeminiScrollbar.vue';

  export default {
    name: 'app-tree',

    components: {
      DragGhost,
      DragListener,
      GeminiScrollbar,
      Tree,
      TreeRootNode
    },

    computed: {
      rootNode() {
        return this.$store.state.tree.rootNode;
      },

      nodes() {
        return this.$store.state.tree.rootNode.children
      },

      draggableOptions() {
        return {
          draggable: '.tree--node',
          dropTargetComponent: '.tree--node',
          dragActiveClass: 'tree--drag-active',
          positionGhostToPointer: true,
          ghostOffsetTop: 15,
          ghostOffsetLeft: 15
        }
      },

      isDragging() {
        return this.$root.draggableStore.dragging;
      }
    },

    mounted() {
      this.$refs.dragListener.addDropTarget(this.$refs.tree, '.tree--node--details');
      this.$store.dispatch('GET_PAGES');
    }
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
