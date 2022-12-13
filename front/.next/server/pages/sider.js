(() => {
var exports = {};
exports.id = "pages/sider";
exports.ids = ["pages/sider"];
exports.modules = {

/***/ "./components/Loader/c_Loader.js":
/*!***************************************!*\
  !*** ./components/Loader/c_Loader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\Loader\\c_Loader.js";




class C_Loader extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: 'Cargando, espere un momento'
    };
  }

  componentDidMount() {
    if (typeof this.props.msg === 'undefined') {
      this.setState({
        mensaje: 'Cargando, espere un momento'
      });
    } else {
      this.setState({
        mensaje: this.props.msg
      });
    }
  }

  render() {
    const antIcon = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      type: "loading-3-quarters",
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }, this);

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {
        className: "loader",
        indicator: antIcon,
        tip: this.state.mensaje,
        spinning: this.props.visible
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (C_Loader);

/***/ }),

/***/ "./components/Loader/c_loaderHijo.js":
/*!*******************************************!*\
  !*** ./components/Loader/c_loaderHijo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\Loader\\c_loaderHijo.js";




const C_LoaderHijo = ({
  msj,
  visible
}) => {
  const antIcon = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    type: "loading-3-quarters",
    spin: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 21
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {
    className: "loaderHijo",
    indicator: antIcon,
    tip: msj || "Cargando, espere un momento",
    spinning: visible
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (C_LoaderHijo);

/***/ }),

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_features_initSider_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/features/initSider/init */ "./src/features/initSider/init.js");
/* harmony import */ var _src_features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/features/Menu/routeMenu */ "./src/features/Menu/routeMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\NavBar\\NavBar.js";







const NavBar = ({
  menu,
  visibleMovil,
  updateVisible,
  dataUser
}) => {
  var _dataUser$name;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Layout.Header, {
    className: "navbarn",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Drawer, {
      title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: (dataUser === null || dataUser === void 0 ? void 0 : dataUser.name) || "USUARIO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }, undefined),
      placement: "left",
      onClose: () => {
        updateVisible(false);
      },
      visible: visibleMovil,
      bodyStyle: {
        padding: '10px 0'
      },
      headerStyle: {
        fontSize: 11
      },
      children: menu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "izquierda",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: "menun",
        type: "link",
        icon: "menu",
        onClick: () => updateVisible(true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        src: "../../img/logo_kruger_.png",
        className: "logon",
        alt: "logo",
        style: {
          marginRight: 85
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: "headerBread1",
        children: (dataUser === null || dataUser === void 0 ? void 0 : dataUser.nameRol) || "ROL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "derecha",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
        overlay: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Menu, {
          theme: "dark",
          selectable: false,
          style: {
            marginTop: 10
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Menu.Item, {
            style: {
              fontSize: '12px'
            },
            onClick: () => {
              dispatch((0,_src_features_initSider_init__WEBPACK_IMPORTED_MODULE_2__.changeLoading)(true));
              dispatch((0,_src_features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_3__.changeUrl)('/'));
              localStorage.removeItem("token");
              next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
            },
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Icon, {
              type: "logout",
              theme: "outlined"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              title: "CERRAR SESION",
              children: " CERRAR SESION "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, undefined)]
          }, "cerrarSesion", true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, undefined),
        trigger: ['click'],
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          type: "link",
          icon: "user",
          className: "userNavBar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("strong", {
            style: {
              marginLeft: 3
            },
            children: [(dataUser === null || dataUser === void 0 ? void 0 : (_dataUser$name = dataUser.name) === null || _dataUser$name === void 0 ? void 0 : _dataUser$name.split(" ")[0]) || "USUARIO", " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./components/Router/c_Router.js":
/*!***************************************!*\
  !*** ./components/Router/c_Router.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _empleado_empleado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empleado/empleado */ "./components/empleado/empleado.js");
/* harmony import */ var _perfil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perfil */ "./components/perfil.js");
/* harmony import */ var _reportes_reporteVacuna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reportes/reporteVacuna */ "./components/reportes/reporteVacuna.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\Router\\c_Router.js";






const ComponentNotFound = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Result, {
  status: "404",
  title: "404",
  subTitle: "Perd\xF3n, la p\xE1gina que visitas no existe."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 5
}, undefined);

function App({
  url,
  dataUser
}) {
  switch (url) {
    case '/perfil':
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_perfil__WEBPACK_IMPORTED_MODULE_2__.default, {
        dataUser: dataUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 32
      }, this);

    case '/empleado':
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_empleado_empleado__WEBPACK_IMPORTED_MODULE_1__.default, {
        dataUser: dataUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 34
      }, this);

    case '/reporte':
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_reportes_reporteVacuna__WEBPACK_IMPORTED_MODULE_3__.default, {
        dataUser: dataUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 33
      }, this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ComponentNotFound, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 20
      }, this);
    //this.state.url;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./components/SideBar/SideBar.js":
/*!***************************************!*\
  !*** ./components/SideBar/SideBar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\SideBar\\SideBar.js";



const SideBar = ({
  menu
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Layout.Sider, {
    theme: "light",
    breakpoint: "lg",
    collapsedWidth: 0,
    width: 260,
    style: {
      overflow: 'auto',
      height: '94vh',
      position: 'fixed',
      left: 0,
      top: 48,
      boxShadow: '0 0 8px rgb(115, 129, 121)'
    },
    children: menu
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

/***/ }),

/***/ "./components/TopicMenu.js":
/*!*********************************!*\
  !*** ./components/TopicMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\TopicMenu.js";



const SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__.Menu.SubMenu;

const TopicMenu = ({
  dataMenu,
  selectedKey,
  changeSelectedKey
}) => {
  var styledTopics = [];
  styledTopics = dataMenu.map(fila => fila.ispadre == "S" && fila.id_menu_padre == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SubMenu, {
    title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      style: {
        fontSize: '12px'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        type: fila.icono
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: fila.descripcion_menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }, undefined),
    children: dataMenu.map(fila2 => fila2.id_menu_padre == fila.id_menu ? fila2.ispadre == "N" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
      disabled: fila2.menu_activo == "N",
      title: fila2.descripcion_menu,
      style: {
        fontSize: '12px'
      },
      onClick: changeSelectedKey,
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        type: fila2.icono,
        theme: "outlined"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 182
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: [" ", fila2.descripcion_menu, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 33
      }, undefined)]
    }, fila2.ruta, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SubMenu, {
      title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        style: {
          fontSize: '12px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          type: fila2.icono
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 41
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: fila2.descripcion_menu
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 41
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 37
      }, undefined),
      children: dataMenu.map(fila3 => fila3.id_menu_padre == fila2.id_menu ? fila3.ispadre == "N" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
        disabled: fila3.menu_activo == "N",
        title: fila3.descripcion_menu,
        style: {
          fontSize: '12px'
        },
        onClick: changeSelectedKey,
        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          type: fila3.icono,
          theme: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 198
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [" ", fila3.descripcion_menu, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 49
        }, undefined)]
      }, fila3.ruta, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 45
      }, undefined) : null : null)
    }, fila2.ruta, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }, undefined) : null)
  }, fila.ruta, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, undefined) : fila.id_menu_padre == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    disabled: fila.menu_activo == "N",
    title: fila.descripcion_menu,
    style: {
      fontSize: '12px'
    },
    onClick: changeSelectedKey,
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      type: fila.icono,
      theme: "outlined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 167
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      children: [" ", fila.descripcion_menu, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }, undefined)]
  }, fila.ruta, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 17
  }, undefined) : null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    selectedKeys: [selectedKey],
    mode: "inline",
    theme: "light",
    children: styledTopics
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicMenu);

/***/ }),

/***/ "./components/empleado/empleado.js":
/*!*****************************************!*\
  !*** ./components/empleado/empleado.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_ant_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/ant_components */ "./config/ant_components.js");
/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/http */ "./config/http.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/default */ "./config/default.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_default__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/funciones_generales */ "./config/funciones_generales.js");
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_funciones_generales__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\empleado\\empleado.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var CancelToken = null;
var source = null;
var empleado = [];

function App({
  dataUser,
  form
}) {
  const {
    0: Empleado,
    1: setEmpleado
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    0: Loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: modForm,
    1: setModForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: formulario,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    id: undefined,
    identification: "",
    name: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    dateBirth: "",
    address: "",
    cellPhone: "",
    vaccine: "",
    vaccineId: "",
    dateVaccine: "",
    doseNumber: "",
    rolId: 2
  });

  const getPerson = () => {
    setLoading(true);
    (0,_config_http__WEBPACK_IMPORTED_MODULE_3__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/rol/2?_embed=person", {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source).then(res => {
      const response = res.data;

      if (!response.person) {
        return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)("Ocurrio un problema al retornar datos.", "warn");
      }

      setEmpleado(response.person);
      empleado = response.person;
    }).catch(err => {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    }).finally(() => {
      setLoading(false);
    });
  };

  const deletePerson = id => {
    setLoading(true);
    (0,_config_http__WEBPACK_IMPORTED_MODULE_3__.axiosDelete)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/person/" + id, {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source).then(res => {
      getPerson();
    }).catch(err => {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    }).finally(() => {
      setLoading(false);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    try {
      CancelToken = (axios__WEBPACK_IMPORTED_MODULE_1___default().CancelToken);
      source = CancelToken.source();
      getPerson();
      return () => {
        source.cancel('Operation canceled by the user.');
      };
    } catch (err) {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    }
  }, []);

  const onChangeBusqueda = val => {
    try {
      if (val && (val === null || val === void 0 ? void 0 : val.trim()) != '') {
        var filter = empleado.filter(item => {
          return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.lastName.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.identification.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.email.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      } else {
        var filter = empleado;
      }

      setEmpleado(filter);
    } catch (err) {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    }
  };

  const editPerson = record => {
    setForm(_objectSpread(_objectSpread({}, formulario), {}, {
      id: record.id,
      name: record.name,
      lastName: record.lastName,
      identification: record.identification,
      email: record.email
    }));
    setModForm(true);
  };

  const columns = [{
    align: 'center',
    title: '#',
    key: 'operation',
    width: 70,
    render: (text, record) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          title: "Editar",
          type: "link",
          icon: "edit",
          onClick: () => editPerson(record)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Divider, {
          type: "vertical"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Popconfirm, {
          disabled: Loading,
          title: "Desea eliminar este registro?",
          onConfirm: () => deletePerson(record.id),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Icon, {
            title: "Eliminar empleado",
            type: "delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }, this);
    }
  }, {
    title: 'Identificacion',
    align: 'center',
    dataIndex: 'identification',
    width: 80,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    title: 'Nombres',
    align: 'center',
    dataIndex: 'name',
    width: 80,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    align: 'center',
    title: 'Apellidos',
    dataIndex: 'lastName',
    width: 80,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    align: 'center',
    title: 'Correo',
    dataIndex: 'email',
    width: 100,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }];
  const {
    getFieldDecorator,
    setFieldsValue,
    getFieldValue,
    resetFields
  } = form;

  const cleanInputs = () => {
    setForm({
      id: undefined,
      identification: "",
      name: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      dateBirth: "",
      address: "",
      cellPhone: "",
      vaccine: "",
      vaccineId: "",
      dateVaccine: "",
      doseNumber: "",
      rolId: 2
    });
  };

  const save = async () => {
    try {
      var _getFieldValue, _getFieldValue2;

      let validate = await _config_funciones_generales__WEBPACK_IMPORTED_MODULE_6___default().validateForm(form);

      if (!validate.value) {
        return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.notificationKruger)("warning", "Kruger", "Formulario inválido", 2);
      }

      let validateCedula = _config_funciones_generales__WEBPACK_IMPORTED_MODULE_6___default().validateCedula(getFieldValue("txtIdentification"));

      if (!validateCedula.status) {
        return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.notificationKruger)("warning", "Kruger", validateCedula.message, 2);
      }

      formulario.identification = getFieldValue("txtIdentification");
      formulario.name = (_getFieldValue = getFieldValue("txtName")) === null || _getFieldValue === void 0 ? void 0 : _getFieldValue.toUpperCase();
      formulario.lastName = (_getFieldValue2 = getFieldValue("txtLastName")) === null || _getFieldValue2 === void 0 ? void 0 : _getFieldValue2.toUpperCase();
      formulario.email = getFieldValue("txtEmail");
      formulario.userName = (formulario.name[0] + formulario.lastName.split(" ")[0] + formulario.identification.substring(6, 10)).toLowerCase();
      formulario.password = getFieldValue("txtIdentification");
      setLoading(true);

      if (formulario.id) {
        (0,_config_http__WEBPACK_IMPORTED_MODULE_3__.axiosPut)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/person/" + formulario.id, formulario, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source).then(res => {
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.notificationKruger)("success", "Kruger", "Empleado " + (!formulario.id ? "registrado" : "actualizado") + " correctamente.", 3);
          cleanInputs();
          setModForm(false);
          getPerson();
        }).catch(error => {
          if (axios__WEBPACK_IMPORTED_MODULE_1___default().isCancel(error)) return;
          setLoading(false);
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)(error.message || "Error inesperado, intente de nuevo", "error");
        });
      } else {
        var _validateRepeated$dat;

        let validateRepeated = await (0,_config_http__WEBPACK_IMPORTED_MODULE_3__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/person?identification=" + formulario.identification, {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source);

        if (!(validateRepeated !== null && validateRepeated !== void 0 && (_validateRepeated$dat = validateRepeated.data) !== null && _validateRepeated$dat !== void 0 && _validateRepeated$dat.length) == 0) {
          setLoading(false);
          return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.notificationKruger)("warning", "Kruger", "Cédula ya ingresada.", 3);
        }

        (0,_config_http__WEBPACK_IMPORTED_MODULE_3__.axiosPost)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/person", formulario, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source).then(res => {
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.notificationKruger)("success", "Kruger", "Empleado " + (!formulario.id ? "registrado" : "actualizado") + " correctamente.", 3);
          cleanInputs();
          setModForm(false);
          getPerson();
        }).catch(error => {
          if (axios__WEBPACK_IMPORTED_MODULE_1___default().isCancel(error)) return;
          setLoading(false);
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)(error.message || "Error inesperado, intente de nuevo", "error");
        });
      }
    } catch (error) {
      setLoading(false);
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_2__.ModalKruger)(error.message || "Error inesperado, intente de nuevo", "error");
    }
  };

  const onKeyPressNumber = event => {
    if (!(event.charCode >= 48 && event.charCode <= 57)) event.preventDefault();
  };

  const onKetPressLetters = e => {
    let charCode = e.keyCode || e.which;
    return /^[a-zA-Z ñÑ áÁ éÉ íÍ óÓ úÚ]$/.test(String.fromCharCode(charCode)) ? null : event.preventDefault();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    id: "inicio",
    className: "App",
    style: {
      padding: '5px 15px',
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.PageHeader, {
      title: "Registro de Empleado",
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        title: "Nuevo",
        type: "primary",
        icon: "plus",
        disabled: Loading,
        onClick: () => setModForm(true),
        children: "Nuevo"
      }, "3", false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 21
      }, this)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
      gutter: [24, 16],
      type: "flex",
      justify: "space-around",
      align: "middle",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        span: 24,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Card, {
          extra: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input.Search, {
            style: {
              width: '270px'
            },
            allowClear: true,
            placeholder: "Busqueda",
            onSearch: value => onChangeBusqueda(value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 29
          }, this),
          size: "small",
          bordered: false,
          style: {
            boxShadow: '0 0 4px rgb(115, 129, 121)'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
            gutter: [24],
            type: "flex",
            justify: "space-around",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
              xxl: 24,
              xl: 24,
              lg: 24,
              md: 24,
              sm: 24,
              xs: 24,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Table, {
                size: "small",
                bordered: true,
                pagination: {
                  pageSize: 7
                },
                columns: columns,
                dataSource: Empleado,
                rowKey: record => record.id,
                scroll: {
                  x: 'max-content'
                },
                loading: Loading
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Modal, {
      title: formulario.id ? "Edicion de Empleado" : "Registro de Empleado",
      visible: modForm,
      okText: !formulario.id ? "Guardar" : "Actualizar",
      cancelText: "Cancelar",
      width: 450,
      centered: true,
      onCancel: () => {
        setModForm(false);
        cleanInputs();
      },
      onOk: save,
      destroyOnClose: true,
      bodyStyle: {
        padding: 20
      },
      closable: false,
      maskClosable: false,
      okButtonProps: {
        disabled: Loading,
        loading: Loading
      },
      cancelButtonProps: {
        disabled: Loading,
        loading: Loading
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "infinite",
        style: {
          padding: 0
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
          layout: "horizontal",
          labelCol: {
            xs: 7,
            sm: 7,
            md: 9,
            lg: 9,
            xl: 9,
            xxl: 9
          },
          wrapperCol: {
            xs: 15,
            sm: 15,
            md: 13,
            lg: 13,
            xl: 13,
            xxl: 13
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
            gutter: [12, 0],
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
              span: 24,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                className: "card",
                label: "Identificacion",
                children: getFieldDecorator('txtIdentification', {
                  initialValue: formulario.identification,
                  rules: [{
                    required: true,
                    message: 'Campo incompleto'
                  }, {
                    min: 10,
                    message: 'Sólo 10 dígitos'
                  }, {
                    max: 10,
                    message: 'Sólo 10 dígitos'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                  disabled: formulario.id,
                  onPaste: e => {
                    e.preventDefault();
                  },
                  onKeyPress: onKeyPressNumber
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 42
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
              span: 24,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                className: "card",
                label: "Nombres",
                children: getFieldDecorator('txtName', {
                  initialValue: formulario.name,
                  rules: [{
                    required: true,
                    message: 'Campo incompleto'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                  onPaste: e => {
                    e.preventDefault();
                  },
                  onKeyPress: onKetPressLetters,
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 391,
                  columnNumber: 42
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 385,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
              span: 24,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                className: "card",
                label: "Apellidos",
                children: getFieldDecorator('txtLastName', {
                  initialValue: formulario.lastName,
                  rules: [{
                    required: true,
                    message: 'Campo incompleto'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                  onPaste: e => {
                    e.preventDefault();
                  },
                  onKeyPress: onKetPressLetters,
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 42
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
              span: 24,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                className: "card",
                label: "Correo",
                children: getFieldDecorator('txtEmail', {
                  initialValue: formulario.email,
                  rules: [{
                    type: 'email',
                    message: 'Correo invalido!'
                  }, {
                    required: true,
                    message: 'Campo incompleto'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                  type: "email",
                  name: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 42
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 274,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (antd__WEBPACK_IMPORTED_MODULE_0__.Form.create()(App));

/***/ }),

/***/ "./components/perfil.js":
/*!******************************!*\
  !*** ./components/perfil.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_ant_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/ant_components */ "./config/ant_components.js");
/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/http */ "./config/http.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/default */ "./config/default.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_default__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/funciones_generales */ "./config/funciones_generales.js");
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_funciones_generales__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Loader_c_loaderHijo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader/c_loaderHijo */ "./components/Loader/c_loaderHijo.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\perfil.js";










var CancelToken = null;
var source = null;

function App({
  dataUser,
  form
}) {
  const {
    0: Loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: vaccine,
    1: setVaccine
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: msg,
    1: setMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: formulario,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    id: undefined,
    identification: "",
    name: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    dateBirth: "",
    address: "",
    cellPhone: "",
    vaccine: "",
    vaccineId: "",
    dateVaccine: "",
    doseNumber: "",
    rolId: 2
  });

  const getPerson = () => {
    setLoading(true);
    (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/person/" + dataUser.id, {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source).then(res => {
      const response = res.data;

      if (!response.id) {
        return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)("Ocurrio un problema al retornar datos.", "warn");
      }

      setForm(response);
    }).catch(err => {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    }).finally(() => {
      setLoading(false);
    });
  };

  const getVaccine = () => {
    (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/vaccine", {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source).then(res => {
      const response = res.data;
      setVaccine(response);
    }).catch(err => {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    try {
      CancelToken = (axios__WEBPACK_IMPORTED_MODULE_2___default().CancelToken);
      source = CancelToken.source();
      setMsg("Consultando sus datos...");
      getVaccine();
      getPerson();
      return () => {
        source.cancel('Operation canceled by the user.');
      };
    } catch (error) {
      antd__WEBPACK_IMPORTED_MODULE_0__.Modal.error({
        title: ' SYSTEMSEC',
        content: 'Ocurrio un problema al mostrar datos.'
      });
    }
  }, []);

  const onKeyPressNumber = event => {
    if (!(event.charCode >= 48 && event.charCode <= 57)) event.preventDefault();
  };

  const {
    getFieldDecorator,
    setFieldsValue,
    getFieldValue,
    resetFields
  } = form;

  const disabledDate = current => {
    return current > moment__WEBPACK_IMPORTED_MODULE_8___default()().endOf('day');
  };

  const save = async () => {
    try {
      var _getFieldValue;

      let validate = await _config_funciones_generales__WEBPACK_IMPORTED_MODULE_6___default().validateForm(form);

      if (!validate.value) {
        return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.notificationKruger)("warning", "Kruger", "Formulario inválido", 2);
      }

      formulario.address = (_getFieldValue = getFieldValue("txtAdress")) === null || _getFieldValue === void 0 ? void 0 : _getFieldValue.toUpperCase();
      formulario.cellPhone = getFieldValue("txtCellPhone");
      formulario.vaccine = getFieldValue("txtVaccine");
      formulario.vaccineId = getFieldValue("txtVaccine") == "vacunado" ? getFieldValue("txtVaccineId") : "";
      formulario.dateBirth = getFieldValue("dtpDateBirth").format("YYYY-MM-DD");
      formulario.dateVaccine = getFieldValue("txtVaccine") == "vacunado" ? getFieldValue("dtpDateVaccine").format("YYYY-MM-DD") : "";
      formulario.doseNumber = getFieldValue("txtVaccine") == "vacunado" ? getFieldValue("txtDoseNumber") : "";
      setLoading(true);
      (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosPut)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/person/" + formulario.id, formulario, {}, (_config_default__WEBPACK_IMPORTED_MODULE_5___default().timeOut), source).then(res => {
        setLoading(false);
        (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.notificationKruger)("success", "Kruger", "Datos actualizado correctamente.", 3);
        setForm(res.data);
      }).catch(error => {
        if (axios__WEBPACK_IMPORTED_MODULE_2___default().isCancel(error)) return;
        setLoading(false);
        (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(error.message || "Error inesperado, intente de nuevo", "error");
      });
    } catch (error) {
      setLoading(false);
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(error.message || "Error inesperado, intente de nuevo", "error");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    style: {
      position: 'relative'
    },
    children: Loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Loader_c_loaderHijo__WEBPACK_IMPORTED_MODULE_7__.default, {
      visible: Loading,
      msj: msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 27
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      id: "inicio",
      className: "App",
      style: {
        padding: '5px 15px',
        overflow: 'hidden',
        paddingBottom: 20
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.PageHeader, {
        title: "Información personal",
        extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          title: "Actualizar",
          type: "primary",
          icon: "save",
          disabled: Loading,
          onClick: save
        }, "1", false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 33
        }, this)]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
        gutter: [24, 16],
        type: "flex",
        justify: "space-around",
        align: "middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Card, {
            size: "small",
            bordered: false,
            style: {
              boxShadow: '0 0 4px rgb(115, 129, 121)'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
              layout: "vertical",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
                gutter: [12, 0],
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Identificacion",
                    children: getFieldDecorator('txtIdentification', {
                      initialValue: formulario.identification,
                      rules: [{
                        required: true,
                        message: 'Campo incompleto'
                      }, {
                        min: 10,
                        message: 'Sólo 10 dígitos'
                      }, {
                        max: 10,
                        message: 'Sólo 10 dígitos'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                      readOnly: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 58
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Nombres",
                    children: getFieldDecorator('txtName', {
                      initialValue: formulario.name,
                      rules: [{
                        required: true,
                        message: 'Campo incompleto'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                      readOnly: true,
                      type: "text"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 58
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Apellidos",
                    children: getFieldDecorator('txtLastName', {
                      initialValue: formulario.lastName,
                      rules: [{
                        required: true,
                        message: 'Campo incompleto'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                      readOnly: true,
                      type: "text"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 58
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Correo",
                    children: getFieldDecorator('txtEmail', {
                      initialValue: formulario.email,
                      rules: [{
                        type: 'email',
                        message: 'Correo invalido!'
                      }, {
                        required: true,
                        message: 'Campo incompleto'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                      type: "email",
                      name: "email",
                      readOnly: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 58
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Direccion",
                    children: getFieldDecorator('txtAdress', {
                      initialValue: formulario.address,
                      rules: [{
                        required: true,
                        message: 'Campo incompleto'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                      type: "text"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 58
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Telefono",
                    children: getFieldDecorator('txtCellPhone', {
                      initialValue: formulario.cellPhone,
                      rules: [{
                        required: true,
                        message: 'Campo incompleto'
                      }, {
                        min: 10,
                        message: 'Sólo 10 dígitos'
                      }, {
                        max: 10,
                        message: 'Sólo 10 dígitos'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                      onPaste: e => {
                        e.preventDefault();
                      },
                      onKeyPress: onKeyPressNumber
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 58
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Fecha de Nacimiento",
                    children: getFieldDecorator('dtpDateBirth', {
                      initialValue: formulario.dateBirth != "" ? moment__WEBPACK_IMPORTED_MODULE_8___default()(formulario.dateBirth) : null,
                      rules: [{
                        required: true,
                        message: 'Campo incompleto'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.DatePicker, {
                      style: {
                        width: '100%'
                      },
                      disabledDate: disabledDate
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 62
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                  xxl: 8,
                  xl: 8,
                  lg: 8,
                  md: 12,
                  sm: 24,
                  xs: 24,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                    label: "Estado de vacunacion",
                    children: getFieldDecorator('txtVaccine', {
                      initialValue: formulario.vaccine,
                      rules: [{
                        required: true,
                        message: 'Campo incompleto'
                      }]
                    })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                        value: "vacunado",
                        children: "VACUNADO"
                      }, "vacunado", false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 61
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                        value: "novacunado",
                        children: "NO VACUNADO"
                      }, "novacunado", false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 61
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 58
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 45
                }, this), getFieldValue("txtVaccine") == "vacunado" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                    xxl: 8,
                    xl: 8,
                    lg: 8,
                    md: 12,
                    sm: 24,
                    xs: 24,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                      label: "Tipo de vacuna",
                      children: getFieldDecorator('txtVaccineId', {
                        initialValue: formulario.vaccineId,
                        rules: [{
                          required: true,
                          message: 'Campo incompleto'
                        }]
                      })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
                        children: vaccine.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                          value: item.id,
                          children: item.nameVaccine
                        }, item.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 274,
                          columnNumber: 93
                        }, this))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 270,
                        columnNumber: 66
                      }, this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 57
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 53
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                    xxl: 8,
                    xl: 8,
                    lg: 8,
                    md: 12,
                    sm: 24,
                    xs: 24,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                      label: "Fecha de vacunaci\xF3n",
                      children: getFieldDecorator('dtpDateVaccine', {
                        initialValue: formulario.dateVaccine != "" ? moment__WEBPACK_IMPORTED_MODULE_8___default()(formulario.dateVaccine) : null,
                        rules: [{
                          required: true,
                          message: 'Campo incompleto'
                        }]
                      })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.DatePicker, {
                        style: {
                          width: '100%'
                        },
                        disabledDate: disabledDate
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 285,
                        columnNumber: 70
                      }, this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 282,
                      columnNumber: 57
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 53
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                    xxl: 8,
                    xl: 8,
                    lg: 8,
                    md: 12,
                    sm: 24,
                    xs: 24,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
                      label: "N\xB0 de dosis",
                      children: getFieldDecorator('txtDoseNumber', {
                        initialValue: formulario.doseNumber,
                        rules: [{
                          required: true,
                          message: 'Campo incompleto'
                        }]
                      })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
                        onPaste: e => {
                          e.preventDefault();
                        },
                        onKeyPress: onKeyPressNumber
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 298,
                        columnNumber: 66
                      }, this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 57
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 53
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 49
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (antd__WEBPACK_IMPORTED_MODULE_0__.Form.create()(App));

/***/ }),

/***/ "./components/reportes/reporteVacuna.js":
/*!**********************************************!*\
  !*** ./components/reportes/reporteVacuna.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_ant_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/ant_components */ "./config/ant_components.js");
/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/http */ "./config/http.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/default */ "./config/default.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_default__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_table_saveas_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd-table-saveas-excel */ "antd-table-saveas-excel");
/* harmony import */ var antd_table_saveas_excel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_table_saveas_excel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/funciones_generales */ "./config/funciones_generales.js");
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_funciones_generales__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_date_picker_locale_es_ES__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/date-picker/locale/es_ES */ "antd/lib/date-picker/locale/es_ES");
/* harmony import */ var antd_lib_date_picker_locale_es_ES__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_locale_es_ES__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\components\\reportes\\reporteVacuna.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const RangePicker = antd__WEBPACK_IMPORTED_MODULE_0__.DatePicker.RangePicker;










var CancelToken = null;
var source = null;

function App({
  dataUser,
  form
}) {
  const {
    0: Reporte,
    1: setReporte
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const {
    0: Loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    0: vaccine,
    1: setVaccine
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);

  const getVaccine = () => {
    (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_6___default().ip_web) + "/vaccine", {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_6___default().timeOut), source).then(res => {
      const response = res.data;
      setVaccine(response);
    }).catch(err => {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    try {
      CancelToken = (axios__WEBPACK_IMPORTED_MODULE_2___default().CancelToken);
      source = CancelToken.source();
      getVaccine();
      return () => {
        source.cancel('Operation canceled by the user.');
      };
    } catch (error) {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    }
  }, []);
  const {
    getFieldDecorator,
    getFieldValue
  } = form;

  const fcn_exportar = () => {
    setLoading(true);

    try {
      const excel = new antd_table_saveas_excel__WEBPACK_IMPORTED_MODULE_7__.Excel();
      excel.addSheet("Kruger").setTBodyStyle({
        border: true,
        fontSize: 8
      });
      excel.setTHeadStyle({
        fontSize: 9,
        background: '143F6B',
        color: 'F7F5F2',
        v: 'center',
        h: 'center',
        bold: true
      }).setRowHeight(0.7, "cm").addColumns(columns);
      excel.setRowHeight(0.7, "cm").setTBodyStyle({
        border: true,
        bold: false,
        fontSize: 8,
        background: undefined,
        color: undefined,
        v: 'center',
        h: 'center'
      }).addDataSource(Reporte, {}).saveAs("Reporte_" + getFieldValue("filter") + ".xlsx", 'blob', false);
      setLoading(false);
    } catch (err) {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
      setLoading(false);
    }
  };

  const columns = [{
    title: 'Identificacion',
    align: 'center',
    dataIndex: 'identification',
    width: 80,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    title: 'Nombres',
    align: 'center',
    dataIndex: 'name',
    width: 80,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    align: 'center',
    title: 'Apellidos',
    dataIndex: 'lastName',
    width: 80,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    align: 'center',
    title: 'Correo',
    dataIndex: 'email',
    width: 100,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    align: 'center',
    title: 'Direccion',
    dataIndex: 'address',
    width: 100,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    align: 'center',
    title: 'Celular',
    dataIndex: 'cellPhone',
    width: 60,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: text
      };
    }
  }, {
    align: 'center',
    title: 'Fecha de vacuna',
    dataIndex: 'dateVaccine',
    width: 100,
    render: (text, record) => {
      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: !record.vaccine || record.vaccine == "novacunado" ? "No aplicada" : text
      };
    }
  }, {
    align: 'center',
    title: 'Dosis / Vacuna',
    key: 'vaccineDose',
    width: 100,
    render: (text, record) => {
      var _vaccine$find;

      return {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        children: !record.vaccine || record.vaccine == "novacunado" ? "No aplicada" : record.doseNumber + " de " + ((_vaccine$find = vaccine.find(item => item.id == record.vaccineId)) === null || _vaccine$find === void 0 ? void 0 : _vaccine$find.nameVaccine)
      };
    }
  }];
  const formItemLayout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 16
    }
  };

  const disabledDate = current => {
    return current > moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf('day');
  };

  const ejecutar = async () => {
    setReporte([]);
    let v_obj = await _config_funciones_generales__WEBPACK_IMPORTED_MODULE_8___default().validateForm(form);

    if (v_obj.value) {
      setLoading(true);

      if (getFieldValue("filter") == "stateVaccine") {
        (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_6___default().ip_web) + "/person?vaccine=" + getFieldValue("stateVaccine").trim() + "&rolId=2", {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_6___default().timeOut), source).then(res => {
          const response = res.data;
          setReporte(response);
          setLoading(false);
        }).catch(err => {
          setLoading(false);
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
        });
      } else if (getFieldValue("filter") == "typeVaccine") {
        (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_6___default().ip_web) + "/person?vaccineId=" + getFieldValue("typeVaccine") + "&rolId=2", {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_6___default().timeOut), source).then(res => {
          const response = res.data;
          setReporte(response);
          setLoading(false);
        }).catch(err => {
          setLoading(false);
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
        });
      } else {
        (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_6___default().ip_web) + "/person?rolId=2", {}, {}, (_config_default__WEBPACK_IMPORTED_MODULE_6___default().timeOut), source).then(res => {
          let response = res.data;
          setLoading(false);
          setReporte(response.filter(item => item.dateVaccine >= getFieldValue("rangeDate")[0].format("YYYY-MM-DD") && item.dateVaccine <= getFieldValue("rangeDate")[1].format("YYYY-MM-DD")));
        }).catch(err => {
          setLoading(false);
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
        });
      }
    } else {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.notificationKruger)("info", "Kruger", "Formulario inválido", 3);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    id: "inicio",
    className: "App",
    style: {
      padding: '5px 15px',
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.PageHeader, {
      title: "Reporte de Vacunaci\xF3n",
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        type: "primary",
        icon: "thunderbolt",
        disabled: Loading,
        onClick: ejecutar
      }, "1", false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        title: "Exportar",
        type: "primary",
        icon: "file-excel",
        disabled: Loading || Reporte.length == 0,
        onClick: () => {
          fcn_exportar();
        }
      }, "2", false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 21
      }, this)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
      layout: "horizontal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
        gutter: [24, 16],
        type: "flex",
        justify: "space-around",
        align: "middle",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Card, {
            size: "small",
            bordered: false,
            style: {
              boxShadow: '0 0 4px rgb(115, 129, 121)'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
              gutter: [24],
              type: "flex",
              justify: "space-around",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                xxl: 12,
                xl: 12,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, _objectSpread(_objectSpread({
                  label: "Criterio",
                  className: "card_venta"
                }, formItemLayout), {}, {
                  children: getFieldDecorator('filter', {
                    initialValue: "stateVaccine",
                    rules: [{
                      required: true,
                      message: 'Campo incompleto'
                    }]
                  })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
                    loading: Loading,
                    showSearch: true,
                    optionFilterProp: "children",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                      value: "stateVaccine",
                      children: "Estado de vacunaci\xF3n"
                    }, "stateVaccine", false, {
                      fileName: _jsxFileName,
                      lineNumber: 301,
                      columnNumber: 57
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                      value: "typeVaccine",
                      children: "Tipo de vacuna"
                    }, "typeVaccine", false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 57
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                      value: "rangeDate",
                      children: "Rango de fecha de vacunaci\xF3n"
                    }, "rangeDate", false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 53
                  }, this))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                xxl: 12,
                xl: 12,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24,
                children: getFieldValue("filter") == "stateVaccine" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, _objectSpread(_objectSpread({
                  label: "Estado",
                  className: "card_venta"
                }, formItemLayout), {}, {
                  children: getFieldDecorator('stateVaccine', {
                    rules: [{
                      required: true,
                      message: 'Campo incompleto'
                    }]
                  })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
                    allowClear: true,
                    loading: Loading,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                      value: "vacunado",
                      children: "Vacunado"
                    }, "vacunado", false, {
                      fileName: _jsxFileName,
                      lineNumber: 322,
                      columnNumber: 65
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                      value: "novacunado",
                      children: "No vacunado"
                    }, "novacunado", false, {
                      fileName: _jsxFileName,
                      lineNumber: 323,
                      columnNumber: 65
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                      value: " ",
                      children: "Sin actualizar Informaci\xF3n"
                    }, " ", false, {
                      fileName: _jsxFileName,
                      lineNumber: 324,
                      columnNumber: 65
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 61
                  }, this))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 45
                }, this) : getFieldValue("filter") == "typeVaccine" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, _objectSpread(_objectSpread({
                  label: "Tipo",
                  className: "card_venta"
                }, formItemLayout), {}, {
                  children: getFieldDecorator('typeVaccine', {
                    rules: [{
                      required: true,
                      message: 'Campo incompleto'
                    }]
                  })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
                    children: vaccine.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
                      value: item.id,
                      children: item.nameVaccine
                    }, item.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 339,
                      columnNumber: 93
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 65
                  }, this))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 330,
                  columnNumber: 49
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, _objectSpread(_objectSpread({
                  label: "Fechas",
                  className: "card_venta"
                }, formItemLayout), {}, {
                  children: getFieldDecorator('rangeDate', {
                    rules: [{
                      required: true,
                      message: 'Campo incompleto'
                    }]
                  })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(RangePicker, {
                    locale: (antd_lib_date_picker_locale_es_ES__WEBPACK_IMPORTED_MODULE_9___default()),
                    format: "DD-MM-YYYY",
                    disabledDate: disabledDate
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 65
                  }, this))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Card, {
            size: "small",
            bordered: false,
            style: {
              boxShadow: '0 0 4px rgb(115, 129, 121)'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
              gutter: [24],
              type: "flex",
              justify: "space-around",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
                lg: 24,
                xs: 24,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Table, {
                  columns: columns,
                  size: "small",
                  dataSource: Reporte,
                  rowKey: (record, index) => index,
                  pagination: false,
                  bordered: true,
                  loading: Loading,
                  scroll: {
                    x: true,
                    y: 340
                  },
                  style: {
                    textAlign: 'center'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 379,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 378,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (antd__WEBPACK_IMPORTED_MODULE_0__.Form.create()(App));

/***/ }),

/***/ "./config/ant_components.js":
/*!**********************************!*\
  !*** ./config/ant_components.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notificationKruger": () => (/* binding */ notificationKruger),
/* harmony export */   "ModalKruger": () => (/* binding */ ModalKruger)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

const notificationKruger = (type, titulo, message, duration) => {
  return antd__WEBPACK_IMPORTED_MODULE_0__.notification[type]({
    message: titulo,
    description: message,
    duration: duration
  });
};
const ModalKruger = (content, type = "success", title = "Kruger") => {
  return antd__WEBPACK_IMPORTED_MODULE_0__.Modal[type]({
    title,
    content
  });
};

/***/ }),

/***/ "./config/default.js":
/*!***************************!*\
  !*** ./config/default.js ***!
  \***************************/
/***/ ((module) => {

module.exports = {
  timeOut: 10000,
  timeOut2: 30000,
  timeOut3: 90000,
  timeOut4: 180000,
  ip_web: 'http://localhost:3010',
  port_web: 3000
};

/***/ }),

/***/ "./config/funciones_generales.js":
/*!***************************************!*\
  !*** ./config/funciones_generales.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const moment = __webpack_require__(/*! moment */ "moment");

function base64_decode(data) {
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=-';
  var o1,
      o2,
      o3,
      h1,
      h2,
      h3,
      h4,
      bits,
      i = 0,
      ac = 0,
      dec = '',
      tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do {
    // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');
  return decodeURIComponent(escape(dec.replace(/\0+$/, '')));
}

function base64_encode(data) {
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1,
      o2,
      o3,
      h1,
      h2,
      h3,
      h4,
      bits,
      i = 0,
      ac = 0,
      enc = '',
      tmp_arr = [];

  if (!data) {
    return data;
  }

  data = unescape(encodeURIComponent(data));

  do {
    // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);
    bits = o1 << 16 | o2 << 8 | o3;
    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f; // use hexets to index into b64, and append result to encoded string

    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');
  var r = data.length % 3;
  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
}

module.exports = {
  validateForm: form => {
    return new Promise(function (resolve, reject) {
      form.validateFields((error, values) => {
        if (!error) {
          resolve({
            value: true
          });
        } else {
          resolve({
            value: false
          });
        }
      });
    });
  },
  codificar: texto => {
    let x = texto;
    let k = base64_encode(x);
    return k;
  },
  decodificar: texto => {
    let x = texto;
    let k = base64_decode(x);
    return k;
  },
  calculaEdad: fecha_nac => {
    var a = moment();
    var b = moment(fecha_nac);
    var years = a.diff(b, 'year');
    b.add(years, 'years');
    var months = a.diff(b, 'months');
    b.add(months, 'months');
    var days = a.diff(b, 'days');

    if (years == 0) {
      if (months <= 1) {
        if (days <= 1) {
          console.log(months + ' mes ' + days + ' dia');
        } else {
          console.log(months + ' mes ' + days + ' dias');
        }
      } else {
        if (days <= 1) {
          console.log(months + ' meses ' + days + ' dia');
        } else {
          console.log(months + ' meses ' + days + ' dias');
        }
      }
    } else {
      if (years == 1) {
        console.log(years + ' año');
      } else {
        console.log(years + ' años');
      }
    }

    return years;
  },
  validateCedula: cedula => {
    try {
      //Preguntamos si la cedula consta de 10 digitos
      if (cedula.length == 10) {
        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = cedula.substring(0, 2); //Pregunto si la region existe ecuador se divide en 24 regiones

        if (digito_region >= 1 && digito_region <= 24) {
          // Extraigo el ultimo digito
          var ultimo_digito = cedula.substring(9, 10); //Agrupo todos los pares y los sumo

          var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8)); //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante

          var numero1 = cedula.substring(0, 1);
          var numero1 = numero1 * 2;

          if (numero1 > 9) {
            var numero1 = numero1 - 9;
          }

          var numero3 = cedula.substring(2, 3);
          var numero3 = numero3 * 2;

          if (numero3 > 9) {
            var numero3 = numero3 - 9;
          }

          var numero5 = cedula.substring(4, 5);
          var numero5 = numero5 * 2;

          if (numero5 > 9) {
            var numero5 = numero5 - 9;
          }

          var numero7 = cedula.substring(6, 7);
          var numero7 = numero7 * 2;

          if (numero7 > 9) {
            var numero7 = numero7 - 9;
          }

          var numero9 = cedula.substring(8, 9);
          var numero9 = numero9 * 2;

          if (numero9 > 9) {
            var numero9 = numero9 - 9;
          }

          var impares = numero1 + numero3 + numero5 + numero7 + numero9; //Suma total

          var suma_total = pares + impares; //extraemos el primero digito

          var primer_digito_suma = String(suma_total).substring(0, 1); //Obtenemos la decena inmediata

          var decena = (parseInt(primer_digito_suma) + 1) * 10; //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador

          var digito_validador = decena - suma_total; //Si el digito validador es = a 10 toma el valor de 0

          if (digito_validador == 10) var digito_validador = 0; //Validamos que el digito validador sea igual al de la cedula

          if (digito_validador == ultimo_digito) {
            return {
              status: true,
              message: "Cédula correcta"
            };
          } else {
            return {
              status: false,
              message: "Cédula incorrecta"
            };
          }
        } else {
          // imprimimos en consola si la region no pertenece
          return {
            status: false,
            message: "Esta cédula no pertenece a ninguna región"
          };
        }
      } else {
        //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        return {
          status: false,
          message: "Cédula debe tener obligatoriamente 10 dígitos"
        };
      }
    } catch (error) {
      return {
        status: false,
        message: error.message
      };
    }
  }
};

/***/ }),

/***/ "./config/http.js":
/*!************************!*\
  !*** ./config/http.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosPost": () => (/* binding */ axiosPost),
/* harmony export */   "axiosPut": () => (/* binding */ axiosPut),
/* harmony export */   "axiosPatch": () => (/* binding */ axiosPatch),
/* harmony export */   "axiosDelete": () => (/* binding */ axiosDelete),
/* harmony export */   "axiosGet": () => (/* binding */ axiosGet)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const head = {
  'Content-Type': 'application/json'
};
const axiosPost = (url, data = {}, headers = head, timeout = 0, source) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, data, {
    timeout,
    headers,
    cancelToken: source === null || source === void 0 ? void 0 : source.token
  });
};
const axiosPut = (url, data = {}, headers = head, timeout = 0, source) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put(url, data, {
    timeout,
    headers,
    cancelToken: source === null || source === void 0 ? void 0 : source.token
  });
};
const axiosPatch = (url, data = {}, headers = head, timeout = 0, source) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().patch(url, data, {
    timeout,
    headers,
    cancelToken: source === null || source === void 0 ? void 0 : source.token
  });
};
const axiosDelete = (url, data = {}, headers = head, timeout = 0, source) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete(url, {
    timeout,
    headers,
    cancelToken: source === null || source === void 0 ? void 0 : source.token
  });
};
const axiosGet = (url, params = {}, headers = {}, timeout = 0, source) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
    params
  }, {
    timeout,
    headers,
    cancelToken: source === null || source === void 0 ? void 0 : source.token
  });
};

/***/ }),

/***/ "./hook/validateSesion.js":
/*!********************************!*\
  !*** ./hook/validateSesion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useValidateSesion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function useValidateSesion(redirectLogin = true, redirectSider = true) {
  const {
    0: isLogin,
    1: setLogin
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        if (redirectSider) next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/sider');
        return setLogin(true);
      }

      if (redirectLogin) next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
      setLogin(false);
    } catch (error) {
      if (redirectLogin) next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
      setLogin(false);
    }
  }, []);
  return isLogin;
}

/***/ }),

/***/ "./pages/sider/index.js":
/*!******************************!*\
  !*** ./pages/sider/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Loader/c_Loader */ "./components/Loader/c_Loader.js");
/* harmony import */ var _hook_validateSesion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hook/validateSesion */ "./hook/validateSesion.js");
/* harmony import */ var _sider_sider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sider/sider */ "./pages/sider/sider.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\pages\\sider\\index.js";





function login() {
  const isLogin = (0,_hook_validateSesion__WEBPACK_IMPORTED_MODULE_1__.default)(true, false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: isLogin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_sider_sider__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 27
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 48
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);

/***/ }),

/***/ "./pages/sider/sider.js":
/*!******************************!*\
  !*** ./pages/sider/sider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Router_c_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Router/c_Router */ "./components/Router/c_Router.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/default */ "./config/default.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_default__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/http */ "./config/http.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_TopicMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TopicMenu */ "./components/TopicMenu.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var _components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SideBar/SideBar */ "./components/SideBar/SideBar.js");
/* harmony import */ var _components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Loader/c_Loader */ "./components/Loader/c_Loader.js");
/* harmony import */ var _src_features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/features/Menu/routeMenu */ "./src/features/Menu/routeMenu.js");
/* harmony import */ var _src_features_initSider_init__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/features/initSider/init */ "./src/features/initSider/init.js");
/* harmony import */ var _config_ant_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config/ant_components */ "./config/ant_components.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\pages\\sider\\sider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var CancelToken = null;
var source = null;

function App() {
  const routeMenu = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.routeMenu.value);
  const Loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.initSider.Loading);
  const {
    0: dataUser,
    1: setDataUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({});
  const {
    0: dataMenu,
    1: setDataMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const {
    0: VisibleMovil,
    1: setVisibleMovil
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    try {
      dispatch((0,_src_features_initSider_init__WEBPACK_IMPORTED_MODULE_13__.changeLoading)(true));
      CancelToken = (axios__WEBPACK_IMPORTED_MODULE_3___default().CancelToken);
      source = CancelToken.source();
      const user = JSON.parse(localStorage.getItem("token"));
      setDataUser(user);
      (0,_config_http__WEBPACK_IMPORTED_MODULE_6__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_5___default().ip_web) + "/rol?id=" + user.idRol).then(res => {
        const response = res.data;

        if (!Array.isArray(response)) {
          return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_14__.ModalKruger)("Ocurrio un problema al retornar datos.", "warn");
        }

        if (response.length == 0) {
          localStorage.removeItem("token");
          next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
          return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_14__.ModalKruger)("Usuario sin Rol.", "warn");
        }

        if (response[0].nameRol == "ADMINISTRADOR") {
          setDataMenu([{
            descripcion_menu: "EMPLEADO",
            icono: "user-add",
            id_menu: "1",
            id_menu_padre: null,
            ispadre: "N",
            menu_activo: "S",
            orden: null,
            ruta: "/empleado"
          }, {
            descripcion_menu: "REPORTE",
            icono: "container",
            id_menu: "2",
            id_menu_padre: null,
            ispadre: "N",
            menu_activo: "S",
            orden: null,
            ruta: "/reporte"
          }]);
          dispatch((0,_src_features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_12__.changeUrl)("/empleado"));
        } else if (response[0].nameRol == "EMPLEADO") {
          setDataMenu([{
            descripcion_menu: "PERFIL",
            icono: "user",
            id_menu: "1",
            id_menu_padre: null,
            ispadre: "n",
            menu_activo: "S",
            orden: null,
            ruta: "/perfil"
          }]);
          dispatch((0,_src_features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_12__.changeUrl)("/perfil"));
        } else {
          return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_14__.ModalKruger)("Rol no identificado.", "warn");
        }

        setDataUser(_objectSpread(_objectSpread({}, user), {}, {
          nameRol: response[0].nameRol
        }));
        localStorage.setItem("token", JSON.stringify(_objectSpread(_objectSpread({}, user), {}, {
          nameRol: response[0].nameRol
        })));
      }).catch(err => {
        (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_14__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
      }).finally(() => {
        dispatch((0,_src_features_initSider_init__WEBPACK_IMPORTED_MODULE_13__.changeLoading)(false));
      });
      return () => {
        var _source;

        (_source = source) === null || _source === void 0 ? void 0 : _source.cancel('Peticion cancelada.');
      };
    } catch (err) {
      (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_14__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
    }
  }, []);

  const updateVisible = bool => {
    setVisibleMovil(bool);
  };

  const changeSelectedKey = async event => {
    let opcion = false;

    if (opcion) {} else {
      const key = event.key;
      setVisibleMovil(false);
      btnChangeClick(key);
    }
  };

  const btnChangeClick = p_ruta => {
    dispatch((0,_src_features_Menu_routeMenu__WEBPACK_IMPORTED_MODULE_12__.changeUrl)(p_ruta));
  };

  const Menu = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_TopicMenu__WEBPACK_IMPORTED_MODULE_8__.default, {
    dataMenu: dataMenu,
    selectedKey: routeMenu,
    changeSelectedKey: changeSelectedKey
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 9
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_11__.default, {
      visible: Loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Layout, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_9__.default, {
        menu: Menu,
        visibleMovil: VisibleMovil,
        updateVisible: updateVisible,
        dataUser: dataUser
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Layout, {
      style: {
        minHeight: '100vh',
        paddingTop: '48px',
        position: 'relative'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_10__.default, {
        menu: Menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Layout, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Layout.Content, {
          className: "contentn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_components_Router_c_Router__WEBPACK_IMPORTED_MODULE_4__.default, {
            url: routeMenu,
            dataUser: dataUser
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

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

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "antd-table-saveas-excel":
/*!******************************************!*\
  !*** external "antd-table-saveas-excel" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd-table-saveas-excel");

/***/ }),

/***/ "antd/lib/date-picker/locale/es_ES":
/*!****************************************************!*\
  !*** external "antd/lib/date-picker/locale/es_ES" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/date-picker/locale/es_ES");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/sider/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VnBNLElBQUFBLEtBQUssRUFBRTtBQURHLEdBRm1CO0FBS2pDcU0sRUFBQUEsUUFBUSxFQUFFO0FBQ05qVixJQUFBQSxTQUFTLEVBQUUsQ0FBQ2pCLEtBQUQsRUFBUW1XLE1BQVIsS0FBbUI7QUFDMUJuVyxNQUFBQSxLQUFLLENBQUM2SixLQUFOLEdBQVlzTSxNQUFNLENBQUNDLE9BQW5CO0FBQ0g7QUFISztBQUx1QixDQUFELENBQTdCO0FBV0EsTUFBTTtBQUFFblYsRUFBQUE7QUFBRixJQUFnQjBULFNBQVMsQ0FBQzBCLE9BQWhDO0FBQ1AsaUVBQWUxQixTQUFTLENBQUMyQixPQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBRU8sTUFBTTFCLFNBQVMsR0FBR29CLDZEQUFXLENBQUM7QUFDakN2VSxFQUFBQSxJQUFJLEVBQUUsV0FEMkI7QUFFakN3VSxFQUFBQSxZQUFZLEVBQUU7QUFDVmxRLElBQUFBLE9BQU8sRUFBRTtBQURDLEdBRm1CO0FBS2pDbVEsRUFBQUEsUUFBUSxFQUFFO0FBQ05sVixJQUFBQSxhQUFhLEVBQUUsQ0FBQ2hCLEtBQUQsRUFBUW1XLE1BQVIsS0FBbUI7QUFDOUJuVyxNQUFBQSxLQUFLLENBQUMrRixPQUFOLEdBQWNvUSxNQUFNLENBQUNDLE9BQXJCO0FBQ0g7QUFISztBQUx1QixDQUFELENBQTdCO0FBWUEsTUFBTTtBQUFFcFYsRUFBQUE7QUFBRixJQUFvQjRULFNBQVMsQ0FBQ3lCLE9BQXBDO0FBQ1AsaUVBQWV6QixTQUFTLENBQUMwQixPQUF6Qjs7Ozs7Ozs7Ozs7QUNmQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tydWdlci8uL2NvbXBvbmVudHMvTG9hZGVyL2NfTG9hZGVyLmpzIiwid2VicGFjazovL2tydWdlci8uL2NvbXBvbmVudHMvTG9hZGVyL2NfbG9hZGVySGlqby5qcyIsIndlYnBhY2s6Ly9rcnVnZXIvLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vY29tcG9uZW50cy9Sb3V0ZXIvY19Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vY29tcG9uZW50cy9Ub3BpY01lbnUuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vY29tcG9uZW50cy9lbXBsZWFkby9lbXBsZWFkby5qcyIsIndlYnBhY2s6Ly9rcnVnZXIvLi9jb21wb25lbnRzL3BlcmZpbC5qcyIsIndlYnBhY2s6Ly9rcnVnZXIvLi9jb21wb25lbnRzL3JlcG9ydGVzL3JlcG9ydGVWYWN1bmEuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vY29uZmlnL2FudF9jb21wb25lbnRzLmpzIiwid2VicGFjazovL2tydWdlci8uL2NvbmZpZy9kZWZhdWx0LmpzIiwid2VicGFjazovL2tydWdlci8uL2NvbmZpZy9mdW5jaW9uZXNfZ2VuZXJhbGVzLmpzIiwid2VicGFjazovL2tydWdlci8uL2NvbmZpZy9odHRwLmpzIiwid2VicGFjazovL2tydWdlci8uL2hvb2svdmFsaWRhdGVTZXNpb24uanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vcGFnZXMvc2lkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vcGFnZXMvc2lkZXIvc2lkZXIuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vc3JjL2ZlYXR1cmVzL01lbnUvcm91dGVNZW51LmpzIiwid2VicGFjazovL2tydWdlci8uL3NyYy9mZWF0dXJlcy9pbml0U2lkZXIvaW5pdC5qcyIsIndlYnBhY2s6Ly9rcnVnZXIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8va3J1Z2VyL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2tydWdlci9leHRlcm5hbCBcImFudGQtdGFibGUtc2F2ZWFzLWV4Y2VsXCIiLCJ3ZWJwYWNrOi8va3J1Z2VyL2V4dGVybmFsIFwiYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VzX0VTXCIiLCJ3ZWJwYWNrOi8va3J1Z2VyL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9rcnVnZXIvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9rcnVnZXIvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2tydWdlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8va3J1Z2VyL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9rcnVnZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNwaW4sIEljb24gfSBmcm9tICdhbnRkJ1xyXG5jbGFzcyBDX0xvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbWVuc2FqZTogJ0NhcmdhbmRvLCBlc3BlcmUgdW4gbW9tZW50bycgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm1zZyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW5zYWplOiAnQ2FyZ2FuZG8sIGVzcGVyZSB1biBtb21lbnRvJyB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW5zYWplOiB0aGlzLnByb3BzLm1zZyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYW50SWNvbiA9IDxJY29uIHR5cGU9XCJsb2FkaW5nLTMtcXVhcnRlcnNcIiBzcGluIC8+O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPFNwaW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgaW5kaWNhdG9yPXthbnRJY29ufSB0aXA9e3RoaXMuc3RhdGUubWVuc2FqZX0gc3Bpbm5pbmc9e3RoaXMucHJvcHMudmlzaWJsZX0+XHJcbiAgICAgICAgICAgICAgICA8L1NwaW4+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ19Mb2FkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTcGluLCBJY29uIH0gZnJvbSAnYW50ZCdcclxuY29uc3QgQ19Mb2FkZXJIaWpvID0gKHsgbXNqLCB2aXNpYmxlIH0pID0+IHtcclxuICAgIGNvbnN0IGFudEljb24gPSA8SWNvbiB0eXBlPVwibG9hZGluZy0zLXF1YXJ0ZXJzXCIgc3BpbiAvPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BpbiBjbGFzc05hbWU9XCJsb2FkZXJIaWpvXCIgaW5kaWNhdG9yPXthbnRJY29ufSB0aXA9e21zaiB8fCBcIkNhcmdhbmRvLCBlc3BlcmUgdW4gbW9tZW50b1wifSBzcGlubmluZz17dmlzaWJsZX0+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENfTG9hZGVySGlqbzsgXHJcbiIsImltcG9ydCB7IERyYXdlciwgQnV0dG9uLCBMYXlvdXQsIE1lbnUsIEljb24sIERyb3Bkb3duIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBjaGFuZ2VMb2FkaW5nIH0gZnJvbSAnL3NyYy9mZWF0dXJlcy9pbml0U2lkZXIvaW5pdCc7XG5pbXBvcnQgeyBjaGFuZ2VVcmwgfSBmcm9tICcvc3JjL2ZlYXR1cmVzL01lbnUvcm91dGVNZW51JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cblxuY29uc3QgTmF2QmFyID0gKHsgbWVudSwgdmlzaWJsZU1vdmlsLCB1cGRhdGVWaXNpYmxlLCBkYXRhVXNlciB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dC5IZWFkZXJcbiAgICAgIGNsYXNzTmFtZT1cIm5hdmJhcm5cIlxuICAgID5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgdGl0bGU9ezxzcGFuPntkYXRhVXNlcj8ubmFtZSB8fCBcIlVTVUFSSU9cIn08L3NwYW4+fVxuICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVZpc2libGUoZmFsc2UpXG4gICAgICAgIH19XG4gICAgICAgIHZpc2libGU9e3Zpc2libGVNb3ZpbH1cbiAgICAgICAgYm9keVN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogJzEwcHggMCcsXG4gICAgICAgIH19XG4gICAgICAgIGhlYWRlclN0eWxlPXt7IGZvbnRTaXplOiAxMSB9fVxuICAgICAgPlxuICAgICAgICB7bWVudX1cbiAgICAgIDwvRHJhd2VyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpenF1aWVyZGFcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnVuXCJcbiAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgaWNvbj1cIm1lbnVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVZpc2libGUodHJ1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWcvbG9nb19rcnVnZXJfLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29uXCIgYWx0PVwibG9nb1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4NSB9fSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJCcmVhZDFcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhVXNlcj8ubmFtZVJvbCB8fCBcIlJPTFwiXG4gICAgICAgICAgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVyZWNoYVwiPlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBrZXk9XCJtb3JlXCJcbiAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgICAgIHNlbGVjdGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19XG5cbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fVxuICAgICAgICAgICAgICAgIGtleT1cImNlcnJhclNlc2lvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlTG9hZGluZyh0cnVlKSlcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZVVybCgnLycpKVxuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgICB9fT4gPEljb24gdHlwZT1cImxvZ291dFwiIHRoZW1lPVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiQ0VSUkFSIFNFU0lPTlwiID4gQ0VSUkFSIFNFU0lPTiA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG5cblxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIH1cbiAgICAgICAgICB0cmlnZ2VyPXtbJ2NsaWNrJ119ID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgICBpY29uPSd1c2VyJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlck5hdkJhclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAzIH19PntkYXRhVXNlcj8ubmFtZT8uc3BsaXQoXCIgXCIpWzBdIHx8IFwiVVNVQVJJT1wifSA8L3N0cm9uZz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ecm9wZG93bj5cblxuXG5cblxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQuSGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiXHJcbmltcG9ydCB7UmVzdWx0fSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgVl9lbXBsZWFkbyBmcm9tICcuLi9lbXBsZWFkby9lbXBsZWFkbyc7XHJcbmltcG9ydCBWX3BlcmZpbCBmcm9tICcuLi9wZXJmaWwnO1xyXG5pbXBvcnQgVl9yZXBvcnRlIGZyb20gJy4uL3JlcG9ydGVzL3JlcG9ydGVWYWN1bmEnO1xyXG5cclxuXHJcbmNvbnN0IENvbXBvbmVudE5vdEZvdW5kID0gKCkgPT4gKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICAgIHN0YXR1cz1cIjQwNFwiXHJcbiAgICAgICAgdGl0bGU9XCI0MDRcIlxyXG4gICAgICAgIHN1YlRpdGxlPVwiUGVyZMOzbiwgbGEgcMOhZ2luYSBxdWUgdmlzaXRhcyBubyBleGlzdGUuXCJcclxuICAgIC8+XHJcblxyXG5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIEFwcCh7IHVybCwgZGF0YVVzZXIgfSkge1xyXG5cclxuICAgIHN3aXRjaCAodXJsKSB7XHJcbiAgICAgICAgY2FzZSAnL3BlcmZpbCc6IHJldHVybiA8Vl9wZXJmaWwgZGF0YVVzZXI9e2RhdGFVc2VyfSAvPjtcclxuICAgICAgICBjYXNlICcvZW1wbGVhZG8nOiByZXR1cm4gPFZfZW1wbGVhZG8gZGF0YVVzZXI9e2RhdGFVc2VyfSAvPjtcclxuICAgICAgICBjYXNlICcvcmVwb3J0ZSc6IHJldHVybiA8Vl9yZXBvcnRlIGRhdGFVc2VyPXtkYXRhVXNlcn0gLz47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50Tm90Rm91bmQgLz47ICAvL3RoaXMuc3RhdGUudXJsO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBTaWRlQmFyID0gKHsgbWVudSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dC5TaWRlclxuICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICBicmVha3BvaW50PXtcImxnXCJ9XG4gICAgICBjb2xsYXBzZWRXaWR0aD17MH1cbiAgICAgIHdpZHRoPXsyNjB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICBoZWlnaHQ6ICc5NHZoJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogNDgsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMCA4cHggcmdiKDExNSwgMTI5LCAxMjEpJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7bWVudX1cbiAgICA8L0xheW91dC5TaWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWVudSwgVG9vbHRpcCwgSWNvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnVcbmNvbnN0IFRvcGljTWVudSA9ICh7IGRhdGFNZW51LCBzZWxlY3RlZEtleSwgY2hhbmdlU2VsZWN0ZWRLZXkgfSkgPT4ge1xuICAgIHZhciBzdHlsZWRUb3BpY3MgPSBbXTtcbiAgICBzdHlsZWRUb3BpY3MgPSBkYXRhTWVudS5tYXAoKGZpbGEpID0+XG4gICAgICAgIGZpbGEuaXNwYWRyZSA9PSBcIlNcIiAmJiBmaWxhLmlkX21lbnVfcGFkcmUgPT0gbnVsbCA/XG4gICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICAgIGtleT17ZmlsYS5ydXRhfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9e2ZpbGEuaWNvbm99IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZmlsYS5kZXNjcmlwY2lvbl9tZW51fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGFNZW51Lm1hcCgoZmlsYTIpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpbGEyLmlkX21lbnVfcGFkcmUgPT0gZmlsYS5pZF9tZW51ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGEyLmlzcGFkcmUgPT0gXCJOXCIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gZGlzYWJsZWQ9e2ZpbGEyLm1lbnVfYWN0aXZvID09IFwiTlwifSB0aXRsZT17ZmlsYTIuZGVzY3JpcGNpb25fbWVudX0gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fSBrZXk9e2ZpbGEyLnJ1dGF9IG9uQ2xpY2s9e2NoYW5nZVNlbGVjdGVkS2V5fT4gPEljb24gdHlwZT17ZmlsYTIuaWNvbm99IHRoZW1lPVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA+IHtmaWxhMi5kZXNjcmlwY2lvbl9tZW51fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGEyLnJ1dGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT17ZmlsYTIuaWNvbm99IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZpbGEyLmRlc2NyaXBjaW9uX21lbnV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhTWVudS5tYXAoKGZpbGEzKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsYTMuaWRfbWVudV9wYWRyZSA9PSBmaWxhMi5pZF9tZW51ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxhMy5pc3BhZHJlID09IFwiTlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBkaXNhYmxlZD17ZmlsYTMubWVudV9hY3Rpdm8gPT0gXCJOXCJ9IHRpdGxlPXtmaWxhMy5kZXNjcmlwY2lvbl9tZW51fSBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19IGtleT17ZmlsYTMucnV0YX0gb25DbGljaz17Y2hhbmdlU2VsZWN0ZWRLZXl9PiA8SWNvbiB0eXBlPXtmaWxhMy5pY29ub30gdGhlbWU9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA+IHtmaWxhMy5kZXNjcmlwY2lvbl9tZW51fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+IDogbnVsbFxuXG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgICAgOiBmaWxhLmlkX21lbnVfcGFkcmUgPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBkaXNhYmxlZD17ZmlsYS5tZW51X2FjdGl2byA9PSBcIk5cIn0gdGl0bGU9e2ZpbGEuZGVzY3JpcGNpb25fbWVudX0gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fSBrZXk9e2ZpbGEucnV0YX0gb25DbGljaz17Y2hhbmdlU2VsZWN0ZWRLZXl9PiA8SWNvbiB0eXBlPXtmaWxhLmljb25vfSB0aGVtZT1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gPiB7ZmlsYS5kZXNjcmlwY2lvbl9tZW51fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+IDogbnVsbFxuXG5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVudVxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbc2VsZWN0ZWRLZXldfVxuICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3N0eWxlZFRvcGljc31cblxuICAgICAgICA8L01lbnU+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFRvcGljTWVudTtcbiIsImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFRhYmxlLCBEaXZpZGVyLCBJY29uLCBNb2RhbCwgUGFnZUhlYWRlciwgUm93LCBDb2wsIENhcmQsIFBvcGNvbmZpcm0gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IE1vZGFsS3J1Z2VyLCBub3RpZmljYXRpb25LcnVnZXIgfSBmcm9tIFwiL2NvbmZpZy9hbnRfY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBheGlvc0dldCwgYXhpb3NQb3N0LCBheGlvc1B1dCwgYXhpb3NEZWxldGUgfSBmcm9tIFwiL2NvbmZpZy9odHRwXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy9jb25maWcvZGVmYXVsdCc7XHJcbmltcG9ydCBmdW5jaW9uZXMgZnJvbSAnL2NvbmZpZy9mdW5jaW9uZXNfZ2VuZXJhbGVzJztcclxuXHJcbnZhciBDYW5jZWxUb2tlbiA9IG51bGxcclxudmFyIHNvdXJjZSA9IG51bGxcclxudmFyIGVtcGxlYWRvID0gW11cclxuZnVuY3Rpb24gQXBwKHsgZGF0YVVzZXIsIGZvcm0gfSkge1xyXG4gICAgY29uc3QgW0VtcGxlYWRvLCBzZXRFbXBsZWFkb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbW9kRm9ybSwgc2V0TW9kRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZm9ybXVsYXJpbywgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBpZGVudGlmaWNhdGlvbjogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGRhdGVCaXJ0aDogXCJcIixcclxuICAgICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgIGNlbGxQaG9uZTogXCJcIixcclxuICAgICAgICB2YWNjaW5lOiBcIlwiLFxyXG4gICAgICAgIHZhY2NpbmVJZDogXCJcIixcclxuICAgICAgICBkYXRlVmFjY2luZTogXCJcIixcclxuICAgICAgICBkb3NlTnVtYmVyOiBcIlwiLFxyXG4gICAgICAgIHJvbElkOiAyXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZ2V0UGVyc29uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICBheGlvc0dldChjb25maWcuaXBfd2ViICsgXCIvcm9sLzI/X2VtYmVkPXBlcnNvblwiLCB7fSwge30sIGNvbmZpZy50aW1lT3V0LCBzb3VyY2UpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLnBlcnNvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vZGFsS3J1Z2VyKFwiT2N1cnJpbyB1biBwcm9ibGVtYSBhbCByZXRvcm5hciBkYXRvcy5cIiwgXCJ3YXJuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0RW1wbGVhZG8ocmVzcG9uc2UucGVyc29uKVxyXG4gICAgICAgICAgICBlbXBsZWFkbyA9IHJlc3BvbnNlLnBlcnNvblxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIE1vZGFsS3J1Z2VyKGVyci5tZXNzYWdlIHx8IFwiRXJyb3IgaW5lc3BlcmFkbywgaW50ZW50ZSBkZSBudWV2b1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZVBlcnNvbiA9IChpZCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICBheGlvc0RlbGV0ZShjb25maWcuaXBfd2ViICsgXCIvcGVyc29uL1wiICsgaWQsIHt9LCB7fSwgY29uZmlnLnRpbWVPdXQsIHNvdXJjZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBnZXRQZXJzb24oKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIE1vZGFsS3J1Z2VyKGVyci5tZXNzYWdlIHx8IFwiRXJyb3IgaW5lc3BlcmFkbywgaW50ZW50ZSBkZSBudWV2b1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuICAgICAgICAgICAgc291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICAgICAgICAgIGdldFBlcnNvbigpXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKCdPcGVyYXRpb24gY2FuY2VsZWQgYnkgdGhlIHVzZXIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyLm1lc3NhZ2UgfHwgXCJFcnJvciBpbmVzcGVyYWRvLCBpbnRlbnRlIGRlIG51ZXZvXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQnVzcXVlZGEgPSAodmFsKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWw/LnRyaW0oKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IGVtcGxlYWRvLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwudG9Mb3dlckNhc2UoKSkgPiAtMSB8fCBpdGVtLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwudG9Mb3dlckNhc2UoKSkgPiAtMSB8fCBpdGVtLmlkZW50aWZpY2F0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwudG9Mb3dlckNhc2UoKSkgPiAtMSkgfHwgaXRlbS5lbWFpbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IGVtcGxlYWRvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0RW1wbGVhZG8oZmlsdGVyKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZWRpdFBlcnNvbiA9IChyZWNvcmQpID0+IHtcclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgaWQ6IHJlY29yZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLm5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiByZWNvcmQubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIGlkZW50aWZpY2F0aW9uOiByZWNvcmQuaWRlbnRpZmljYXRpb24sXHJcbiAgICAgICAgICAgIGVtYWlsOiByZWNvcmQuZW1haWxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldE1vZEZvcm0odHJ1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogJyMnLCBrZXk6ICdvcGVyYXRpb24nLFxyXG4gICAgICAgICAgICB3aWR0aDogNzAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPSdFZGl0YXInIHR5cGU9J2xpbmsnIGljb249J2VkaXQnIG9uQ2xpY2s9eygpID0+IGVkaXRQZXJzb24ocmVjb3JkKX0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtIGRpc2FibGVkPXtMb2FkaW5nfSB0aXRsZT1cIkRlc2VhIGVsaW1pbmFyIGVzdGUgcmVnaXN0cm8/XCIgb25Db25maXJtPXsoKSA9PiBkZWxldGVQZXJzb24ocmVjb3JkLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0aXRsZT1cIkVsaW1pbmFyIGVtcGxlYWRvXCIgdHlwZT1cImRlbGV0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aXRsZTogJ0lkZW50aWZpY2FjaW9uJyxcclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdpZGVudGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aXRsZTogJ05vbWJyZXMnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdGV4dFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FwZWxsaWRvcycsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2xhc3ROYW1lJyxcclxuICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHRleHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb3JyZW8nLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdGV4dFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IsIHNldEZpZWxkc1ZhbHVlLCBnZXRGaWVsZFZhbHVlLCByZXNldEZpZWxkcyB9ID0gZm9ybVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgY2xlYW5JbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIGlkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGlkZW50aWZpY2F0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgZGF0ZUJpcnRoOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgICAgICBjZWxsUGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIHZhY2NpbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIHZhY2NpbmVJZDogXCJcIixcclxuICAgICAgICAgICAgZGF0ZVZhY2NpbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRvc2VOdW1iZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHJvbElkOiAyXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gYXdhaXQgZnVuY2lvbmVzLnZhbGlkYXRlRm9ybShmb3JtKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbktydWdlcihcIndhcm5pbmdcIiwgXCJLcnVnZXJcIiwgXCJGb3JtdWxhcmlvIGludsOhbGlkb1wiLCAyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZUNlZHVsYSA9IGZ1bmNpb25lcy52YWxpZGF0ZUNlZHVsYShnZXRGaWVsZFZhbHVlKFwidHh0SWRlbnRpZmljYXRpb25cIikpXHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVDZWR1bGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uS3J1Z2VyKFwid2FybmluZ1wiLCBcIktydWdlclwiLCB2YWxpZGF0ZUNlZHVsYS5tZXNzYWdlLCAyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcm11bGFyaW8uaWRlbnRpZmljYXRpb24gPSBnZXRGaWVsZFZhbHVlKFwidHh0SWRlbnRpZmljYXRpb25cIilcclxuICAgICAgICAgICAgZm9ybXVsYXJpby5uYW1lID0gZ2V0RmllbGRWYWx1ZShcInR4dE5hbWVcIik/LnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgZm9ybXVsYXJpby5sYXN0TmFtZSA9IGdldEZpZWxkVmFsdWUoXCJ0eHRMYXN0TmFtZVwiKT8udG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICBmb3JtdWxhcmlvLmVtYWlsID0gZ2V0RmllbGRWYWx1ZShcInR4dEVtYWlsXCIpXHJcbiAgICAgICAgICAgIGZvcm11bGFyaW8udXNlck5hbWUgPSAoZm9ybXVsYXJpby5uYW1lWzBdICsgZm9ybXVsYXJpby5sYXN0TmFtZS5zcGxpdChcIiBcIilbMF0gKyBmb3JtdWxhcmlvLmlkZW50aWZpY2F0aW9uLnN1YnN0cmluZyg2LCAxMCkpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgZm9ybXVsYXJpby5wYXNzd29yZCA9IGdldEZpZWxkVmFsdWUoXCJ0eHRJZGVudGlmaWNhdGlvblwiKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgIGlmIChmb3JtdWxhcmlvLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBheGlvc1B1dChjb25maWcuaXBfd2ViICsgXCIvcGVyc29uL1wiICsgZm9ybXVsYXJpby5pZCwgZm9ybXVsYXJpbywge30sIGNvbmZpZy50aW1lT3V0LCBzb3VyY2UpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25LcnVnZXIoXCJzdWNjZXNzXCIsIFwiS3J1Z2VyXCIsIFwiRW1wbGVhZG8gXCIgKyAoIWZvcm11bGFyaW8uaWQgPyBcInJlZ2lzdHJhZG9cIiA6IFwiYWN0dWFsaXphZG9cIikgKyBcIiBjb3JyZWN0YW1lbnRlLlwiLCAzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuSW5wdXRzKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RGb3JtKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGdldFBlcnNvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlvcy5pc0NhbmNlbChlcnJvcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVSZXBlYXRlZCA9IGF3YWl0IGF4aW9zR2V0KGNvbmZpZy5pcF93ZWIgKyBcIi9wZXJzb24/aWRlbnRpZmljYXRpb249XCIgKyBmb3JtdWxhcmlvLmlkZW50aWZpY2F0aW9uLCB7fSwge30sIGNvbmZpZy50aW1lT3V0LCBzb3VyY2UpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlUmVwZWF0ZWQ/LmRhdGE/Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uS3J1Z2VyKFwid2FybmluZ1wiLCBcIktydWdlclwiLCBcIkPDqWR1bGEgeWEgaW5ncmVzYWRhLlwiLCAzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXhpb3NQb3N0KGNvbmZpZy5pcF93ZWIgKyBcIi9wZXJzb25cIiwgZm9ybXVsYXJpbywge30sIGNvbmZpZy50aW1lT3V0LCBzb3VyY2UpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25LcnVnZXIoXCJzdWNjZXNzXCIsIFwiS3J1Z2VyXCIsIFwiRW1wbGVhZG8gXCIgKyAoIWZvcm11bGFyaW8uaWQgPyBcInJlZ2lzdHJhZG9cIiA6IFwiYWN0dWFsaXphZG9cIikgKyBcIiBjb3JyZWN0YW1lbnRlLlwiLCAzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuSW5wdXRzKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RGb3JtKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGdldFBlcnNvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlvcy5pc0NhbmNlbChlcnJvcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uS2V5UHJlc3NOdW1iZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIShldmVudC5jaGFyQ29kZSA+PSA0OCAmJiBldmVudC5jaGFyQ29kZSA8PSA1NykpXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbktldFByZXNzTGV0dGVycyA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoYXJDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2hcclxuICAgICAgICByZXR1cm4gKC9eW2EtekEtWiDDscORIMOhw4Egw6nDiSDDrcONIMOzw5Mgw7rDml0kLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpKSkgPyBudWxsIDogZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9J2luaWNpbycgY2xhc3NOYW1lPVwiQXBwXCIgc3R5bGU9e3sgcGFkZGluZzogJzVweCAxNXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJSZWdpc3RybyBkZSBFbXBsZWFkb1wiXHJcbiAgICAgICAgICAgICAgICBleHRyYT17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9J051ZXZvJyBrZXk9XCIzXCIgdHlwZT1cInByaW1hcnlcIiBpY29uPSdwbHVzJyBkaXNhYmxlZD17TG9hZGluZ30gb25DbGljaz17KCkgPT4gc2V0TW9kRm9ybSh0cnVlKX0gPk51ZXZvPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDE2XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCIgYWxpZ249XCJtaWRkbGVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNzBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdCdXNxdWVkYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gb25DaGFuZ2VCdXNxdWVkYSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiAnMCAwIDRweCByZ2IoMTE1LCAxMjksIDEyMSknIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4eGw9ezI0fSB4bD17MjR9IGxnPXsyNH0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17eyBwYWdlU2l6ZTogNyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtFbXBsZWFkb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9e3sgeDogJ21heC1jb250ZW50JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtMb2FkaW5nfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17Zm9ybXVsYXJpby5pZCA/IFwiRWRpY2lvbiBkZSBFbXBsZWFkb1wiIDogXCJSZWdpc3RybyBkZSBFbXBsZWFkb1wifVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17bW9kRm9ybX1cclxuICAgICAgICAgICAgICAgIG9rVGV4dD17IWZvcm11bGFyaW8uaWQgPyBcIkd1YXJkYXJcIiA6IFwiQWN0dWFsaXphclwifVxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIkNhbmNlbGFyXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs0NTB9XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHsgc2V0TW9kRm9ybShmYWxzZSk7IGNsZWFuSW5wdXRzKCkgfX1cclxuICAgICAgICAgICAgICAgIG9uT2s9e3NhdmV9XHJcbiAgICAgICAgICAgICAgICBkZXN0cm95T25DbG9zZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGJvZHlTdHlsZT17eyBwYWRkaW5nOiAyMCB9fVxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgbWFza0Nsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uUHJvcHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHsgZGlzYWJsZWQ6IExvYWRpbmcsIGxvYWRpbmc6IExvYWRpbmcgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uUHJvcHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHsgZGlzYWJsZWQ6IExvYWRpbmcsIGxvYWRpbmc6IExvYWRpbmcgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZmluaXRlJyBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD0naG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzOiA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxnOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGw6IDksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4eGw6IDksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiAxMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxnOiAxMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhsOiAxMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHh4bDogMTMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxMiwgMF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT0nY2FyZCcgbGFiZWw9XCJJZGVudGlmaWNhY2lvblwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndHh0SWRlbnRpZmljYXRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8uaWRlbnRpZmljYXRpb24sIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0NhbXBvIGluY29tcGxldG8nIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTw7NsbyAxMCBkw61naXRvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1PDs2xvIDEwIGTDrWdpdG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Zvcm11bGFyaW8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYXN0ZT17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3NOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9ICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPSdjYXJkJyBsYWJlbD17XCJOb21icmVzXCJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0eHROYW1lJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBmb3JtdWxhcmlvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyBpbmNvbXBsZXRvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFzdGU9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktldFByZXNzTGV0dGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9J2NhcmQnIGxhYmVsPVwiQXBlbGxpZG9zXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0eHRMYXN0TmFtZScsIHsgaW5pdGlhbFZhbHVlOiBmb3JtdWxhcmlvLmxhc3ROYW1lLCBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyBpbmNvbXBsZXRvJyB9XSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFzdGU9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktldFByZXNzTGV0dGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9ICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9J2NhcmQnIGxhYmVsPVwiQ29ycmVvXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0eHRFbWFpbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogZm9ybXVsYXJpby5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29ycmVvIGludmFsaWRvIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShBcHApO1xyXG4iLCJpbXBvcnQgeyBDYXJkLCBCdXR0b24sIEZvcm0sICBJbnB1dCwgUm93LCBDb2wsICBNb2RhbCwgIFBhZ2VIZWFkZXIsICAgU2VsZWN0LCBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgTW9kYWxLcnVnZXIsIG5vdGlmaWNhdGlvbktydWdlciB9IGZyb20gXCIvY29uZmlnL2FudF9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGF4aW9zR2V0LCAgYXhpb3NQdXQgfSBmcm9tIFwiL2NvbmZpZy9odHRwXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnL2NvbmZpZy9kZWZhdWx0JztcclxuaW1wb3J0IGZ1bmNpb25lcyBmcm9tICcvY29uZmlnL2Z1bmNpb25lc19nZW5lcmFsZXMnO1xyXG5pbXBvcnQgQ19Mb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXIvY19sb2FkZXJIaWpvJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxudmFyIENhbmNlbFRva2VuID0gbnVsbFxyXG52YXIgc291cmNlID0gbnVsbFxyXG5mdW5jdGlvbiBBcHAoeyBkYXRhVXNlciwgZm9ybSB9KSB7XHJcbiAgICBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdmFjY2luZSwgc2V0VmFjY2luZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Zvcm11bGFyaW8sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGlkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaWRlbnRpZmljYXRpb246IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICB1c2VyTmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBkYXRlQmlydGg6IFwiXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICBjZWxsUGhvbmU6IFwiXCIsXHJcbiAgICAgICAgdmFjY2luZTogXCJcIixcclxuICAgICAgICB2YWNjaW5lSWQ6IFwiXCIsXHJcbiAgICAgICAgZGF0ZVZhY2NpbmU6IFwiXCIsXHJcbiAgICAgICAgZG9zZU51bWJlcjogXCJcIixcclxuICAgICAgICByb2xJZDogMlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBnZXRQZXJzb24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGF4aW9zR2V0KGNvbmZpZy5pcF93ZWIgKyBcIi9wZXJzb24vXCIgKyBkYXRhVXNlci5pZCwge30sIHt9LCBjb25maWcudGltZU91dCwgc291cmNlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vZGFsS3J1Z2VyKFwiT2N1cnJpbyB1biBwcm9ibGVtYSBhbCByZXRvcm5hciBkYXRvcy5cIiwgXCJ3YXJuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Rm9ybShyZXNwb25zZSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRWYWNjaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zR2V0KGNvbmZpZy5pcF93ZWIgKyBcIi92YWNjaW5lXCIsIHt9LCB7fSwgY29uZmlnLnRpbWVPdXQsIHNvdXJjZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIHNldFZhY2NpbmUocmVzcG9uc2UpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyLm1lc3NhZ2UgfHwgXCJFcnJvciBpbmVzcGVyYWRvLCBpbnRlbnRlIGRlIG51ZXZvXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgICAgICAgICBzZXRNc2coXCJDb25zdWx0YW5kbyBzdXMgZGF0b3MuLi5cIilcclxuICAgICAgICAgICAgZ2V0VmFjY2luZSgpXHJcbiAgICAgICAgICAgIGdldFBlcnNvbigpXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKCdPcGVyYXRpb24gY2FuY2VsZWQgYnkgdGhlIHVzZXIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBNb2RhbC5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJyBTWVNURU1TRUMnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ09jdXJyaW8gdW4gcHJvYmxlbWEgYWwgbW9zdHJhciBkYXRvcy4nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgb25LZXlQcmVzc051bWJlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghKGV2ZW50LmNoYXJDb2RlID49IDQ4ICYmIGV2ZW50LmNoYXJDb2RlIDw9IDU3KSlcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IsIHNldEZpZWxkc1ZhbHVlLCBnZXRGaWVsZFZhbHVlLCByZXNldEZpZWxkcyB9ID0gZm9ybVxyXG4gICAgY29uc3QgZGlzYWJsZWREYXRlID0gKGN1cnJlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gY3VycmVudCA+IG1vbWVudCgpLmVuZE9mKCdkYXknKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IGF3YWl0IGZ1bmNpb25lcy52YWxpZGF0ZUZvcm0oZm9ybSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub3RpZmljYXRpb25LcnVnZXIoXCJ3YXJuaW5nXCIsIFwiS3J1Z2VyXCIsIFwiRm9ybXVsYXJpbyBpbnbDoWxpZG9cIiwgMilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9ybXVsYXJpby5hZGRyZXNzID0gZ2V0RmllbGRWYWx1ZShcInR4dEFkcmVzc1wiKT8udG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICBmb3JtdWxhcmlvLmNlbGxQaG9uZSA9IGdldEZpZWxkVmFsdWUoXCJ0eHRDZWxsUGhvbmVcIilcclxuICAgICAgICAgICAgZm9ybXVsYXJpby52YWNjaW5lID0gZ2V0RmllbGRWYWx1ZShcInR4dFZhY2NpbmVcIilcclxuICAgICAgICAgICAgZm9ybXVsYXJpby52YWNjaW5lSWQgPSBnZXRGaWVsZFZhbHVlKFwidHh0VmFjY2luZVwiKSA9PSBcInZhY3VuYWRvXCIgPyBnZXRGaWVsZFZhbHVlKFwidHh0VmFjY2luZUlkXCIpIDogXCJcIlxyXG4gICAgICAgICAgICBmb3JtdWxhcmlvLmRhdGVCaXJ0aCA9IGdldEZpZWxkVmFsdWUoXCJkdHBEYXRlQmlydGhcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKVxyXG4gICAgICAgICAgICBmb3JtdWxhcmlvLmRhdGVWYWNjaW5lID0gZ2V0RmllbGRWYWx1ZShcInR4dFZhY2NpbmVcIikgPT0gXCJ2YWN1bmFkb1wiID8gZ2V0RmllbGRWYWx1ZShcImR0cERhdGVWYWNjaW5lXCIpLmZvcm1hdChcIllZWVktTU0tRERcIikgOiBcIlwiXHJcbiAgICAgICAgICAgIGZvcm11bGFyaW8uZG9zZU51bWJlciA9IGdldEZpZWxkVmFsdWUoXCJ0eHRWYWNjaW5lXCIpID09IFwidmFjdW5hZG9cIiA/IGdldEZpZWxkVmFsdWUoXCJ0eHREb3NlTnVtYmVyXCIpIDogXCJcIlxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgIGF4aW9zUHV0KGNvbmZpZy5pcF93ZWIgKyBcIi9wZXJzb24vXCIgKyBmb3JtdWxhcmlvLmlkLCBmb3JtdWxhcmlvLCB7fSwgY29uZmlnLnRpbWVPdXQsIHNvdXJjZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbktydWdlcihcInN1Y2Nlc3NcIiwgXCJLcnVnZXJcIiwgXCJEYXRvcyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlLlwiLCAzKVxyXG4gICAgICAgICAgICAgICAgc2V0Rm9ybShyZXMuZGF0YSlcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChheGlvcy5pc0NhbmNlbChlcnJvcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZyA/IDxDX0xvYWRlciB2aXNpYmxlPXtMb2FkaW5nfSBtc2o9e21zZ30gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2luaWNpbycgY2xhc3NOYW1lPVwiQXBwXCIgc3R5bGU9e3sgcGFkZGluZzogJzVweCAxNXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBwYWRkaW5nQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkluZm9ybWFjacOzbiBwZXJzb25hbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPSdBY3R1YWxpemFyJyBrZXk9XCIxXCIgdHlwZT1cInByaW1hcnlcIiBpY29uPSdzYXZlJyBkaXNhYmxlZD17TG9hZGluZ30gb25DbGljaz17c2F2ZX0gPjwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0LCAxNl19IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiIGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6ICcwIDAgNHB4IHJnYigxMTUsIDEyOSwgMTIxKScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J3ZlcnRpY2FsJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxMiwgMF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHhsPXs4fSB4bD17OH0gbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9ICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJJZGVudGlmaWNhY2lvblwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3R4dElkZW50aWZpY2F0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogZm9ybXVsYXJpby5pZGVudGlmaWNhdGlvbiwgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU8OzbG8gMTAgZMOtZ2l0b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU8OzbG8gMTAgZMOtZ2l0b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHh4bD17OH0geGw9ezh9IGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fSAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17XCJOb21icmVzXCJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndHh0TmFtZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyBpbmNvbXBsZXRvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHh4bD17OH0geGw9ezh9IGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fSAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkFwZWxsaWRvc1wiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3R4dExhc3ROYW1lJywgeyBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8ubGFzdE5hbWUsIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0NhbXBvIGluY29tcGxldG8nIH1dIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4eGw9ezh9IHhsPXs4fSBsZz17OH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkNvcnJlb1wiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3R4dEVtYWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogZm9ybXVsYXJpby5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NvcnJlbyBpbnZhbGlkbyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDYW1wbyBpbmNvbXBsZXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHhsPXs4fSB4bD17OH0gbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9ICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRGlyZWNjaW9uXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndHh0QWRyZXNzJywgeyBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8uYWRkcmVzcywgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycgfV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHhsPXs4fSB4bD17OH0gbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9ICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVGVsZWZvbm9cIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0eHRDZWxsUGhvbmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBmb3JtdWxhcmlvLmNlbGxQaG9uZSwgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU8OzbG8gMTAgZMOtZ2l0b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU8OzbG8gMTAgZMOtZ2l0b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYXN0ZT17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4eGw9ezh9IHhsPXs4fSBsZz17OH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0gID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGZWNoYSBkZSBOYWNpbWllbnRvXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGaWVsZERlY29yYXRvcignZHRwRGF0ZUJpcnRoJywgeyBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8uZGF0ZUJpcnRoICE9IFwiXCIgPyBtb21lbnQoZm9ybXVsYXJpby5kYXRlQmlydGgpIDogbnVsbCwgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycgfV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9e2Rpc2FibGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHhsPXs4fSB4bD17OH0gbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9ICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRXN0YWRvIGRlIHZhY3VuYWNpb25cIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0eHRWYWNjaW5lJywgeyBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8udmFjY2luZSwgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycgfV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFNlbGVjdFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtcInZhY3VuYWRvXCJ9IGtleT17XCJ2YWN1bmFkb1wifT5WQUNVTkFETzwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e1wibm92YWN1bmFkb1wifSBrZXk9e1wibm92YWN1bmFkb1wifT5OTyBWQUNVTkFETzwvU2VsZWN0Lk9wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGaWVsZFZhbHVlKFwidHh0VmFjY2luZVwiKSA9PSBcInZhY3VuYWRvXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHhsPXs4fSB4bD17OH0gbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUaXBvIGRlIHZhY3VuYVwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndHh0VmFjY2luZUlkJywgeyBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8udmFjY2luZUlkLCBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyBpbmNvbXBsZXRvJyB9XSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxTZWxlY3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWNjaW5lLm1hcChpdGVtID0+IDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtpdGVtLmlkfSBrZXk9e2l0ZW0uaWR9PntpdGVtLm5hbWVWYWNjaW5lfTwvU2VsZWN0Lk9wdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHhsPXs4fSB4bD17OH0gbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9ICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGZWNoYSBkZSB2YWN1bmFjacOzblwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpZWxkRGVjb3JhdG9yKCdkdHBEYXRlVmFjY2luZScsIHsgaW5pdGlhbFZhbHVlOiBmb3JtdWxhcmlvLmRhdGVWYWNjaW5lICE9IFwiXCIgPyBtb21lbnQoZm9ybXVsYXJpby5kYXRlVmFjY2luZSkgOiBudWxsLCBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyBpbmNvbXBsZXRvJyB9XSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17ZGlzYWJsZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHhsPXs4fSB4bD17OH0gbGc9ezh9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9ICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJOwrAgZGUgZG9zaXNcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3R4dERvc2VOdW1iZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IGZvcm11bGFyaW8uZG9zZU51bWJlciwgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhc3RlPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc051bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShBcHApO1xyXG4iLCJpbXBvcnQgeyBTZWxlY3QsIEJ1dHRvbiwgRm9ybSwgVGFibGUsIERhdGVQaWNrZXIsIFBhZ2VIZWFkZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAnYW50ZCdcclxuY29uc3QgUmFuZ2VQaWNrZXIgPSBEYXRlUGlja2VyLlJhbmdlUGlja2VyXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IE1vZGFsS3J1Z2VyLCBub3RpZmljYXRpb25LcnVnZXIgfSBmcm9tIFwiL2NvbmZpZy9hbnRfY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBheGlvc0dldCB9IGZyb20gXCIvY29uZmlnL2h0dHBcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnL2NvbmZpZy9kZWZhdWx0JztcclxuaW1wb3J0IHsgRXhjZWwgfSBmcm9tICdhbnRkLXRhYmxlLXNhdmVhcy1leGNlbCdcclxuaW1wb3J0IGZ1bmNpb25lcyBmcm9tICcvY29uZmlnL2Z1bmNpb25lc19nZW5lcmFsZXMnO1xyXG5pbXBvcnQgZXNfRVMgZnJvbSAnYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VzX0VTJztcclxudmFyIENhbmNlbFRva2VuID0gbnVsbFxyXG52YXIgc291cmNlID0gbnVsbFxyXG5cclxuZnVuY3Rpb24gQXBwKHsgZGF0YVVzZXIsIGZvcm0gfSkge1xyXG4gICAgY29uc3QgW1JlcG9ydGUsIHNldFJlcG9ydGVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhY2NpbmUsIHNldFZhY2NpbmVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldFZhY2NpbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3NHZXQoY29uZmlnLmlwX3dlYiArIFwiL3ZhY2NpbmVcIiwge30sIHt9LCBjb25maWcudGltZU91dCwgc291cmNlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgc2V0VmFjY2luZShyZXNwb25zZSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xyXG4gICAgICAgICAgICBzb3VyY2UgPSBDYW5jZWxUb2tlbi5zb3VyY2UoKTtcclxuICAgICAgICAgICAgZ2V0VmFjY2luZSgpXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UuY2FuY2VsKCdPcGVyYXRpb24gY2FuY2VsZWQgYnkgdGhlIHVzZXIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciwgZ2V0RmllbGRWYWx1ZSB9ID0gZm9ybVxyXG5cclxuXHJcbiAgICBjb25zdCBmY25fZXhwb3J0YXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleGNlbCA9IG5ldyBFeGNlbCgpO1xyXG4gICAgICAgICAgICBleGNlbFxyXG4gICAgICAgICAgICAgICAgLmFkZFNoZWV0KFwiS3J1Z2VyXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0VEJvZHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA4LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBleGNlbC5zZXRUSGVhZFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiA5LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJzE0M0Y2QicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ0Y3RjVGMicsXHJcbiAgICAgICAgICAgICAgICB2OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGg6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYm9sZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2V0Um93SGVpZ2h0KDAuNywgXCJjbVwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENvbHVtbnMoY29sdW1ucylcclxuICAgICAgICAgICAgZXhjZWwuc2V0Um93SGVpZ2h0KDAuNywgXCJjbVwiKVxyXG4gICAgICAgICAgICAgICAgLnNldFRCb2R5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBib2xkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogOCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICB2OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBoOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuYWRkRGF0YVNvdXJjZShSZXBvcnRlLCB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNhdmVBcyhcIlJlcG9ydGVfXCIgKyBnZXRGaWVsZFZhbHVlKFwiZmlsdGVyXCIpICsgXCIueGxzeFwiLCAnYmxvYicsIGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyLm1lc3NhZ2UgfHwgXCJFcnJvciBpbmVzcGVyYWRvLCBpbnRlbnRlIGRlIG51ZXZvXCIsIFwiZXJyb3JcIilcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aXRsZTogJ0lkZW50aWZpY2FjaW9uJyxcclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdpZGVudGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aXRsZTogJ05vbWJyZXMnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdGV4dFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FwZWxsaWRvcycsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2xhc3ROYW1lJyxcclxuICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHRleHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb3JyZW8nLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdGV4dFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0RpcmVjY2lvbicsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHRleHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDZWx1bGFyJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnY2VsbFBob25lJyxcclxuICAgICAgICAgICAgd2lkdGg6IDYwLFxyXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHRleHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdGZWNoYSBkZSB2YWN1bmEnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdkYXRlVmFjY2luZScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogIXJlY29yZC52YWNjaW5lIHx8IHJlY29yZC52YWNjaW5lID09IFwibm92YWN1bmFkb1wiID8gXCJObyBhcGxpY2FkYVwiIDogdGV4dFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0Rvc2lzIC8gVmFjdW5hJyxcclxuICAgICAgICAgICAga2V5OiAndmFjY2luZURvc2UnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAhcmVjb3JkLnZhY2NpbmUgfHwgcmVjb3JkLnZhY2NpbmUgPT0gXCJub3ZhY3VuYWRvXCIgPyBcIk5vIGFwbGljYWRhXCIgOiByZWNvcmQuZG9zZU51bWJlciArIFwiIGRlIFwiICsgdmFjY2luZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSByZWNvcmQudmFjY2luZUlkKT8ubmFtZVZhY2NpbmVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIF1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xyXG4gICAgICAgIGxhYmVsQ29sOiB7IHNwYW46IDQgfSxcclxuICAgICAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDE2IH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpc2FibGVkRGF0ZSA9IChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQgPiBtb21lbnQoKS5lbmRPZignZGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWplY3V0YXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVwb3J0ZShbXSlcclxuICAgICAgICBsZXQgdl9vYmogPSBhd2FpdCBmdW5jaW9uZXMudmFsaWRhdGVGb3JtKGZvcm0pO1xyXG4gICAgICAgIGlmICh2X29iai52YWx1ZSkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgIGlmIChnZXRGaWVsZFZhbHVlKFwiZmlsdGVyXCIpID09IFwic3RhdGVWYWNjaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zR2V0KGNvbmZpZy5pcF93ZWIgKyBcIi9wZXJzb24/dmFjY2luZT1cIiArIGdldEZpZWxkVmFsdWUoXCJzdGF0ZVZhY2NpbmVcIikudHJpbSgpICsgXCImcm9sSWQ9MlwiLCB7fSwge30sIGNvbmZpZy50aW1lT3V0LCBzb3VyY2UpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVwb3J0ZShyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIE1vZGFsS3J1Z2VyKGVyci5tZXNzYWdlIHx8IFwiRXJyb3IgaW5lc3BlcmFkbywgaW50ZW50ZSBkZSBudWV2b1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdldEZpZWxkVmFsdWUoXCJmaWx0ZXJcIikgPT0gXCJ0eXBlVmFjY2luZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBheGlvc0dldChjb25maWcuaXBfd2ViICsgXCIvcGVyc29uP3ZhY2NpbmVJZD1cIiArIGdldEZpZWxkVmFsdWUoXCJ0eXBlVmFjY2luZVwiKSArIFwiJnJvbElkPTJcIiwge30sIHt9LCBjb25maWcudGltZU91dCwgc291cmNlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlcG9ydGUocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zR2V0KGNvbmZpZy5pcF93ZWIgKyBcIi9wZXJzb24/cm9sSWQ9MlwiLCB7fSwge30sIGNvbmZpZy50aW1lT3V0LCBzb3VyY2UpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVwb3J0ZShyZXNwb25zZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmRhdGVWYWNjaW5lID49IGdldEZpZWxkVmFsdWUoXCJyYW5nZURhdGVcIilbMF0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSAmJiBpdGVtLmRhdGVWYWNjaW5lIDw9IGdldEZpZWxkVmFsdWUoXCJyYW5nZURhdGVcIilbMV0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkpXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgTW9kYWxLcnVnZXIoZXJyLm1lc3NhZ2UgfHwgXCJFcnJvciBpbmVzcGVyYWRvLCBpbnRlbnRlIGRlIG51ZXZvXCIsIFwiZXJyb3JcIilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbktydWdlcihcImluZm9cIiwgXCJLcnVnZXJcIiwgXCJGb3JtdWxhcmlvIGludsOhbGlkb1wiLCAzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD0naW5pY2lvJyBjbGFzc05hbWU9XCJBcHBcIiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDE1cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlJlcG9ydGUgZGUgVmFjdW5hY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgZXh0cmE9e1tcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIga2V5PVwiMVwiIGljb249J3RodW5kZXJib2x0JyBkaXNhYmxlZD17TG9hZGluZ30gb25DbGljaz17ZWplY3V0YXJ9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9J0V4cG9ydGFyJyBrZXk9XCIyXCIgdHlwZT1cInByaW1hcnlcIiBpY29uPSdmaWxlLWV4Y2VsJyBkaXNhYmxlZD17TG9hZGluZyB8fCBSZXBvcnRlLmxlbmd0aCA9PSAwfSBvbkNsaWNrPXsoKSA9PiB7IGZjbl9leHBvcnRhcigpIH19ID48L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgIGxheW91dD0naG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syNCwgMTZdfSB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIiBhbGlnbj1cIm1pZGRsZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6ICcwIDAgNHB4IHJnYigxMTUsIDEyOSwgMTIxKScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syNF19IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHh4bD17MTJ9IHhsPXsxMn0gbGc9ezI0fSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJDcml0ZXJpb1wiIGNsYXNzTmFtZT1cImNhcmRfdmVudGFcIiB7Li4uZm9ybUl0ZW1MYXlvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpZWxkRGVjb3JhdG9yKCdmaWx0ZXInLCB7IGluaXRpYWxWYWx1ZTogXCJzdGF0ZVZhY2NpbmVcIiwgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gaW5jb21wbGV0bycgfV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJjaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e1wic3RhdGVWYWNjaW5lXCJ9IGtleT17XCJzdGF0ZVZhY2NpbmVcIn0gPkVzdGFkbyBkZSB2YWN1bmFjacOzbjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17XCJ0eXBlVmFjY2luZVwifSBrZXk9e1widHlwZVZhY2NpbmVcIn0gPlRpcG8gZGUgdmFjdW5hPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtcInJhbmdlRGF0ZVwifSBrZXk9e1wicmFuZ2VEYXRlXCJ9ID5SYW5nbyBkZSBmZWNoYSBkZSB2YWN1bmFjacOzbjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHh4bD17MTJ9IHhsPXsxMn0gbGc9ezI0fSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fSAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGaWVsZFZhbHVlKFwiZmlsdGVyXCIpID09IFwic3RhdGVWYWNjaW5lXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJFc3RhZG9cIiBjbGFzc05hbWU9XCJjYXJkX3ZlbnRhXCIgey4uLmZvcm1JdGVtTGF5b3V0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpZWxkRGVjb3JhdG9yKCdzdGF0ZVZhY2NpbmUnLCB7IHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0NhbXBvIGluY29tcGxldG8nIH1dIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e1widmFjdW5hZG9cIn0ga2V5PXtcInZhY3VuYWRvXCJ9ID5WYWN1bmFkbzwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtcIm5vdmFjdW5hZG9cIn0ga2V5PXtcIm5vdmFjdW5hZG9cIn0gPk5vIHZhY3VuYWRvPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e1wiIFwifSBrZXk9e1wiIFwifSA+U2luIGFjdHVhbGl6YXIgSW5mb3JtYWNpw7NuPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdldEZpZWxkVmFsdWUoXCJmaWx0ZXJcIikgPT0gXCJ0eXBlVmFjY2luZVwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlRpcG9cIiBjbGFzc05hbWU9XCJjYXJkX3ZlbnRhXCIgey4uLmZvcm1JdGVtTGF5b3V0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RmllbGREZWNvcmF0b3IoJ3R5cGVWYWNjaW5lJywgeyBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyBpbmNvbXBsZXRvJyB9XSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFjY2luZS5tYXAoaXRlbSA9PiA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17aXRlbS5pZH0ga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lVmFjY2luZX08L1NlbGVjdC5PcHRpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZlY2hhc1wiIGNsYXNzTmFtZT1cImNhcmRfdmVudGFcIiB7Li4uZm9ybUl0ZW1MYXlvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpZWxkRGVjb3JhdG9yKCdyYW5nZURhdGUnLCB7IHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0NhbXBvIGluY29tcGxldG8nIH1dIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2VzX0VTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkRELU1NLVlZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17ZGlzYWJsZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogJzAgMCA0cHggcmdiKDExNSwgMTI5LCAxMjEpJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzI0XX0gdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MjR9IHhzPXsyNH0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1JlcG9ydGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dLZXk9eyhyZWNvcmQsIGluZGV4KSA9PiBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXt7IHg6IHRydWUsIHk6IDM0MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0uY3JlYXRlKCkoQXBwKTtcclxuIiwiaW1wb3J0IHsgbm90aWZpY2F0aW9uLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbktydWdlciA9ICh0eXBlLCB0aXR1bG8sIG1lc3NhZ2UsIGR1cmF0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uW3R5cGVdKHtcclxuICAgICAgICBtZXNzYWdlOiB0aXR1bG8sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IG1lc3NhZ2UsXHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWxLcnVnZXIgPSAoY29udGVudCwgdHlwZSA9IFwic3VjY2Vzc1wiLCB0aXRsZSA9IFwiS3J1Z2VyXCIpID0+IHtcclxuICAgIHJldHVybiBNb2RhbFt0eXBlXShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHRpbWVPdXQ6IDEwMDAwLFxyXG4gIHRpbWVPdXQyOiAzMDAwMCxcclxuICB0aW1lT3V0MzogOTAwMDAsXHJcbiAgdGltZU91dDQ6IDE4MDAwMCxcclxuICBpcF93ZWI6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAnLFxyXG4gIHBvcnRfd2ViOiAzMDAwLFxyXG59O1xyXG4iLCJjb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gYmFzZTY0X2RlY29kZShkYXRhKSB7XHJcbiAgICB2YXIgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89LSc7XHJcbiAgICB2YXIgbzEsIG8yLCBvMywgaDEsIGgyLCBoMywgaDQsIGJpdHMsIGkgPSAwLFxyXG4gICAgICAgIGFjID0gMCxcclxuICAgICAgICBkZWMgPSAnJyxcclxuICAgICAgICB0bXBfYXJyID0gW107XHJcblxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSArPSAnJztcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgICAgLy8gdW5wYWNrIGZvdXIgaGV4ZXRzIGludG8gdGhyZWUgb2N0ZXRzIHVzaW5nIGluZGV4IHBvaW50cyBpbiBiNjRcclxuICAgICAgICBoMSA9IGI2NC5pbmRleE9mKGRhdGEuY2hhckF0KGkrKykpO1xyXG4gICAgICAgIGgyID0gYjY0LmluZGV4T2YoZGF0YS5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgaDMgPSBiNjQuaW5kZXhPZihkYXRhLmNoYXJBdChpKyspKTtcclxuICAgICAgICBoNCA9IGI2NC5pbmRleE9mKGRhdGEuY2hhckF0KGkrKykpO1xyXG5cclxuICAgICAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMiB8IGgzIDw8IDYgfCBoNDtcclxuXHJcbiAgICAgICAgbzEgPSBiaXRzID4+IDE2ICYgMHhmZjtcclxuICAgICAgICBvMiA9IGJpdHMgPj4gOCAmIDB4ZmY7XHJcbiAgICAgICAgbzMgPSBiaXRzICYgMHhmZjtcclxuXHJcbiAgICAgICAgaWYgKGgzID09IDY0KSB7XHJcbiAgICAgICAgICAgIHRtcF9hcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGg0ID09IDY0KSB7XHJcbiAgICAgICAgICAgIHRtcF9hcnJbYWMrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG8xLCBvMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG1wX2FyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yLCBvMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSB3aGlsZSAoaSA8IGRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICBkZWMgPSB0bXBfYXJyLmpvaW4oJycpO1xyXG5cclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGRlYy5yZXBsYWNlKC9cXDArJC8sICcnKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYXNlNjRfZW5jb2RlKGRhdGEpIHtcclxuICAgIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG4gICAgdmFyIG8xLCBvMiwgbzMsIGgxLCBoMiwgaDMsIGg0LCBiaXRzLCBpID0gMCxcclxuICAgICAgICBhYyA9IDAsXHJcbiAgICAgICAgZW5jID0gJycsXHJcbiAgICAgICAgdG1wX2FyciA9IFtdO1xyXG5cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoZGF0YSkpO1xyXG5cclxuICAgIGRvIHtcclxuICAgICAgICAvLyBwYWNrIHRocmVlIG9jdGV0cyBpbnRvIGZvdXIgaGV4ZXRzXHJcbiAgICAgICAgbzEgPSBkYXRhLmNoYXJDb2RlQXQoaSsrKTtcclxuICAgICAgICBvMiA9IGRhdGEuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgIG8zID0gZGF0YS5jaGFyQ29kZUF0KGkrKyk7XHJcblxyXG4gICAgICAgIGJpdHMgPSBvMSA8PCAxNiB8IG8yIDw8IDggfCBvMztcclxuXHJcbiAgICAgICAgaDEgPSBiaXRzID4+IDE4ICYgMHgzZjtcclxuICAgICAgICBoMiA9IGJpdHMgPj4gMTIgJiAweDNmO1xyXG4gICAgICAgIGgzID0gYml0cyA+PiA2ICYgMHgzZjtcclxuICAgICAgICBoNCA9IGJpdHMgJiAweDNmO1xyXG5cclxuICAgICAgICAvLyB1c2UgaGV4ZXRzIHRvIGluZGV4IGludG8gYjY0LCBhbmQgYXBwZW5kIHJlc3VsdCB0byBlbmNvZGVkIHN0cmluZ1xyXG4gICAgICAgIHRtcF9hcnJbYWMrK10gPSBiNjQuY2hhckF0KGgxKSArIGI2NC5jaGFyQXQoaDIpICsgYjY0LmNoYXJBdChoMykgKyBiNjQuY2hhckF0KGg0KTtcclxuICAgIH0gd2hpbGUgKGkgPCBkYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgZW5jID0gdG1wX2Fyci5qb2luKCcnKTtcclxuXHJcbiAgICB2YXIgciA9IGRhdGEubGVuZ3RoICUgMztcclxuXHJcbiAgICByZXR1cm4gKHIgPyBlbmMuc2xpY2UoMCwgciAtIDMpIDogZW5jKSArICc9PT0nLnNsaWNlKHIgfHwgMyk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICB2YWxpZGF0ZUZvcm06IChmb3JtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyb3IsIHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjb2RpZmljYXI6ICh0ZXh0bykgPT4ge1xyXG4gICAgICAgIGxldCB4ID0gdGV4dG87XHJcbiAgICAgICAgbGV0IGsgPSBiYXNlNjRfZW5jb2RlKHgpO1xyXG4gICAgICAgIHJldHVybiBrXHJcbiAgICB9LFxyXG5cclxuICAgIGRlY29kaWZpY2FyOiAodGV4dG8pID0+IHtcclxuICAgICAgICBsZXQgeCA9IHRleHRvO1xyXG4gICAgICAgIGxldCBrID0gYmFzZTY0X2RlY29kZSh4KTtcclxuICAgICAgICByZXR1cm4ga1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgY2FsY3VsYUVkYWQ6IChmZWNoYV9uYWMpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGEgPSBtb21lbnQoKTtcclxuICAgICAgICB2YXIgYiA9IG1vbWVudChmZWNoYV9uYWMpO1xyXG5cclxuICAgICAgICB2YXIgeWVhcnMgPSBhLmRpZmYoYiwgJ3llYXInKTtcclxuICAgICAgICBiLmFkZCh5ZWFycywgJ3llYXJzJyk7XHJcblxyXG4gICAgICAgIHZhciBtb250aHMgPSBhLmRpZmYoYiwgJ21vbnRocycpO1xyXG4gICAgICAgIGIuYWRkKG1vbnRocywgJ21vbnRocycpO1xyXG5cclxuICAgICAgICB2YXIgZGF5cyA9IGEuZGlmZihiLCAnZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoeWVhcnMgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAobW9udGhzIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXlzIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtb250aHMgKyAnIG1lcyAnICsgZGF5cyArICcgZGlhJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vbnRocyArICcgbWVzICcgKyBkYXlzICsgJyBkaWFzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5cyA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9udGhzICsgJyBtZXNlcyAnICsgZGF5cyArICcgZGlhJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vbnRocyArICcgbWVzZXMgJyArIGRheXMgKyAnIGRpYXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoeWVhcnMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeWVhcnMgKyAnIGHDsW8nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHllYXJzICsgJyBhw7FvcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB5ZWFycztcclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRhdGVDZWR1bGE6IChjZWR1bGEpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgLy9QcmVndW50YW1vcyBzaSBsYSBjZWR1bGEgY29uc3RhIGRlIDEwIGRpZ2l0b3NcclxuICAgICAgICAgICAgaWYgKGNlZHVsYS5sZW5ndGggPT0gMTApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL09idGVuZW1vcyBlbCBkaWdpdG8gZGUgbGEgcmVnaW9uIHF1ZSBzb25sb3MgZG9zIHByaW1lcm9zIGRpZ2l0b3NcclxuICAgICAgICAgICAgICAgIHZhciBkaWdpdG9fcmVnaW9uID0gY2VkdWxhLnN1YnN0cmluZygwLCAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1ByZWd1bnRvIHNpIGxhIHJlZ2lvbiBleGlzdGUgZWN1YWRvciBzZSBkaXZpZGUgZW4gMjQgcmVnaW9uZXNcclxuICAgICAgICAgICAgICAgIGlmIChkaWdpdG9fcmVnaW9uID49IDEgJiYgZGlnaXRvX3JlZ2lvbiA8PSAyNCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWlnbyBlbCB1bHRpbW8gZGlnaXRvXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVsdGltb19kaWdpdG8gPSBjZWR1bGEuc3Vic3RyaW5nKDksIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BZ3J1cG8gdG9kb3MgbG9zIHBhcmVzIHkgbG9zIHN1bW9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZXMgPSBwYXJzZUludChjZWR1bGEuc3Vic3RyaW5nKDEsIDIpKSArIHBhcnNlSW50KGNlZHVsYS5zdWJzdHJpbmcoMywgNCkpICsgcGFyc2VJbnQoY2VkdWxhLnN1YnN0cmluZyg1LCA2KSkgKyBwYXJzZUludChjZWR1bGEuc3Vic3RyaW5nKDcsIDgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BZ3J1cG8gbG9zIGltcGFyZXMsIGxvcyBtdWx0aXBsaWNvIHBvciB1biBmYWN0b3IgZGUgMiwgc2kgbGEgcmVzdWx0YW50ZSBlcyA+IHF1ZSA5IGxlIHJlc3RhbW9zIGVsIDkgYSBsYSByZXN1bHRhbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybzEgPSBjZWR1bGEuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm8xID0gKG51bWVybzEgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJvMSA+IDkpIHsgdmFyIG51bWVybzEgPSAobnVtZXJvMSAtIDkpOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm8zID0gY2VkdWxhLnN1YnN0cmluZygyLCAzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJvMyA9IChudW1lcm8zICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVybzMgPiA5KSB7IHZhciBudW1lcm8zID0gKG51bWVybzMgLSA5KTsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJvNSA9IGNlZHVsYS5zdWJzdHJpbmcoNCwgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybzUgPSAobnVtZXJvNSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcm81ID4gOSkgeyB2YXIgbnVtZXJvNSA9IChudW1lcm81IC0gOSk7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybzcgPSBjZWR1bGEuc3Vic3RyaW5nKDYsIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm83ID0gKG51bWVybzcgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJvNyA+IDkpIHsgdmFyIG51bWVybzcgPSAobnVtZXJvNyAtIDkpOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm85ID0gY2VkdWxhLnN1YnN0cmluZyg4LCA5KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJvOSA9IChudW1lcm85ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVybzkgPiA5KSB7IHZhciBudW1lcm85ID0gKG51bWVybzkgLSA5KTsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1wYXJlcyA9IG51bWVybzEgKyBudW1lcm8zICsgbnVtZXJvNSArIG51bWVybzcgKyBudW1lcm85O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1N1bWEgdG90YWxcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VtYV90b3RhbCA9IChwYXJlcyArIGltcGFyZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2V4dHJhZW1vcyBlbCBwcmltZXJvIGRpZ2l0b1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmltZXJfZGlnaXRvX3N1bWEgPSBTdHJpbmcoc3VtYV90b3RhbCkuc3Vic3RyaW5nKDAsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL09idGVuZW1vcyBsYSBkZWNlbmEgaW5tZWRpYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2VuYSA9IChwYXJzZUludChwcmltZXJfZGlnaXRvX3N1bWEpICsgMSkgKiAxMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9PYnRlbmVtb3MgbGEgcmVzdGEgZGUgbGEgZGVjZW5hIGlubWVkaWF0YSAtIGxhIHN1bWFfdG90YWwgZXN0byBub3MgZGEgZWwgZGlnaXRvIHZhbGlkYWRvclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWdpdG9fdmFsaWRhZG9yID0gZGVjZW5hIC0gc3VtYV90b3RhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9TaSBlbCBkaWdpdG8gdmFsaWRhZG9yIGVzID0gYSAxMCB0b21hIGVsIHZhbG9yIGRlIDBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlnaXRvX3ZhbGlkYWRvciA9PSAxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpZ2l0b192YWxpZGFkb3IgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYW1vcyBxdWUgZWwgZGlnaXRvIHZhbGlkYWRvciBzZWEgaWd1YWwgYWwgZGUgbGEgY2VkdWxhXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZ2l0b192YWxpZGFkb3IgPT0gdWx0aW1vX2RpZ2l0bykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDw6lkdWxhIGNvcnJlY3RhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDw6lkdWxhIGluY29ycmVjdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1wcmltaW1vcyBlbiBjb25zb2xhIHNpIGxhIHJlZ2lvbiBubyBwZXJ0ZW5lY2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVzdGEgY8OpZHVsYSBubyBwZXJ0ZW5lY2UgYSBuaW5ndW5hIHJlZ2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vaW1wcmltaW1vcyBlbiBjb25zb2xhIHNpIGxhIGNlZHVsYSB0aWVuZSBtYXMgbyBtZW5vcyBkZSAxMCBkaWdpdG9zXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDw6lkdWxhIGRlYmUgdGVuZXIgb2JsaWdhdG9yaWFtZW50ZSAxMCBkw61naXRvc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmNvbnN0IGhlYWQgPSB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG59XHJcbmV4cG9ydCBjb25zdCBheGlvc1Bvc3QgPSAodXJsLCBkYXRhID0ge30sIGhlYWRlcnMgPSBoZWFkLCB0aW1lb3V0ID0gMCwgc291cmNlKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIGRhdGEsIHtcclxuICAgICAgICB0aW1lb3V0LFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZT8udG9rZW5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc1B1dCA9ICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVycyA9IGhlYWQsIHRpbWVvdXQgPSAwLCBzb3VyY2UpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wdXQodXJsLCBkYXRhLCB7XHJcbiAgICAgICAgdGltZW91dCxcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2U/LnRva2VuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NQYXRjaCA9ICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVycyA9IGhlYWQsIHRpbWVvdXQgPSAwLCBzb3VyY2UpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCh1cmwsIGRhdGEsIHtcclxuICAgICAgICB0aW1lb3V0LFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZT8udG9rZW5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc0RlbGV0ZSA9ICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVycyA9IGhlYWQsIHRpbWVvdXQgPSAwLCBzb3VyY2UpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgdGltZW91dCxcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2U/LnRva2VuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NHZXQgPSAodXJsLCBwYXJhbXMgPSB7fSwgaGVhZGVycyA9IHt9LCB0aW1lb3V0ID0gMCwgc291cmNlKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgIHBhcmFtc1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRpbWVvdXQsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlPy50b2tlblxyXG4gICAgfSlcclxufSAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVmFsaWRhdGVTZXNpb24ocmVkaXJlY3RMb2dpbiA9IHRydWUsIHJlZGlyZWN0U2lkZXIgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcclxuICAgICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RTaWRlcikgUm91dGVyLnB1c2goJy9zaWRlcicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0TG9naW4odHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2dpbikgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICAgIHNldExvZ2luKGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvZ2luKSBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgICAgc2V0TG9naW4oZmFsc2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gaXNMb2dpblxyXG59IiwiaW1wb3J0IExvYWRlciBmcm9tICcvY29tcG9uZW50cy9Mb2FkZXIvY19Mb2FkZXInXHJcbmltcG9ydCB1c2VWYWxpZGF0ZVNlc2lvbiBmcm9tIFwiLi4vLi4vaG9vay92YWxpZGF0ZVNlc2lvblwiO1xyXG5pbXBvcnQgQ29tcG9uZW50U2lkZXIgZnJvbSAnLi4vc2lkZXIvc2lkZXInXHJcblxyXG5mdW5jdGlvbiBsb2dpbigpIHtcclxuICAgIGNvbnN0IGlzTG9naW4gPSB1c2VWYWxpZGF0ZVNlc2lvbih0cnVlLCBmYWxzZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNMb2dpbiA/IDxDb21wb25lbnRTaWRlciAvPiA6IDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiIsImltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ29udGVuaWRvIGZyb20gXCIvY29tcG9uZW50cy9Sb3V0ZXIvY19Sb3V0ZXJcIlxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy9jb25maWcvZGVmYXVsdCdcclxuaW1wb3J0IHsgYXhpb3NHZXQgfSBmcm9tIFwiL2NvbmZpZy9odHRwXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb3BpY01lbnUgZnJvbSBcIi9jb21wb25lbnRzL1RvcGljTWVudVwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXJcIjtcclxuaW1wb3J0IENfTG9hZGVyIGZyb20gJy9jb21wb25lbnRzL0xvYWRlci9jX0xvYWRlcic7XHJcbmltcG9ydCB7IGNoYW5nZVVybCB9IGZyb20gJy9zcmMvZmVhdHVyZXMvTWVudS9yb3V0ZU1lbnUnO1xyXG5pbXBvcnQgeyBjaGFuZ2VMb2FkaW5nIH0gZnJvbSAnL3NyYy9mZWF0dXJlcy9pbml0U2lkZXIvaW5pdCc7XHJcbmltcG9ydCB7IE1vZGFsS3J1Z2VyIH0gZnJvbSBcIi9jb25maWcvYW50X2NvbXBvbmVudHNcIjtcclxuXHJcbnZhciBDYW5jZWxUb2tlbiA9IG51bGxcclxudmFyIHNvdXJjZSA9IG51bGxcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IHJvdXRlTWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJvdXRlTWVudS52YWx1ZSlcclxuICAgIGNvbnN0IExvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pbml0U2lkZXIuTG9hZGluZylcclxuICAgIGNvbnN0IFtkYXRhVXNlciwgc2V0RGF0YVVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2RhdGFNZW51LCBzZXREYXRhTWVudV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbVmlzaWJsZU1vdmlsLCBzZXRWaXNpYmxlTW92aWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUxvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgICAgIENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKVxyXG4gICAgICAgICAgICBzZXREYXRhVXNlcih1c2VyKVxyXG4gICAgICAgICAgICBheGlvc0dldChjb25maWcuaXBfd2ViICsgXCIvcm9sP2lkPVwiICsgdXNlci5pZFJvbCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNb2RhbEtydWdlcihcIk9jdXJyaW8gdW4gcHJvYmxlbWEgYWwgcmV0b3JuYXIgZGF0b3MuXCIsIFwid2FyblwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNb2RhbEtydWdlcihcIlVzdWFyaW8gc2luIFJvbC5cIiwgXCJ3YXJuXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbMF0ubmFtZVJvbCA9PSBcIkFETUlOSVNUUkFET1JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFNZW51KFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcGNpb25fbWVudTogXCJFTVBMRUFET1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbm86IFwidXNlci1hZGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX21lbnU6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfbWVudV9wYWRyZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzcGFkcmU6IFwiTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudV9hY3Rpdm86IFwiU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZW46IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydXRhOiBcIi9lbXBsZWFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXBjaW9uX21lbnU6IFwiUkVQT1JURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbm86IFwiY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tZW51OiBcIjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX21lbnVfcGFkcmU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3BhZHJlOiBcIk5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVfYWN0aXZvOiBcIlNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVuOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnV0YTogXCIvcmVwb3J0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VVcmwoXCIvZW1wbGVhZG9cIikpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlWzBdLm5hbWVSb2wgPT0gXCJFTVBMRUFET1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YU1lbnUoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwY2lvbl9tZW51OiBcIlBFUkZJTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbm86IFwidXNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfbWVudTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tZW51X3BhZHJlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNwYWRyZTogXCJuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51X2FjdGl2bzogXCJTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1dGE6IFwiL3BlcmZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZVVybChcIi9wZXJmaWxcIikpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNb2RhbEtydWdlcihcIlJvbCBubyBpZGVudGlmaWNhZG8uXCIsIFwid2FyblwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YVVzZXIoeyAuLi51c2VyLCBuYW1lUm9sOiByZXNwb25zZVswXS5uYW1lUm9sIH0pXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIEpTT04uc3RyaW5naWZ5KHsgLi4udXNlciwgbmFtZVJvbDogcmVzcG9uc2VbMF0ubmFtZVJvbCB9KSlcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUxvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc291cmNlPy5jYW5jZWwoJ1BldGljaW9uIGNhbmNlbGFkYS4nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlVmlzaWJsZSA9IChib29sKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZU1vdmlsKGJvb2wpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VTZWxlY3RlZEtleSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBvcGNpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAob3BjaW9uKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgICBzZXRWaXNpYmxlTW92aWwoZmFsc2UpXHJcbiAgICAgICAgICAgIGJ0bkNoYW5nZUNsaWNrKGtleSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYnRuQ2hhbmdlQ2xpY2sgPSAocF9ydXRhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goY2hhbmdlVXJsKHBfcnV0YSkpXHJcblxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBNZW51ID0gKFxyXG4gICAgICAgIDxUb3BpY01lbnVcclxuICAgICAgICAgICAgZGF0YU1lbnU9e2RhdGFNZW51fVxyXG4gICAgICAgICAgICBzZWxlY3RlZEtleT17cm91dGVNZW51fVxyXG4gICAgICAgICAgICBjaGFuZ2VTZWxlY3RlZEtleT17Y2hhbmdlU2VsZWN0ZWRLZXl9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgIDxDX0xvYWRlciB2aXNpYmxlPXtMb2FkaW5nfSAvPlxyXG4gICAgICAgICAgICA8TGF5b3V0XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxOYXZCYXIgbWVudT17TWVudX0gdmlzaWJsZU1vdmlsPXtWaXNpYmxlTW92aWx9IHVwZGF0ZVZpc2libGU9e3VwZGF0ZVZpc2libGV9IGRhdGFVc2VyPXtkYXRhVXNlcn0gLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDxMYXlvdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogJzEwMHZoJywgcGFkZGluZ1RvcDogJzQ4cHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2lkZUJhciBtZW51PXtNZW51fSAvPlxyXG4gICAgICAgICAgICAgICAgPExheW91dFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQ29udGVudCBjbGFzc05hbWU9XCJjb250ZW50blwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbmlkbyB1cmw9e3JvdXRlTWVudX0gZGF0YVVzZXI9e2RhdGFVc2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVNZW51ID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3JvdXRlTWVudScsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICB2YWx1ZTogJy8nLFxyXG4gICAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBjaGFuZ2VVcmw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlPWFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY29uc3QgeyBjaGFuZ2VVcmwgfSA9IHJvdXRlTWVudS5hY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlTWVudS5yZWR1Y2VyIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTaWRlciA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdpbml0U2lkZXInLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGNoYW5nZUxvYWRpbmc6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLkxvYWRpbmc9YWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9LFxyXG5cclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHsgY2hhbmdlTG9hZGluZyB9ID0gaW5pdFNpZGVyLmFjdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgaW5pdFNpZGVyLnJlZHVjZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC10YWJsZS1zYXZlYXMtZXhjZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VzX0VTXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiU3BpbiIsIkljb24iLCJDX0xvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm1lbnNhamUiLCJjb21wb25lbnREaWRNb3VudCIsIm1zZyIsInNldFN0YXRlIiwicmVuZGVyIiwiYW50SWNvbiIsInZpc2libGUiLCJDX0xvYWRlckhpam8iLCJtc2oiLCJEcmF3ZXIiLCJCdXR0b24iLCJMYXlvdXQiLCJNZW51IiwiRHJvcGRvd24iLCJSb3V0ZXIiLCJjaGFuZ2VMb2FkaW5nIiwiY2hhbmdlVXJsIiwidXNlRGlzcGF0Y2giLCJOYXZCYXIiLCJtZW51IiwidmlzaWJsZU1vdmlsIiwidXBkYXRlVmlzaWJsZSIsImRhdGFVc2VyIiwiZGlzcGF0Y2giLCJuYW1lIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJuYW1lUm9sIiwibWFyZ2luVG9wIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJtYXJnaW5MZWZ0Iiwic3BsaXQiLCJSZXN1bHQiLCJWX2VtcGxlYWRvIiwiVl9wZXJmaWwiLCJWX3JlcG9ydGUiLCJDb21wb25lbnROb3RGb3VuZCIsIkFwcCIsInVybCIsIlNpZGVCYXIiLCJvdmVyZmxvdyIsImhlaWdodCIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImJveFNoYWRvdyIsIlRvb2x0aXAiLCJTdWJNZW51IiwiVG9waWNNZW51IiwiZGF0YU1lbnUiLCJzZWxlY3RlZEtleSIsImNoYW5nZVNlbGVjdGVkS2V5Iiwic3R5bGVkVG9waWNzIiwibWFwIiwiZmlsYSIsImlzcGFkcmUiLCJpZF9tZW51X3BhZHJlIiwiaWNvbm8iLCJkZXNjcmlwY2lvbl9tZW51IiwiZmlsYTIiLCJpZF9tZW51IiwibWVudV9hY3Rpdm8iLCJydXRhIiwiZmlsYTMiLCJGb3JtIiwiSW5wdXQiLCJUYWJsZSIsIkRpdmlkZXIiLCJNb2RhbCIsIlBhZ2VIZWFkZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiUG9wY29uZmlybSIsImF4aW9zIiwiTW9kYWxLcnVnZXIiLCJub3RpZmljYXRpb25LcnVnZXIiLCJheGlvc0dldCIsImF4aW9zUG9zdCIsImF4aW9zUHV0IiwiYXhpb3NEZWxldGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbmZpZyIsImZ1bmNpb25lcyIsIkNhbmNlbFRva2VuIiwic291cmNlIiwiZW1wbGVhZG8iLCJmb3JtIiwiRW1wbGVhZG8iLCJzZXRFbXBsZWFkbyIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kRm9ybSIsInNldE1vZEZvcm0iLCJmb3JtdWxhcmlvIiwic2V0Rm9ybSIsImlkIiwidW5kZWZpbmVkIiwiaWRlbnRpZmljYXRpb24iLCJsYXN0TmFtZSIsImVtYWlsIiwidXNlck5hbWUiLCJwYXNzd29yZCIsImRhdGVCaXJ0aCIsImFkZHJlc3MiLCJjZWxsUGhvbmUiLCJ2YWNjaW5lIiwidmFjY2luZUlkIiwiZGF0ZVZhY2NpbmUiLCJkb3NlTnVtYmVyIiwicm9sSWQiLCJnZXRQZXJzb24iLCJpcF93ZWIiLCJ0aW1lT3V0IiwidGhlbiIsInJlcyIsInJlc3BvbnNlIiwiZGF0YSIsInBlcnNvbiIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImZpbmFsbHkiLCJkZWxldGVQZXJzb24iLCJjYW5jZWwiLCJvbkNoYW5nZUJ1c3F1ZWRhIiwidmFsIiwidHJpbSIsImZpbHRlciIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJlZGl0UGVyc29uIiwicmVjb3JkIiwiY29sdW1ucyIsImFsaWduIiwidGl0bGUiLCJrZXkiLCJ3aWR0aCIsInRleHQiLCJkYXRhSW5kZXgiLCJzdHlsZSIsInRleHRBbGlnbiIsImNoaWxkcmVuIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJzZXRGaWVsZHNWYWx1ZSIsImdldEZpZWxkVmFsdWUiLCJyZXNldEZpZWxkcyIsImNsZWFuSW5wdXRzIiwic2F2ZSIsInZhbGlkYXRlIiwidmFsaWRhdGVGb3JtIiwidmFsdWUiLCJ2YWxpZGF0ZUNlZHVsYSIsInN0YXR1cyIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiZXJyb3IiLCJpc0NhbmNlbCIsInZhbGlkYXRlUmVwZWF0ZWQiLCJsZW5ndGgiLCJvbktleVByZXNzTnVtYmVyIiwiZXZlbnQiLCJjaGFyQ29kZSIsInByZXZlbnREZWZhdWx0Iiwib25LZXRQcmVzc0xldHRlcnMiLCJlIiwia2V5Q29kZSIsIndoaWNoIiwidGVzdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhZ2VTaXplIiwieCIsImRpc2FibGVkIiwibG9hZGluZyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJpbml0aWFsVmFsdWUiLCJydWxlcyIsInJlcXVpcmVkIiwibWluIiwibWF4IiwidHlwZSIsImNyZWF0ZSIsIlNlbGVjdCIsIkRhdGVQaWNrZXIiLCJtb21lbnQiLCJzZXRWYWNjaW5lIiwic2V0TXNnIiwiZ2V0VmFjY2luZSIsImNvbnRlbnQiLCJkaXNhYmxlZERhdGUiLCJjdXJyZW50IiwiZW5kT2YiLCJmb3JtYXQiLCJwYWRkaW5nQm90dG9tIiwibmFtZVZhY2NpbmUiLCJSYW5nZVBpY2tlciIsIkV4Y2VsIiwiZXNfRVMiLCJSZXBvcnRlIiwic2V0UmVwb3J0ZSIsImZjbl9leHBvcnRhciIsImV4Y2VsIiwiYWRkU2hlZXQiLCJzZXRUQm9keVN0eWxlIiwiYm9yZGVyIiwic2V0VEhlYWRTdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsInYiLCJoIiwiYm9sZCIsInNldFJvd0hlaWdodCIsImFkZENvbHVtbnMiLCJhZGREYXRhU291cmNlIiwic2F2ZUFzIiwiZmluZCIsImZvcm1JdGVtTGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsImVqZWN1dGFyIiwidl9vYmoiLCJpbmRleCIsInkiLCJub3RpZmljYXRpb24iLCJ0aXR1bG8iLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInRpbWVPdXQyIiwidGltZU91dDMiLCJ0aW1lT3V0NCIsInBvcnRfd2ViIiwicmVxdWlyZSIsImJhc2U2NF9kZWNvZGUiLCJiNjQiLCJvMSIsIm8yIiwibzMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJpdHMiLCJpIiwiYWMiLCJkZWMiLCJ0bXBfYXJyIiwiY2hhckF0Iiwiam9pbiIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsInJlcGxhY2UiLCJiYXNlNjRfZW5jb2RlIiwiZW5jIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjaGFyQ29kZUF0IiwiciIsInNsaWNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2YWxpZGF0ZUZpZWxkcyIsInZhbHVlcyIsImNvZGlmaWNhciIsInRleHRvIiwiayIsImRlY29kaWZpY2FyIiwiY2FsY3VsYUVkYWQiLCJmZWNoYV9uYWMiLCJhIiwiYiIsInllYXJzIiwiZGlmZiIsImFkZCIsIm1vbnRocyIsImRheXMiLCJjb25zb2xlIiwibG9nIiwiY2VkdWxhIiwiZGlnaXRvX3JlZ2lvbiIsInVsdGltb19kaWdpdG8iLCJwYXJlcyIsInBhcnNlSW50IiwibnVtZXJvMSIsIm51bWVybzMiLCJudW1lcm81IiwibnVtZXJvNyIsIm51bWVybzkiLCJpbXBhcmVzIiwic3VtYV90b3RhbCIsInByaW1lcl9kaWdpdG9fc3VtYSIsImRlY2VuYSIsImRpZ2l0b192YWxpZGFkb3IiLCJoZWFkIiwiaGVhZGVycyIsInRpbWVvdXQiLCJwb3N0IiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsInB1dCIsImF4aW9zUGF0Y2giLCJwYXRjaCIsImRlbGV0ZSIsInBhcmFtcyIsImdldCIsInVzZVZhbGlkYXRlU2VzaW9uIiwicmVkaXJlY3RMb2dpbiIsInJlZGlyZWN0U2lkZXIiLCJpc0xvZ2luIiwic2V0TG9naW4iLCJnZXRJdGVtIiwiTG9hZGVyIiwiQ29tcG9uZW50U2lkZXIiLCJsb2dpbiIsInVzZVNlbGVjdG9yIiwiQ29udGVuaWRvIiwicm91dGVNZW51IiwiaW5pdFNpZGVyIiwic2V0RGF0YVVzZXIiLCJzZXREYXRhTWVudSIsIlZpc2libGVNb3ZpbCIsInNldFZpc2libGVNb3ZpbCIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJpZFJvbCIsIkFycmF5IiwiaXNBcnJheSIsIm9yZGVuIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImJvb2wiLCJvcGNpb24iLCJidG5DaGFuZ2VDbGljayIsInBfcnV0YSIsIm1pbkhlaWdodCIsInBhZGRpbmdUb3AiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==