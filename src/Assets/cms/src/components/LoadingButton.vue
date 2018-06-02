<template>
  <button :class="buttonClasses" :disabled="loading || disabled" @click="onClick">
    <transition name="fade-loading-button" mode="out-in">
      <div :class="spinnerClasses"></div>
    </transition>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'loading-button',

    props: {
      loading: {
        type: Boolean,
        required: true
      },
      success: {
        type: Boolean,
        required: false,
        default: false
      },
      onClick: {
        type: Function,
        required: false,
        default: () => {}
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    computed: {
      buttonClasses() {
        return {
          'loading-button': true,
          'loading-button__loading': this.loading,
          'loading-button__success': this.success && !this.loading
        };
      },

      spinnerClasses() {
        return {
          'loading-button--spinner': this.loading,
          'loading-button--check': this.success && !this.loading
        }
      },

      showSlot() {
        return this.loading || (!this.loading && this.success);
      }
    }
  }
</script>

<style lang="scss">
  .fade-loading-button-enter-active,
  .fade-loading-button-leave-active {
    transition: opacity 1s;
  }

  .fade-loading-button-enter,
  .fade-loading-button-leave-active {
    opacity: 0;
    will-change: opacity;
  }

  @keyframes loading-button-spinner-rotation {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(359deg)
    }
  }

  .loading-button {
    display: inline-flex;
    padding: 6px 16px 7px;
    color: #fff;
    font-weight: 600;
    border: none;
    background-color: #9cb800;
    border-radius: 3px;
    box-shadow: 0 -2px 0 fade-out(#718500, 0.4) inset, inset 0 1px 0 rgba(255, 255, 255, 0.3);
    align-items: center;
    vertical-align: top;
    user-select: none;
    justify-content: center;
    text-align: center;
    transition: all 0.1s linear;
    cursor: pointer;
    outline: none;

    &:hover, &:focus {
      background-color: #acc700;
    }

    &:active {
      box-shadow: inset 0 2px 1px fade-out(#465200, 0.4);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #ddd;
      box-shadow: 0 -2px 0 fade-out(#c4c3c3, 0.4) inset, inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }

  .loading-button--spinner {
    width: 16px;
    height: 16px;
    margin-left: -6px;
    margin-right: 6px;
    opacity: 1;
    animation: loading-button-spinner-rotation .7s infinite linear;
    border: 4px solid rgba(0, 0, 0, 0.2);
    border-top-color: #9E9E9E;
    border-radius: 100%;
    transition: .3s all ease;
  }
</style>
