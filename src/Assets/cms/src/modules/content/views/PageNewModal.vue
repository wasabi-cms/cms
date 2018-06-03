<template>
  <modal :title="'New Page'" :onClose="close" :closeOnBackdrop="false" :hasForm="true" :onSubmit="createPage">
    <template slot="body">
      <div class="modal--form-row" :class="{ 'modal--form-row__error': $v.title.$error }">
        <label for="title">Title<span v-if="$v.title.$params.required"> *</span></label>
        <input class="form-control" type="text" id="title" name="title" v-model.trim="$v.title.$model" autocomplete="off" ref="titleInput">
        <span class="slug">Slug: <strong>{{ slug }}</strong></span>
        <div class="error-message" v-if="!$v.title.required">Please enter a page title.</div>
        <div class="error-message" v-if="!$v.title.minLength">The page title must have at least {{ $v.title.$params.minLength.min }} letters.</div>
      </div>
    </template>
    <template slot="footer">
      <loading-button class="modal--footer--button" :loading="loading" :disabled="$v.$invalid">Save</loading-button>
      <a href="javascript:void(0)" @click="close">Cancel</a>
    </template>
  </modal>
</template>

<script>
  import Modal from '../../../components/Modal.vue';
  import LoadingButton from '../../../components/LoadingButton.vue';
  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'page-new-modal',

    mixins: [validationMixin],

    components: {
      Modal,
      LoadingButton
    },

    data() {
      return {
        loading: false,
        title: ''
      }
    },

    validations: {
      title: {
        required,
        minLength: minLength(4)
      }
    },

    computed: {
      slug() {
        if (this.title === '') {
          return 'Start typing to see the auto generated slug.'
        }
        return this.title.toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
      }
    },

    methods: {
      close() {
        this.$store.dispatch('CLOSE_NEW_PAGE_MODAL');
      },

      createPage() {
        this.loading = true;
        this.$store.dispatch('CREATE_PAGE', this.title)
          .then(() => this.close())
          .catch((error) => {
            this.loading = false;
            console.log('error', error);
          });
      }
    },

    mounted() {
      this.$refs.titleInput.focus();
    }
  }
</script>

<style lang="scss">
  .modal--form-row {
    padding-bottom: 21px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .error-message {
      display: none;
      font-size: 13px;
      margin-bottom: -21px;
    }
  }

  .modal--footer--button {
    margin-right: 15px;
  }

  .slug {
    font-size: 11px;
    color: #757575;
  }

  .modal--form-row__error {

    .error-message {
      display: block;
    }

    & > {
      label {
        color: #990000;
      }

      input[type="text"],
      input[type="email"],
      input[type="password"] {
        border-color: #990000;
      }
    }
  }

</style>
