<template>
  <ul class="tree--nodes">
    <tree-node
      v-for="(object, index) in objects"
      :key="object.id"
      :object="object"
      :level="level"
      :isLast="isLast(index)"
      :spanLevels="spanLevel"
      :dragObject="dragObject"
      :dragOver="dragOver"
      :dragBefore="dragBefore"
      :dragAfter="dragAfter"
      :dragTarget="dragTarget"
      :scrollbar="scrollbar"
    >
      <tree
        :objects="object.children"
        :level="level+1"
        :spanLevel="spanLevels(level, isLast(index))"
        :dragObject="dragObject"
        :dragOver="dragOver"
        :dragBefore="dragBefore"
        :dragAfter="dragAfter"
        :dragTarget="dragTarget"
        :scrollbar="scrollbar"
        v-if="object.children.length > 0"
      ></tree>
    </tree-node>
  </ul>
</template>

<script>
  import TreeNode from './TreeNode.vue';

  export default {
    name: 'tree',

    props: {
      objects: Array,
      level: {
        type: Number,
        required: false,
        default: 0
      },
      spanLevel: {
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

    components: {
      TreeNode
    },

    methods: {

      isLast(index) {
        return (index + 1) === this.objects.length;
      },

      spanLevels(level, isLast) {
        if (level === 0) {
          return [level];
        }

        if (isLast) {
          return this.spanLevel;
        }

        return this.spanLevel.concat([level]);
      }
    }
  }
</script>

<style scoped lang="scss">
  .tree--nodes {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: height .3s ease;
  }
</style>
