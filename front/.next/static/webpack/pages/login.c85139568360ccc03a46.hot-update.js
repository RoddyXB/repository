"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login/login.js":
/*!******************************!*\
  !*** ./pages/login/login.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Roddy_Documents_kruger_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Roddy_Documents_kruger_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Roddy_Documents_kruger_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Roddy_Documents_kruger_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Loader/c_Loader */ "./components/Loader/c_Loader.js");
/* harmony import */ var _config_ant_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/ant_components */ "./config/ant_components.js");
/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/http */ "./config/http.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/default */ "./config/default.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_default__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/funciones_generales */ "./config/funciones_generales.js");
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_funciones_generales__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\pages\\login\\login.js",
    _s = $RefreshSig$();












function Login(_ref) {
  _s();

  var form = _ref.form;
  var getFieldDecorator = form.getFieldDecorator;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var btn_login = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Roddy_Documents_kruger_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Roddy_Documents_kruger_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var validate, _form$getFieldValue;

      return C_Users_Roddy_Documents_kruger_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (loading) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return _config_funciones_generales__WEBPACK_IMPORTED_MODULE_8___default().validateForm(form);

            case 3:
              validate = _context.sent;

              if (validate.value) {
                setLoading(true);
                (0,_config_http__WEBPACK_IMPORTED_MODULE_5__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_7___default().ip_web) + "/person?userName=" + ((_form$getFieldValue = form.getFieldValue("txtUserName")) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.toLowerCase()) + "&password=" + form.getFieldValue("txtPassword")).then(function (res) {
                  var response = res.data;

                  if (!Array.isArray(response)) {
                    return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_4__.ModalKruger)("Ocurrio un problema al retornar datos.", "warn");
                  }

                  if (response.length == 0) {
                    return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_4__.ModalKruger)("Contraseña o usuario incorrecto.", "warn");
                  }

                  localStorage.setItem('token', JSON.stringify({
                    'id': response[0].id,
                    'name': response[0].name,
                    'lastName': response[0].lastName,
                    'idRol': response[0].rolId
                  }));
                  next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/sider');
                })["catch"](function (err) {
                  (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_4__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
                })["finally"](function () {
                  setLoading(false);
                });
              } else {
                (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_4__.notificationKruger)("warning", "Kruger", "Formulario inválido", 2);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function btn_login() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {
      visible: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Layout, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Layout.Content, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "fon",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "containerLogin",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                style: {
                  width: '60%'
                },
                src: "img/logo_kruger.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Form, {
                children: [getFieldDecorator('txtUserName', {
                  rules: [{
                    required: true,
                    message: 'Campo vacio'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input, {
                  prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Icon, {
                    type: "user",
                    style: {
                      color: 'rgba(0,0,0,.25)'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 53
                  }, this),
                  placeholder: "Usuario",
                  size: "large"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 41
                }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, this), getFieldDecorator('txtPassword', {
                  rules: [{
                    required: true,
                    message: 'Campo vacio'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input.Password, {
                  prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Icon, {
                    type: "lock",
                    style: {
                      color: 'rgba(0,0,0,.25)'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 53
                  }, this),
                  placeholder: "Contrase\xF1a",
                  size: "large",
                  onPressEnter: btn_login
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 41
                }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
                  block: true,
                  style: {
                    color: 'white',
                    backgroundColor: '#0060A8'
                  },
                  disabled: loading,
                  size: "large",
                  onClick: btn_login,
                  children: "Iniciar Sesi\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, this);
}

_s(Login, "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=");

_c = Login;
var LoginForm = antd__WEBPACK_IMPORTED_MODULE_10__.Form.create()(Login);
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYzg1MTM5NTY4MzYwY2NjMDNhNDYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsU0FBU2EsS0FBVCxPQUF5QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNyQixNQUFRQyxpQkFBUixHQUE4QkQsSUFBOUIsQ0FBUUMsaUJBQVI7O0FBQ0Esa0JBQThCZiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPZ0IsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxNQUFNQyxTQUFTO0FBQUEsZ1VBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNURixPQURTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRVdKLCtFQUFBLENBQXVCRSxJQUF2QixDQUZYOztBQUFBO0FBRU5NLGNBQUFBLFFBRk07O0FBR1Ysa0JBQUlBLFFBQVEsQ0FBQ0MsS0FBYixFQUFvQjtBQUNoQkosZ0JBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVIsZ0JBQUFBLHNEQUFRLENBQUNFLCtEQUFBLEdBQWdCLG1CQUFoQiwyQkFBc0NHLElBQUksQ0FBQ1MsYUFBTCxDQUFtQixhQUFuQixDQUF0Qyx3REFBc0Msb0JBQW1DQyxXQUFuQyxFQUF0QyxJQUF5RixZQUF6RixHQUF3R1YsSUFBSSxDQUFDUyxhQUFMLENBQW1CLGFBQW5CLENBQXpHLENBQVIsQ0FBb0pFLElBQXBKLENBQXlKLFVBQUFDLEdBQUcsRUFBSTtBQUM1SixzQkFBTUMsUUFBUSxHQUFHRCxHQUFHLENBQUNFLElBQXJCOztBQUNBLHNCQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxRQUFkLENBQUwsRUFBOEI7QUFDMUIsMkJBQU9uQixtRUFBVyxDQUFDLHdDQUFELEVBQTJDLE1BQTNDLENBQWxCO0FBQ0g7O0FBQ0Qsc0JBQUltQixRQUFRLENBQUNJLE1BQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsMkJBQU92QixtRUFBVyxDQUFDLGtDQUFELEVBQXFDLE1BQXJDLENBQWxCO0FBQ0g7O0FBQ0R3QixrQkFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUN6QywwQkFBTVIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUyxFQUR1QjtBQUV6Qyw0QkFBUVQsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZVSxJQUZxQjtBQUd6QyxnQ0FBWVYsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZVyxRQUhpQjtBQUl6Qyw2QkFBU1gsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZWTtBQUpvQixtQkFBZixDQUE5QjtBQU9BN0Isa0JBQUFBLHVEQUFBLENBQVksUUFBWjtBQUVILGlCQWpCRCxXQWlCUyxVQUFBK0IsR0FBRyxFQUFJO0FBQ1pqQyxrQkFBQUEsbUVBQVcsQ0FBQ2lDLEdBQUcsQ0FBQ0MsT0FBSixJQUFlLG9DQUFoQixFQUFzRCxPQUF0RCxDQUFYO0FBQ0gsaUJBbkJELGFBbUJXLFlBQU07QUFDYnpCLGtCQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsaUJBckJEO0FBdUJILGVBekJELE1BeUJPO0FBQ0hWLGdCQUFBQSwwRUFBa0IsQ0FBQyxTQUFELEVBQVksUUFBWixFQUFzQixxQkFBdEIsRUFBNkMsQ0FBN0MsQ0FBbEI7QUFDSDs7QUE5QlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVFcsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQXFDQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGdFQUFEO0FBQVEsYUFBTyxFQUFFRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyx5Q0FBRDtBQUFBLDZCQUNJLDhEQUFDLGlEQUFEO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSxtQ0FDSTtBQUFBLHNDQUNJO0FBQUsscUJBQUssRUFBRTtBQUFFMkIsa0JBQUFBLEtBQUssRUFBRTtBQUFULGlCQUFaO0FBQThCLG1CQUFHLEVBQUMscUJBQWxDO0FBQXdELG1CQUFHLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLGVBSUksOERBQUMsdUNBQUQ7QUFBQSwyQkFDSzVCLGlCQUFpQixDQUFDLGFBQUQsRUFBZ0I7QUFDOUI2QixrQkFBQUEsS0FBSyxFQUFFLENBQUM7QUFBRUMsb0JBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCSCxvQkFBQUEsT0FBTyxFQUFFO0FBQTNCLG1CQUFEO0FBRHVCLGlCQUFoQixDQUFqQixlQUdHLDhEQUFDLHdDQUFEO0FBQ0ksd0JBQU0sZUFBRSw4REFBQyx1Q0FBRDtBQUFNLHdCQUFJLEVBQUMsTUFBWDtBQUFrQix5QkFBSyxFQUFFO0FBQUVJLHNCQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURaO0FBRUksNkJBQVcsRUFBQyxTQUZoQjtBQUdJLHNCQUFJLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhILENBREwsZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZKLGVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFYSixFQVlLL0IsaUJBQWlCLENBQUMsYUFBRCxFQUFnQjtBQUM5QjZCLGtCQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFQyxvQkFBQUEsUUFBUSxFQUFFLElBQVo7QUFBa0JILG9CQUFBQSxPQUFPLEVBQUU7QUFBM0IsbUJBQUQ7QUFEdUIsaUJBQWhCLENBQWpCLGVBR0csOERBQUMsaURBQUQ7QUFDSSx3QkFBTSxlQUFFLDhEQUFDLHVDQUFEO0FBQU0sd0JBQUksRUFBQyxNQUFYO0FBQWtCLHlCQUFLLEVBQUU7QUFBRUksc0JBQUFBLEtBQUssRUFBRTtBQUFUO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRFo7QUFFSSw2QkFBVyxFQUFDLGVBRmhCO0FBR0ksc0JBQUksRUFBQyxPQUhUO0FBSUksOEJBQVksRUFBRTVCO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEgsQ0FaTCxlQXNCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRCSixlQXVCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZCSixlQXdCSSw4REFBQyx5Q0FBRDtBQUNJLHVCQUFLLE1BRFQ7QUFFSSx1QkFBSyxFQUFFO0FBQUU0QixvQkFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLG9CQUFBQSxlQUFlLEVBQUU7QUFBbkMsbUJBRlg7QUFHSSwwQkFBUSxFQUFFL0IsT0FIZDtBQUlJLHNCQUFJLEVBQUMsT0FKVDtBQUtJLHlCQUFPLEVBQUVFLFNBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBeEJKLGVBa0NJO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBbENKLGVBbUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3REg7O0dBaEdRTDs7S0FBQUE7QUFtR1QsSUFBTW1DLFNBQVMsR0FBRzlDLDhDQUFBLEdBQWNXLEtBQWQsQ0FBbEI7QUFDQSwrREFBZW1DLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSWNvbiwgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnL2NvbXBvbmVudHMvTG9hZGVyL2NfTG9hZGVyJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25LcnVnZXIsIE1vZGFsS3J1Z2VyIH0gZnJvbSBcIi9jb25maWcvYW50X2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgYXhpb3NHZXQgfSBmcm9tIFwiL2NvbmZpZy9odHRwXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb25maWcgZnJvbSAnL2NvbmZpZy9kZWZhdWx0J1xyXG5pbXBvcnQgZnVuY2lvbmVzIGZyb20gJy9jb25maWcvZnVuY2lvbmVzX2dlbmVyYWxlcydcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIExvZ2luKHsgZm9ybSB9KSB7XHJcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSBmb3JtO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBidG5fbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IGF3YWl0IGZ1bmNpb25lcy52YWxpZGF0ZUZvcm0oZm9ybSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYXhpb3NHZXQoY29uZmlnLmlwX3dlYiArIFwiL3BlcnNvbj91c2VyTmFtZT1cIiArIGZvcm0uZ2V0RmllbGRWYWx1ZShcInR4dFVzZXJOYW1lXCIpPy50b0xvd2VyQ2FzZSgpICsgXCImcGFzc3dvcmQ9XCIgKyBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0eHRQYXNzd29yZFwiKSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNb2RhbEtydWdlcihcIk9jdXJyaW8gdW4gcHJvYmxlbWEgYWwgcmV0b3JuYXIgZGF0b3MuXCIsIFwid2FyblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1vZGFsS3J1Z2VyKFwiQ29udHJhc2XDsWEgbyB1c3VhcmlvIGluY29ycmVjdG8uXCIsIFwid2FyblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHJlc3BvbnNlWzBdLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHJlc3BvbnNlWzBdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYXN0TmFtZSc6IHJlc3BvbnNlWzBdLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWRSb2wnOiByZXNwb25zZVswXS5yb2xJZCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWRlcicpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uS3J1Z2VyKFwid2FybmluZ1wiLCBcIktydWdlclwiLCBcIkZvcm11bGFyaW8gaW52w6FsaWRvXCIsIDIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExvYWRlciB2aXNpYmxlPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzYwJScgfX0gc3JjPVwiaW1nL2xvZ29fa3J1Z2VyLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3R4dFVzZXJOYW1lJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gdmFjaW8nIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17PEljb24gdHlwZT1cInVzZXJcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc3VhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndHh0UGFzc3dvcmQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyB2YWNpbycgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXs8SWNvbiB0eXBlPVwibG9ja1wiIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgwLDAsMCwuMjUpJyB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e2J0bl9sb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA2MEE4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2J0bl9sb2dpbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpYXIgU2VzacOzblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9IEZvcm0uY3JlYXRlKCkoTG9naW4pO1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkljb24iLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJMYXlvdXQiLCJMb2FkZXIiLCJub3RpZmljYXRpb25LcnVnZXIiLCJNb2RhbEtydWdlciIsImF4aW9zR2V0IiwiUm91dGVyIiwiY29uZmlnIiwiZnVuY2lvbmVzIiwiTG9naW4iLCJmb3JtIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImJ0bl9sb2dpbiIsInZhbGlkYXRlRm9ybSIsInZhbGlkYXRlIiwidmFsdWUiLCJpcF93ZWIiLCJnZXRGaWVsZFZhbHVlIiwidG9Mb3dlckNhc2UiLCJ0aGVuIiwicmVzIiwicmVzcG9uc2UiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsIm5hbWUiLCJsYXN0TmFtZSIsInJvbElkIiwicHVzaCIsImVyciIsIm1lc3NhZ2UiLCJ3aWR0aCIsInJ1bGVzIiwicmVxdWlyZWQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIkxvZ2luRm9ybSIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=