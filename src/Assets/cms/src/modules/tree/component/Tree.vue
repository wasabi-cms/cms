<template>
  <ul class="tree--nodes">
    <tree-node
      v-for="(id, index) in nodes"
      :key="id"
      :node="getNodeById(id)"
      :level="level"
      :isLast="isLast(index)"
      :spanLevels="spanLevel"
      :parentRefs="parentRefs"
    >
      <tree
        v-if="getNodeById(id).children.length > 0"
        :nodes="getNodeById(id).children"
        :level="level+1"
        :spanLevel="spanLevels(level, isLast(index))"
        :parentRefs="parentRefs"
      ></tree>
    </tree-node>
  </ul>
</template>

<script>
  import TreeNode from './TreeNode.vue';

  export default {
    name: 'tree',

    props: {
      nodes: Array,
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
      parentRefs: {
        type: Object,
        required: false,
        default: () => {}
      }
    },

    components: {
      TreeNode
    },

    methods: {
      isLast(index) {
        return (index + 1) === this.nodes.length;
      },

      spanLevels(level, isLast) {
        if (level === 0) {
          return [level];
        }

        if (isLast) {
          return this.spanLevel;
        }

        return this.spanLevel.concat([level]);
      },

      getNodeById(id) {
        return this.$store.getters['tree/getNodeById'](id);
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
