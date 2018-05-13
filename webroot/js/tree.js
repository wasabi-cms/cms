webpackJsonp([0],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  capture: false,
  passive: false
});


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_tree_store__ = __webpack_require__(184);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({

  modules: {
    tree: __WEBPACK_IMPORTED_MODULE_2__modules_tree_store__["a" /* default */]
  }

});

/* harmony default export */ __webpack_exports__["a"] = (store);


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(18).polyfill();


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(230)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(252),
  /* scopeId */
  "data-v-7cd7bba7",
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree-actions\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cd7bba7", Component.options)
  } else {
    hotAPI.reload("data-v-7cd7bba7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  "data-v-1acd0712",
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1acd0712", Component.options)
  } else {
    hotAPI.reload("data-v-1acd0712", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_touch_events__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_touch_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue2_touch_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_tree_App_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_tree_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__modules_tree_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_tree_actions_App_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_tree_actions_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__modules_tree_actions_App_vue__);








__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue2_touch_events___default.a);

// create an application wide draggableStore to handle draggable data
var draggableStore = {
  dragObject: {},
  dragging: false,
  ghostStyles: {},
  dragOver: {},
  dragBefore: {},
  dragAfter: {},
  dragTarget: {},
  dragTargetEl: null,
  dropMode: 'move'
};

// create app-tree-actions instance
var appTreeActions = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  data: {
    draggableStore: draggableStore
  },
  render: function (h) { return h(__WEBPACK_IMPORTED_MODULE_5__modules_tree_actions_App_vue___default.a); }
});

// create app-tree instance
var appTree = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  data: {
    draggableStore: draggableStore
  },
  render: function (h) { return h(__WEBPACK_IMPORTED_MODULE_4__modules_tree_App_vue___default.a); }
});

appTreeActions.$mount('#object-tree-actions');
appTree.$mount('#object-tree');


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(26);


var defaults = {
  handle: null,
  scroll: true,
  scrollSensitivity: 30,
  scrollSpeed: 10,
  draggable: '>*',
  dropTarget: null,
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

var TreeDraggable = function TreeDraggable(el, options) {
  this.el = el;
  this.options = Object.assign({}, defaults, options);
  this.isDragging = false;
  this.dragEl = null;
  this.initialX = 0;
  this.initialY = 0;
  this.translate3d = null;
  this.droppableList = [];

  this._onTapStart = this._onTapStart.bind(this);
  this._onDrag = this._onDrag.bind(this);
  this._onDrop = this._onDrop.bind(this);
  this._onKeyDown = this._onKeyDown.bind(this);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el, 'mousedown', this._onTapStart);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el, 'touchstart', this._onTapStart);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el, 'pointerdown', this._onTapStart);
};

/**
 * Handle mousedown, touchstart and pointerdown events.
 *
 * @param {Event|TouchEvent} event
 * @private
 */
TreeDraggable.prototype._onTapStart = function _onTapStart (event) {
  event.preventDefault();

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

  var touch = event.touches && event.touches[0];
  var target = (touch || event).target;
  var originalTarget = event.target.shadowRoot && (event.path && event.path[0]) || target;

  // Don't start dragging if the original target is content editable.
  if (originalTarget.isContentEditable) {
    return;
  }

  target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* closest */])(target, this.options.draggable, this.el);

  // No valid drag target found.
  if (!target) {
    return;
  }

  this._prepareDrag(event, touch, target);
};

/**
 * Prepare the start of the drag interaction.
 *
 * @param {Event} event
 * @param {Touch} touch
 * @param {Element|*} target
 * @private
 */
TreeDraggable.prototype._prepareDrag = function _prepareDrag (event, touch, target) {
  this.dragEl = target;
  this.initialX = (touch || event).clientX;
  this.initialY = (touch || event).clientY;
  this.translate3d = 'translate3d(0,0,0)';

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'mouseup', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'touchend', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'touchcancel', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'pointerup', this._onDrop);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'touchmove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'mousemove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'pointermove', this._onDrag);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* on */])(this.el.ownerDocument, 'keydown', this._onKeyDown);
};

/**
 * Handle dragging.
 *
 * @param {Event} event
 * @private
 */
TreeDraggable.prototype._onDrag = function _onDrag (event) {
  event.preventDefault();

  var evt = event.touches ? event.touches[0] : event;
  var clientX = evt.clientX;
  var clientY = evt.clientY;
  var deltaX = clientX - this.initialX;
  var deltaY = clientY - this.initialY;
  var translate3d = 'translate3d(' + deltaX + 'px, ' + deltaY + 'px, 0)';
  var styles = this._calculateGhostStyles(clientX, clientY, translate3d);

  if (!this.isDragging) {
    // Only really start dragging if the delta is bigger than the drag start threshold.
    if (this.options.dragStartThreshold && Math.min(Math.abs(deltaX), Math.abs(deltaY)) < this.options.dragStartThreshold) {
      return;
    }

    this.isDragging = true;

    if (this.options.dropTarget !== null) {
      this.droppableList = Array.prototype.slice.call(this.el.querySelectorAll(this.options.dropTarget));
    }

    this._dispatch('dragStart', event, {dragEl: this.dragEl, ghostStyles: styles});
  }

  if (this.translate3d !== translate3d) {
    this._dispatch('dragMove', event, {transform: translate3d});
    this.translate3d = translate3d;

    var ref = this._dropTarget(clientX, clientY);
      var eventName = ref.eventName;
      var dropTarget = ref.dropTarget;
      var canDropTarget = ref.canDropTarget;

    if (eventName !== null && dropTarget !== null && canDropTarget !== null) {
      this._dispatch(eventName, event, {
        dropTarget: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* closest */])(dropTarget, this.options.draggable, this.el),
        canDropTarget: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* closest */])(canDropTarget, this.options.draggable, this.el)
      });
    } else {
      this._dispatch('resetDrag', event);
    }
  }
};

/**
 * Handle Dropping
 *
 * @param {Event} event
 * @private
 */
TreeDraggable.prototype._onDrop = function _onDrop (event) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'mouseup', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'touchend', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'touchcancel', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'pointerup', this._onDrop);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'touchmove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'mousemove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'pointermove', this._onDrag);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* off */])(this.el.ownerDocument, 'keydown', this._onKeyDown);

  if (this.isDragging) {
    event.preventDefault();
    this._dispatch('dragEnd', event);
  }

  this.dragEl = null;
  this.initialX = 0;
  this.initialY = 0;
  this.translate3d = null;
  this.droppableList = [];
  this.isDragging = false;
};

/**
 * Handle keydown event.
 *
 * @param {KeyboardEvent} event
 * @private
 */
TreeDraggable.prototype._onKeyDown = function _onKeyDown (event) {
  if (event.ctrlKey) {
    this._dispatch('ctrlPressed', event);
  }
};

/**
 * Dispatch an event.
 *
 * @param {String} eventName
 * @param {Event} event
 * @param {Object?} data
 * @private
 */
TreeDraggable.prototype._dispatch = function _dispatch (eventName, event, data) {
  var eventHandlerName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
  data = data || {};

  if (typeof this.options[eventHandlerName] !== 'function') {
    return;
  }

  var evt = this.el.ownerDocument.createEvent('Event');
  evt.initEvent(eventName, true, true);
  evt.originalEvent = event;
  evt.data = Object.assign({}, data);

  this.options[eventHandlerName](evt);
};

/**
 * Calculate the styles of the ghost element (indicator of the dragged element).
 *
 * @param {Number} clientX
 * @param {Number} clientY
 * @param {string} translate3d
 * @returns {{position: string, top: string, left: string, width: string, zIndex: number, pointerEvents: string, transform: string}}
 * @private
 */
TreeDraggable.prototype._calculateGhostStyles = function _calculateGhostStyles (clientX, clientY, translate3d) {
  var rect = this.dragEl.getBoundingClientRect();
  var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* css */])(this.dragEl);
  var top = rect.top;
  var left = rect.left;

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
};

TreeDraggable.prototype._dropTarget = function _dropTarget (clientX, clientY) {
    var this$1 = this;

  var dropTarget = null;
  var canDropTarget = null;
  var eventName = null;
  var BreakException = {};

  var visibleDroppables = this.droppableList.filter(function (d) { return d.clientHeight > 0; });

  try {
    visibleDroppables.forEach(function (item) {
      var rect = item.getBoundingClientRect();
      if (rect.height === 0) {
        return;
      }

      var borderAreaHeight = Math.floor(rect.height * 0.2);
      var topPart = {
        top: rect.top,
        bottom: rect.top + borderAreaHeight
      };
      var centerPart = {
        top: rect.top + borderAreaHeight + 1,
        bottom: rect.bottom - borderAreaHeight - 1
      };
      var bottomPart = {
        top: rect.bottom - borderAreaHeight,
        bottom: rect.bottom
      };

      var isBetweenX = (rect.left <= clientX && clientX <= rect.left + item.clientWidth);
      if (!isBetweenX) {
        return;
      }

      if (topPart.top <= clientY && clientY <= topPart.bottom) {
        eventName = 'dragBefore';
        var itemIndex = visibleDroppables.indexOf(item);
        if (itemIndex === 0) {
          canDropTarget = item;
        } else {
          canDropTarget = visibleDroppables[itemIndex - 1];
        }
        dropTarget = item;

        throw BreakException;
      }

      if (centerPart.top <= clientY && clientY <= centerPart.bottom) {
        eventName = 'dragOver';
        dropTarget = item;
        canDropTarget = item;
        throw BreakException;
      }

      if (bottomPart.top <= clientY && clientY <= bottomPart.bottom) {
        var draggable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* closest */])(item, this$1.options.draggable, this$1.el);
        var droppableChildren = draggable.querySelectorAll(this$1.options.dropTarget);
        var itemIndex$1 = visibleDroppables.indexOf(item);

        if (itemIndex$1 + 1 < visibleDroppables.length && Array.from(droppableChildren).indexOf(visibleDroppables[itemIndex$1 + 1]) !== -1) {
          eventName = 'dragOver';
        } else {
          eventName = 'dragAfter';
        }

        dropTarget = item;
        canDropTarget = item;
        throw BreakException;
      }
    });
  } catch (e) {
    if (e !== BreakException) { throw e; }
  }

  return {eventName: eventName, dropTarget: dropTarget, canDropTarget: canDropTarget};
};

/* harmony default export */ __webpack_exports__["a"] = (TreeDraggable);


/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = ({

  namespaced: true,

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    objects: [
      {
        id: 'asdfgasrgaqgag-2342324-wsef',
        name: 'Page 1',
        children: [
          {
            id: 'sdrgsergsergsegr-234234-sdfg',
            name: 'Page 2',
            children: [
              {
                id: 'asdfgasrgaqsdfggag-234sdfg2324-wsef',
                name: 'Page 1',
                children: [
                  {
                    id: 'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg',
                    name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
                    children: []
                  }
                ]
              },
              {
                id: 'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg',
                name: 'Page 3',
                children: []
              },
              {
                id: 'asdfgasrgasdfgqSDFag-2342324-wsef',
                name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
                children: [
                  {
                    id: 'sdrgsersdfggsasdfasdfergsegr-234234-sdfg',
                    name: 'Page 2',
                    children: []
                  }
                ]
              },
              {
                id: 'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg',
                name: 'Page 3',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg',
        name: 'Page 3',
        children: []
      },
      {
        id: 'asdfgasrgaqgag-234sdfg2324-wsef',
        name: 'Page 1',
        children: [
          {
            id: 'sdrgsergsergsegr-23sdasdffg4234-sdfg',
            name: 'Page 2',
            children: []
          }
        ]
      },
      {
        id: 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg',
        name: 'Page 3',
        children: []
      },
      {
        id: 'asdfgasrgaqSDFag-2342324-wsef',
        name: 'Page 1',
        children: [
          {
            id: 'sdrgsergsasdfasdfergsegr-234234-sdfg',
            name: 'Page 2',
            children: []
          }
        ]
      },
      {
        id: 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg',
        name: 'Page 3',
        children: []
      }
    ],
    active: null
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {

  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {
    SET_ACTIVE: function SET_ACTIVE(state, object) {
      __WEBPACK_IMPORTED_MODULE_0_vue__["default"].set(state, 'active', object);
    }
  }
});


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Add the given element to the array and return a new array instance.
 *
 * @param {Array} array
 * @param {*} element
 * @returns {Array}
 */
function addToArray(array, element) {
  return array.concat([element]);
}

/* harmony default export */ __webpack_exports__["a"] = (addToArray);


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matches_selector__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_parent_or_host__ = __webpack_require__(25);



/**
 * Get the closest element to the given el that matches selector.
 *
 * @param {Element|*} el
 * @param {String} selector
 * @param {Element|*?} context
 * @returns {Element}
 */
function closest(el, selector, context) {
  if (!el) {
    return null;
  }

  context = context || document;

  do {
    if ((selector === '>*' && el.parentNode === context) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matches_selector__["a" /* default */])(el, selector)) {
      return el;
    }
  } while (el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_parent_or_host__["a" /* default */])(el));
}

/* harmony default export */ __webpack_exports__["a"] = (closest);


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Get the css properties or a specific css property of an el, or apply a css property and value on the el.
 *
 * @param {Element|*} el
 * @param {String?} prop
 * @param {String|Number?} val
 * @returns {*}
 */
function css(el, prop, val) {
  var style = el && el.style;

  if (!style) {
    return;
  }

  if (typeof prop !== 'undefined') {
    if (!(prop in style)) {
      prop = '-webkit-' + prop;
    }

    if (typeof val !== 'undefined') {
      style[prop] = val;
      return;
    }

    return style[prop];
  }

  var styles;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    styles = document.defaultView.getComputedStyle(el, '');
  } else if (el.currentStyle) {
    styles = el.currentStyle;
  }

  return styles;
}

/* harmony default export */ __webpack_exports__["a"] = (css);


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capture_mode__ = __webpack_require__(15);


/**
 * Remove an event listener from el.
 *
 * @param {Element|*} el
 * @param {String} event
 * @param {Function} fn
 */
function off(el, event, fn) {
  el.removeEventListener(event, fn, __WEBPACK_IMPORTED_MODULE_0__capture_mode__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["a"] = (off);


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capture_mode__ = __webpack_require__(15);


/**
 * Add an event listener to el.
 *
 * @param {Element|*} el
 * @param {String} event
 * @param {Function} fn
 */
function on(el, event, fn) {
  el.addEventListener(event, fn, __WEBPACK_IMPORTED_MODULE_0__capture_mode__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["a"] = (on);


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Create a range array from start to end.
 *
 * @param {Number} start
 * @param {Number} end
 * @returns {Number[]}
 */
function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, idx) { return start + idx; });
}

/* harmony default export */ __webpack_exports__["a"] = (range);


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Remove an element from the given array and return a new array instance.
 *
 * @param {Array} array
 * @param {*} element
 * @returns {Array}
 */
function removeFromArray(array, element) {
  var newArray = [].concat( array );
  var index = newArray.indexOf(element);

  if (index === -1) {
    return array;
  }

  newArray.splice(index, 1);

  return newArray;
}

/* harmony default export */ __webpack_exports__["a"] = (removeFromArray);


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Truncate the given string to maxLength and append an ending.
 *
 * @param {String} string
 * @param {Number} maxLength
 * @param {String?} ending
 * @returns {String}
 */
function truncate(string, maxLength, ending) {
  ending = ending || '...';

  if (string.length <= maxLength) {
    return string;
  }

  return string.substring(0, maxLength - ending.length) + ending;
}

/* harmony default export */ __webpack_exports__["a"] = (truncate);


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var GeminiScrollbar = window.WS.exports.GeminiScrollbar;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'gemini-scrollbar',

  data: function data() {
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

  mounted: function mounted () {
    var this$1 = this;

    this.scrollbar = new GeminiScrollbar(Object.assign({}, {element: this.$el,
      createElements: false,
      onResize: function () {
        this$1.$emit('resize');
      }},
      this.$props));

    if (this.autoCreate) {
      this.scrollbar.create();
    }

    this.$emit('ready', this.scrollbar);
  },

  updated: function updated () {
    this.scrollbar.update();
  },

  beforeDestroy: function beforeDestroy () {
    if (this.scrollbar) {
      this.scrollbar.destroy();
    }

    this.scrollbar = null;
  }
});


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
    styles: function styles() {
      return {
        fill: this.color,
        fillRule: 'nonzero'
      }
    }
  }
});


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-tree-actions',

  methods: {
    onDragstart: function onDragstart(event) {
      console.log('Drag Start auf Button');
    }
  }
});


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_TreeDraggable_vue__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_TreeDraggable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_TreeDraggable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_TreeRootNode_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_TreeRootNode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_TreeRootNode_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_GeminiScrollbar_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_GeminiScrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_GeminiScrollbar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-tree',

  components: {
    GeminiScrollbar: __WEBPACK_IMPORTED_MODULE_2__components_GeminiScrollbar_vue___default.a,
    TreeDraggable: __WEBPACK_IMPORTED_MODULE_0__component_TreeDraggable_vue___default.a,
    TreeRootNode: __WEBPACK_IMPORTED_MODULE_1__component_TreeRootNode_vue___default.a
  },

  data: function data() {
    return {
      draggableOptions: {
        draggable: '.tree--node',
        dropTarget: '.tree--node--details',
        dragActiveClass: 'tree--drag-active',
        positionGhostToPointer: true,
        ghostOffsetTop: 15,
        ghostOffsetLeft: 15
      },
      rootNode: {
        name: 'Wasabi CMS Site'
      }
    }
  },

  computed: {
    objects: function objects() {
      return this.$store.state.tree.objects
    }
  },
});


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeNode_vue__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeNode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TreeNode_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tree',

  props: {
    objects: Array,
    level: {
      type: Number,
      required: false,
      default: 0
    },
    spanLevel: {
      type: Array,
      required: false,
      default: function () { return []; }
    },
    dragObject: {
      type: Object,
      required: true
    },
    dragOver: {
      type: Object,
      required: true
    },
    dragBefore: {
      type: Object,
      required: true
    },
    dragAfter: {
      type: Object,
      required: true
    },
    dragTarget: {
      type: Object,
      required: true
    },
    scrollbar: {
      required: true,
      validator: function (scrollbar) {
        return ['object', 'undefined'].indexOf(typeof scrollbar) !== -1;
      }
    }
  },

  components: {
    TreeNode: __WEBPACK_IMPORTED_MODULE_0__TreeNode_vue___default.a
  },

  methods: {

    isLast: function isLast(index) {
      return (index + 1) === this.objects.length;
    },

    spanLevels: function spanLevels(level, isLast) {
      if (level === 0) {
        return [level];
      }

      if (isLast) {
        return this.spanLevel;
      }

      return this.spanLevel.concat([level]);
    }
  }
});


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeDraggable__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tree_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Tree_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TreeGhostNode_vue__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TreeGhostNode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TreeGhostNode_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tree-draggable',

  props: {
    objects: Array,
    options: Object,
    refs: Object
  },

  components: {
    Tree: __WEBPACK_IMPORTED_MODULE_1__Tree_vue___default.a,
    TreeGhostNode: __WEBPACK_IMPORTED_MODULE_2__TreeGhostNode_vue___default.a
  },

  data: function data() {
    return {
      tree: null,
      dragObject: {},
      dragging: false,
      ghostStyles: {},
      dragOver: {},
      dragBefore: {},
      dragAfter: {},
      dragTarget: {},
      dragTargetEl: null,
      dropMode: 'move',
      scrollbar: null
    }
  },

  mounted: function mounted() {
    var treeComponent = this.findComponent('tree');

    var options = Object.assign({}, this.options,
      {onDragStart: this.onDragStart.bind(this),
      onDragMove: this.onDragMove.bind(this),
      onDragEnd: this.onDragEnd.bind(this),
      onDragOver: this.onDragOver.bind(this),
      onDragBefore: this.onDragBefore.bind(this),
      onDragAfter: this.onDragAfter.bind(this),
      onResetDrag: this.onResetDrag.bind(this),
      onCtrlPressed: this.onCtrlPressed.bind(this)});

    this.tree = new __WEBPACK_IMPORTED_MODULE_0__TreeDraggable__["a" /* default */](treeComponent.$el, options);
    this.scrollbar = this.refs.scrollContainer.srollbar;
    this.scrollbar && this.scrollbar.update();
  },

  methods: {

    findComponent: function findComponent(name) {
      var component = null;

      this.$children.some(function (childComponent) {
        if (childComponent.$options.name === name) {
          component = childComponent;
          return true;
        }
      });

      return component;
    },

    onDragStart: function onDragStart(event) {
      this.dragging = true;
      this.dragObject = Object.assign({}, event.data.dragEl.__vue__.object);
      this.ghostStyles = event.data.ghostStyles;
    },

    onDragMove: function onDragMove(event) {
      this.ghostStyles.transform = event.data.transform;
    },

    onDragEnd: function onDragEnd() {
      this.dragging = false;
      this.dragObject = {};
      this.dragOver = {};
      this.dragBefore = {};
      this.dragAfter = {};
      this.dragTarget = {};
      this.dragTargetEl = null;
      this.dropMode = 'move';
      this.ghostStyles = {};
    },

    onDragOver: function onDragOver(event) {
      var targetComponent = event.data.dropTarget.__vue__;
      var canDropComponent = event.data.canDropTarget.__vue__;
      if (this.canDropOnComponent(canDropComponent)) {
        this.dragOver = Object.assign({}, targetComponent.object);
        this.dragBefore = {};
        this.dragAfter = {};
        this.dragTargetEl = event.data.dropTarget;
      } else {
        this.dragOver = {};
        this.dragBefore = {};
        this.dragAfter = {};
        this.dragTargetEl = null;
      }
      this.dragTarget = Object.assign({}, targetComponent.object);
    },

    onDragBefore: function onDragBefore(event) {
      var targetComponent = event.data.dropTarget.__vue__;
      var canDropComponent = event.data.canDropTarget.__vue__;
      if (this.canDropOnComponent(canDropComponent)) {
        this.dragOver = {};
        this.dragBefore = Object.assign({}, targetComponent.object);
        this.dragAfter = {};
        this.dragTargetEl = event.data.dropTarget;
      } else if (this.canDropOnComponent(targetComponent)) {
        this.dragOver = Object.assign({}, targetComponent.object);
        this.dragBefore = {};
        this.dragAfter = {};
        this.dragTargetEl = event.data.dropTarget;
      } else {
        this.dragOver = {};
        this.dragBefore = {};
        this.dragAfter = {};
        this.dragTargetEl = null;
      }
      this.dragTarget = Object.assign({}, targetComponent.object);
    },

    onDragAfter: function onDragAfter(event) {
      var targetComponent = event.data.dropTarget.__vue__;
      var canDropComponent = event.data.canDropTarget.__vue__;
      if (this.canDropOnComponent(canDropComponent)) {
        this.dragOver = {};
        this.dragBefore = {};
        this.dragAfter = Object.assign({}, targetComponent.object);
        this.dragTargetEl = event.data.dropTarget;
      } else {
        this.dragOver = {};
        this.dragBefore = {};
        this.dragAfter = {};
        this.dragTargetEl = null;
      }
      this.dragTarget = Object.assign({}, targetComponent.object);
    },

    onResetDrag: function onResetDrag() {
      this.dragOver = {};
      this.dragBefore = {};
      this.dragAfter = {};
      this.dragTarget = {};
      this.dragTargetEl = null;
    },

    onCtrlPressed: function onCtrlPressed() {
      this.dropMode = this.dropMode === 'move' ? 'copy' : 'move';
    },

    canDropOnComponent: function canDropOnComponent(targetComponent) {
      if (this.dropMode === 'copy') {
        return true;
      }

      if (targetComponent.object.id === this.dragObject.id) {
        return false;
      }

      return !this.hasParent(targetComponent, this.dragObject.id);
    },

    hasParent: function hasParent(component, id) {
      if (typeof component.$parent === 'undefined') {
        return false;
      }

      if (typeof component.$parent.object === 'undefined') {
        return this.hasParent(component.$parent, id);
      }

      if (component.$parent.object.id === id) {
        return true;
      }

      return this.hasParent(component.$parent, id);
    },

    containerClasses: function containerClasses() {
      return {
        'tree--draggable__dragging': this.dragging
      }
    }
  }
});


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tree-ghost-node',

  props: {
    dragObject: {
      type: Object,
      required: true
    },
    dragOver: {
      type: Object,
      required: true
    },
    dragBefore: {
      type: Object,
      required: true
    },
    dragAfter: {
      type: Object,
      required: true
    },
    dragTargetEl: {
      type: Element,
      required: false,
      default: null
    },
    dropMode: {
      type: String,
      required: true
    }
  },

  computed: {

    dragTargetIndex: function dragTargetIndex() {
      if (this.dragTargetEl === null) {
        return -1;
      }
      return Array.from(this.dragTargetEl.parentNode.children).indexOf(this.dragTargetEl);
    },

    dragTargetSiblingCount: function dragTargetSiblingCount() {
      if (this.dragTargetEl === null) {
        return 'nope';
      }
      return this.dragTargetEl.parentNode.children.length;
    }
  },

  methods: {
    containerClasses: function containerClasses() {
      return {
        'tree--ghost-node__denied':
          typeof this.dragOver.id === 'undefined' &&
          typeof this.dragBefore.id === 'undefined' &&
          typeof this.dragAfter.id === 'undefined'
      }
    },

    imageClasses: function imageClasses() {
      return {
        'tree--ghost-node--image__denied':
          typeof this.dragOver.id === 'undefined' &&
          typeof this.dragBefore.id === 'undefined' &&
          typeof this.dragAfter.id === 'undefined',
        'tree--ghost-node--image__move-into': this.dropMode === 'move' && typeof this.dragOver.id !== 'undefined',
        'tree--ghost-node--image__move-before': this.dropMode === 'move' && typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex === 0,
        'tree--ghost-node--image__move-after': this.dropMode === 'move' && typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
        'tree--ghost-node--image__move-between':
          this.dropMode === 'move' &&
          (
            typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex !== 0 ||
            typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
          ),
        'tree--ghost-node--image__copy-into': this.dropMode === 'copy' && typeof this.dragOver.id !== 'undefined',
        'tree--ghost-node--image__copy-before': this.dropMode === 'copy' && typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex === 0,
        'tree--ghost-node--image__copy-after': this.dropMode === 'copy' && typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
        'tree--ghost-node--image__copy-between':
          this.dropMode === 'copy' &&
          (
            typeof this.dragBefore.id !== 'undefined' && this.dragTargetIndex !== 0 ||
            typeof this.dragAfter.id !== 'undefined' && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
          )
      }
    }
  },

  mounted: function mounted() {
    document.body.insertBefore(this.$el, document.body.lastChild);
  }
});


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(26);
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Cookies = window.WS.exports.Cookies;


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tree-node',

  props: {
    object: Object,
    level: {
      type: Number,
      required: false,
      default: 0
    },
    isLast: {
      type: Boolean,
      required: false,
      default: true
    },
    spanLevels: {
      type: Array,
      required: false,
      default: function () { return []; }
    },
    dragObject: {
      type: Object,
      required: true
    },
    dragOver: {
      type: Object,
      required: true
    },
    dragBefore: {
      type: Object,
      required: true
    },
    dragAfter: {
      type: Object,
      required: true
    },
    dragTarget: {
      type: Object,
      required: true
    },
    scrollbar: {
      required: true,
      validator: function (scrollbar) {
        return ['object', 'undefined'].indexOf(typeof scrollbar) !== -1;
      }
    }
  },

  data: function data() {
    return {
      expanded: this.getExpandedIds().includes(this.object.id),
      expanding: false
    };
  },

  computed: {
    node: function node() {
      return this.object;
    },

    name: function name() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* truncate */])(this.node.name, 50, '...');
    },

    hasChildren: function hasChildren() {
      return this.node.children.length > 0;
    },

    isSelected: function isSelected() {
      if (typeof this.dragObject.id !== 'undefined') {
        return this.dragObject.id === this.node.id;
      }

      return this.$store.state.tree.active !== null && this.$store.state.tree.active.id === this.node.id;
    },

    assetUrl: function assetUrl() {
      return window.WS.getModule('Wasabi/Cms').options.assetUrl;
    },

    imageUrl: function imageUrl() {
      return this.assetUrl + '/img/tree-page-default.svg';
    },

    isDragOver: function isDragOver() {
      return this.dragOver.id && this.dragOver.id === this.node.id;
    },

    isDragBefore: function isDragBefore() {
      return this.dragBefore.id && this.dragBefore.id === this.node.id;
    },

    isDragAfter: function isDragAfter() {
      return this.dragAfter.id && this.dragAfter.id === this.node.id;
    },

    isDragDenied: function isDragDenied() {
      return this.dragTarget.id && this.dragTarget.id === this.node.id && !this.isDragOver && !this.isDragBefore && !this.isDragAfter;
    }
  },

  methods: {

    nodeClasses: function nodeClasses() {
      return {
        'tree--node__selected': this.isSelected,
        'tree--node__expanded': this.expanding || this.expanded,
        'tree--node__drag-over': this.isDragOver,
        'tree--node__drag-before': this.isDragBefore,
        'tree--node__drag-after': this.isDragAfter,
        'tree--node__drag-denied': this.isDragDenied,
      };
    },

    nodeSpacerClasses: function nodeSpacerClasses(level) {
      return {
        'tree--node--spacer': true,
        'tree--node--spacer__span': this.spanLevels.includes(level)
      }
    },

    nodeStateClasses: function nodeStateClasses() {
      return {
        'tree--state--icon': true,
        'tree--state--icon__plus': this.hasChildren && !this.expanded && !this.isLast,
        'tree--state--icon__plus-bottom': this.hasChildren && !this.expanded && this.isLast,
        'tree--state--icon__minus': this.hasChildren && this.expanded && !this.isLast,
        'tree--state--icon__minus-bottom': this.hasChildren && this.expanded && this.isLast,
        'tree--state--icon__join': !this.hasChildren && !this.isLast,
        'tree--state--icon__join-bottom': !this.hasChildren && this.isLast
      };
    },

    setActive: function setActive() {
      this.$store.commit('tree/SET_ACTIVE', this.node);
    },

    range: function range$1(start, end) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* range */])(start, end);
    },

    toggleExpand: function toggleExpand() {
      var this$1 = this;

      this.expanded = !this.expanded;
      this.expanding = true;

      var expandedIds = this.getExpandedIds();
      expandedIds = this.expanded ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* addToArray */])(expandedIds, this.node.id) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* removeFromArray */])(expandedIds, this.node.id);

      this.setExpandedIds(expandedIds);

      var childTree = this.$children[0];
      if (typeof childTree === 'undefined') {
        return;
      }

      var container = childTree.$el;

      if (this.expanded) {
        // Slide down
        container.style.display = 'block';
        container.style.height = 'auto';
        container.style.overflow = 'hidden';
        var targetHeight = container.clientHeight + 'px';

        container.style.height = '0px';

        setTimeout(function () {
          container.style.height = targetHeight;
        }, 0);
      } else {
        // Slide up
        container.style.height = container.clientHeight + 'px';
        container.style.overflow = 'hidden';

        setTimeout(function () {
          container.style.height = '0px';
        }, 0);
      }

      container.addEventListener('transitionend', function () {
        this$1.expanding = false;
        container.style.display = '';
        container.style.height = '';
        container.style.overflow = '';
        setTimeout(function () { return this$1.scrollbar && this$1.scrollbar.update(); }, 0);
      }, {once: true});
    },

    getExpandedIds: function getExpandedIds() {
      var expanded = Cookies.get('wasabi_cms_tree_expanded');

      if (typeof expanded !== 'undefined') {
        return expanded.split(',');
      }

      return [];
    },

    setExpandedIds: function setExpandedIds(expanded) {
      Cookies.set('wasabi_cms_tree_expanded', expanded.join(','));
    },

    onNativeDragEnter: function onNativeDragEnter(event) {
      console.log('Drag Enter auf TreeNode ' + this.node.name);
    },

    onNativeDragOver: function onNativeDragOver(event) {
      event.dataTransfer.dropEffect = 'move';
    },

    onNativeDragLeave: function onNativeDragLeave() {
      console.log('Drag Leave auf TreeNode ' + this.node.name);
    }
  },

  watch: {
    isDragOver: function isDragOver(val) {
      var this$1 = this;

      if (val && this.node.children.length > 0 && !this.expanded) {
        this.expandTimeout = setTimeout(function () { return this$1.toggleExpand(); }, 750);
        return;
      }
      this.expandTimeout = 0;
    }
  }
});


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tree-root-node',

  components: {
    WasabiLogo: __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default.a
  },

  props: {
    object: {
      type: Object,
      required: true
    }
  },

  computed: {
    node: function node() {
      return this.object;
    },

    assetUrl: function assetUrl() {
      return window.WS.getModule('Wasabi/Cms').options.assetUrl;
    },

    imageUrl: function imageUrl() {
      return this.assetUrl + '/img/logo.svg'
    }
  }
});


/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(245),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\components\\GeminiScrollbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] GeminiScrollbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-131d3712", Component.options)
  } else {
    hotAPI.reload("data-v-131d3712", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(250),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\components\\Logo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Logo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7199a095", Component.options)
  } else {
    hotAPI.reload("data-v-7199a095", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(226)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(247),
  /* scopeId */
  "data-v-1be6250a",
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree\\component\\Tree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1be6250a", Component.options)
  } else {
    hotAPI.reload("data-v-1be6250a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(231)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(253),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree\\component\\TreeDraggable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TreeDraggable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f9d015a", Component.options)
  } else {
    hotAPI.reload("data-v-8f9d015a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(228)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(249),
  /* scopeId */
  "data-v-428abcf7",
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree\\component\\TreeGhostNode.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TreeGhostNode.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-428abcf7", Component.options)
  } else {
    hotAPI.reload("data-v-428abcf7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(227)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(248),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree\\component\\TreeNode.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TreeNode.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fc6dd2c", Component.options)
  } else {
    hotAPI.reload("data-v-2fc6dd2c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(251),
  /* scopeId */
  "data-v-7748b1a4",
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree\\component\\TreeRootNode.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TreeRootNode.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7748b1a4", Component.options)
  } else {
    hotAPI.reload("data-v-7748b1a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: "gm-scroll-view"
  }, [_vm._t("default")], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gm-scrollbar -vertical"
  }, [_c('div', {
    staticClass: "thumb"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gm-scrollbar -horizontal"
  }, [_c('div', {
    staticClass: "thumb"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-131d3712", module.exports)
  }
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "object--tree"
  }, [_c('gemini-scrollbar', {
    ref: "scrollContainer",
    attrs: {
      "autoshow": true
    }
  }, [_c('div', {
    staticClass: "object--tree--inner"
  }, [_c('tree-root-node', {
    attrs: {
      "object": _vm.rootNode
    }
  }), _c('tree-draggable', {
    attrs: {
      "objects": _vm.objects,
      "options": _vm.draggableOptions,
      "refs": this.$refs
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1acd0712", module.exports)
  }
}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "tree--nodes"
  }, _vm._l((_vm.objects), function(object, index) {
    return _c('tree-node', {
      key: object.id,
      attrs: {
        "object": object,
        "level": _vm.level,
        "isLast": _vm.isLast(index),
        "spanLevels": _vm.spanLevel,
        "dragObject": _vm.dragObject,
        "dragOver": _vm.dragOver,
        "dragBefore": _vm.dragBefore,
        "dragAfter": _vm.dragAfter,
        "dragTarget": _vm.dragTarget,
        "scrollbar": _vm.scrollbar
      }
    }, [(object.children.length > 0) ? _c('tree', {
      attrs: {
        "objects": object.children,
        "level": _vm.level + 1,
        "spanLevel": _vm.spanLevels(_vm.level, _vm.isLast(index)),
        "dragObject": _vm.dragObject,
        "dragOver": _vm.dragOver,
        "dragBefore": _vm.dragBefore,
        "dragAfter": _vm.dragAfter,
        "dragTarget": _vm.dragTarget,
        "scrollbar": _vm.scrollbar
      }
    }) : _vm._e()], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1be6250a", module.exports)
  }
}

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "tree--node",
    class: _vm.nodeClasses()
  }, [_c('div', {
    staticClass: "tree--node--details",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.setActive($event)
      },
      "dragenter": function($event) {
        $event.preventDefault();
        return _vm.onNativeDragEnter($event)
      },
      "dragover": function($event) {
        $event.preventDefault();
        return _vm.onNativeDragOver($event)
      },
      "dragleave": function($event) {
        $event.preventDefault();
        return _vm.onNativeDragLeave($event)
      }
    }
  }, [(_vm.level > 0) ? _c('div', {
    staticClass: "tree--node--spacers"
  }, _vm._l((_vm.range(0, _vm.level - 1)), function(lvl) {
    return _c('div', {
      class: _vm.nodeSpacerClasses(lvl)
    })
  })) : _vm._e(), _c('div', {
    directives: [{
      name: "touch",
      rawName: "v-touch",
      value: (_vm.toggleExpand),
      expression: "toggleExpand"
    }],
    class: _vm.nodeStateClasses()
  }), _c('div', {
    staticClass: "tree--node--icon"
  }, [_c('img', {
    staticClass: "tree--node--icon--image",
    attrs: {
      "src": _vm.imageUrl,
      "width": "16",
      "height": "16"
    }
  })]), _c('div', {
    staticClass: "tree--node--name"
  }, [_vm._v(_vm._s(_vm.name))])]), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2fc6dd2c", module.exports)
  }
}

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tree--ghost-node",
    class: _vm.containerClasses()
  }, [_c('div', {
    staticClass: "tree--ghost-node--details"
  }, [_c('div', {
    staticClass: "tree--ghost-node--image",
    class: _vm.imageClasses()
  }), _c('div', {
    staticClass: "tree--ghost-node--name"
  }, [_vm._v(_vm._s(_vm.dragObject.name))])]), _c('div', {
    staticClass: "tree--ghost--node--info"
  }, [(_vm.dropMode === 'copy') ? _c('span', [_vm._v("Zum Verschieben Strg drücken")]) : _vm._e(), (_vm.dropMode === 'move') ? _c('span', [_vm._v("Zum Kopieren Strg drücken")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-428abcf7", module.exports)
  }
}

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Get the parent or host element of el.
 *
 * @param {Element|*} el
 * @returns {Element}
 */
function getParentOrHost(el) {
  var parent = el.host;

  return (parent && parent.nodeType) ? parent : el.parentNode;
}

/* harmony default export */ __webpack_exports__["a"] = (getParentOrHost);


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    staticStyle: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "1.41421"
    },
    attrs: {
      "width": _vm.width,
      "height": _vm.height,
      "viewBox": "0 0 121 101",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "transform": "matrix(1,0,0,1,-416.06,-28.975)"
    }
  }, [_c('g', {
    attrs: {
      "transform": "matrix(1.31409,0,0,1.31409,410.278,13.2059)"
    }
  }, [_c('path', {
    style: (_vm.styles),
    attrs: {
      "d": "M4.4,78.6L8.9,85.8L41.5,29.3L64.9,65L74.6,65L41.4,13.4L4.4,78.6Z"
    }
  })]), _c('g', {
    attrs: {
      "transform": "matrix(1.31409,0,0,1.31409,410.278,13.2059)"
    }
  }, [_c('path', {
    style: (_vm.styles),
    attrs: {
      "d": "M37.4,69L33.3,76.3L96.3,76.2L53.7,12L44.7,12.1L81.5,69L81.2,69L81.4,69L37.4,69Z"
    }
  })]), _c('g', {
    attrs: {
      "transform": "matrix(1.31409,0,0,1.31409,410.278,13.2059)"
    }
  }, [_c('path', {
    style: (_vm.styles),
    attrs: {
      "d": "M27.3,81L27.2,81L34.7,67.1L35.2,66L46.9,44.6L41.7,36.6L12.1,88L91.6,88.4L96.4,81L27.2,81L27.3,81Z"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7199a095", module.exports)
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tree--node tree--node__root"
  }, [_c('div', {
    staticClass: "tree--node--details"
  }, [_c('div', {
    staticClass: "tree--node--icon"
  }, [_c('wasabi-logo', {
    attrs: {
      "color": '#666'
    }
  })], 1), _c('div', {
    staticClass: "tree--node--name"
  }, [_vm._v(_vm._s(_vm.node.name))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7748b1a4", module.exports)
  }
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "object-tree--actions"
  }, [_c('div', {
    staticClass: "object-tree--buttons"
  }, [_c('div', {
    staticClass: "object-tree--button",
    attrs: {
      "draggable": "true"
    },
    on: {
      "dragstart": _vm.onDragstart
    }
  }, [_vm._v("New Page")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cd7bba7", module.exports)
  }
}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tree--draggable",
    class: _vm.containerClasses()
  }, [_c('tree', {
    attrs: {
      "objects": _vm.objects,
      "dragObject": _vm.dragObject,
      "dragOver": _vm.dragOver,
      "dragBefore": _vm.dragBefore,
      "dragAfter": _vm.dragAfter,
      "dragTarget": _vm.dragTarget,
      "scrollbar": _vm.scrollbar
    }
  }), _c('tree-ghost-node', {
    style: (_vm.ghostStyles),
    attrs: {
      "dragObject": _vm.dragObject,
      "dragOver": _vm.dragOver,
      "dragBefore": _vm.dragBefore,
      "dragAfter": _vm.dragAfter,
      "dragTargetEl": _vm.dragTargetEl,
      "dropMode": _vm.dropMode
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8f9d015a", module.exports)
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_to_array__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capture_mode__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__closest__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_parent_or_host__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__matches_selector__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__off__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__on__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__range__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove_from_array__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__truncate__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__add_to_array__["a"]; });
/* unused harmony reexport captureMode */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__closest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__css__["a"]; });
/* unused harmony reexport getParentOrHost */
/* unused harmony reexport matchesSelector */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__off__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__on__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__range__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__remove_from_array__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__truncate__["a"]; });















/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Check if el matches the selector.
 *
 * @param {Element|*} el
 * @param {String} selector
 * @returns {Boolean}
 */
function matchesSelector(el, selector) {
  if (!el) {
    return false;
  }

  try {
    if (el.matches) {
      return el.matches(selector);
    }
    if (el.msMatchesSelector) {
      return el.msMatchesSelector(selector);
    }
  } catch (e) {
    return false;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matchesSelector);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

},[182]);
//# sourceMappingURL=tree.js.map