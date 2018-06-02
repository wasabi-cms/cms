<template>
  <div class="modal" @click="close">
    <div class="modal--container" @click.stop>

      <div class="modal--header">
        <span class="modal--header--title">{{ title }}</span>
      </div>

      <form v-if="hasForm" @submit.prevent="onSubmit">
        <div class="modal--body">
          <slot name="body"></slot>
        </div>

        <div class="modal--footer">
          <slot name="footer"></slot>
        </div>
      </form>

      <div v-else>
        <div class="modal--body">
          <slot name="body"></slot>
        </div>

        <div class="modal--footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',

    props: {
      title: {
        type: String,
        required: true
      },
      onClose: {
        type: Function,
        required: true
      },
      onSubmit: {
        type: Function,
        required: false,
        default: () => {}
      },
      closeOnBackdrop: {
        type: Boolean,
        required: false,
        default: true
      },
      hasForm: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    methods: {
      close() {
        if (this.closeOnBackdrop) {
          this.onClose();
        }
      }
    },

    mounted() {
      document.body.insertBefore(this.$el, document.body.lastChild);
    }
  }
</script>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1039;
    overflow: auto;
    background-color: rgba(0, 0, 0, .35);
    transition: opacity .3s ease;
  }

  .modal--container {
    width: 400px;
    margin: 0 auto;
    transition: transform .3s ease;
    align-self: center;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  .modal--header {
    padding: 10px 20px;
    background-color: #32506b;
  }

  .modal--header--title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }

  .modal--body {
    padding: 24px 20px 17px;
    background-color: #fff;
  }

  .modal--footer {
    padding: 10px 20px;
    border-top: 1px solid #dddfdf;
    background-color: #eef0f1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
