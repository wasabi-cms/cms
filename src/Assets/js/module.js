import Split from './components/split';

/* eslint-disable no-undef */
const Module = WS.exports.Module;
/* eslint-enable no-undef */

const CmsModule = Module.extend({

  /**
   * Holds all components that should be initialized.
   */
  components: {
    split: {
      selector: '.cms--content--split',
      viewClass: Split
    }
  },

  /**
   * Holds all sections that should be initialized.
   */
  sections: {

  },

  /**
   * Initialize the module.
   */
  initialize (options) {
    this.options = options;
  },

  onStart () {
    this.initComponents();
    this.initSections();
    this.initEvents();
  },

  /**
   * Initialize global events like scroll and resize that are debounced and triggered on the eventBus.
   */
  initEvents () {

  }
});

window.WS.registerModule('Wasabi/Cms', CmsModule);
