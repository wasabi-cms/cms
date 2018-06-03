<template>
  <div class="view-page-edit">{{ node.title }}</div>
</template>

<script>
  export default {
    name: 'view-page-edit',

    computed: {
      node() {
        return this.$store.getters['tree/getActiveNode'];
      }
    },

    beforeMount() {
      const node = this.$store.getters['tree/getActiveNode'];
      if (typeof node === 'undefined') {
        this.$router.push({ name: 'content-index' });
      }
    }
  }
</script>

<style lang="scss">

</style>
