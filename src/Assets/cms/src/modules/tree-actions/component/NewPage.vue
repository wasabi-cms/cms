<template>
  <div class="object-tree--button">
    New Page
  </div>
</template>

<script>
  export default {
    name: 'new-page',

    methods: {
      onDragStart(draggableStore) {
        draggableStore.title = 'New Page';
      },
    }
  }
</script>

<style lang="scss">
  .object-tree--button {
    user-select: none;
  }
</style>
