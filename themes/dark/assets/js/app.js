"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkslim"] = self["webpackChunkslim"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _global_vue_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-vue-shim */ \"./src/global-vue-shim.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/core */ \"./src/utils/core.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_5__[\"default\"].config.devtools = true;\nvue__WEBPACK_IMPORTED_MODULE_5__[\"default\"].config.performance = true;\n(0,_global_vue_shim__WEBPACK_IMPORTED_MODULE_0__.registerPlugins)(); // @TODO: Remove this before v1.0.0\n\n(0,_global_vue_shim__WEBPACK_IMPORTED_MODULE_0__.registerGlobalComponents)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  name: 'index',\n  router: _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  store: _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\n  data() {\n    return {\n      isAuthenticated: false\n    };\n  },\n\n  async mounted() {\n    const {\n      getShows,\n      setLoadingDisplay,\n      setLoadingFinished\n    } = this;\n\n    if (_utils_core__WEBPACK_IMPORTED_MODULE_3__.isDevelopment) {\n      console.log('App Mounted!');\n    }\n\n    await this.$store.dispatch('auth');\n\n    if (!window.location.pathname.includes('/login')) {\n      const {\n        $store\n      } = this;\n      await $store.dispatch('login');\n      this.isAuthenticated = true;\n      Promise.all([$store.dispatch('getConfig'), $store.dispatch('getStats')]).then(_ref => {\n        let [config] = _ref;\n\n        if (_utils_core__WEBPACK_IMPORTED_MODULE_3__.isDevelopment) {\n          console.log('App Loaded!');\n        } // Legacy - send config.general to jQuery (received by index.js)\n\n\n        const event = new CustomEvent('medusa-config-loaded', {\n          detail: {\n            general: config.general,\n            layout: config.layout\n          }\n        });\n        window.dispatchEvent(event); // Let's bootstrap the app with essential data like the shows.\n        // For the storing of the shows in the browsers cache, we depend on config/general.\n\n        getShows().then(() => {\n          console.log('Finished loading all shows.');\n          setTimeout(() => {\n            setLoadingFinished(true);\n            setLoadingDisplay(false);\n          }, 2000);\n        });\n      }).catch(error => {\n        console.debug(error);\n        alert('Unable to connect to Medusa!'); // eslint-disable-line no-alert\n      });\n    }\n  },\n\n  methods: { ...(0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)({\n      getShows: 'getShows'\n    }),\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapMutations)(['setLoadingDisplay', 'setLoadingFinished'])\n  },\n\n  render(h) {\n    // eslint-disable-line vue/require-render-return\n    // Do not start with rendering the app, before we're sure we authenticated.\n    if (this.isAuthenticated || window.location.pathname.includes('/login')) {\n      return h(_components__WEBPACK_IMPORTED_MODULE_4__.App);\n    }\n  }\n\n}).$mount('#app-wrapper'));\n\n//# sourceURL=webpack://slim/./src/app.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["medusa-runtime","vendors~date-fns"], () => (__webpack_exec__("./src/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);