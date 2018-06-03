<template>
  <div class="view-content-index">{{ node.title }}</div>
</template>

<script>
  export default {
    name: 'view-content-index',

    computed: {
      node() {
        return this.$store.getters['tree/getActiveNode'];
      }
    }
  }
</script>

<style lang="scss">

</style>
