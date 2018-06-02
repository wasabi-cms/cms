(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-undef */
var Marionette = WS.exports.Marionette;
var Cookies = WS.exports.Cookies;
/* eslint-enable no-undef */

var Split = Marionette.View.extend({

  template: false,

  ui: {
    bar: '.cms--content--split--bar',
    handle: '.cms--content--split--handle'
  },

  events: {
    'click @ui.handle': 'toggleLeftPanel',
    'mousedown @ui.bar': 'onDragStart',
    'touchstart @ui.bar': 'onDragStart',
    'pointerdown @ui.bar': 'onDragStart'
  },

  initialize: function initialize() {
    this.options = {
      width: 240,
      minWidth: 240,
      maxWidth: 500,
      collapsed: false,
      dragStartThreshold: 1,
      captureMode: {
        capture: false,
        passive: false
      }
    };
    this.state = {
      width: Cookies.get('wasabi_cms_tree_width') || this.options.width,
      collapsed: parseInt(Cookies.get('wasabi_cms_tree_collapsed')) === 1 || this.options.collapsed,
      dragging: false,
      initialX: 0
    };
    this.state.width = Math.max(this.options.minWidth, this.state.width);
    this.state.width = Math.min(this.options.maxWidth, this.state.width);
    this.render();
  },
  onRender: function onRender() {
    this.$rightPanel = this.$el.parent();
    this.$leftPanel = this.$rightPanel.prev();
    this.onDrag = this.onDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.updatePanels();
  },
  onDragStart: function onDragStart(event) {
    event.preventDefault();

    if (this.state.dragging || this.state.collapsed) {
      return;
    }

    // Only enable dragging on left mouse button.
    if (/mousedown|pointerdown/.test(event.type) && event.button !== 0) {
      return;
    }

    var touch = event.touches && event.touches[0];

    this.state.initialX = (touch || event).clientX;

    document.addEventListener('mouseup', this.onDragEnd, this.options.captureMode);
    document.addEventListener('touchend', this.onDragEnd, this.options.captureMode);
    document.addEventListener('touchcancel', this.onDragEnd, this.options.captureMode);
    document.addEventListener('pointerup', this.onDragEnd, this.options.captureMode);

    document.addEventListener('mousemove', this.onDrag, this.options.captureMode);
    document.addEventListener('touchmove', this.onDrag, this.options.captureMode);
    document.addEventListener('pointermove', this.onDrag, this.options.captureMode);
  },
  onDrag: function onDrag(event) {
    event.preventDefault();
    var evt = event.touches ? event.touches[0] : event;
    var deltaX = evt.clientX - this.state.initialX;

    if (!this.state.dragging) {
      // Only really start dragging if the delta is bigger than the drag start threshold.
      if (this.options.dragStartThreshold && Math.abs(deltaX) < this.options.dragStartThreshold) {
        return;
      }

      this.state.dragging = true;
      this.el.ownerDocument.querySelector('body').classList.add('split-active');
    }

    this.updatePanels(deltaX);
  },
  onDragEnd: function onDragEnd(event) {
    event.preventDefault();

    document.removeEventListener('mouseup', this.onDragEnd, this.options.captureMode);
    document.removeEventListener('touchend', this.onDragEnd, this.options.captureMode);
    document.removeEventListener('touchcancel', this.onDragEnd, this.options.captureMode);
    document.removeEventListener('pointerup', this.onDragEnd, this.options.captureMode);

    document.removeEventListener('mousemove', this.onDrag, this.options.captureMode);
    document.removeEventListener('touchmove', this.onDrag, this.options.captureMode);
    document.removeEventListener('pointermove', this.onDrag, this.options.captureMode);

    this.state.width = parseInt(this.$leftPanel.css('width').split('px').join(''));
    Cookies.set('wasabi_cms_tree_width', this.state.width);

    this.el.ownerDocument.querySelector('body').classList.remove('split-active');
    this.state.dragging = false;
  },
  toggleLeftPanel: function toggleLeftPanel(event) {
    this.state.collapsed = !this.state.collapsed;
    Cookies.set('wasabi_cms_tree_collapsed', this.state.collapsed ? 1 : 0);
    this.updatePanels();
  },
  updatePanels: function updatePanels() {
    var deltaX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var newWidth = Math.min(this.options.maxWidth, Math.max(this.options.minWidth, this.state.width + deltaX));
    this.$leftPanel.toggleClass('collapsed', this.state.collapsed);
    this.$leftPanel.css('width', newWidth + 'px');
    this.$rightPanel.css('width', 'calc(100% - ' + newWidth + 'px)');
  }
});

exports.default = Split;

},{}],2:[function(require,module,exports){
'use strict';

var _split = require('./components/split');

var _split2 = _interopRequireDefault(_split);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
var Module = WS.exports.Module;
/* eslint-enable no-undef */

var CmsModule = Module.extend({

  /**
   * Holds all components that should be initialized.
   */
  components: {
    split: {
      selector: '.cms--content--split',
      viewClass: _split2.default
    }
  },

  /**
   * Holds all sections that should be initialized.
   */
  sections: {},

  /**
   * Initialize the module.
   */
  initialize: function initialize(options) {
    this.options = options;
  },
  onStart: function onStart() {
    this.initComponents();
    this.initSections();
    this.initEvents();
  },


  /**
   * Initialize global events like scroll and resize that are debounced and triggered on the eventBus.
   */
  initEvents: function initEvents() {}
});

window.WS.registerModule('Wasabi/Cms', CmsModule);

},{"./components/split":1}]},{},[2]);
