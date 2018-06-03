import {closest, css, on, off} from '../util';

const defaults = {
  draggable: '>*',
  handleSelector: null,
  dropTargetComponent: null,
  disabled: false,
  dragStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
  positionGhostToPointer: false,
  ghostOffsetTop: 0,
  ghostOffsetLeft: 0,
  onDragStart: null,
  onDragMove: null,
  onDragEnd: null,
  onDragOver: null,
  onDragBefore: null,
  onDragAfter: null,
  onResetDrag: null,
  onCtrlPressed: null
};

class DragListener {

  constructor(el, options) {
    this.el = el;
    this.options = {...defaults, ...options};
    this.dropTargets = [];
    this.isDragging = false;
    this.dragEl = null;
    this.lastEventName = null;
    this.lastDropTarget =  null;
    this.initialX = 0;
    this.initialY = 0;
    this.translate3d = null;
    this.keypressActive = false;

    this._onTapStart = this._onTapStart.bind(this);
    this._onDrag = this._onDrag.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);

    on(this.el, 'mousedown', this._onTapStart);
    on(this.el, 'touchstart', this._onTapStart);
    on(this.el, 'pointerdown', this._onTapStart);
  }

  /**
   * Add a new drop target for the given context and selector.
   * Ensures all drop targets are unique.
   *
   * @param {Element|*} context
   * @param {String} selector
   */
  addDropTarget(context, selector) {
    let dropTargets = [...this.dropTargets];

    for (let index in dropTargets) {
      const target = dropTargets[index];
      if (target.context === context && target.selector === selector) {
        return;
      }
    }

    this.dropTargets.push({context, selector});
  }

  /**
   * Handle mousedown, touchstart and pointerdown events.
   *
   * @param {Event|TouchEvent} event
   * @private
   */
  _onTapStart(event) {
    // Only start dragging if dragging is enabled.
    if (this.options.disabled) {
      return;
    }

    // Don't trigger a second drag.
    if (this.isDragging || this.dragEl) {
      return;
    }

    // Only enable dragging on left mouse button.
    if (/mousedown|pointerdown/.test(event.type) && event.button !== 0) {
      return;
    }

    const touch = event.touches && event.touches[0];
    let target = (touch || event).target;
    const originalTarget = event.target.shadowRoot && (event.path && event.path[0]) || target;

    // Don't start dragging if the original target is content editable.
    if (originalTarget.isContentEditable) {
      return;
    }

    if (this.options.handleSelector !== null && !closest(target, this.options.handleSelector, this.el)) {
      return;
    }

    target = closest(target, this.options.draggable, this.el);

    // No valid drag target found.
    if (!target) {
      return;
    }

    this._prepareDrag(event, touch, target);
    event.preventDefault();
  }

  /**
   * Prepare the start of the drag interaction.
   *
   * @param {Event} event
   * @param {Touch} touch
   * @param {Element|*} target
   * @private
   */
  _prepareDrag(event, touch, target) {
    this.dragEl = target;
    this.initialX = (touch || event).clientX;
    this.initialY = (touch || event).clientY;
    this.translate3d = 'translate3d(0,0,0)';
    this.lastEventName = null;
    this.lastDropTarget =  null;

    on(this.el.ownerDocument, 'mouseup', this._onDrop);
    on(this.el.ownerDocument, 'touchend', this._onDrop);
    on(this.el.ownerDocument, 'touchcancel', this._onDrop);
    on(this.el.ownerDocument, 'pointerup', this._onDrop);

    on(this.el.ownerDocument, 'touchmove', this._onDrag);
    on(this.el.ownerDocument, 'mousemove', this._onDrag);
    on(this.el.ownerDocument, 'pointermove', this._onDrag);

    on(this.el.ownerDocument, 'keydown', this._onKeyDown);
  }

  /**
   * Handle dragging.
   *
   * @param {Event} event
   * @private
   */
  _onDrag(event) {
    event.preventDefault();

    const evt = event.touches ? event.touches[0] : event;
    const clientX = evt.clientX;
    const clientY = evt.clientY;
    const deltaX = clientX - this.initialX;
    const deltaY = clientY - this.initialY;
    const translate3d = 'translate3d(' + deltaX + 'px, ' + deltaY + 'px, 0)';
    const styles = this._calculateGhostStyles(clientX, clientY, translate3d);

    if (!this.isDragging) {
      // Only really start dragging if the delta is bigger than the drag start threshold.
      if (this.options.dragStartThreshold && Math.min(Math.abs(deltaX), Math.abs(deltaY)) < this.options.dragStartThreshold) {
        return;
      }

      this.isDragging = true;
      this.droppableList = [];

      if (this.dropTargets.length > 0) {
        [...this.dropTargets].forEach((target) => {
          let context = target.context || this.$el.ownerDocument;
          this.droppableList = [...this.droppableList, ...Array.prototype.slice.call(context.querySelectorAll(target.selector))];
        });
      }

      this._dispatch('dragStart', event, {dragEl: this.dragEl, ghostStyles: styles});
    }

    if (this.translate3d !== translate3d) {
      this._dispatch('dragMove', event, {transform: translate3d});
      this.translate3d = translate3d;

      const {eventName, dropTarget} = this._getDropTarget(clientX, clientY);

      if (eventName !== null && dropTarget.current !== null) {
        if (this.lastEventName !== eventName || this.lastDropTarget !== dropTarget.current) {
          this.lastEventName = eventName;
          this.lastDropTarget = dropTarget.current;

          this._dispatch(eventName, event, {
            dropTarget: {
              current: closest(dropTarget.current, this.options.dropTargetComponent),
              previous: dropTarget.previous !== null ? closest(dropTarget.previous, this.options.dropTargetComponent) : null,
              next: dropTarget.next !== null ? closest(dropTarget.next, this.options.dropTargetComponent) : null
            }
          });
        }
      } else {
        this.lastEventName = null;
        this.lastDropTarget = null;
        this._dispatch('resetDrag', event);
      }
    }
  }

  /**
   * Handle Dropping
   *
   * @param {Event} event
   * @param {Boolean} cancel
   * @private
   */
  _onDrop(event, cancel) {
    off(this.el.ownerDocument, 'mouseup', this._onDrop);
    off(this.el.ownerDocument, 'touchend', this._onDrop);
    off(this.el.ownerDocument, 'touchcancel', this._onDrop);
    off(this.el.ownerDocument, 'pointerup', this._onDrop);

    off(this.el.ownerDocument, 'touchmove', this._onDrag);
    off(this.el.ownerDocument, 'mousemove', this._onDrag);
    off(this.el.ownerDocument, 'pointermove', this._onDrag);

    off(this.el.ownerDocument, 'keydown', this._onKeyDown);
    off(this.el.ownerDocument, 'keydown', this._onKeyUp);

    if (this.isDragging) {
      event && event.preventDefault();
      if (cancel) {
        this._dispatch('dragCancel', event);
      } else {
        this._dispatch('dragEnd', event);
      }
    }

    this.dragEl = null;
    this.initialX = 0;
    this.initialY = 0;
    this.translate3d = null;
    this.lastEventName = null;
    this.lastDropTarget =  null;
    this.droppableList = [];
    this.isDragging = false;
  }

  /**
   * Handle keydown event.
   *
   * @param {KeyboardEvent} event
   * @private
   */
  _onKeyDown(event) {
    if (event.ctrlKey && !this.keypressActive) {
      this.keypressActive = true;
      on(this.el.ownerDocument, 'keyup', this._onKeyUp);
      this._dispatch('ctrlPressed', event);
    }
    if (event.code === 'Escape') {
      this._onDrop(event, true);
    }
  }

  /**
   * Handle keyup event.
   *
   * @param {KeyboardEvent} event
   * @private
   */
  _onKeyUp(event) {
    this.keypressActive = false;
    off(this.el.ownerDocument, 'keyup', this._onKeyUp);
  }

  /**
   * Dispatch an event.
   *
   * @param {String} eventName
   * @param {Event} event
   * @param {Object?} data
   * @private
   */
  _dispatch(eventName, event, data) {
    const eventHandlerName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
    data = data || {};

    if (typeof this.options[eventHandlerName] !== 'function') {
      return;
    }

    let evt = this.el.ownerDocument.createEvent('Event');
    evt.initEvent(eventName, true, true);
    evt.originalEvent = event;
    evt.data = {...data};

    this.options[eventHandlerName](evt);
  }

  /**
   * Calculate the styles of the ghost element (indicator of the dragged element).
   *
   * @param {Number} clientX
   * @param {Number} clientY
   * @param {string} translate3d
   * @returns {{position: string, top: string, left: string, width: string, zIndex: number, pointerEvents: string, transform: string}}
   * @private
   */
  _calculateGhostStyles(clientX, clientY, translate3d) {
    const rect = this.dragEl.getBoundingClientRect();
    const styles = css(this.dragEl);
    let top = rect.top;
    let left = rect.left;

    if (this.options.positionGhostToPointer) {
      top = clientY;
      left = clientX;
    }

    return {
      display: 'block',
      position: 'fixed',
      top: top - parseInt(styles.marginTop, 10) + this.options.ghostOffsetTop + 'px',
      left: left - parseInt(styles.marginLeft, 10) + this.options.ghostOffsetLeft + 'px',
      width: rect.width + 'px',
      zIndex: 100000,
      pointerEvents: 'none',
      transform: translate3d
    };
  }

  _getDropTarget(clientX, clientY) {
    let eventName = null;
    let dropTarget = {
      current: null,
      previous: null,
      next: null
    };
    const BreakException = {};

    const visibleDroppables = this.droppableList.filter(d => d.clientHeight > 0);

    try {
      visibleDroppables.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.height === 0) {
          return;
        }

        const borderAreaHeight = Math.floor(rect.height * 0.2);
        const topPart = {
          top: rect.top,
          bottom: rect.top + borderAreaHeight
        };
        const centerPart = {
          top: rect.top + borderAreaHeight + 1,
          bottom: rect.bottom - borderAreaHeight - 1
        };
        const bottomPart = {
          top: rect.bottom - borderAreaHeight,
          bottom: rect.bottom
        };

        const isBetweenX = (rect.left <= clientX && clientX <= rect.left + item.clientWidth);
        if (!isBetweenX) {
          return;
        }

        if (topPart.top <= clientY && clientY <= topPart.bottom) {
          eventName = 'dragBefore';
          dropTarget.current = item;

          throw BreakException;
        }

        if (centerPart.top <= clientY && clientY <= centerPart.bottom) {
          eventName = 'dragOver';
          dropTarget.current = item;
          throw BreakException;
        }

        if (bottomPart.top <= clientY && clientY <= bottomPart.bottom) {
          eventName = 'dragAfter';
          dropTarget.current = item;
          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }

    if (dropTarget.current !== null) {
      const currentIndex = visibleDroppables.indexOf(dropTarget.current);
      if (currentIndex > 0) {
        dropTarget.previous = visibleDroppables[currentIndex - 1];
      }
      if (currentIndex < visibleDroppables.length - 2) {
        dropTarget.next = visibleDroppables[currentIndex + 1];
      }
    }

    return {eventName, dropTarget};
  }
}

export default DragListener;