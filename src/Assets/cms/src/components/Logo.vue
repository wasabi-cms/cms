<template>
  <svg :width="width" :height="height" viewBox="0 0 121 101" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g transform="matrix(1,0,0,1,-416.06,-28.975)">
      <g transform="matrix(1.31409,0,0,1.31409,410.278,13.2059)">
        <path d="M4.4,78.6L8.9,85.8L41.5,29.3L64.9,65L74.6,65L41.4,13.4L4.4,78.6Z" :style="styles"></path>
      </g>
      <g transform="matrix(1.31409,0,0,1.31409,410.278,13.2059)">
        <path d="M37.4,69L33.3,76.3L96.3,76.2L53.7,12L44.7,12.1L81.5,69L81.2,69L81.4,69L37.4,69Z" :style="styles"></path>
      </g>
      <g transform="matrix(1.31409,0,0,1.31409,410.278,13.2059)">
        <path d="M27.3,81L27.2,81L34.7,67.1L35.2,66L46.9,44.6L41.7,36.6L12.1,88L91.6,88.4L96.4,81L27.2,81L27.3,81Z" :style="styles"></path>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    name: 'wasabi-logo',

    props: {
      width: {
        type: Number,
        required: false,
        default: 16
      },
      height: {
        type: Number,
        required: false,
        default: 16
      },
      color: {
        type: String,
        required: false,
        default: '#000'
      }
    },

    computed: {
      styles() {
        return {
          fill: this.color,
          fillRule: 'nonzero'
        }
      }
    }
  }
</script>
