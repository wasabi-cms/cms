<template>
  <div class="object-tree--actions">
    <div class="object-tree--buttons">
      <drag-listener ref="dragListener" :options="draggableOptions">
        <new-page></new-page>
      </drag-listener>
    </div>
  </div>
</template>

<script>
  import DragListener from '../../components/DragListener.vue'
  import NewPage from './component/NewPage.vue';

  export default {
    name: 'app-tree-actions',

    components: {
      DragListener,
      NewPage
    },

    computed: {
      draggableOptions() {
        return {
          draggable: '.object-tree--button',
          dropTargetComponent: '.tree--node',
          dragActiveClass: 'object-tree--drag-active',
          positionGhostToPointer: true,
          ghostOffsetTop: 15,
          ghostOffsetLeft: 15
        }
      },
      isDragging() {
        return this.$root.draggableStore.dragging;
      }
    },

    methods: {

    },

    mounted() {
      this.$refs.dragListener.addDropTarget(this.$el.parentElement, '.tree--node__root > .tree--node--details');
      this.$refs.dragListener.addDropTarget(this.$el.parentElement, '.object--tree .tree--nodes .tree--node--details');
    }
  }
</script>

<style scoped lang="scss">
  .object-tree--actions {
    height: 65px;
    background-color: #f0f0f5;
    border-bottom: 1px solid #c3c3c3;
  }
</style>
