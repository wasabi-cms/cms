webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withParams", {
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
});
exports.regex = exports.ref = exports.len = exports.req = void 0;

var _withParams = _interopRequireDefault(__webpack_require__(148));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),
/* 1 */
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


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  capture: false,
  passive: false
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(90)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(121),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\tree-actions\\component\\NewPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NewPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a765f7a", Component.options)
  } else {
    hotAPI.reload("data-v-9a765f7a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_content_views_ContentIndex_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_content_views_ContentIndex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modules_content_views_ContentIndex_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_content_views_PageEdit_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_content_views_PageEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__modules_content_views_PageEdit_vue__);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var routes = [
  {
    path: '/',
    name: 'content-index',
    components: {
      default: __WEBPACK_IMPORTED_MODULE_2__modules_content_views_ContentIndex_vue___default.a
    }
  },
  {
    path: '/page/:id',
    name: 'page-edit',
    components: {
      default: __WEBPACK_IMPORTED_MODULE_3__modules_content_views_PageEdit_vue___default.a
    }
  }
];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: routes,
  base: global.window.WS.getModule('Wasabi/Cms').options.baseUrl,
  mode: 'history'
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_to_array__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capture_mode__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__closest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_parent_or_host__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__matches_selector__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__off__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__on__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__range__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove_from_array__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__truncate__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__add_to_array__["a"]; });
/* unused harmony reexport captureMode */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__closest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__css__["a"]; });
/* unused harmony reexport getParentOrHost */
/* unused harmony reexport matchesSelector */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__off__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__on__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__range__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__remove_from_array__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__truncate__["a"]; });















/***/ }),
/* 24 */
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
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(91)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(122),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\components\\DragListener.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DragListener.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b8b5571c", Component.options)
  } else {
    hotAPI.reload("data-v-b8b5571c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_tree_store__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_pageResource__ = __webpack_require__(51);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({

  modules: {
    tree: __WEBPACK_IMPORTED_MODULE_2__modules_tree_store__["a" /* default */]
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    newPage: null
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {

    OPEN_NEW_PAGE_MODAL: function OPEN_NEW_PAGE_MODAL(ref, options) {
      var commit = ref.commit;

      commit('SET_NEW_PAGE_OPTIONS', options);
    },

    CLOSE_NEW_PAGE_MODAL: function CLOSE_NEW_PAGE_MODAL(ref) {
      var commit = ref.commit;

      commit('SET_NEW_PAGE_OPTIONS', null);
    },

    GET_PAGES: function GET_PAGES(ref) {
      var commit = ref.commit;

      return __WEBPACK_IMPORTED_MODULE_3__api_pageResource__["a" /* default */].list()
        .then(function (response) {
          var data = response.data.data;

          var rootNode = data.rootNode;
          var nodes = data.nodes;

          commit('tree/SET_NODES', nodes);
          commit('tree/SET_ROOT_NODE', rootNode);
        });
    },

    CREATE_PAGE: function CREATE_PAGE(ref, title) {
      var commit = ref.commit;
      var dispatch = ref.dispatch;
      var state = ref.state;

      var params = Object.assign({}, state.newPage,
        {title: title});

      return __WEBPACK_IMPORTED_MODULE_3__api_pageResource__["a" /* default */].create(params)
        .then(function (response) {
          var data = response.data.data;

          dispatch('tree/SCROLL_INTO_VIEW', data.page.id);

          commit('tree/ADD_OR_UPDATE_NODE', data.page);

          if (data.childNodes.length > 0) {
            var childNodes = [];
            data.childNodes.forEach(function (node) {
              commit('tree/ADD_OR_UPDATE_NODE', node);
              childNodes.push(node.id);
            });

            if (data.updateChildNodesOf === null) {
              commit('tree/SET_ROOT_NODE_CHILDREN', childNodes);
            } else {
              commit('tree/SET_NODE_CHILDREN', {context: data.updateChildNodesOf, children: childNodes});
            }
          }

          dispatch('tree/SELECT_NODE', data.page.id);
        });
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {

    SET_NEW_PAGE_OPTIONS: function SET_NEW_PAGE_OPTIONS(state, options) {
      state.newPage = options;
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- GETTERS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  getters: {

    showNewPageModal: function showNewPageModal(state) {
      return state.newPage !== null;
    }
  }

});

/* harmony default export */ __webpack_exports__["a"] = (store);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(13).polyfill();


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(79)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\content\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e899f58", Component.options)
  } else {
    hotAPI.reload("data-v-0e899f58", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(89)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(120),
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(80)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(110),
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
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var baseUrl = global.window.WS.getModule('Wasabi/Cms').options.apiBaseUrl;

var http = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

http.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    if (error.response.status === 403) {
      global.window.WS.getModule('Wasabi/Core').eventBus.trigger('auth-error');
    }

    return Promise.reject(error);
  }
);

/* harmony default export */ __webpack_exports__["a"] = (http);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(50);


/* harmony default export */ __webpack_exports__["a"] = ({
  list: function () {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* default */].get('/pages');
  },

  create: function (page) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* default */].post('/pages', page);
  }
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(23);


var defaults = {
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

var DragListener = function DragListener(el, options) {
  this.el = el;
  this.options = Object.assign({}, defaults, options);
  this.dropTargets = [];
  this.isDragging = false;
  this.dragEl = null;
  this.lastEventName = null;
  this.lastDropTarget =null;
  this.initialX = 0;
  this.initialY = 0;
  this.translate3d = null;
  this.keypressActive = false;

  this._onTapStart = this._onTapStart.bind(this);
  this._onDrag = this._onDrag.bind(this);
  this._onDrop = this._onDrop.bind(this);
  this._onKeyDown = this._onKeyDown.bind(this);
  this._onKeyUp = this._onKeyUp.bind(this);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el, 'mousedown', this._onTapStart);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el, 'touchstart', this._onTapStart);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el, 'pointerdown', this._onTapStart);
};

/**
 * Add a new drop target for the given context and selector.
 * Ensures all drop targets are unique.
 *
 * @param {Element|*} context
 * @param {String} selector
 */
DragListener.prototype.addDropTarget = function addDropTarget (context, selector) {
  var dropTargets = [].concat( this.dropTargets );

  for (var index in dropTargets) {
    var target = dropTargets[index];
    if (target.context === context && target.selector === selector) {
      return;
    }
  }

  this.dropTargets.push({context: context, selector: selector});
};

/**
 * Handle mousedown, touchstart and pointerdown events.
 *
 * @param {Event|TouchEvent} event
 * @private
 */
DragListener.prototype._onTapStart = function _onTapStart (event) {
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

  if (this.options.handleSelector !== null && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* closest */])(target, this.options.handleSelector, this.el)) {
    return;
  }

  target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* closest */])(target, this.options.draggable, this.el);

  // No valid drag target found.
  if (!target) {
    return;
  }

  this._prepareDrag(event, touch, target);
  event.preventDefault();
};

/**
 * Prepare the start of the drag interaction.
 *
 * @param {Event} event
 * @param {Touch} touch
 * @param {Element|*} target
 * @private
 */
DragListener.prototype._prepareDrag = function _prepareDrag (event, touch, target) {
  this.dragEl = target;
  this.initialX = (touch || event).clientX;
  this.initialY = (touch || event).clientY;
  this.translate3d = 'translate3d(0,0,0)';
  this.lastEventName = null;
  this.lastDropTarget =null;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'mouseup', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'touchend', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'touchcancel', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'pointerup', this._onDrop);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'touchmove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'mousemove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'pointermove', this._onDrag);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'keydown', this._onKeyDown);
};

/**
 * Handle dragging.
 *
 * @param {Event} event
 * @private
 */
DragListener.prototype._onDrag = function _onDrag (event) {
    var this$1 = this;

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
    this.droppableList = [];

    if (this.dropTargets.length > 0) {
      [].concat( this.dropTargets ).forEach(function (target) {
        var context = target.context || this$1.$el.ownerDocument;
        this$1.droppableList = this$1.droppableList.concat( Array.prototype.slice.call(context.querySelectorAll(target.selector)));
      });
    }

    this._dispatch('dragStart', event, {dragEl: this.dragEl, ghostStyles: styles});
  }

  if (this.translate3d !== translate3d) {
    this._dispatch('dragMove', event, {transform: translate3d});
    this.translate3d = translate3d;

    var ref = this._getDropTarget(clientX, clientY);
      var eventName = ref.eventName;
      var dropTarget = ref.dropTarget;

    if (eventName !== null && dropTarget.current !== null) {
      if (this.lastEventName !== eventName || this.lastDropTarget !== dropTarget.current) {
        this.lastEventName = eventName;
        this.lastDropTarget = dropTarget.current;

        this._dispatch(eventName, event, {
          dropTarget: {
            current: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* closest */])(dropTarget.current, this.options.dropTargetComponent),
            previous: dropTarget.previous !== null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* closest */])(dropTarget.previous, this.options.dropTargetComponent) : null,
            next: dropTarget.next !== null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* closest */])(dropTarget.next, this.options.dropTargetComponent) : null
          }
        });
      }
    } else {
      this.lastEventName = null;
      this.lastDropTarget = null;
      this._dispatch('resetDrag', event);
    }
  }
};

/**
 * Handle Dropping
 *
 * @param {Event} event
 * @param {Boolean} cancel
 * @private
 */
DragListener.prototype._onDrop = function _onDrop (event, cancel) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'mouseup', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'touchend', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'touchcancel', this._onDrop);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'pointerup', this._onDrop);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'touchmove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'mousemove', this._onDrag);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'pointermove', this._onDrag);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'keydown', this._onKeyDown);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'keydown', this._onKeyUp);

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
  this.lastDropTarget =null;
  this.droppableList = [];
  this.isDragging = false;
};

/**
 * Handle keydown event.
 *
 * @param {KeyboardEvent} event
 * @private
 */
DragListener.prototype._onKeyDown = function _onKeyDown (event) {
  if (event.ctrlKey && !this.keypressActive) {
    this.keypressActive = true;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* on */])(this.el.ownerDocument, 'keyup', this._onKeyUp);
    this._dispatch('ctrlPressed', event);
  }
  if (event.code === 'Escape') {
    this._onDrop(event, true);
  }
};

/**
 * Handle keyup event.
 *
 * @param {KeyboardEvent} event
 * @private
 */
DragListener.prototype._onKeyUp = function _onKeyUp (event) {
  this.keypressActive = false;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* off */])(this.el.ownerDocument, 'keyup', this._onKeyUp);
};

/**
 * Dispatch an event.
 *
 * @param {String} eventName
 * @param {Event} event
 * @param {Object?} data
 * @private
 */
DragListener.prototype._dispatch = function _dispatch (eventName, event, data) {
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
DragListener.prototype._calculateGhostStyles = function _calculateGhostStyles (clientX, clientY, translate3d) {
  var rect = this.dragEl.getBoundingClientRect();
  var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* css */])(this.dragEl);
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

DragListener.prototype._getDropTarget = function _getDropTarget (clientX, clientY) {
  var eventName = null;
  var dropTarget = {
    current: null,
    previous: null,
    next: null
  };
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
    if (e !== BreakException) { throw e; }
  }

  if (dropTarget.current !== null) {
    var currentIndex = visibleDroppables.indexOf(dropTarget.current);
    if (currentIndex > 0) {
      dropTarget.previous = visibleDroppables[currentIndex - 1];
    }
    if (currentIndex < visibleDroppables.length - 2) {
      dropTarget.next = visibleDroppables[currentIndex + 1];
    }
  }

  return {eventName: eventName, dropTarget: dropTarget};
};

/* harmony default export */ __webpack_exports__["a"] = (DragListener);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_touch_events__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_touch_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue2_touch_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_tree_App_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_tree_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__modules_tree_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_tree_actions_App_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_tree_actions_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__modules_tree_actions_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_content_App_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_content_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__modules_content_App_vue__);




__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue2_touch_events___default.a);








__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */]);

// create an application wide draggableStore to handle draggable data
var draggableStore = {
  dragComponent: null,
  dragging: false,
  ghostStyles: {},
  dragOverComponent: null,
  dragBeforeComponent: null,
  dragAfterComponent: null,
  dragTargetComponent: null,
  dropMode: 'move',
  title: ''
};

// create app-tree-actions instance
var appTreeActions = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],
  data: {
    draggableStore: draggableStore
  },
  render: function (h) { return h(__WEBPACK_IMPORTED_MODULE_7__modules_tree_actions_App_vue___default.a); }
});

// create app-tree instance
var appTree = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
  data: {
    draggableStore: draggableStore
  },
  render: function (h) { return h(__WEBPACK_IMPORTED_MODULE_6__modules_tree_App_vue___default.a); },
  computed: {
    isDragging: function isDragging() {
      return this.draggableStore.dragging;
    }
  },
  watch: {
    isDragging: function isDragging(val) {
      if (val) {
        document.body.classList.add('draggable--is-dragging');
      } else {
        document.body.classList.remove('draggable--is-dragging');
      }
    }
  }
});

var appContent = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],
  data: {

  },
  router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
  render: function (h) { return h(__WEBPACK_IMPORTED_MODULE_8__modules_content_App_vue___default.a); }
});

appTreeActions.$mount('#object-tree-actions');
appTree.$mount('#object-tree');
appContent.$mount('#cms-content');


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(12);



/* harmony default export */ __webpack_exports__["a"] = ({

  namespaced: true,

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    rootNode: {},
    nodes: {},
    scrollIntoView: null
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {

    SELECT_NODE: function SELECT_NODE(ref, node) {
      var commit = ref.commit;
      var getters = ref.getters;

      if (typeof node !== 'object') {
        node = getters.getNodeById(node);
      }
      if (node.root === true) {
        __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push({ name: 'content-index' });
      } else {
        __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push({ name: 'page-edit', params: {id: node.id} });
      }
    },

    SCROLL_INTO_VIEW: function SCROLL_INTO_VIEW(ref, nodeId) {
      var commit = ref.commit;

      commit('SET_SCROLL_INTO_VIEW', nodeId);
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {

    SET_ROOT_NODE: function SET_ROOT_NODE(state, rootNode) {
      state.rootNode = rootNode;
    },

    SET_NODES: function SET_NODES(state, nodes) {
      nodes.forEach(function (node) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].set(state.nodes, node.id, node);
      });
    },

    ADD_OR_UPDATE_NODE: function ADD_OR_UPDATE_NODE(state, node) {
      if (typeof state.nodes[node.id] !== 'undefined') {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].set(state.nodes, node.id, Object.assign({}, state.nodes[node.id], node));
      } else {
        node.children = node.children || [];
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].set(state.nodes, node.id, node);
      }
    },

    SET_ROOT_NODE_CHILDREN: function SET_ROOT_NODE_CHILDREN(state, children) {
      __WEBPACK_IMPORTED_MODULE_0_vue__["default"].set(state.rootNode, 'children', children);
    },

    SET_NODE_CHILDREN: function SET_NODE_CHILDREN(state, ref) {
      var context = ref.context;
      var children = ref.children;

      __WEBPACK_IMPORTED_MODULE_0_vue__["default"].set(state.nodes[context], 'children', children);
    },

    SET_SCROLL_INTO_VIEW: function SET_SCROLL_INTO_VIEW(state, nodeId) {
      state.scrollIntoView = nodeId;
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- GETTERS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  getters: {

    getNodeById: function (state) { return function (id) {
      return state.nodes[id];
    }; },

    getActiveNode: function getActiveNode(state, getters, rootState) {
      if (['content-index', 'page-new', 'page-new-at-position'].indexOf(rootState.route.name) !== -1) {
        return state.rootNode;
      }
      if (['page-edit', 'page-new-in-parent', 'page-new-in-parent-at-position'].indexOf(rootState.route.name) !== -1) {
        return getters.getNodeById(rootState.route.params.id);
      }
    },
    scrollIntoView: function scrollIntoView(state) {
      return state.scrollIntoView;
    }
  }
});


/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matches_selector__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_parent_or_host__ = __webpack_require__(22);



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
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capture_mode__ = __webpack_require__(9);


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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capture_mode__ = __webpack_require__(9);


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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
  name: 'drag-ghost',

  computed: {
    title: function title() {
      return this.$root.draggableStore.title;
    },

    dropMode: function dropMode() {
      return this.$root.draggableStore.dropMode;
    },

    ghostStyles: function ghostStyles() {
      return this.$root.draggableStore.ghostStyles;
    },

    dragTargetIndex: function dragTargetIndex() {
      if (this.$root.draggableStore.dragTargetComponent === null) {
        return -1;
      }
      return Array.from(this.$root.draggableStore.dragTargetComponent.$el.parentNode.children).indexOf(this.$root.draggableStore.dragTargetComponent.$el);
    },

    dragTargetSiblingCount: function dragTargetSiblingCount() {
      if (this.$root.draggableStore.dragTargetComponent === null) {
        return 'nope';
      }
      return this.$root.draggableStore.dragTargetComponent.$el.parentNode.children.length;
    }
  },

  methods: {
    containerClasses: function containerClasses() {
      return {
        'drag-ghost__denied':
          this.$root.draggableStore.dragging === true &&
          this.$root.draggableStore.dragOverComponent === null &&
          this.$root.draggableStore.dragBeforeComponent === null &&
          this.$root.draggableStore.dragAfterComponent === null
      }
    },

    imageClasses: function imageClasses() {
      return {
        'drag-ghost--image__denied':
          this.$root.draggableStore.dragging === true &&
          this.$root.draggableStore.dragOverComponent === null &&
          this.$root.draggableStore.dragBeforeComponent === null &&
          this.$root.draggableStore.dragAfterComponent === null,
        'drag-ghost--image__move-into':
          this.$root.draggableStore.dropMode === 'move' &&
          this.$root.draggableStore.dragOverComponent !== null,
        'drag-ghost--image__move-before':
          this.$root.draggableStore.dropMode === 'move' &&
          this.$root.draggableStore.dragBeforeComponent !== null &&
          this.dragTargetIndex === 0,
        'drag-ghost--image__move-after':
          this.$root.draggableStore.dropMode === 'move' &&
          this.$root.draggableStore.dragAfterComponent !== null &&
          this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
        'drag-ghost--image__move-between':
          this.$root.draggableStore.dropMode === 'move' &&
          (
            this.$root.draggableStore.dragBeforeComponent !== null && this.dragTargetIndex !== 0 ||
            this.$root.draggableStore.dragAfterComponent !== null && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
          ),
        'drag-ghost--image__copy-into':
          this.$root.draggableStore.dropMode === 'copy' &&
          this.$root.draggableStore.dragOverComponent !== null,
        'drag-ghost--image__copy-before':
          this.$root.draggableStore.dropMode === 'copy' &&
          this.$root.draggableStore.dragBeforeComponent !== null &&
          this.dragTargetIndex === 0,
        'drag-ghost--image__copy-after':
          this.$root.draggableStore.dropMode === 'copy' &&
          this.$root.draggableStore.dragAfterComponent !== null &&
          this.dragTargetIndex + 1 === this.dragTargetSiblingCount,
        'drag-ghost--image__copy-between':
          this.$root.draggableStore.dropMode === 'copy' &&
          (
            this.$root.draggableStore.dragBeforeComponent !== null && this.dragTargetIndex !== 0 ||
            this.$root.draggableStore.dragAfterComponent !== null && this.dragTargetIndex + 1 !== this.dragTargetSiblingCount
          )
      }
    }
  },

  mounted: function mounted() {
    document.body.insertBefore(this.$el, document.body.lastChild);
  }
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DragListener__ = __webpack_require__(52);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'drag-listener',

  props: {
    options: {
      type: Object,
      required: false,
      default: function () {}
    }
  },

  data: function data() {
    return {
      dragListener: null
    }
  },

  mounted: function mounted() {
    var options = Object.assign({}, this.options,
      {onDragStart: this.onDragStart.bind(this),
      onDragMove: this.onDragMove.bind(this),
      onDragEnd: this.onDragEnd.bind(this),
      onDragOver: this.onDragOver.bind(this),
      onDragBefore: this.onDragBefore.bind(this),
      onDragAfter: this.onDragAfter.bind(this),
      onDragCancel: this.onDragCancel.bind(this),
      onResetDrag: this.onResetDrag.bind(this),
      onCtrlPressed: this.onCtrlPressed.bind(this)});

    this.dragListener = new __WEBPACK_IMPORTED_MODULE_0__DragListener__["a" /* default */](this.$el, options);
  },

  methods: {
    addDropTarget: function addDropTarget(context, selector) {
      this.dragListener.addDropTarget(context.$el || context, selector);
    },

    onDragStart: function onDragStart(event) {
      this.$root.draggableStore.dragging = true;
      this.$root.draggableStore.dragComponent = event.data.dragEl.__vue__;
      this.$root.draggableStore.ghostStyles = event.data.ghostStyles;
      if (typeof this.$root.draggableStore.dragComponent.onDragStart === 'function') {
        this.$root.draggableStore.dragComponent.onDragStart(this.$root.draggableStore);
      }
    },

    onDragMove: function onDragMove(event) {
      this.$root.draggableStore.ghostStyles.transform = event.data.transform;
    },

    onDragEnd: function onDragEnd() {
      if (this.$root.draggableStore.dragTargetComponent !== null) {
        var type = null;
        if (this.$root.draggableStore.dragBeforeComponent !== null) {
          type = 'before';
        } else if (this.$root.draggableStore.dragAfterComponent !== null) {
          type = 'after';
        } else if (this.$root.draggableStore.dragOverComponent !== null) {
          type = 'over';
        }
        if (type !== null && typeof this.$root.draggableStore.dragTargetComponent.onDrop === 'function') {
          this.$root.draggableStore.dragTargetComponent.onDrop(type, this.$root.draggableStore.dragComponent);
        }
      }
      this.onResetDrag();
      this.$root.draggableStore.dragging = false;
      this.$root.draggableStore.dragComponent = null;
      this.$root.draggableStore.dropMode = 'move';
      this.$root.draggableStore.ghostStyles = {};
      this.$root.draggableStore.title = '';
    },

    onDragCancel: function onDragCancel() {
      this.onResetDrag();
      this.$root.draggableStore.dragging = false;
      this.$root.draggableStore.dragComponent = null;
      this.$root.draggableStore.dropMode = 'move';
      this.$root.draggableStore.ghostStyles = {};
      this.$root.draggableStore.title = '';
    },

    onDragOver: function onDragOver(event) {
      var targetComponent = event.data.dropTarget.current.__vue__;
      var canReceiveDrop = false;
      if (typeof targetComponent.canReceiveDrop === 'function') {
        canReceiveDrop = targetComponent.canReceiveDrop('over', this.$root.draggableStore.dragComponent, event.data);
      }
      this.$root.draggableStore.dragOverComponent = canReceiveDrop ? targetComponent : null;
      this.$root.draggableStore.dragBeforeComponent = null;
      this.$root.draggableStore.dragAfterComponent = null;
      this.$root.draggableStore.dragTargetComponent = targetComponent;
    },

    onDragBefore: function onDragBefore(event) {
      var targetComponent = event.data.dropTarget.current.__vue__;
      var canReceiveDrop = false;
      if (typeof targetComponent.canReceiveDrop === 'function') {
        canReceiveDrop = targetComponent.canReceiveDrop('before', this.$root.draggableStore.dragComponent, event.data);
      }
      if (!canReceiveDrop && typeof targetComponent.changeDropTarget === 'function') {
        if (targetComponent.changeDropTarget('before', this.$root.draggableStore.dragComponent, event.data)) {
          return;
        }
      }
      this.$root.draggableStore.dragOverComponent = null;
      this.$root.draggableStore.dragBeforeComponent = canReceiveDrop ? targetComponent : null;
      this.$root.draggableStore.dragAfterComponent = null;
      this.$root.draggableStore.dragTargetComponent = targetComponent;
    },

    onDragAfter: function onDragAfter(event) {
      var targetComponent = event.data.dropTarget.current.__vue__;
      var canReceiveDrop = false;
      if (typeof targetComponent.canReceiveDrop === 'function') {
        canReceiveDrop = targetComponent.canReceiveDrop('after', this.$root.draggableStore.dragComponent, event.data);
      }
      if (!canReceiveDrop && typeof targetComponent.changeDropTarget === 'function') {
        if (targetComponent.changeDropTarget('after', this.$root.draggableStore.dragComponent, event.data)) {
          return;
        }
      }
      this.$root.draggableStore.dragOverComponent = null;
      this.$root.draggableStore.dragBeforeComponent = null;
      this.$root.draggableStore.dragAfterComponent = canReceiveDrop ? targetComponent : null;
      this.$root.draggableStore.dragTargetComponent = targetComponent;
    },

    onResetDrag: function onResetDrag() {
      this.$root.draggableStore.dragOverComponent = null;
      this.$root.draggableStore.dragBeforeComponent = null;
      this.$root.draggableStore.dragAfterComponent = null;
      this.$root.draggableStore.dragTargetComponent = null;
    },

    onCtrlPressed: function onCtrlPressed() {
      this.$root.draggableStore.dropMode = this.$root.draggableStore.dropMode === 'move' ? 'copy' : 'move';
    }
  }
});


/***/ }),
/* 65 */
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
/* 66 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
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
      default: function () {}
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    buttonClasses: function buttonClasses() {
      return {
        'loading-button': true,
        'loading-button__loading': this.loading,
        'loading-button__success': this.success && !this.loading
      };
    },

    spinnerClasses: function spinnerClasses() {
      return {
        'loading-button--spinner': this.loading,
        'loading-button--check': this.success && !this.loading
      }
    },

    showSlot: function showSlot() {
      return this.loading || (!this.loading && this.success);
    }
  }
});


/***/ }),
/* 67 */
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
/* 68 */
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
      default: function () {}
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
    close: function close() {
      if (this.closeOnBackdrop) {
        this.onClose();
      }
    }
  },

  mounted: function mounted() {
    document.body.insertBefore(this.$el, document.body.lastChild);
  }
});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_PageNewModal_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_PageNewModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_PageNewModal_vue__);
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
  name: 'app-content',

  components: {
    PageNewModal: __WEBPACK_IMPORTED_MODULE_0__views_PageNewModal_vue___default.a
  },

  computed: {
    showNewPageModal: function showNewPageModal() {
      return this.$store.getters.showNewPageModal;
    }
  }
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'view-content-index',

  computed: {
    node: function node() {
      return this.$store.getters['tree/getActiveNode'];
    }
  }
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'view-page-edit',

  computed: {
    node: function node() {
      return this.$store.getters['tree/getActiveNode'];
    }
  },

  beforeMount: function beforeMount() {
    var node = this.$store.getters['tree/getActiveNode'];
    if (typeof node === 'undefined') {
      this.$router.push({ name: 'content-index' });
    }
  }
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LoadingButton_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LoadingButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_LoadingButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuelidate__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__);
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
  name: 'page-new-modal',

  mixins: [__WEBPACK_IMPORTED_MODULE_2_vuelidate__["validationMixin"]],

  components: {
    Modal: __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue___default.a,
    LoadingButton: __WEBPACK_IMPORTED_MODULE_1__components_LoadingButton_vue___default.a
  },

  data: function data() {
    return {
      loading: false,
      title: ''
    }
  },

  validations: {
    title: {
      required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"],
      minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["minLength"])(4)
    }
  },

  computed: {
    slug: function slug() {
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
    close: function close() {
      this.$store.dispatch('CLOSE_NEW_PAGE_MODAL');
    },

    createPage: function createPage() {
      var this$1 = this;

      this.loading = true;
      this.$store.dispatch('CREATE_PAGE', this.title)
        .then(function () { return this$1.close(); })
        .catch(function (error) {
          this$1.loading = false;
          console.log('error', error);
        });
    }
  },

  mounted: function mounted() {
    this.$refs.titleInput.focus();
  }
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DragListener_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DragListener_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DragListener_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_NewPage_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_NewPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_NewPage_vue__);
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
  name: 'app-tree-actions',

  components: {
    DragListener: __WEBPACK_IMPORTED_MODULE_0__components_DragListener_vue___default.a,
    NewPage: __WEBPACK_IMPORTED_MODULE_1__component_NewPage_vue___default.a
  },

  computed: {
    draggableOptions: function draggableOptions() {
      return {
        draggable: '.object-tree--button',
        dropTargetComponent: '.tree--node',
        dragActiveClass: 'object-tree--drag-active',
        positionGhostToPointer: true,
        ghostOffsetTop: 15,
        ghostOffsetLeft: 15
      }
    },
    isDragging: function isDragging() {
      return this.$root.draggableStore.dragging;
    }
  },

  methods: {

  },

  mounted: function mounted() {
    this.$refs.dragListener.addDropTarget(this.$el.parentElement, '.tree--node__root > .tree--node--details');
    this.$refs.dragListener.addDropTarget(this.$el.parentElement, '.object--tree .tree--nodes .tree--node--details');
  }
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'new-page',

  data: function data() {
    return {
      params: {
        pageType: 'page'
      }
    }
  },

  methods: {
    onDragStart: function onDragStart(draggableStore) {
      draggableStore.title = 'New Page';
    },
  }
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_TreeRootNode_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_TreeRootNode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_TreeRootNode_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_Tree_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_Tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_Tree_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DragGhost_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DragGhost_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_DragGhost_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DragListener_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DragListener_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_DragListener_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GeminiScrollbar_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GeminiScrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_GeminiScrollbar_vue__);
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
  name: 'app-tree',

  components: {
    DragGhost: __WEBPACK_IMPORTED_MODULE_2__components_DragGhost_vue___default.a,
    DragListener: __WEBPACK_IMPORTED_MODULE_3__components_DragListener_vue___default.a,
    GeminiScrollbar: __WEBPACK_IMPORTED_MODULE_4__components_GeminiScrollbar_vue___default.a,
    Tree: __WEBPACK_IMPORTED_MODULE_1__component_Tree_vue___default.a,
    TreeRootNode: __WEBPACK_IMPORTED_MODULE_0__component_TreeRootNode_vue___default.a
  },

  computed: {
    rootNode: function rootNode() {
      return this.$store.state.tree.rootNode;
    },

    nodes: function nodes() {
      return this.$store.state.tree.rootNode.children
    },

    draggableOptions: function draggableOptions() {
      return {
        draggable: '.tree--node',
        dropTargetComponent: '.tree--node',
        dragActiveClass: 'tree--drag-active',
        positionGhostToPointer: true,
        ghostOffsetTop: 15,
        ghostOffsetLeft: 15
      }
    },

    isDragging: function isDragging() {
      return this.$root.draggableStore.dragging;
    }
  },

  mounted: function mounted() {
    this.$refs.dragListener.addDropTarget(this.$refs.tree, '.tree--node--details');
    this.$store.dispatch('GET_PAGES');
  }
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeNode_vue__ = __webpack_require__(106);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tree',

  props: {
    nodes: Array,
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
    parentRefs: {
      type: Object,
      required: false,
      default: function () {}
    }
  },

  components: {
    TreeNode: __WEBPACK_IMPORTED_MODULE_0__TreeNode_vue___default.a
  },

  methods: {
    isLast: function isLast(index) {
      return (index + 1) === this.nodes.length;
    },

    spanLevels: function spanLevels(level, isLast) {
      if (level === 0) {
        return [level];
      }

      if (isLast) {
        return this.spanLevel;
      }

      return this.spanLevel.concat([level]);
    },

    getNodeById: function getNodeById(id) {
      return this.$store.getters['tree/getNodeById'](id);
    }
  }
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scroll_into_view_if_needed__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_actions_component_NewPage_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_actions_component_NewPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tree_actions_component_NewPage_vue__);
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





var Cookies = window.WS.exports.Cookies;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tree-node',

  props: {
    node: Object,
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
    parentRefs: {
      type: Object,
      required: false,
      default: function () {}
    }
  },

  data: function data() {
    return {
      expanded: this.getExpandedIds().includes(this.node.id),
      expanding: false
    };
  },

  computed: {
    name: function name() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* truncate */])(this.node.title, 50, '...');
    },

    hasChildren: function hasChildren() {
      return this.node.children.length > 0;
    },

    isCurrentDragComponent: function isCurrentDragComponent() {
      return this.dragComponentPresent && this.$root.draggableStore.dragComponent._uid === this._uid;
    },

    isSelected: function isSelected() {
      return !this.dragComponentPresent && this.$store.getters['tree/getActiveNode'].id === this.node.id;
    },

    assetUrl: function assetUrl() {
      return window.WS.getModule('Wasabi/Cms').options.assetUrl;
    },

    imageUrl: function imageUrl() {
      return this.assetUrl + '/img/tree-page-default.svg';
    },

    dragComponentPresent: function dragComponentPresent() {
      return this.$root.draggableStore.dragComponent !== null;
    },

    dragTargetPresent: function dragTargetPresent() {
      return this.$root.draggableStore.dragTargetComponent !== null;
    },

    dragOverPresent: function dragOverPresent() {
      return this.$root.draggableStore.dragOverComponent !== null;
    },

    dragBeforePresent: function dragBeforePresent() {
      return this.$root.draggableStore.dragBeforeComponent !== null;
    },

    dragAfterPresent: function dragAfterPresent() {
      return this.$root.draggableStore.dragAfterComponent !== null;
    },

    isCurrentDragTarget: function isCurrentDragTarget() {
      return this.dragTargetPresent && this.$root.draggableStore.dragTargetComponent._uid === this._uid;
    },

    isDragOver: function isDragOver() {
      return this.dragOverPresent && this.$root.draggableStore.dragOverComponent._uid === this._uid;
    },

    isDragBefore: function isDragBefore() {
      return this.dragBeforePresent && this.$root.draggableStore.dragBeforeComponent._uid === this._uid;
    },

    isDragAfter: function isDragAfter() {
      return this.dragAfterPresent && this.$root.draggableStore.dragAfterComponent._uid === this._uid;
    },

    isDragDenied: function isDragDenied() {
      return this.isCurrentDragTarget && !this.isDragOver && !this.isDragBefore && !this.isDragAfter;
    },
    scrollIntoView: function scrollIntoView() {
      return this.$store.getters['tree/scrollIntoView'];
    }
  },

  methods: {

    nodeClasses: function nodeClasses() {
      return {
        'tree--node__selected': this.isSelected,
        'tree--node__dragging': this.isCurrentDragComponent,
        'tree--node__expanded': this.hasChildren && (this.expanding || this.expanded),
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

    treeStateIconsClasses: function treeStateIconsClasses() {
      return {
        'tree--state--icons': true,
        'tree--state--icons__expanded': this.hasChildren && (this.expanding || this.expanded)
      }
    },

    treeStateIconClasses: function treeStateIconClasses() {
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

    nodeIconClasses: function nodeIconClasses() {
      return {
        'tree--node--icon': true
      }
    },

    setActive: function setActive() {
      this.$store.dispatch('tree/SELECT_NODE', this.node);
    },

    range: function range$1(start, end) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* range */])(start, end);
    },

    toggleExpand: function toggleExpand(event) {
      var this$1 = this;

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      this.expanded = !this.expanded;
      this.expanding = true;

      var expandedIds = this.getExpandedIds();
      expandedIds = this.expanded ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* addToArray */])(expandedIds, this.node.id) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* removeFromArray */])(expandedIds, this.node.id);

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
        setTimeout(function () {
          this$1.parentRefs.scrollContainer && this$1.parentRefs.scrollContainer.scrollbar.update();
        }, 0);
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

    canReceiveDrop: function canReceiveDrop(type, dropComponent, data) {
      var thisComponentName = this.$vnode.componentOptions.tag;
      var dropComponentName = dropComponent.$vnode.componentOptions.tag;

      if ([thisComponentName, __WEBPACK_IMPORTED_MODULE_2__tree_actions_component_NewPage_vue___default.a.name].indexOf(dropComponentName) === -1) {
        return false;
      }

      if (dropComponentName === __WEBPACK_IMPORTED_MODULE_2__tree_actions_component_NewPage_vue___default.a.name) {
        switch (type) {
          case 'over':
            return true;

          case 'before':
            return !this.previousSiblingIsDragComponent();

          case 'after':
            if (this.hasVisibleChildren(data)) {
              return false;
            }
            return !this.nextSiblingIsDragComponent();
        }
      }

      if (dropComponentName === thisComponentName) {
        if (this.$root.draggableStore.dropMode === 'copy') {
          return true;
        }
        if (dropComponent.node.id === this.node.id) {
          return false;
        }
        if (this.hasParent(this, dropComponent)) {
          return false;
        }

        switch (type) {
          case 'over':
            return true;

          case 'before':
            return !this.previousSiblingIsDragComponent();

          case 'after':
            if (this.hasVisibleChildren(data)) {
              return false;
            }
            return !this.nextSiblingIsDragComponent();
        }
      }

      return false;
    },

    hasParent: function hasParent(component, parentComponent) {
      if (typeof component.$parent === 'undefined') {
        return false;
      }

      if (component.$parent._uid === parentComponent._uid) {
        return true;
      }

      return this.hasParent(component.$parent, parentComponent);
    },

    previousSiblingIsDragComponent: function previousSiblingIsDragComponent() {
      if (this.$el.previousSibling === null || typeof this.$el.previousSibling.__vue__ === 'undefined') {
        return false;
      }

      return this.dragComponentPresent && this.$el.previousSibling.__vue__._uid === this.$root.draggableStore.dragComponent._uid;
    },

    nextSiblingIsDragComponent: function nextSiblingIsDragComponent() {
      if (this.$el.nextSibling === null || typeof this.$el.nextSibling.__vue__ === 'undefined') {
        return false;
      }

      return this.dragComponentPresent && this.$el.nextSibling.__vue__._uid === this.$root.draggableStore.dragComponent._uid;
    },

    changeDropTarget: function changeDropTarget(type, dropComponent, data) {
      switch (type) {
        case 'before':
        case 'after':
          if (this.canReceiveDrop('over', dropComponent, data)) {
            this.$root.draggableStore.dragOverComponent = this;
            this.$root.draggableStore.dragBeforeComponent = null;
            this.$root.draggableStore.dragAfterComponent = null;
            this.$root.draggableStore.dragTargetComponent = this;
            return true;
          }
          break;
      }

      return false;
    },

    hasVisibleChildren: function hasVisibleChildren(data) {
      if (data.dropTarget.next === null || this.$children.length === 0 || this.$children[0].$children.length === 0) {
        return false;
      }
      return (this.$children[0].$children[0].$el === data.dropTarget.next);
    },

    onDragStart: function onDragStart(draggableStore) {
      draggableStore.title = this.node.title;
    },

    onDrop: function onDrop(type, component) {
      var componentTag = component.$vnode.componentOptions.tag;

      if (['new-page'].indexOf(componentTag) !== -1) {
        if (type === 'over') {
          this.$store.dispatch('OPEN_NEW_PAGE_MODAL', Object.assign({}, {parentId: this.node.id,
            insert: 'end'},
            component.params));
          return;
        }

        if (type === 'before' || type === 'after') {
          this.$store.dispatch('OPEN_NEW_PAGE_MODAL', Object.assign({}, {parentId: this.node.parent_id,
            targetId: this.node.id,
            insert: type},
            component.params));
          return;
        }
      }

      if (['tree-node'].indexOf(componentTag) !== -1) {
        console.log('move', type, component, this.$el);
        if (type === 'over') {
        }
      }
    }
  },

  mounted: function mounted() {
    if (this.$store.getters['tree/scrollIntoView'] === this.node.id) {
      console.log();
      if (this.$parent.$parent.$vnode.componentOptions.tag === 'tree-node' && !this.$parent.$parent.expanded) {
        this.$parent.$parent.toggleExpand();
      }
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_scroll_into_view_if_needed__["default"])(this.$el, {
        scrollMode: 'if-needed'
      });
      this.$store.dispatch('tree/SCROLL_INTO_VIEW', null);
    }
  },

  watch: {
    isDragOver: function isDragOver(val) {
      var this$1 = this;

      if (val && this.node.children.length > 0 && !this.expanded) {
        this.expandTimeout = setTimeout(function () {
          if (this$1.isDragOver && !this$1.expanded) {
            this$1.toggleExpand();
          }
        }, 750);
        return;
      }
      this.expandTimeout = 0;
    }
  }
});


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue__);
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
    },

    isSelected: function isSelected() {
      return !this.dragComponentPresent && this.activeNodeIsRoot;
    },

    dragComponentPresent: function dragComponentPresent() {
      return this.$root.draggableStore.dragComponent !== null;
    },

    dragOverPresent: function dragOverPresent() {
      return this.$root.draggableStore.dragOverComponent !== null;
    },

    isDragOver: function isDragOver() {
      return this.dragOverPresent && this.$root.draggableStore.dragOverComponent._uid === this._uid;
    },

    isDragDenied: function isDragDenied() {
      return this.isCurrentDragTarget && !this.isDragOver;
    },

    activeNodeIsRoot: function activeNodeIsRoot() {
      var activeNode = this.$store.getters['tree/getActiveNode'];
      if (typeof activeNode === 'undefined') {
        return false;
      }

      return activeNode.root === true;
    }
  },

  methods: {
    nodeClasses: function nodeClasses() {
      return {
        'tree--node__selected': this.isSelected,
        'tree--node__drag-over': this.isDragOver,
        'tree--node__drag-denied': this.isDragDenied
      };
    },

    canReceiveDrop: function canReceiveDrop(type, dropComponent, data) {
      var dropComponentName = dropComponent.$vnode.componentOptions.tag;
      var acceptDropComponents = [
        __WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue___default.a.name
      ];

      return (type === 'over' && acceptDropComponents.indexOf(dropComponentName) !== -1);
    },

    changeDropTarget: function changeDropTarget(type, dropComponent, data) {
      switch (type) {
        case 'before':
        case 'after':
          if (this.canReceiveDrop('over', dropComponent, data)) {
            this.$root.draggableStore.dragOverComponent = this;
            this.$root.draggableStore.dragBeforeComponent = null;
            this.$root.draggableStore.dragAfterComponent = null;
            this.$root.draggableStore.dragTargetComponent = this;
            return true;
          }
          break;
      }

      return false;
    },

    setActive: function setActive() {
      this.$store.dispatch('tree/SELECT_NODE', this.node);
    },

    onDrop: function onDrop(type, component) {
      if (type === 'over') {
        this.$store.dispatch('OPEN_NEW_PAGE_MODAL', Object.assign({}, {parentId: null,
          insert: 'end'},
          component.params));
      }
    }
  }
});


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(114),
  /* scopeId */
  "data-v-4750af7e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\components\\DragGhost.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DragGhost.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4750af7e", Component.options)
  } else {
    hotAPI.reload("data-v-4750af7e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(109),
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(115),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\components\\LoadingButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LoadingButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5196c994", Component.options)
  } else {
    hotAPI.reload("data-v-5196c994", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(118),
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(92)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\components\\Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-badd599a", Component.options)
  } else {
    hotAPI.reload("data-v-badd599a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(116),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\content\\views\\ContentIndex.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ContentIndex.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ba699f7", Component.options)
  } else {
    hotAPI.reload("data-v-6ba699f7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\content\\views\\PageEdit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PageEdit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d075a57", Component.options)
  } else {
    hotAPI.reload("data-v-2d075a57", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(117),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\www\\frankfoerster\\app\\vendor\\wasabi-cms\\cms\\src\\Assets\\cms\\src\\modules\\content\\views\\PageNewModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PageNewModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70a3c53a", Component.options)
  } else {
    hotAPI.reload("data-v-70a3c53a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(111),
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(113),
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(119),
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cms-content--wrapper"
  }, [_c('router-view'), _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [(_vm.showNewPageModal) ? _c('page-new-modal') : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e899f58", module.exports)
  }
}

/***/ }),
/* 109 */
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
/* 110 */
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
  }), _c('drag-listener', {
    ref: "dragListener",
    attrs: {
      "options": _vm.draggableOptions
    }
  }, [_c('tree', {
    ref: "tree",
    attrs: {
      "nodes": _vm.nodes,
      "parentRefs": _vm.$refs
    }
  })], 1)], 1)]), _c('drag-ghost')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1acd0712", module.exports)
  }
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "tree--nodes"
  }, _vm._l((_vm.nodes), function(id, index) {
    return _c('tree-node', {
      key: id,
      attrs: {
        "node": _vm.getNodeById(id),
        "level": _vm.level,
        "isLast": _vm.isLast(index),
        "spanLevels": _vm.spanLevel,
        "parentRefs": _vm.parentRefs
      }
    }, [(_vm.getNodeById(id).children.length > 0) ? _c('tree', {
      attrs: {
        "nodes": _vm.getNodeById(id).children,
        "level": _vm.level + 1,
        "spanLevel": _vm.spanLevels(_vm.level, _vm.isLast(index)),
        "parentRefs": _vm.parentRefs
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view-page-edit"
  }, [_vm._v(_vm._s(_vm.node.title))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d075a57", module.exports)
  }
}

/***/ }),
/* 113 */
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
    class: _vm.treeStateIconsClasses()
  }, [_c('div', {
    class: _vm.treeStateIconClasses()
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasChildren),
      expression: "hasChildren"
    }],
    staticClass: "tree--state--icon--expander"
  })]), _c('div', {
    class: _vm.nodeIconClasses()
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "drag-ghost",
    class: _vm.containerClasses(),
    style: (_vm.ghostStyles)
  }, [_c('div', {
    staticClass: "drag-ghost--details"
  }, [_c('div', {
    staticClass: "drag-ghost--image",
    class: _vm.imageClasses()
  }), _c('div', {
    staticClass: "drag-ghost--name"
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: "drag-ghost--info"
  }, [(_vm.dropMode === 'copy') ? _c('span', [_vm._v("Zum Verschieben Strg drücken")]) : _vm._e(), (_vm.dropMode === 'move') ? _c('span', [_vm._v("Zum Kopieren Strg drücken")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4750af7e", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.buttonClasses,
    attrs: {
      "disabled": _vm.loading || _vm.disabled
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade-loading-button",
      "mode": "out-in"
    }
  }, [_c('div', {
    class: _vm.spinnerClasses
  })]), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5196c994", module.exports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view-content-index"
  }, [_vm._v(_vm._s(_vm.node.title))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ba699f7", module.exports)
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "title": 'New Page',
      "onClose": _vm.close,
      "closeOnBackdrop": false,
      "hasForm": true,
      "onSubmit": _vm.createPage
    }
  }, [_c('template', {
    slot: "body"
  }, [_c('div', {
    staticClass: "modal--form-row",
    class: {
      'modal--form-row__error': _vm.$v.title.$error
    }
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Title"), (_vm.$v.title.$params.required) ? _c('span', [_vm._v(" *")]) : _vm._e()]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.$v.title.$model),
      expression: "$v.title.$model",
      modifiers: {
        "trim": true
      }
    }],
    ref: "titleInput",
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "title",
      "name": "title",
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.$v.title.$model)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.$v.title, "$model", $event.target.value.trim())
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _c('span', {
    staticClass: "slug"
  }, [_vm._v("Slug: "), _c('strong', [_vm._v(_vm._s(_vm.slug))])]), (!_vm.$v.title.required) ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v("Please enter a page title.")]) : _vm._e(), (!_vm.$v.title.minLength) ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v("The page title must have at least " + _vm._s(_vm.$v.title.$params.minLength.min) + " letters.")]) : _vm._e()])]), _c('template', {
    slot: "footer"
  }, [_c('loading-button', {
    staticClass: "modal--footer--button",
    attrs: {
      "loading": _vm.loading,
      "disabled": _vm.$v.$invalid
    }
  }, [_vm._v("Save")]), _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("Cancel")])], 1)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70a3c53a", module.exports)
  }
}

/***/ }),
/* 118 */
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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tree--node tree--node__root",
    class: _vm.nodeClasses()
  }, [_c('div', {
    staticClass: "tree--node--details",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.setActive()
      }
    }
  }, [_c('div', {
    staticClass: "tree--node--icon"
  }, [_c('wasabi-logo', {
    attrs: {
      "color": '#666'
    }
  })], 1), _c('div', {
    staticClass: "tree--node--name"
  }, [_vm._v(_vm._s(_vm.node.title))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7748b1a4", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "object-tree--actions"
  }, [_c('div', {
    staticClass: "object-tree--buttons"
  }, [_c('drag-listener', {
    ref: "dragListener",
    attrs: {
      "options": _vm.draggableOptions
    }
  }, [_c('new-page')], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cd7bba7", module.exports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "object-tree--button"
  }, [_vm._v("\n  New Page\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9a765f7a", module.exports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "drag-listener"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b8b5571c", module.exports)
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal",
    on: {
      "click": _vm.close
    }
  }, [_c('div', {
    staticClass: "modal--container",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "modal--header"
  }, [_c('span', {
    staticClass: "modal--header--title"
  }, [_vm._v(_vm._s(_vm.title))])]), (_vm.hasForm) ? _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.onSubmit($event)
      }
    }
  }, [_c('div', {
    staticClass: "modal--body"
  }, [_vm._t("body")], 2), _c('div', {
    staticClass: "modal--footer"
  }, [_vm._t("footer")], 2)]) : _c('div', [_c('div', {
    staticClass: "modal--body"
  }, [_vm._t("body")], 2), _c('div', {
    staticClass: "modal--footer"
  }, [_vm._t("footer")], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-badd599a", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports.default = _default;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports.default = _default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports.default = _default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports.default = _default;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports.default = _default;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

var _default = (0, _common.regex)('email', emailRegex);

exports.default = _default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alpha", {
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
});
Object.defineProperty(exports, "alphaNum", {
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
});
Object.defineProperty(exports, "numeric", {
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
});
Object.defineProperty(exports, "between", {
  enumerable: true,
  get: function get() {
    return _between.default;
  }
});
Object.defineProperty(exports, "email", {
  enumerable: true,
  get: function get() {
    return _email.default;
  }
});
Object.defineProperty(exports, "ipAddress", {
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
});
Object.defineProperty(exports, "macAddress", {
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
});
Object.defineProperty(exports, "maxLength", {
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
});
Object.defineProperty(exports, "minLength", {
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
});
Object.defineProperty(exports, "required", {
  enumerable: true,
  get: function get() {
    return _required.default;
  }
});
Object.defineProperty(exports, "requiredIf", {
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
});
Object.defineProperty(exports, "requiredUnless", {
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
});
Object.defineProperty(exports, "sameAs", {
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
});
Object.defineProperty(exports, "url", {
  enumerable: true,
  get: function get() {
    return _url.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function get() {
    return _or.default;
  }
});
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function get() {
    return _and.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function get() {
    return _not.default;
  }
});
Object.defineProperty(exports, "minValue", {
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
});
Object.defineProperty(exports, "maxValue", {
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
});
Object.defineProperty(exports, "integer", {
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
});
Object.defineProperty(exports, "decimal", {
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
});
exports.helpers = void 0;

var _alpha = _interopRequireDefault(__webpack_require__(125));

var _alphaNum = _interopRequireDefault(__webpack_require__(126));

var _numeric = _interopRequireDefault(__webpack_require__(140));

var _between = _interopRequireDefault(__webpack_require__(128));

var _email = _interopRequireDefault(__webpack_require__(130));

var _ipAddress = _interopRequireDefault(__webpack_require__(133));

var _macAddress = _interopRequireDefault(__webpack_require__(134));

var _maxLength = _interopRequireDefault(__webpack_require__(135));

var _minLength = _interopRequireDefault(__webpack_require__(137));

var _required = _interopRequireDefault(__webpack_require__(142));

var _requiredIf = _interopRequireDefault(__webpack_require__(143));

var _requiredUnless = _interopRequireDefault(__webpack_require__(144));

var _sameAs = _interopRequireDefault(__webpack_require__(145));

var _url = _interopRequireDefault(__webpack_require__(146));

var _or = _interopRequireDefault(__webpack_require__(141));

var _and = _interopRequireDefault(__webpack_require__(127));

var _not = _interopRequireDefault(__webpack_require__(139));

var _minValue = _interopRequireDefault(__webpack_require__(138));

var _maxValue = _interopRequireDefault(__webpack_require__(136));

var _integer = _interopRequireDefault(__webpack_require__(132));

var _decimal = _interopRequireDefault(__webpack_require__(129));

var helpers = _interopRequireWildcard(__webpack_require__(0));

exports.helpers = helpers;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = (0, _common.regex)('integer', /^-?[0-9]*$/);

exports.default = _default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports.default = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports.default = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports.default = _default;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports.default = _default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports.default = _default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports.default = _default;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports.default = _default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports.default = _default;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports.default = _default;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = (0, _common.withParams)({
  type: 'required'
}, _common.req);

exports.default = _default;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports.default = _default;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(0);

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports.default = _default;

/***/ }),
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var withParams = process.env.BUILD === 'web' ? __webpack_require__(149).withParams : __webpack_require__(27).withParams;
var _default = withParams;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withParams = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ })
],[53]);
//# sourceMappingURL=tree.js.map