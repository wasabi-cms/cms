<template>
  <div>
    <div class="gm-scrollbar -vertical">
      <div class="thumb"></div>
    </div>
    <div class="gm-scrollbar -horizontal">
      <div class="thumb"></div>
    </div>
    <div class="gm-scroll-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const GeminiScrollbar = window.WS.exports.GeminiScrollbar;

  export default {
    name: 'gemini-scrollbar',

    data() {
      return {
        scrollbar: null
      };
    },

    props: {
      autoCreate: {
        type: Boolean,
        default: true
      },
      autoshow: {
        type: Boolean,
        default: false
      },
      forceGemini: {
        type: Boolean,
        default: false
      },
      minThumbSize: {
        type: Number,
        default: 20
      }
    },

    mounted () {
      this.scrollbar = new GeminiScrollbar({
        element: this.$el,
        createElements: false,
        onResize: () => {
          this.$emit('resize');
        },
        ...this.$props
      });

      if (this.autoCreate) {
        this.scrollbar.create();
      }

      this.$emit('ready', this.scrollbar);
    },

    updated () {
      this.scrollbar.update();
    },

    beforeDestroy () {
      if (this.scrollbar) {
        this.scrollbar.destroy();
      }

      this.scrollbar = null;
    }
  }
</script>
