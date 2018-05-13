<template>
  <div class="tree--node tree--node__root">
    <div class="tree--node--details">
      <div class="tree--node--icon"><wasabi-logo :color="'#666'"></wasabi-logo></div>
      <div class="tree--node--name">{{node.name}}</div>
    </div>
  </div>
</template>

<script>
  import WasabiLogo from '../../../components/Logo.vue';

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
      }
    }
  }
</script>

<style scoped lang="scss">
  .tree--node__root {

    .tree--node--icon {
      display: flex;
      align-content: center;
      align-items: center;
    }
  }
</style>
