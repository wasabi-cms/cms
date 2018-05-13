<template>
  <div class="tree--draggable" :class="containerClasses()">
    <tree
      :objects="objects"
      :dragObject="dragObject"
      :dragOver="dragOver"
      :dragBefore="dragBefore"
      :dragAfter="dragAfter"
      :dragTarget="dragTarget"
      :scrollbar="scrollbar"
    ></tree>
    <tree-ghost-node
      :dragObject="dragObject"
      :dragOver="dragOver"
      :dragBefore="dragBefore"
      :dragAfter="dragAfter"
      :dragTargetEl="dragTargetEl"
      :dropMode="dropMode"
      :style="ghostStyles"
    ></tree-ghost-node>
  </div>
</template>

<script>
  import TreeDraggable from './TreeDraggable';

  import Tree from './Tree.vue';
  import TreeGhostNode from './TreeGhostNode.vue';

  export default {
    name: 'tree-draggable',

    props: {
      objects: Array,
      options: Object,
      refs: Object
    },

    components: {
      Tree,
      TreeGhostNode
    },

    data() {
      return {
        tree: null,
        dragObject: {},
        dragging: false,
        ghostStyles: {},
        dragOver: {},
        dragBefore: {},
        dragAfter: {},
        dragTarget: {},
        dragTargetEl: null,
        dropMode: 'move',
        scrollbar: null
      }
    },

    mounted() {
      const treeComponent = this.findComponent('tree');

      const options = {
        ...this.options,
        onDragStart: this.onDragStart.bind(this),
        onDragMove: this.onDragMove.bind(this),
        onDragEnd: this.onDragEnd.bind(this),
        onDragOver: this.onDragOver.bind(this),
        onDragBefore: this.onDragBefore.bind(this),
        onDragAfter: this.onDragAfter.bind(this),
        onResetDrag: this.onResetDrag.bind(this),
        onCtrlPressed: this.onCtrlPressed.bind(this)
      };

      this.tree = new TreeDraggable(treeComponent.$el, options);
      this.scrollbar = this.refs.scrollContainer.srollbar;
      this.scrollbar && this.scrollbar.update();
    },

    methods: {

      findComponent(name) {
        let component = null;

        this.$children.some((childComponent) => {
          if (childComponent.$options.name === name) {
            component = childComponent;
            return true;
          }
        });

        return component;
      },

      onDragStart(event) {
        this.dragging = true;
        this.dragObject = {...event.data.dragEl.__vue__.object};
        this.ghostStyles = event.data.ghostStyles;
      },

      onDragMove(event) {
        this.ghostStyles.transform = event.data.transform;
      },

      onDragEnd() {
        this.dragging = false;
        this.dragObject = {};
        this.dragOver = {};
        this.dragBefore = {};
        this.dragAfter = {};
        this.dragTarget = {};
        this.dragTargetEl = null;
        this.dropMode = 'move';
        this.ghostStyles = {};
      },

      onDragOver(event) {
        const targetComponent = event.data.dropTarget.__vue__;
        const canDropComponent = event.data.canDropTarget.__vue__;
        if (this.canDropOnComponent(canDropComponent)) {
          this.dragOver = {...targetComponent.object};
          this.dragBefore = {};
          this.dragAfter = {};
          this.dragTargetEl = event.data.dropTarget;
        } else {
          this.dragOver = {};
          this.dragBefore = {};
          this.dragAfter = {};
          this.dragTargetEl = null;
        }
        this.dragTarget = {...targetComponent.object};
      },

      onDragBefore(event) {
        const targetComponent = event.data.dropTarget.__vue__;
        const canDropComponent = event.data.canDropTarget.__vue__;
        if (this.canDropOnComponent(canDropComponent)) {
          this.dragOver = {};
          this.dragBefore = {...targetComponent.object};
          this.dragAfter = {};
          this.dragTargetEl = event.data.dropTarget;
        } else if (this.canDropOnComponent(targetComponent)) {
          this.dragOver = {...targetComponent.object};
          this.dragBefore = {};
          this.dragAfter = {};
          this.dragTargetEl = event.data.dropTarget;
        } else {
          this.dragOver = {};
          this.dragBefore = {};
          this.dragAfter = {};
          this.dragTargetEl = null;
        }
        this.dragTarget = {...targetComponent.object};
      },

      onDragAfter(event) {
        const targetComponent = event.data.dropTarget.__vue__;
        const canDropComponent = event.data.canDropTarget.__vue__;
        if (this.canDropOnComponent(canDropComponent)) {
          this.dragOver = {};
          this.dragBefore = {};
          this.dragAfter = {...targetComponent.object};
          this.dragTargetEl = event.data.dropTarget;
        } else {
          this.dragOver = {};
          this.dragBefore = {};
          this.dragAfter = {};
          this.dragTargetEl = null;
        }
        this.dragTarget = {...targetComponent.object};
      },

      onResetDrag() {
        this.dragOver = {};
        this.dragBefore = {};
        this.dragAfter = {};
        this.dragTarget = {};
        this.dragTargetEl = null;
      },

      onCtrlPressed() {
        this.dropMode = this.dropMode === 'move' ? 'copy' : 'move';
      },

      canDropOnComponent(targetComponent) {
        if (this.dropMode === 'copy') {
          return true;
        }

        if (targetComponent.object.id === this.dragObject.id) {
          return false;
        }

        return !this.hasParent(targetComponent, this.dragObject.id);
      },

      hasParent(component, id) {
        if (typeof component.$parent === 'undefined') {
          return false;
        }

        if (typeof component.$parent.object === 'undefined') {
          return this.hasParent(component.$parent, id);
        }

        if (component.$parent.object.id === id) {
          return true;
        }

        return this.hasParent(component.$parent, id);
      },

      containerClasses() {
        return {
          'tree--draggable__dragging': this.dragging
        }
      }
    }
  };
</script>

<style lang="scss">
  .tree--draggable__dragging {
    cursor: grabbing;

    .tree--node {
      pointer-events: none;
    }
  }
</style>
