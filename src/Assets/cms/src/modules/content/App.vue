<template>
  <div class="cms-content--wrapper">
    <router-view></router-view>
    <transition name="fade-in">
      <page-new-modal v-if="showNewPageModal"></page-new-modal>
    </transition>
  </div>
</template>

<script>
  import PageNewModal from './views/PageNewModal.vue';

  export default {
    name: 'app-content',

    components: {
      PageNewModal
    },

    computed: {
      showNewPageModal() {
        return this.$store.getters.showNewPageModal;
      }
    }
  };
</script>

<style lang="scss">
  .fade-in-enter-active, .fade-in-leave-active {
    opacity: 0;
  }

  .fade-in-enter-active .modal--container,
  .fade-in-leave-active .modal--container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
