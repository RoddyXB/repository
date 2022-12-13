(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/styles.css */ "./public/css/styles.css");
/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/app/store */ "./src/app/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _src_app_store__WEBPACK_IMPORTED_MODULE_2__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/Menu/routeMenu */ "./src/features/Menu/routeMenu.js");
/* harmony import */ var _features_initSider_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/initSider/init */ "./src/features/initSider/init.js");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    routeMenu: _features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_1__.default,
    initSider: _features_initSider_init__WEBPACK_IMPORTED_MODULE_2__.default
  }
}); // export default store

/***/ }),

/***/ "./src/features/Menu/routeMenu.js":
/*!****************************************!*\
  !*** ./src/features/Menu/routeMenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routeMenu": () => (/* binding */ routeMenu),
/* harmony export */   "changeUrl": () => (/* binding */ changeUrl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const routeMenu = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'routeMenu',
  initialState: {
    value: '/'
  },
  reducers: {
    changeUrl: (state, action) => {
      state.value = action.payload;
    }
  }
});
const {
  changeUrl
} = routeMenu.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routeMenu.reducer);

/***/ }),

/***/ "./src/features/initSider/init.js":
/*!****************************************!*\
  !*** ./src/features/initSider/init.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSider": () => (/* binding */ initSider),
/* harmony export */   "changeLoading": () => (/* binding */ changeLoading),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initSider = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'initSider',
  initialState: {
    Loading: false
  },
  reducers: {
    changeLoading: (state, action) => {
      state.Loading = action.payload;
    }
  }
});
const {
  changeLoading
} = initSider.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSider.reducer);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUVyQyxzQkFDRSw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUosaURBQWpCO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0g7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFJTyxNQUFNRixLQUFLLEdBQUdLLGdFQUFjLENBQUM7QUFDaENHLEVBQUFBLE9BQU8sRUFBQztBQUNKQyxJQUFBQSxTQUFTLEVBQUVILDZEQURQO0FBRUpJLElBQUFBLFNBQVMsRUFBRUgsNkRBQWdCQTtBQUZ2QjtBQUR3QixDQUFELENBQTVCLEVBU1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFTyxNQUFNRSxTQUFTLEdBQUdFLDZEQUFXLENBQUM7QUFDakNDLEVBQUFBLElBQUksRUFBRSxXQUQyQjtBQUVqQ0MsRUFBQUEsWUFBWSxFQUFFO0FBQ1ZDLElBQUFBLEtBQUssRUFBRTtBQURHLEdBRm1CO0FBS2pDQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsU0FBUyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMxQkQsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLEdBQVlJLE1BQU0sQ0FBQ0MsT0FBbkI7QUFDSDtBQUhLO0FBTHVCLENBQUQsQ0FBN0I7QUFXQSxNQUFNO0FBQUVILEVBQUFBO0FBQUYsSUFBZ0JQLFNBQVMsQ0FBQ1csT0FBaEM7QUFDUCxpRUFBZVgsU0FBUyxDQUFDRCxPQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBRU8sTUFBTUUsU0FBUyxHQUFHQyw2REFBVyxDQUFDO0FBQ2pDQyxFQUFBQSxJQUFJLEVBQUUsV0FEMkI7QUFFakNDLEVBQUFBLFlBQVksRUFBRTtBQUNWUSxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQUZtQjtBQUtqQ04sRUFBQUEsUUFBUSxFQUFFO0FBQ05PLElBQUFBLGFBQWEsRUFBRSxDQUFDTCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDOUJELE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixHQUFjSCxNQUFNLENBQUNDLE9BQXJCO0FBQ0g7QUFISztBQUx1QixDQUFELENBQTdCO0FBWUEsTUFBTTtBQUFFRyxFQUFBQTtBQUFGLElBQW9CWixTQUFTLENBQUNVLE9BQXBDO0FBQ1AsaUVBQWVWLFNBQVMsQ0FBQ0YsT0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUdmQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tydWdlci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vc3JjL2FwcC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9rcnVnZXIvLi9zcmMvZmVhdHVyZXMvTWVudS9yb3V0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vc3JjL2ZlYXR1cmVzL2luaXRTaWRlci9pbml0LmpzIiwid2VicGFjazovL2tydWdlci8uL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vcHVibGljL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2tydWdlci9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9rcnVnZXIvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2tydWdlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3Mvc3R5bGVzLmNzcydcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vc3JjL2FwcC9zdG9yZSdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4gICAgICBcclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcblxyXG4iLCJcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuaW1wb3J0ICByb3V0ZU1lbnVSZWR1Y2VyICBmcm9tICcuLi9mZWF0dXJlcy9NZW51L3JvdXRlTWVudSdcclxuaW1wb3J0ICBpbml0U2lkZXJSZWR1Y2VyICBmcm9tICcuLi9mZWF0dXJlcy9pbml0U2lkZXIvaW5pdCdcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjp7XHJcbiAgICAgICAgcm91dGVNZW51OiByb3V0ZU1lbnVSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRTaWRlcjogaW5pdFNpZGVyUmVkdWNlclxyXG4gICAgfVxyXG59KVxyXG5cclxuIFxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVNZW51ID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3JvdXRlTWVudScsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICB2YWx1ZTogJy8nLFxyXG4gICAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBjaGFuZ2VVcmw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlPWFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY29uc3QgeyBjaGFuZ2VVcmwgfSA9IHJvdXRlTWVudS5hY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlTWVudS5yZWR1Y2VyIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTaWRlciA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdpbml0U2lkZXInLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGNoYW5nZUxvYWRpbmc6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLkxvYWRpbmc9YWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9LFxyXG5cclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHsgY2hhbmdlTG9hZGluZyB9ID0gaW5pdFNpZGVyLmFjdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgaW5pdFNpZGVyLnJlZHVjZXIiLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsic3RvcmUiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlndXJlU3RvcmUiLCJyb3V0ZU1lbnVSZWR1Y2VyIiwiaW5pdFNpZGVyUmVkdWNlciIsInJlZHVjZXIiLCJyb3V0ZU1lbnUiLCJpbml0U2lkZXIiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInJlZHVjZXJzIiwiY2hhbmdlVXJsIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsIkxvYWRpbmciLCJjaGFuZ2VMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==