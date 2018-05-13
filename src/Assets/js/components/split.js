/* eslint-disable no-undef */
const Marionette = WS.exports.Marionette;
const Cookies = WS.exports.Cookies;
/* eslint-enable no-undef */

const Split = Marionette.View.extend({

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

  initialize() {
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
      collapsed: (parseInt(Cookies.get('wasabi_cms_tree_collapsed')) === 1) || this.options.collapsed,
      dragging: false,
      initialX: 0
    };
    this.state.width = Math.max(this.options.minWidth, this.state.width);
    this.state.width = Math.min(this.options.maxWidth, this.state.width);
    this.render();
  },

  onRender() {
    this.$rightPanel = this.$el.parent();
    this.$leftPanel = this.$rightPanel.prev();
    this.onDrag = this.onDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.updatePanels();
  },

  onDragStart(event) {
    event.preventDefault();

    if (this.state.dragging || this.state.collapsed) {
      return;
    }

    // Only enable dragging on left mouse button.
    if (/mousedown|pointerdown/.test(event.type) && event.button !== 0) {
      return;
    }

    const touch = event.touches && event.touches[0];

    this.state.initialX = (touch || event).clientX;

    document.addEventListener('mouseup', this.onDragEnd, this.options.captureMode);
    document.addEventListener('touchend', this.onDragEnd, this.options.captureMode);
    document.addEventListener('touchcancel', this.onDragEnd, this.options.captureMode);
    document.addEventListener('pointerup', this.onDragEnd, this.options.captureMode);

    document.addEventListener('mousemove', this.onDrag, this.options.captureMode);
    document.addEventListener('touchmove', this.onDrag, this.options.captureMode);
    document.addEventListener('pointermove', this.onDrag, this.options.captureMode);
  },

  onDrag(event) {
    event.preventDefault();
    const evt = event.touches ? event.touches[0] : event;
    const deltaX = evt.clientX - this.state.initialX;

    if (!this.state.dragging) {
      // Only really start dragging if the delta is bigger than the drag start threshold.
      if (this.options.dragStartThreshold && Math.abs(deltaX) < this.options.dragStartThreshold) {
        return;
      }

      this.state.dragging = true;
    }

    this.updatePanels(deltaX);
  },

  onDragEnd(event) {
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

    this.state.dragging = false;
  },

  toggleLeftPanel(event) {
    this.state.collapsed = !this.state.collapsed;
    Cookies.set('wasabi_cms_tree_collapsed', this.state.collapsed ? 1 : 0);
    this.updatePanels();
  },

  updatePanels(deltaX = 0) {
    const newWidth = Math.min(this.options.maxWidth, Math.max(this.options.minWidth, this.state.width + deltaX));
    this.$leftPanel.toggleClass('collapsed', this.state.collapsed);
    this.$leftPanel.css('width', newWidth + 'px');
    this.$rightPanel.css('width', 'calc(100% - ' + newWidth + 'px)');
  }

});

export default Split;
