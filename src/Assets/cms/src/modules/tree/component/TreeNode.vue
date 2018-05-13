<template>
  <li class="tree--node" :class="nodeClasses()">
    <div class="tree--node--details" @click.prevent="setActive" @dragenter.prevent="onNativeDragEnter" @dragover.prevent="onNativeDragOver" @dragleave.prevent="onNativeDragLeave">
      <div class="tree--node--spacers" v-if="level > 0">
        <div v-for="lvl in range(0, level - 1)" :class="nodeSpacerClasses(lvl)"></div>
      </div>
      <div :class="nodeStateClasses()" v-touch="toggleExpand"></div>
      <div class="tree--node--icon"><img class="tree--node--icon--image" :src="imageUrl" width="16" height="16"></div>
      <div class="tree--node--name">{{name}}</div>
    </div>
    <slot></slot>
  </li>
</template>

<script>
  const Cookies = window.WS.exports.Cookies;
  import {addToArray, range, removeFromArray, truncate} from '../../../util';

  export default {
    name: 'tree-node',

    props: {
      object: Object,
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
      dragTarget: {
        type: Object,
        required: true
      },
      scrollbar: {
        required: true,
        validator: (scrollbar) => {
          return ['object', 'undefined'].indexOf(typeof scrollbar) !== -1;
        }
      }
    },

    data() {
      return {
        expanded: this.getExpandedIds().includes(this.object.id),
        expanding: false
      };
    },

    computed: {
      node() {
        return this.object;
      },

      name() {
        return truncate(this.node.name, 50, '...');
      },

      hasChildren() {
        return this.node.children.length > 0;
      },

      isSelected() {
        if (typeof this.dragObject.id !== 'undefined') {
          return this.dragObject.id === this.node.id;
        }

        return this.$store.state.tree.active !== null && this.$store.state.tree.active.id === this.node.id;
      },

      assetUrl() {
        return window.WS.getModule('Wasabi/Cms').options.assetUrl;
      },

      imageUrl() {
        return this.assetUrl + '/img/tree-page-default.svg';
      },

      isDragOver() {
        return this.dragOver.id && this.dragOver.id === this.node.id;
      },

      isDragBefore() {
        return this.dragBefore.id && this.dragBefore.id === this.node.id;
      },

      isDragAfter() {
        return this.dragAfter.id && this.dragAfter.id === this.node.id;
      },

      isDragDenied() {
        return this.dragTarget.id && this.dragTarget.id === this.node.id && !this.isDragOver && !this.isDragBefore && !this.isDragAfter;
      }
    },

    methods: {

      nodeClasses() {
        return {
          'tree--node__selected': this.isSelected,
          'tree--node__expanded': this.expanding || this.expanded,
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

      nodeStateClasses() {
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

      setActive() {
        this.$store.commit('tree/SET_ACTIVE', this.node);
      },

      range(start, end) {
        return range(start, end);
      },

      toggleExpand() {
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
          setTimeout(() => this.scrollbar && this.scrollbar.update(), 0);
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

      onNativeDragEnter(event) {
        console.log('Drag Enter auf TreeNode ' + this.node.name);
      },

      onNativeDragOver(event) {
        event.dataTransfer.dropEffect = 'move';
      },

      onNativeDragLeave() {
        console.log('Drag Leave auf TreeNode ' + this.node.name);
      }
    },

    watch: {
      isDragOver(val) {
        if (val && this.node.children.length > 0 && !this.expanded) {
          this.expandTimeout = setTimeout(() => this.toggleExpand(), 750);
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

    &.tree--node__selected {

      & > .tree--node--details {
        background-color: #fff;
        border-color: #d7d7d7;
      }
    }

    &.tree--node__drag-over {

      & > .tree--node--details {
        background-color: #d7e4f1;
        border-color: transparent;
      }
    }

    &.tree--node__drag-before {

      & > .tree--node--details {
        position: relative;

        &:after {
          position: absolute;
          left: 0;
          top: -2px;
          content: "";
          width: 100%;
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
          left: 0;
          bottom: -2px;
          content: "";
          width: 100%;
          height: 2px;
          background-color: #9eb2c5;
        }
      }
    }

    &.tree--node__drag-denied {

      & > .tree--node--details {
        background-color: #f6d3cf;
        border-color: transparent;
      }
    }
  }

  .tree--node:not(.tree--node__expanded) > .tree--nodes {
    display: none;
  }

  .tree--node--details {
    display: flex;
    padding-left: 5px;
    line-height: 18px;
    border: 1px solid transparent;
    user-select: none;

    &:hover {
      background-color: #f2f2f2;
      border-color: #d7d7d7;
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
    background: transparent url(../img/tree-line.gif) repeat-y;
  }

  .tree--node--icon {
    padding-right: 2px;
  }

  .tree--node--icon--image {
    display: block;
    transform: translateY(1px);
  }

  .tree--state--icon {
    margin-top: -1px;
    width: 16px;
    min-width: 16px;
  }

  .tree--state--icon__plus {
    background: transparent url(../img/tree-plus.gif) repeat-y 0 2px;
  }

  .tree--state--icon__plus-bottom {
    background: transparent url(../img/tree-plus-bottom.gif) repeat-y 0 2px;
    height: 18px;
  }

  .tree--state--icon__minus {
    background: transparent url(../img/tree-minus.gif) repeat-y 0 2px;
  }

  .tree--state--icon__minus-bottom {
    background: transparent url(../img/tree-minus-bottom.gif) repeat-y 0 2px;
    height: 18px;
  }

  .tree--state--icon__join {
    background: transparent url(../img/tree-join.gif) repeat-y 0 2px;
  }

  .tree--state--icon__join-bottom {
    background: transparent url(../img/tree-join-bottom.gif) repeat-y 0 2px;
    height: 18px;
  }

  .tree--node--name {
    font-size: 13px;
    color: #2f3337;
    white-space: nowrap;
  }
</style>
