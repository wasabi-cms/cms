<template>
  <div class="object-tree--actions">
    <div class="object-tree--buttons">
      <div class="object-tree--button" draggable="true" @dragstart="onDragstart">New Page</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-tree-actions',

    methods: {
      onDragstart(event) {
        console.log('Drag Start auf Button');
      }
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
