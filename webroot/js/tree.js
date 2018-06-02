webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
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

var _withParams = _interopRequireDefault(__webpack_require__(313));

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
/* 3 */,
/* 4 */
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  capture: false,
  passive: false
});


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(251)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(284),
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_content_views_ContentIndex_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_content_views_ContentIndex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modules_content_views_ContentIndex_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_content_views_PageEdit_vue__ = __webpack_require__(266);
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_to_array__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capture_mode__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__closest__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_parent_or_host__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__matches_selector__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__off__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__on__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__range__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove_from_array__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__truncate__ = __webpack_require__(200);
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
/* 30 */
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
/* 31 */,
/* 32 */,
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
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(252)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(202),
  /* template */
  __webpack_require__(285),
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushParams = pushParams;
exports.popParams = popParams;
exports.withParams = withParams;
exports._setTarget = exports.target = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var stack = [];
var target = null;
exports.target = target;

var _setTarget = function _setTarget(x) {
  exports.target = target = x;
};

exports._setTarget = _setTarget;

function pushParams() {
  if (target !== null) {
    stack.push(target);
  }

  exports.target = target = {};
}

function popParams() {
  var lastTarget = target;
  var newTarget = exports.target = target = stack.pop() || null;

  if (newTarget) {
    if (!Array.isArray(newTarget.$sub)) {
      newTarget.$sub = [];
    }

    newTarget.$sub.push(lastTarget);
  }

  return lastTarget;
}

function addParams(params) {
  if (_typeof(params) === 'object' && !Array.isArray(params)) {
    exports.target = target = _objectSpread({}, target, params);
  } else {
    throw new Error('params must be an object');
  }
}

function withParamsDirect(params, validator) {
  return withParamsClosure(function (add) {
    return function () {
      add(params);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return validator.apply(this, args);
    };
  });
}

function withParamsClosure(closure) {
  var validator = closure(addParams);
  return function () {
    pushParams();

    try {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return validator.apply(this, args);
    } finally {
      popParams();
    }
  };
}

function withParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return withParamsDirect(paramsOrClosure, maybeValidator);
  }

  return withParamsClosure(paramsOrClosure);
}

/***/ }),
/* 160 */,
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_tree_store__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_resources__ = __webpack_require__(189);





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

    CREATE_PAGE: function CREATE_PAGE(ref, title) {
      var commit = ref.commit;

      var params = {
        title: title
      };

      return __WEBPACK_IMPORTED_MODULE_3__api_resources__["a" /* default */].page.create(params)
        .then(function (response) {
          console.log('success', response);
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
/* 162 */,
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(21).polyfill();


/***/ }),
/* 164 */,
/* 165 */,
/* 166 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(240)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(271),
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(250)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(211),
  /* template */
  __webpack_require__(283),
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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(241)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(213),
  /* template */
  __webpack_require__(273),
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
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute),
    mutations: {
      'ROUTE_CHANGED': function ROUTE_CHANGED (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  var storeUnwatch = store.watch(
    function (state) { return state[moduleName]; },
    function (route) {
      var fullPath = route.fullPath;
      if (fullPath === currentPath) {
        return
      }
      if (currentPath != null) {
        isTimeTraveling = true
        router.push(route)
      }
      currentPath = fullPath
    },
    { sync: true }
  )

  // sync store on router navigation
  var afterEachUnHook = router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit(moduleName + '/ROUTE_CHANGED', { to: to, from: from })
  })

  return function unsync () {
    // On unsync, remove router hook
    if (afterEachUnHook != null) {
      afterEachUnHook()
    }

    // On unsync, remove store watch
    if (storeUnwatch != null) {
      storeUnwatch()
    }

    // On unsync, unregister Module with store
    store.unregisterModule(moduleName)
  }
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}



/***/ }),
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(287);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.interceptors.push(function (request, next) {
  next(function (response) {
    if (response.status === 403) {
      global.window.WS.getModule('Wasabi/Core').eventBus.trigger('auth-error');
    }
  });
});

var pagesUrl = global.window.WS.getModule('Wasabi/Cms').options.apiPagesUrl;
var pageResource = __WEBPACK_IMPORTED_MODULE_0_vue__["default"].resource(pagesUrl + '{/id}');

var exports = {
  page: {
    create: function (page) {
      return pageResource.save({}, page)
        .then(function (response) { return Promise.resolve(response); })
        .catch(function (error) { return Promise.reject(error); });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(29);


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
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_touch_events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_touch_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue2_touch_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_tree_App_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_tree_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__modules_tree_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_tree_actions_App_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_tree_actions_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__modules_tree_actions_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_content_App_vue__ = __webpack_require__(166);
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
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["a"] = ({

  namespaced: true,

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    rootNode: {
      name: 'Wasabi CMS Site',
      root: true,
      children: [
        // 'asdfgasrgaqgag-2342324-wsef',
        // 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg',
        // 'asdfgasrgaqgag-234sdfg2324-wsef',
        // 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg',
        // 'asdfgasrgaqSDFag-2342324-wsef',
        // 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg'
      ]
    },
    nodes: {
      // 'asdfgasrgaqgag-2342324-wsef': {
      //   id: 'asdfgasrgaqgag-2342324-wsef',
      //   parentId: null,
      //   name: 'Page 1',
      //   children: [
      //     'sdrgsergsergsegr-234234-sdfg'
      //   ]
      // },
      // 'sdrgsergsergsegr-234234-sdfg': {
      //   id: 'sdrgsergsergsegr-234234-sdfg',
      //   parentId: 'asdfgasrgaqgag-2342324-wsef',
      //   name: 'Page 2',
      //   children: [
      //     'asdfgasrgaqsdfggag-234sdfg2324-wsef',
      //     'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg',
      //     'asdfgasrgasdfgqSDFag-2342324-wsef',
      //     'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg'
      //   ]
      // },
      // 'asdfgasrgaqsdfggag-234sdfg2324-wsef': {
      //   id: 'asdfgasrgaqsdfggag-234sdfg2324-wsef',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'Page 1',
      //   children: [
      //     'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg'
      //   ]
      // },
      // 'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg': {
      //   id: 'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg',
      //   parentId: 'asdfgasrgaqsdfggag-234sdfg2324-wsef',
      //   name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
      //   children: []
      // },
      // 'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg': {
      //   id: 'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'Page 3',
      //   children: []
      // },
      // 'asdfgasrgasdfgqSDFag-2342324-wsef': {
      //   id: 'asdfgasrgasdfgqSDFag-2342324-wsef',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
      //   children: [
      //     'sdrgsersdfggsasdfasdfergsegr-234234-sdfg'
      //   ]
      // },
      // 'sdrgsersdfggsasdfasdfergsegr-234234-sdfg': {
      //   id: 'sdrgsersdfggsasdfasdfergsegr-234234-sdfg',
      //   parentId: 'asdfgasrgasdfgqSDFag-2342324-wsef',
      //   name: 'Page 2',
      //   children: []
      // },
      // 'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg': {
      //   id: 'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'Page 3',
      //   children: []
      // },
      // 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg': {
      //   id: 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg',
      //   parentId: null,
      //   name: 'Page 3',
      //   children: []
      // },
      // 'asdfgasrgaqgag-234sdfg2324-wsef': {
      //   id: 'asdfgasrgaqgag-234sdfg2324-wsef',
      //   parentId: null,
      //   name: 'Page 1',
      //   children: [
      //     'sdrgsergsergsegr-23sdasdffg4234-sdfg'
      //   ]
      // },
      // 'sdrgsergsergsegr-23sdasdffg4234-sdfg': {
      //   id: 'sdrgsergsergsegr-23sdasdffg4234-sdfg',
      //   parentId: 'asdfgasrgaqgag-234sdfg2324-wsef',
      //   name: 'Page 2',
      //   children: []
      // },
      // 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg': {
      //   id: 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg',
      //   parentId: null,
      //   name: 'Page 3',
      //   children: []
      // },
      // 'asdfgasrgaqSDFag-2342324-wsef': {
      //   id: 'asdfgasrgaqSDFag-2342324-wsef',
      //   parentId: null,
      //   name: 'Page 1',
      //   children: [
      //     'sdrgsergsasdfasdfergsegr-234234-sdfg'
      //   ]
      // },
      // 'sdrgsergsasdfasdfergsegr-234234-sdfg': {
      //   id: 'sdrgsergsasdfasdfergsegr-234234-sdfg',
      //   parentId: 'asdfgasrgaqSDFag-2342324-wsef',
      //   name: 'Page 2',
      //   children: []
      // },
      // 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg': {
      //   id: 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg',
      //   parentId: null,
      //   name: 'Page 3',
      //   children: []
      // }
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {
    SELECT_NODE: function SELECT_NODE(ref, node) {
      var commit = ref.commit;

      if (node.root === true) {
        __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'content-index' });
      } else {
        __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({ name: 'page-edit', params: {id: node.id} });
      }
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {

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
    }
  }
});


/***/ }),
/* 193 */
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
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matches_selector__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_parent_or_host__ = __webpack_require__(28);



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
/* 195 */
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
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capture_mode__ = __webpack_require__(16);


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
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capture_mode__ = __webpack_require__(16);


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
/* 198 */
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
/* 199 */
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
/* 200 */
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
/* 201 */
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
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DragListener__ = __webpack_require__(190);
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
/* 203 */
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
/* 204 */
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
/* 205 */
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
/* 206 */
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
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_PageNewModal_vue__ = __webpack_require__(267);
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
/* 208 */
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
/* 209 */
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
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LoadingButton_vue__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LoadingButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_LoadingButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuelidate__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(296);
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
      this.$store.dispatch('CREATE_PAGE', title)
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
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DragListener_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DragListener_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DragListener_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_NewPage_vue__ = __webpack_require__(19);
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
/* 212 */
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

  methods: {
    onDragStart: function onDragStart(draggableStore) {
      draggableStore.title = 'New Page';
    },
  }
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_TreeRootNode_vue__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_TreeRootNode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_TreeRootNode_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_Tree_vue__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_Tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_Tree_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DragGhost_vue__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DragGhost_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_DragGhost_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DragListener_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DragListener_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_DragListener_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GeminiScrollbar_vue__ = __webpack_require__(261);
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
  }
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeNode_vue__ = __webpack_require__(269);
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
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue__ = __webpack_require__(19);
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
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* truncate */])(this.node.name, 50, '...');
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
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* range */])(start, end);
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
      expandedIds = this.expanded ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* addToArray */])(expandedIds, this.node.id) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* removeFromArray */])(expandedIds, this.node.id);

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

      if ([thisComponentName, __WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue___default.a.name].indexOf(dropComponentName) === -1) {
        return false;
      }

      if (dropComponentName === __WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue___default.a.name) {
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
      draggableStore.title = this.node.name;
    },

    onDrop: function onDrop(type, component) {
      console.log(type, component, this.$el);
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
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_actions_component_NewPage_vue__ = __webpack_require__(19);
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
        this.$store.dispatch('OPEN_NEW_PAGE_MODAL', {
          parentId: null
        });
      }
    }
  }
});


/***/ }),
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 241 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 242 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 243 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 244 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 245 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 246 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 247 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 249 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 250 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 251 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 252 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 253 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(245)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(277),
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
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(272),
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
/* 262 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(246)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(278),
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
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(281),
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
/* 264 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(253)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(286),
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
/* 265 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(247)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(279),
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
/* 266 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(243)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(209),
  /* template */
  __webpack_require__(275),
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
/* 267 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(248)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(210),
  /* template */
  __webpack_require__(280),
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
/* 268 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(242)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(274),
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
/* 269 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(244)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(276),
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
/* 270 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(249)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(216),
  /* template */
  __webpack_require__(282),
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
/* 271 */
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
/* 272 */
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
/* 273 */
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
/* 274 */
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
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view-page-edit"
  }, [_vm._v(_vm._s(_vm.node.name))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d075a57", module.exports)
  }
}

/***/ }),
/* 276 */
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
/* 277 */
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
/* 278 */
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
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view-content-index"
  }, [_vm._v(_vm._s(_vm.node.name))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ba699f7", module.exports)
  }
}

/***/ }),
/* 280 */
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
/* 281 */
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
/* 282 */
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
/* 283 */
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
/* 284 */
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
/* 285 */
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
/* 286 */
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
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Url */
/* unused harmony export Http */
/* unused harmony export Resource */
/*!
 * vue-resource v1.5.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(316);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);



/***/ }),
/* 288 */
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7)))

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vuelidate = Vuelidate;
Object.defineProperty(exports, "withParams", {
  enumerable: true,
  get: function get() {
    return _params.withParams;
  }
});
exports.default = exports.validationMixin = void 0;

var _vval = __webpack_require__(312);

var _params = __webpack_require__(159);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var NIL = function NIL() {
  return null;
};

var buildFromKeys = function buildFromKeys(keys, fn, keyFn) {
  return keys.reduce(function (build, key) {
    build[keyFn ? keyFn(key) : key] = fn(key);
    return build;
  }, {});
};

function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && (_typeof(val) === 'object' || isFunction(val));
}

function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}

var getPath = function getPath(ctx, obj, path, fallback) {
  if (typeof path === 'function') {
    return path.call(ctx, obj, fallback);
  }

  path = Array.isArray(path) ? path : path.split('.');

  for (var i = 0; i < path.length; i++) {
    if (obj && _typeof(obj) === 'object') {
      obj = obj[path[i]];
    } else {
      return fallback;
    }
  }

  return typeof obj === 'undefined' ? fallback : obj;
};

var __isVuelidateAsyncVm = '__isVuelidateAsyncVm';

function makePendingAsyncVm(Vue, promise) {
  var asyncVm = new Vue({
    data: {
      p: true,
      v: false
    }
  });
  promise.then(function (value) {
    asyncVm.p = false;
    asyncVm.v = value;
  }, function (error) {
    asyncVm.p = false;
    asyncVm.v = false;
    throw error;
  });
  asyncVm[__isVuelidateAsyncVm] = true;
  return asyncVm;
}

var validationGetters = {
  $invalid: function $invalid() {
    var _this = this;

    var proxy = this.proxy;
    return this.nestedKeys.some(function (nested) {
      return _this.refProxy(nested).$invalid;
    }) || this.ruleKeys.some(function (rule) {
      return !proxy[rule];
    });
  },
  $dirty: function $dirty() {
    var _this2 = this;

    if (this.dirty) {
      return true;
    }

    if (this.nestedKeys.length === 0) {
      return false;
    }

    return this.nestedKeys.every(function (key) {
      return _this2.refProxy(key).$dirty;
    });
  },
  $anyDirty: function $anyDirty() {
    var _this3 = this;

    if (this.dirty) {
      return true;
    }

    if (this.nestedKeys.length === 0) {
      return false;
    }

    return this.nestedKeys.some(function (key) {
      return _this3.refProxy(key).$anyDirty;
    });
  },
  $error: function $error() {
    return this.$dirty && !this.$pending && this.$invalid;
  },
  $anyError: function $anyError() {
    return this.$anyDirty && !this.$pending && this.$invalid;
  },
  $pending: function $pending() {
    var _this4 = this;

    return this.ruleKeys.some(function (key) {
      return _this4.getRef(key).$pending;
    }) || this.nestedKeys.some(function (key) {
      return _this4.refProxy(key).$pending;
    });
  },
  $params: function $params() {
    var _this5 = this;

    var vals = this.validations;
    return _objectSpread({}, buildFromKeys(this.nestedKeys, function (key) {
      return vals[key] && vals[key].$params || null;
    }), buildFromKeys(this.ruleKeys, function (key) {
      return _this5.getRef(key).$params;
    }));
  }
};

function setDirtyRecursive(newState) {
  this.dirty = newState;
  var proxy = this.proxy;
  var method = newState ? '$touch' : '$reset';
  this.nestedKeys.forEach(function (key) {
    proxy[key][method]();
  });
}

var validationMethods = {
  $touch: function $touch() {
    setDirtyRecursive.call(this, true);
  },
  $reset: function $reset() {
    setDirtyRecursive.call(this, false);
  },
  $flattenParams: function $flattenParams() {
    var proxy = this.proxy;
    var params = [];

    for (var key in this.$params) {
      if (this.isNested(key)) {
        var childParams = proxy[key].$flattenParams();

        for (var j = 0; j < childParams.length; j++) {
          childParams[j].path.unshift(key);
        }

        params = params.concat(childParams);
      } else {
        params.push({
          path: [],
          name: key,
          params: this.$params[key]
        });
      }
    }

    return params;
  }
};
var getterNames = Object.keys(validationGetters);
var methodNames = Object.keys(validationMethods);
var _cachedComponent = null;

var getComponent = function getComponent(Vue) {
  if (_cachedComponent) {
    return _cachedComponent;
  }

  var VBase = Vue.extend({
    computed: {
      refs: function refs() {
        var oldVval = this._vval;
        this._vval = this.children;
        (0, _vval.patchChildren)(oldVval, this._vval);
        var refs = {};

        this._vval.forEach(function (c) {
          refs[c.key] = c.vm;
        });

        return refs;
      }
    },
    beforeCreate: function beforeCreate() {
      this._vval = null;
    },
    beforeDestroy: function beforeDestroy() {
      if (this._vval) {
        (0, _vval.patchChildren)(this._vval);
        this._vval = null;
      }
    },
    methods: {
      getModel: function getModel() {
        return this.lazyModel ? this.lazyModel(this.prop) : this.model;
      },
      getModelKey: function getModelKey(key) {
        var model = this.getModel();

        if (model) {
          return model[key];
        }
      },
      hasIter: function hasIter() {
        return false;
      }
    }
  });
  var ValidationRule = VBase.extend({
    data: function data() {
      return {
        rule: null,
        lazyModel: null,
        model: null,
        lazyParentModel: null,
        rootModel: null
      };
    },
    methods: {
      runRule: function runRule(parent) {
        var model = this.getModel();
        (0, _params.pushParams)();
        var rawOutput = this.rule.call(this.rootModel, model, parent);
        var output = isPromise(rawOutput) ? makePendingAsyncVm(Vue, rawOutput) : rawOutput;
        var rawParams = (0, _params.popParams)();
        var params = rawParams && rawParams.$sub ? rawParams.$sub.length > 1 ? rawParams : rawParams.$sub[0] : null;
        return {
          output: output,
          params: params
        };
      }
    },
    computed: {
      run: function run() {
        var _this6 = this;

        var parent = this.lazyParentModel();

        var isArrayDependant = Array.isArray(parent) && parent.__ob__;

        if (isArrayDependant) {
          var arrayDep = parent.__ob__.dep;
          arrayDep.depend();
          var target = arrayDep.constructor.target;

          if (!this._indirectWatcher) {
            var Watcher = target.constructor;
            this._indirectWatcher = new Watcher(this, function () {
              return _this6.runRule(parent);
            }, null, {
              lazy: true
            });
          }

          var model = this.getModel();

          if (!this._indirectWatcher.dirty && this._lastModel === model) {
            this._indirectWatcher.depend();

            return target.value;
          }

          this._lastModel = model;

          this._indirectWatcher.evaluate();

          this._indirectWatcher.depend();
        } else if (this._indirectWatcher) {
          this._indirectWatcher.teardown();

          this._indirectWatcher = null;
        }

        return this._indirectWatcher ? this._indirectWatcher.value : this.runRule(parent);
      },
      $params: function $params() {
        return this.run.params;
      },
      proxy: function proxy() {
        var output = this.run.output;

        if (output[__isVuelidateAsyncVm]) {
          return !!output.v;
        }

        return !!output;
      },
      $pending: function $pending() {
        var output = this.run.output;

        if (output[__isVuelidateAsyncVm]) {
          return output.p;
        }

        return false;
      }
    },
    destroyed: function destroyed() {
      if (this._indirectWatcher) {
        this._indirectWatcher.teardown();

        this._indirectWatcher = null;
      }
    }
  });
  var Validation = VBase.extend({
    data: function data() {
      return {
        dirty: false,
        validations: null,
        lazyModel: null,
        model: null,
        prop: null,
        lazyParentModel: null,
        rootModel: null
      };
    },
    methods: _objectSpread({}, validationMethods, {
      refProxy: function refProxy(key) {
        return this.getRef(key).proxy;
      },
      getRef: function getRef(key) {
        return this.refs[key];
      },
      isNested: function isNested(key) {
        return typeof this.validations[key] !== 'function';
      }
    }),
    computed: _objectSpread({}, validationGetters, {
      nestedKeys: function nestedKeys() {
        return this.keys.filter(this.isNested);
      },
      ruleKeys: function ruleKeys() {
        var _this7 = this;

        return this.keys.filter(function (k) {
          return !_this7.isNested(k);
        });
      },
      keys: function keys() {
        return Object.keys(this.validations).filter(function (k) {
          return k !== '$params';
        });
      },
      proxy: function proxy() {
        var _this8 = this;

        var keyDefs = buildFromKeys(this.keys, function (key) {
          return {
            enumerable: true,
            configurable: true,
            get: function get() {
              return _this8.refProxy(key);
            }
          };
        });
        var getterDefs = buildFromKeys(getterNames, function (key) {
          return {
            enumerable: true,
            configurable: true,
            get: function get() {
              return _this8[key];
            }
          };
        });
        var methodDefs = buildFromKeys(methodNames, function (key) {
          return {
            enumerable: false,
            configurable: true,
            get: function get() {
              return _this8[key];
            }
          };
        });
        var iterDefs = this.hasIter() ? {
          $iter: {
            enumerable: true,
            value: Object.defineProperties({}, _objectSpread({}, keyDefs))
          }
        } : {};
        return Object.defineProperties({}, _objectSpread({}, keyDefs, iterDefs, {
          $model: {
            enumerable: true,
            get: function get() {
              var parent = _this8.lazyParentModel();

              if (parent != null) {
                return parent[_this8.prop];
              } else {
                return null;
              }
            },
            set: function set(value) {
              var parent = _this8.lazyParentModel();

              if (parent != null) {
                parent[_this8.prop] = value;

                _this8.$touch();
              }
            }
          }
        }, getterDefs, methodDefs));
      },
      children: function children() {
        var _this9 = this;

        return _toConsumableArray(this.nestedKeys.map(function (key) {
          return renderNested(_this9, key);
        })).concat(_toConsumableArray(this.ruleKeys.map(function (key) {
          return renderRule(_this9, key);
        }))).filter(Boolean);
      }
    })
  });
  var GroupValidation = Validation.extend({
    methods: {
      isNested: function isNested(key) {
        return typeof this.validations[key]() !== 'undefined';
      },
      getRef: function getRef(key) {
        var vm = this;
        return {
          get proxy() {
            return vm.validations[key]() || false;
          }

        };
      }
    }
  });
  var EachValidation = Validation.extend({
    computed: {
      keys: function keys() {
        var model = this.getModel();

        if (isObject(model)) {
          return Object.keys(model);
        } else {
          return [];
        }
      },
      tracker: function tracker() {
        var _this10 = this;

        var trackBy = this.validations.$trackBy;
        return trackBy ? function (key) {
          return "".concat(getPath(_this10.rootModel, _this10.getModelKey(key), trackBy));
        } : function (x) {
          return "".concat(x);
        };
      },
      getModelLazy: function getModelLazy() {
        var _this11 = this;

        return function () {
          return _this11.getModel();
        };
      },
      children: function children() {
        var _this12 = this;

        var def = this.validations;
        var model = this.getModel();

        var validations = _objectSpread({}, def);

        delete validations['$trackBy'];
        var usedTracks = {};
        return this.keys.map(function (key) {
          var track = _this12.tracker(key);

          if (usedTracks.hasOwnProperty(track)) {
            return null;
          }

          usedTracks[track] = true;
          return (0, _vval.h)(Validation, track, {
            validations: validations,
            prop: key,
            lazyParentModel: _this12.getModelLazy,
            model: model[key],
            rootModel: _this12.rootModel
          });
        }).filter(Boolean);
      }
    },
    methods: {
      isNested: function isNested() {
        return true;
      },
      getRef: function getRef(key) {
        return this.refs[this.tracker(key)];
      },
      hasIter: function hasIter() {
        return true;
      }
    }
  });

  var renderNested = function renderNested(vm, key) {
    if (key === '$each') {
      return (0, _vval.h)(EachValidation, key, {
        validations: vm.validations[key],
        lazyParentModel: vm.lazyParentModel,
        prop: key,
        lazyModel: vm.getModel,
        rootModel: vm.rootModel
      });
    }

    var validations = vm.validations[key];

    if (Array.isArray(validations)) {
      var root = vm.rootModel;
      var refVals = buildFromKeys(validations, function (path) {
        return function () {
          return getPath(root, root.$v, path);
        };
      }, function (v) {
        return Array.isArray(v) ? v.join('.') : v;
      });
      return (0, _vval.h)(GroupValidation, key, {
        validations: refVals,
        lazyParentModel: NIL,
        prop: key,
        lazyModel: NIL,
        rootModel: root
      });
    }

    return (0, _vval.h)(Validation, key, {
      validations: validations,
      lazyParentModel: vm.getModel,
      prop: key,
      lazyModel: vm.getModelKey,
      rootModel: vm.rootModel
    });
  };

  var renderRule = function renderRule(vm, key) {
    return (0, _vval.h)(ValidationRule, key, {
      rule: vm.validations[key],
      lazyParentModel: vm.lazyParentModel,
      lazyModel: vm.getModel,
      rootModel: vm.rootModel
    });
  };

  _cachedComponent = {
    VBase: VBase,
    Validation: Validation
  };
  return _cachedComponent;
};

var _cachedVue = null;

function getVue(rootVm) {
  if (_cachedVue) return _cachedVue;
  var Vue = rootVm.constructor;

  while (Vue.super) {
    Vue = Vue.super;
  }

  _cachedVue = Vue;
  return Vue;
}

var validateModel = function validateModel(model, validations) {
  var Vue = getVue(model);

  var _getComponent = getComponent(Vue),
      Validation = _getComponent.Validation,
      VBase = _getComponent.VBase;

  var root = new VBase({
    computed: {
      children: function children() {
        var vals = typeof validations === 'function' ? validations.call(model) : validations;
        return [(0, _vval.h)(Validation, '$v', {
          validations: vals,
          lazyParentModel: NIL,
          prop: '$v',
          model: model,
          rootModel: model
        })];
      }
    }
  });
  return root;
};

var validationMixin = {
  data: function data() {
    var vals = this.$options.validations;

    if (vals) {
      this._vuelidate = validateModel(this, vals);
    }

    return {};
  },
  beforeCreate: function beforeCreate() {
    var options = this.$options;
    var vals = options.validations;
    if (!vals) return;
    if (!options.computed) options.computed = {};
    if (options.computed.$v) return;

    options.computed.$v = function () {
      return this._vuelidate ? this._vuelidate.refs.$v.proxy : null;
    };
  },
  beforeDestroy: function beforeDestroy() {
    if (this._vuelidate) {
      this._vuelidate.$destroy();

      this._vuelidate = null;
    }
  }
};
exports.validationMixin = validationMixin;

function Vuelidate(Vue) {
  Vue.mixin(validationMixin);
}

var _default = Vuelidate;
exports.default = _default;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports.default = _default;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports.default = _default;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports.default = _default;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

var _default = (0, _common.regex)('email', emailRegex);

exports.default = _default;

/***/ }),
/* 296 */
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

var _alpha = _interopRequireDefault(__webpack_require__(290));

var _alphaNum = _interopRequireDefault(__webpack_require__(291));

var _numeric = _interopRequireDefault(__webpack_require__(305));

var _between = _interopRequireDefault(__webpack_require__(293));

var _email = _interopRequireDefault(__webpack_require__(295));

var _ipAddress = _interopRequireDefault(__webpack_require__(298));

var _macAddress = _interopRequireDefault(__webpack_require__(299));

var _maxLength = _interopRequireDefault(__webpack_require__(300));

var _minLength = _interopRequireDefault(__webpack_require__(302));

var _required = _interopRequireDefault(__webpack_require__(307));

var _requiredIf = _interopRequireDefault(__webpack_require__(308));

var _requiredUnless = _interopRequireDefault(__webpack_require__(309));

var _sameAs = _interopRequireDefault(__webpack_require__(310));

var _url = _interopRequireDefault(__webpack_require__(311));

var _or = _interopRequireDefault(__webpack_require__(306));

var _and = _interopRequireDefault(__webpack_require__(292));

var _not = _interopRequireDefault(__webpack_require__(304));

var _minValue = _interopRequireDefault(__webpack_require__(303));

var _maxValue = _interopRequireDefault(__webpack_require__(301));

var _integer = _interopRequireDefault(__webpack_require__(297));

var _decimal = _interopRequireDefault(__webpack_require__(294));

var helpers = _interopRequireWildcard(__webpack_require__(2));

exports.helpers = helpers;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var _default = (0, _common.regex)('integer', /^-?[0-9]*$/);

exports.default = _default;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports.default = _default;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports.default = _default;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var _default = (0, _common.withParams)({
  type: 'required'
}, _common.req);

exports.default = _default;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

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
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(2);

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports.default = _default;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchChildren = patchChildren;
exports.h = h;

function isUndef(v) {
  return v === null || v === undefined;
}

function isDef(v) {
  return v !== null && v !== undefined;
}

function sameVval(oldVval, vval) {
  return vval.tag === oldVval.tag && vval.key === oldVval.key;
}

function createVm(vval) {
  var Vm = vval.tag;
  vval.vm = new Vm({
    data: vval.args
  });
}

function updateVval(vval) {
  var keys = Object.keys(vval.args);

  for (var i = 0; i < keys.length; i++) {
    keys.forEach(function (k) {
      vval.vm[k] = vval.args[k];
    });
  }
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }

  return map;
}

function updateChildren(oldCh, newCh) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVval = oldCh[0];
  var oldEndVval = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVval = newCh[0];
  var newEndVval = newCh[newEndIdx];
  var oldKeyToIdx, idxInOld, elmToMove;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVval)) {
      oldStartVval = oldCh[++oldStartIdx];
    } else if (isUndef(oldEndVval)) {
      oldEndVval = oldCh[--oldEndIdx];
    } else if (sameVval(oldStartVval, newStartVval)) {
      patchVval(oldStartVval, newStartVval);
      oldStartVval = oldCh[++oldStartIdx];
      newStartVval = newCh[++newStartIdx];
    } else if (sameVval(oldEndVval, newEndVval)) {
      patchVval(oldEndVval, newEndVval);
      oldEndVval = oldCh[--oldEndIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldStartVval, newEndVval)) {
      patchVval(oldStartVval, newEndVval);
      oldStartVval = oldCh[++oldStartIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldEndVval, newStartVval)) {
      patchVval(oldEndVval, newStartVval);
      oldEndVval = oldCh[--oldEndIdx];
      newStartVval = newCh[++newStartIdx];
    } else {
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      idxInOld = isDef(newStartVval.key) ? oldKeyToIdx[newStartVval.key] : null;

      if (isUndef(idxInOld)) {
        createVm(newStartVval);
        newStartVval = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];

        if (sameVval(elmToMove, newStartVval)) {
          patchVval(elmToMove, newStartVval);
          oldCh[idxInOld] = undefined;
          newStartVval = newCh[++newStartIdx];
        } else {
          createVm(newStartVval);
          newStartVval = newCh[++newStartIdx];
        }
      }
    }
  }

  if (oldStartIdx > oldEndIdx) {
    addVvals(newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVvals(oldCh, oldStartIdx, oldEndIdx);
  }
}

function addVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    createVm(vvals[startIdx]);
  }
}

function removeVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vvals[startIdx];

    if (isDef(ch)) {
      ch.vm.$destroy();
      ch.vm = null;
    }
  }
}

function patchVval(oldVval, vval) {
  if (oldVval === vval) {
    return;
  }

  vval.vm = oldVval.vm;
  updateVval(vval);
}

function patchChildren(oldCh, ch) {
  if (isDef(oldCh) && isDef(ch)) {
    if (oldCh !== ch) updateChildren(oldCh, ch);
  } else if (isDef(ch)) {
    addVvals(ch, 0, ch.length - 1);
  } else if (isDef(oldCh)) {
    removeVvals(oldCh, 0, oldCh.length - 1);
  }
}

function h(tag, key, args) {
  return {
    tag: tag,
    key: key,
    args: args
  };
}

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var withParams = process.env.BUILD === 'web' ? __webpack_require__(314).withParams : __webpack_require__(159).withParams;
var _default = withParams;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 314 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 315 */,
/* 316 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[191]);
//# sourceMappingURL=tree.js.map