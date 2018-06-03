<template>
  <div class="tree--node tree--node__root" :class="nodeClasses()">
    <div class="tree--node--details" @click.prevent="setActive()">
      <div class="tree--node--icon"><wasabi-logo :color="'#666'"></wasabi-logo></div>
      <div class="tree--node--name">{{ node.title }}</div>
    </div>
  </div>
</template>

<script>
  import WasabiLogo from '../../../components/Logo.vue';
  import NewPage from '../../tree-actions/component/NewPage.vue';

  export default {
    name: 'tree-root-node',

    components: {
      WasabiLogo
    },

    props: {
      object: {
        type: Object,
        required: true
      }
    },

    computed: {
      node() {
        return this.object;
      },

      assetUrl() {
        return window.WS.getModule('Wasabi/Cms').options.assetUrl;
      },

      imageUrl() {
        return this.assetUrl + '/img/logo.svg'
      },

      isSelected() {
        return !this.dragComponentPresent && this.activeNodeIsRoot;
      },

      dragComponentPresent() {
        return this.$root.draggableStore.dragComponent !== null;
      },

      dragOverPresent() {
        return this.$root.draggableStore.dragOverComponent !== null;
      },

      isDragOver() {
        return this.dragOverPresent && this.$root.draggableStore.dragOverComponent._uid === this._uid;
      },

      isDragDenied() {
        return this.isCurrentDragTarget && !this.isDragOver;
      },

      activeNodeIsRoot() {
        const activeNode = this.$store.getters['tree/getActiveNode'];
        if (typeof activeNode === 'undefined') {
          return false;
        }

        return activeNode.root === true;
      }
    },

    methods: {
      nodeClasses() {
        return {
          'tree--node__selected': this.isSelected,
          'tree--node__drag-over': this.isDragOver,
          'tree--node__drag-denied': this.isDragDenied
        };
      },

      canReceiveDrop(type, dropComponent, data) {
        const dropComponentName = dropComponent.$vnode.componentOptions.tag;
        const acceptDropComponents = [
          NewPage.name
        ];

        return (type === 'over' && acceptDropComponents.indexOf(dropComponentName) !== -1);
      },

      changeDropTarget(type, dropComponent, data) {
        switch (type) {
          case 'before':
          case 'after':
            if (this.canReceiveDrop('over', dropComponent, data)) {
              this.$root.draggableStore.dragOverComponent = this;
              this.$root.draggableStore.dragBeforeComponent = null;
              this.$root.draggableStore.dragAfterComponent = null;
              this.$root.draggableStore.dragTargetComponent = this;
              return true;
            }
            break;
        }

        return false;
      },

      setActive() {
        this.$store.dispatch('tree/SELECT_NODE', this.node);
      },

      onDrop(type, component) {
        if (type === 'over') {
          this.$store.dispatch('OPEN_NEW_PAGE_MODAL', {
            parentId: null,
            insert: 'end',
            ...component.params
          });
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tree--node__root {

    &.tree--node__selected {

      .tree--node--details {
        border-color: transparent;
      }
    }

    .tree--node--icon {
      display: flex;
      align-content: center;
      align-items: center;
    }
  }
</style>
