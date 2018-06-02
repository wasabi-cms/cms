<template>
  <li class="tree--node" :class="nodeClasses()">
    <div class="tree--node--details" @click.prevent="setActive">
      <div class="tree--node--spacers" v-if="level > 0">
        <div v-for="lvl in range(0, level - 1)" :class="nodeSpacerClasses(lvl)"></div>
      </div>
      <div :class="treeStateIconsClasses()" v-touch="toggleExpand">
        <div :class="treeStateIconClasses()"></div>
        <div class="tree--state--icon--expander" v-show="hasChildren"></div>
      </div>
      <div :class="nodeIconClasses()"><img class="tree--node--icon--image" :src="imageUrl" width="16" height="16"></div>
      <div class="tree--node--name">{{name}}</div>
    </div>
    <slot></slot>
  </li>
</template>

<script>
  const Cookies = window.WS.exports.Cookies;
  import {addToArray, range, removeFromArray, truncate} from '../../../util';
  import NewPage from '../../tree-actions/component/NewPage.vue';

  export default {
    name: 'tree-node',

    props: {
      node: Object,
      level: {
        type: Number,
        required: false,
        default: 0
      },
      isLast: {
        type: Boolean,
        required: false,
        default: true
      },
      spanLevels: {
        type: Array,
        required: false,
        default: () => []
      },
      parentRefs: {
        type: Object,
        required: false,
        default: () => {}
      }
    },

    data() {
      return {
        expanded: this.getExpandedIds().includes(this.node.id),
        expanding: false
      };
    },

    computed: {
      name() {
        return truncate(this.node.name, 50, '...');
      },

      hasChildren() {
        return this.node.children.length > 0;
      },

      isCurrentDragComponent() {
        return this.dragComponentPresent && this.$root.draggableStore.dragComponent._uid === this._uid;
      },

      isSelected() {
        return !this.dragComponentPresent && this.$store.getters['tree/getActiveNode'].id === this.node.id;
      },

      assetUrl() {
        return window.WS.getModule('Wasabi/Cms').options.assetUrl;
      },

      imageUrl() {
        return this.assetUrl + '/img/tree-page-default.svg';
      },

      dragComponentPresent() {
        return this.$root.draggableStore.dragComponent !== null;
      },

      dragTargetPresent() {
        return this.$root.draggableStore.dragTargetComponent !== null;
      },

      dragOverPresent() {
        return this.$root.draggableStore.dragOverComponent !== null;
      },

      dragBeforePresent() {
        return this.$root.draggableStore.dragBeforeComponent !== null;
      },

      dragAfterPresent() {
        return this.$root.draggableStore.dragAfterComponent !== null;
      },

      isCurrentDragTarget() {
        return this.dragTargetPresent && this.$root.draggableStore.dragTargetComponent._uid === this._uid;
      },

      isDragOver() {
        return this.dragOverPresent && this.$root.draggableStore.dragOverComponent._uid === this._uid;
      },

      isDragBefore() {
        return this.dragBeforePresent && this.$root.draggableStore.dragBeforeComponent._uid === this._uid;
      },

      isDragAfter() {
        return this.dragAfterPresent && this.$root.draggableStore.dragAfterComponent._uid === this._uid;
      },

      isDragDenied() {
        return this.isCurrentDragTarget && !this.isDragOver && !this.isDragBefore && !this.isDragAfter;
      }
    },

    methods: {

      nodeClasses() {
        return {
          'tree--node__selected': this.isSelected,
          'tree--node__dragging': this.isCurrentDragComponent,
          'tree--node__expanded': this.hasChildren && (this.expanding || this.expanded),
          'tree--node__drag-over': this.isDragOver,
          'tree--node__drag-before': this.isDragBefore,
          'tree--node__drag-after': this.isDragAfter,
          'tree--node__drag-denied': this.isDragDenied,
        };
      },

      nodeSpacerClasses(level) {
        return {
          'tree--node--spacer': true,
          'tree--node--spacer__span': this.spanLevels.includes(level)
        }
      },

      treeStateIconsClasses() {
        return {
          'tree--state--icons': true,
          'tree--state--icons__expanded': this.hasChildren && (this.expanding || this.expanded)
        }
      },

      treeStateIconClasses() {
        return {
          'tree--state--icon': true,
          'tree--state--icon__plus': this.hasChildren && !this.expanded && !this.isLast,
          'tree--state--icon__plus-bottom': this.hasChildren && !this.expanded && this.isLast,
          'tree--state--icon__minus': this.hasChildren && this.expanded && !this.isLast,
          'tree--state--icon__minus-bottom': this.hasChildren && this.expanded && this.isLast,
          'tree--state--icon__join': !this.hasChildren && !this.isLast,
          'tree--state--icon__join-bottom': !this.hasChildren && this.isLast
        };
      },

      nodeIconClasses() {
        return {
          'tree--node--icon': true
        }
      },

      setActive() {
        this.$store.dispatch('tree/SELECT_NODE', this.node);
      },

      range(start, end) {
        return range(start, end);
      },

      toggleExpand(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }

        this.expanded = !this.expanded;
        this.expanding = true;

        let expandedIds = this.getExpandedIds();
        expandedIds = this.expanded ? addToArray(expandedIds, this.node.id) : removeFromArray(expandedIds, this.node.id);

        this.setExpandedIds(expandedIds);

        const childTree = this.$children[0];
        if (typeof childTree === 'undefined') {
          return;
        }

        const container = childTree.$el;

        if (this.expanded) {
          // Slide down
          container.style.display = 'block';
          container.style.height = 'auto';
          container.style.overflow = 'hidden';
          const targetHeight = container.clientHeight + 'px';

          container.style.height = '0px';

          setTimeout(() => {
            container.style.height = targetHeight;
          }, 0);
        } else {
          // Slide up
          container.style.height = container.clientHeight + 'px';
          container.style.overflow = 'hidden';

          setTimeout(() => {
            container.style.height = '0px';
          }, 0);
        }

        container.addEventListener('transitionend', () => {
          this.expanding = false;
          container.style.display = '';
          container.style.height = '';
          container.style.overflow = '';
          setTimeout(() => {
            this.parentRefs.scrollContainer && this.parentRefs.scrollContainer.scrollbar.update();
          }, 0);
        }, {once: true});
      },

      getExpandedIds() {
        const expanded = Cookies.get('wasabi_cms_tree_expanded');

        if (typeof expanded !== 'undefined') {
          return expanded.split(',');
        }

        return [];
      },

      setExpandedIds(expanded) {
        Cookies.set('wasabi_cms_tree_expanded', expanded.join(','));
      },

      canReceiveDrop(type, dropComponent, data) {
        const thisComponentName = this.$vnode.componentOptions.tag;
        const dropComponentName = dropComponent.$vnode.componentOptions.tag;

        if ([thisComponentName, NewPage.name].indexOf(dropComponentName) === -1) {
          return false;
        }

        if (dropComponentName === NewPage.name) {
          switch (type) {
            case 'over':
              return true;

            case 'before':
              return !this.previousSiblingIsDragComponent();

            case 'after':
              if (this.hasVisibleChildren(data)) {
                return false;
              }
              return !this.nextSiblingIsDragComponent();
          }
        }

        if (dropComponentName === thisComponentName) {
          if (this.$root.draggableStore.dropMode === 'copy') {
            return true;
          }
          if (dropComponent.node.id === this.node.id) {
            return false;
          }
          if (this.hasParent(this, dropComponent)) {
            return false;
          }

          switch (type) {
            case 'over':
              return true;

            case 'before':
              return !this.previousSiblingIsDragComponent();

            case 'after':
              if (this.hasVisibleChildren(data)) {
                return false;
              }
              return !this.nextSiblingIsDragComponent();
          }
        }

        return false;
      },

      hasParent(component, parentComponent) {
        if (typeof component.$parent === 'undefined') {
          return false;
        }

        if (component.$parent._uid === parentComponent._uid) {
          return true;
        }

        return this.hasParent(component.$parent, parentComponent);
      },

      previousSiblingIsDragComponent() {
        if (this.$el.previousSibling === null || typeof this.$el.previousSibling.__vue__ === 'undefined') {
          return false;
        }

        return this.dragComponentPresent && this.$el.previousSibling.__vue__._uid === this.$root.draggableStore.dragComponent._uid;
      },

      nextSiblingIsDragComponent() {
        if (this.$el.nextSibling === null || typeof this.$el.nextSibling.__vue__ === 'undefined') {
          return false;
        }

        return this.dragComponentPresent && this.$el.nextSibling.__vue__._uid === this.$root.draggableStore.dragComponent._uid;
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

      hasVisibleChildren(data) {
        if (data.dropTarget.next === null || this.$children.length === 0 || this.$children[0].$children.length === 0) {
          return false;
        }
        return (this.$children[0].$children[0].$el === data.dropTarget.next);
      },

      onDragStart(draggableStore) {
        draggableStore.title = this.node.name;
      },

      onDrop(type, component) {
        console.log(type, component, this.$el);
      }
    },

    watch: {
      isDragOver(val) {
        if (val && this.node.children.length > 0 && !this.expanded) {
          this.expandTimeout = setTimeout(() => {
            if (this.isDragOver && !this.expanded) {
              this.toggleExpand();
            }
          }, 750);
          return;
        }
        this.expandTimeout = 0;
      }
    }
  }
</script>

<style lang="scss">
  .tree--node {
    display: block;

    .draggable--is-dragging & {
      pointer-events: none;
    }

    &.tree--node__selected {

      & > .tree--node--details {
        background-color: #eff0f0;
        border-color: #436a8d;

        .tree--node--name {
          color: #000;
        }
      }
    }

    &.tree--node__dragging {

      & > .tree--node--details {
        border-color: #439fc0;
      }
    }

    &.tree--node__drag-over {

      & > .tree--node--details {
        background-color: #d7e4f1;
      }
    }

    &.tree--node__drag-before {

      & > .tree--node--details {
        position: relative;

        &:after {
          position: absolute;
          right: 0;
          top: -1px;
          left: -2px;
          content: "";
          height: 2px;
          background-color: #9eb2c5;
        }
      }
    }

    &.tree--node__drag-after {

      & > .tree--node--details {
        position: relative;

        &:after {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: -2px;
          content: "";
          height: 2px;
          background-color: #9eb2c5;
        }
      }
    }

    &.tree--node__drag-denied {

      & > .tree--node--details {
        background-color: #f6d3cf;
      }
    }
  }

  .tree--node:not(.tree--node__expanded) > .tree--nodes {
    display: none;
  }

  .tree--node--details {
    display: flex;
    padding-left: 3px;
    line-height: 18px;
    border: solid transparent;
    border-width: 0 0 0 3px;
    user-select: none;

    &:hover {
      background-color: #eff0f0;
      border-color: #eff0f0;
    }
  }

  .tree--node--spacers {
    display: flex;
    margin-top: -3px;
    margin-bottom: -2px;
  }

  .tree--node--spacer {
    width: 16px;
  }

  .tree--node--spacer__span {
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      content: "";
      width: 1px;
      transform: translateX(-1px);
      background-color: #d7d7d7;
    }
  }

  .tree--node--icon {
    padding-right: 2px;
  }

  .tree--node--icon--image {
    display: block;
    transform: translateY(5px);
  }

  .tree--state--icons {
    position: relative;
    width: 16px;
    min-width: 16px;
  }

  .tree--state--icon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .tree--state--icon__join,
  .tree--state--icon__join-bottom,
  .tree--state--icon__minus,
  .tree--state--icon__minus-bottom,
  .tree--state--icon__plus,
  .tree--state--icon__plus-bottom {

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(50% - 1px);
      content: "";
      width: 1px;
      background-color: #d7d7d7;
    }

    &:after {
      position: absolute;
      top: 13px;
      left: calc(50% - 1px);
      right: 0;
      content: "";
      height: 1px;
      background-color: #d7d7d7;
    }
  }

  .tree--state--icon__join-bottom,
  .tree--state--icon__minus-bottom,
  .tree--state--icon__plus-bottom {

    &:before {
      bottom: calc(100% - 13px);
    }
  }

  .tree--state--icon__minus,
  .tree--state--icon__minus-bottom {

    & + .tree--state--icon--expander {
      transform: rotate(90deg);

      &:before {
        border-color: transparent transparent transparent #1f3648;
      }
    }
  }

  .tree--state--icons__expanded {

    & + .tree--node--icon {
      position: relative;

      &:before {
        position: absolute;
        top: 24px;
        bottom: 0;
        left: calc(50% - 2px);
        content: "";
        width: 1px;
        background-color: #d7d7d7;
      }
    }
  }

  .tree--state--icon--expander {
    width: 6px;
    height: 8px;
    position: absolute;
    top: 10px;
    left: calc(50% - 3px);
    transition: transform 0.2s ease;
    transform-origin: center center;
    will-change: transform;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 4px 0 4px 6px;
      border-color: transparent transparent transparent #9ba4ab;
      content: "";
      transition: border-color 0.3s ease;
      will-change: border-color;
    }
  }

  .tree--node--name {
    font-size: 13px;
    color: #2f3337;
    padding: 4px 6px 4px 0;
  }
</style>
