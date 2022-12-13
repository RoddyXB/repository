(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
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

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Loader/c_Loader */ "./components/Loader/c_Loader.js");
/* harmony import */ var _hook_validateSesion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hook/validateSesion */ "./hook/validateSesion.js");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login */ "./pages/login/login.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\pages\\login\\index.js";





function login() {
  const isLogin = (0,_hook_validateSesion__WEBPACK_IMPORTED_MODULE_1__.default)(false, true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: isLogin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 27
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_login_login__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 40
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);

/***/ }),

/***/ "./pages/login/login.js":
/*!******************************!*\
  !*** ./pages/login/login.js ***!
  \******************************/
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
/* harmony import */ var _components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loader/c_Loader */ "./components/Loader/c_Loader.js");
/* harmony import */ var _config_ant_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/ant_components */ "./config/ant_components.js");
/* harmony import */ var _config_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/http */ "./config/http.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/default */ "./config/default.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_default__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/funciones_generales */ "./config/funciones_generales.js");
/* harmony import */ var _config_funciones_generales__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_funciones_generales__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Roddy\\Documents\\kruger\\front\\pages\\login\\login.js";










function Login({
  form
}) {
  const {
    getFieldDecorator
  } = form;
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const btn_login = async () => {
    if (!loading) {
      let validate = await _config_funciones_generales__WEBPACK_IMPORTED_MODULE_7___default().validateForm(form);

      if (validate.value) {
        var _form$getFieldValue;

        setLoading(true);
        (0,_config_http__WEBPACK_IMPORTED_MODULE_4__.axiosGet)((_config_default__WEBPACK_IMPORTED_MODULE_6___default().ip_web) + "/person?userName=" + ((_form$getFieldValue = form.getFieldValue("txtUserName")) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.toLowerCase()) + "&password=" + form.getFieldValue("txtPassword")).then(res => {
          const response = res.data;

          if (!Array.isArray(response)) {
            return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)("Ocurrio un problema al retornar datos.", "warn");
          }

          if (response.length == 0) {
            return (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)("Contraseña o usuario incorrecto.", "warn");
          }

          localStorage.setItem('token', JSON.stringify({
            'id': response[0].id,
            'name': response[0].name,
            'lastName': response[0].lastName,
            'idRol': response[0].rolId
          }));
          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/sider');
        }).catch(err => {
          (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.ModalKruger)(err.message || "Error inesperado, intente de nuevo", "error");
        }).finally(() => {
          setLoading(false);
        });
      } else {
        (0,_config_ant_components__WEBPACK_IMPORTED_MODULE_3__.notificationKruger)("warning", "Kruger", "Formulario inválido", 2);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loader_c_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {
      visible: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Layout, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Layout.Content, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "fon",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "containerLogin",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                style: {
                  width: '60%'
                },
                src: "img/logo_kruger.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                children: [getFieldDecorator('txtUserName', {
                  rules: [{
                    required: true,
                    message: 'Campo vacio'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                  prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
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
                }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, this), getFieldDecorator('txtPassword', {
                  rules: [{
                    required: true,
                    message: 'Campo vacio'
                  }]
                })( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
                  prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Icon, {
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
                }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
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

const LoginForm = antd__WEBPACK_IMPORTED_MODULE_1__.Form.create()(Login);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0QsTUFBTXdCLFNBQVMsR0FBR2xDLDZDQUFBLEdBQWNNLEtBQWQsQ0FBbEI7QUFDQSxpRUFBZTRCLFNBQWY7Ozs7Ozs7Ozs7O0FDaEhBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3J1Z2VyLy4vY29tcG9uZW50cy9Mb2FkZXIvY19Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vY29uZmlnL2FudF9jb21wb25lbnRzLmpzIiwid2VicGFjazovL2tydWdlci8uL2NvbmZpZy9kZWZhdWx0LmpzIiwid2VicGFjazovL2tydWdlci8uL2NvbmZpZy9mdW5jaW9uZXNfZ2VuZXJhbGVzLmpzIiwid2VicGFjazovL2tydWdlci8uL2NvbmZpZy9odHRwLmpzIiwid2VicGFjazovL2tydWdlci8uL2hvb2svdmFsaWRhdGVTZXNpb24uanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vcGFnZXMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8va3J1Z2VyLy4vcGFnZXMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8va3J1Z2VyL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2tydWdlci9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8va3J1Z2VyL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8va3J1Z2VyL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9rcnVnZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tydWdlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3BpbiwgSWNvbiB9IGZyb20gJ2FudGQnXHJcbmNsYXNzIENfTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBtZW5zYWplOiAnQ2FyZ2FuZG8sIGVzcGVyZSB1biBtb21lbnRvJyB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMubXNnID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnNhamU6ICdDYXJnYW5kbywgZXNwZXJlIHVuIG1vbWVudG8nIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnNhamU6IHRoaXMucHJvcHMubXNnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBhbnRJY29uID0gPEljb24gdHlwZT1cImxvYWRpbmctMy1xdWFydGVyc1wiIHNwaW4gLz47XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8U3BpbiBjbGFzc05hbWU9XCJsb2FkZXJcIiBpbmRpY2F0b3I9e2FudEljb259IHRpcD17dGhpcy5zdGF0ZS5tZW5zYWplfSBzcGlubmluZz17dGhpcy5wcm9wcy52aXNpYmxlfT5cclxuICAgICAgICAgICAgICAgIDwvU3Bpbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDX0xvYWRlcjsiLCJpbXBvcnQgeyBub3RpZmljYXRpb24sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uS3J1Z2VyID0gKHR5cGUsIHRpdHVsbywgbWVzc2FnZSwgZHVyYXRpb24pID0+IHtcclxuICAgIHJldHVybiBub3RpZmljYXRpb25bdHlwZV0oe1xyXG4gICAgICAgIG1lc3NhZ2U6IHRpdHVsbyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWVzc2FnZSxcclxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbEtydWdlciA9IChjb250ZW50LCB0eXBlID0gXCJzdWNjZXNzXCIsIHRpdGxlID0gXCJLcnVnZXJcIikgPT4ge1xyXG4gICAgcmV0dXJuIE1vZGFsW3R5cGVdKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICApXHJcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdGltZU91dDogMTAwMDAsXHJcbiAgdGltZU91dDI6IDMwMDAwLFxyXG4gIHRpbWVPdXQzOiA5MDAwMCxcclxuICB0aW1lT3V0NDogMTgwMDAwLFxyXG4gIGlwX3dlYjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMCcsXHJcbiAgcG9ydF93ZWI6IDMwMDAsXHJcbn07XHJcbiIsImNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcblxyXG5mdW5jdGlvbiBiYXNlNjRfZGVjb2RlKGRhdGEpIHtcclxuICAgIHZhciBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0tJztcclxuICAgIHZhciBvMSwgbzIsIG8zLCBoMSwgaDIsIGgzLCBoNCwgYml0cywgaSA9IDAsXHJcbiAgICAgICAgYWMgPSAwLFxyXG4gICAgICAgIGRlYyA9ICcnLFxyXG4gICAgICAgIHRtcF9hcnIgPSBbXTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhICs9ICcnO1xyXG5cclxuICAgIGRvIHtcclxuICAgICAgICAvLyB1bnBhY2sgZm91ciBoZXhldHMgaW50byB0aHJlZSBvY3RldHMgdXNpbmcgaW5kZXggcG9pbnRzIGluIGI2NFxyXG4gICAgICAgIGgxID0gYjY0LmluZGV4T2YoZGF0YS5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgaDIgPSBiNjQuaW5kZXhPZihkYXRhLmNoYXJBdChpKyspKTtcclxuICAgICAgICBoMyA9IGI2NC5pbmRleE9mKGRhdGEuY2hhckF0KGkrKykpO1xyXG4gICAgICAgIGg0ID0gYjY0LmluZGV4T2YoZGF0YS5jaGFyQXQoaSsrKSk7XHJcblxyXG4gICAgICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xyXG5cclxuICAgICAgICBvMSA9IGJpdHMgPj4gMTYgJiAweGZmO1xyXG4gICAgICAgIG8yID0gYml0cyA+PiA4ICYgMHhmZjtcclxuICAgICAgICBvMyA9IGJpdHMgJiAweGZmO1xyXG5cclxuICAgICAgICBpZiAoaDMgPT0gNjQpIHtcclxuICAgICAgICAgICAgdG1wX2FyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaDQgPT0gNjQpIHtcclxuICAgICAgICAgICAgdG1wX2FyclthYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUobzEsIG8yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0bXBfYXJyW2FjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShvMSwgbzIsIG8zKTtcclxuICAgICAgICB9XHJcbiAgICB9IHdoaWxlIChpIDwgZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgIGRlYyA9IHRtcF9hcnIuam9pbignJyk7XHJcblxyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoZGVjLnJlcGxhY2UoL1xcMCskLywgJycpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhc2U2NF9lbmNvZGUoZGF0YSkge1xyXG4gICAgdmFyIGI2NCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XHJcbiAgICB2YXIgbzEsIG8yLCBvMywgaDEsIGgyLCBoMywgaDQsIGJpdHMsIGkgPSAwLFxyXG4gICAgICAgIGFjID0gMCxcclxuICAgICAgICBlbmMgPSAnJyxcclxuICAgICAgICB0bXBfYXJyID0gW107XHJcblxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSk7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICAgIC8vIHBhY2sgdGhyZWUgb2N0ZXRzIGludG8gZm91ciBoZXhldHNcclxuICAgICAgICBvMSA9IGRhdGEuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgIG8yID0gZGF0YS5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgbzMgPSBkYXRhLmNoYXJDb2RlQXQoaSsrKTtcclxuXHJcbiAgICAgICAgYml0cyA9IG8xIDw8IDE2IHwgbzIgPDwgOCB8IG8zO1xyXG5cclxuICAgICAgICBoMSA9IGJpdHMgPj4gMTggJiAweDNmO1xyXG4gICAgICAgIGgyID0gYml0cyA+PiAxMiAmIDB4M2Y7XHJcbiAgICAgICAgaDMgPSBiaXRzID4+IDYgJiAweDNmO1xyXG4gICAgICAgIGg0ID0gYml0cyAmIDB4M2Y7XHJcblxyXG4gICAgICAgIC8vIHVzZSBoZXhldHMgdG8gaW5kZXggaW50byBiNjQsIGFuZCBhcHBlbmQgcmVzdWx0IHRvIGVuY29kZWQgc3RyaW5nXHJcbiAgICAgICAgdG1wX2FyclthYysrXSA9IGI2NC5jaGFyQXQoaDEpICsgYjY0LmNoYXJBdChoMikgKyBiNjQuY2hhckF0KGgzKSArIGI2NC5jaGFyQXQoaDQpO1xyXG4gICAgfSB3aGlsZSAoaSA8IGRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICBlbmMgPSB0bXBfYXJyLmpvaW4oJycpO1xyXG5cclxuICAgIHZhciByID0gZGF0YS5sZW5ndGggJSAzO1xyXG5cclxuICAgIHJldHVybiAociA/IGVuYy5zbGljZSgwLCByIC0gMykgOiBlbmMpICsgJz09PScuc2xpY2UociB8fCAzKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIHZhbGlkYXRlRm9ybTogKGZvcm0pID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnJvciwgdmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGNvZGlmaWNhcjogKHRleHRvKSA9PiB7XHJcbiAgICAgICAgbGV0IHggPSB0ZXh0bztcclxuICAgICAgICBsZXQgayA9IGJhc2U2NF9lbmNvZGUoeCk7XHJcbiAgICAgICAgcmV0dXJuIGtcclxuICAgIH0sXHJcblxyXG4gICAgZGVjb2RpZmljYXI6ICh0ZXh0bykgPT4ge1xyXG4gICAgICAgIGxldCB4ID0gdGV4dG87XHJcbiAgICAgICAgbGV0IGsgPSBiYXNlNjRfZGVjb2RlKHgpO1xyXG4gICAgICAgIHJldHVybiBrXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjYWxjdWxhRWRhZDogKGZlY2hhX25hYykgPT4ge1xyXG5cclxuICAgICAgICB2YXIgYSA9IG1vbWVudCgpO1xyXG4gICAgICAgIHZhciBiID0gbW9tZW50KGZlY2hhX25hYyk7XHJcblxyXG4gICAgICAgIHZhciB5ZWFycyA9IGEuZGlmZihiLCAneWVhcicpO1xyXG4gICAgICAgIGIuYWRkKHllYXJzLCAneWVhcnMnKTtcclxuXHJcbiAgICAgICAgdmFyIG1vbnRocyA9IGEuZGlmZihiLCAnbW9udGhzJyk7XHJcbiAgICAgICAgYi5hZGQobW9udGhzLCAnbW9udGhzJyk7XHJcblxyXG4gICAgICAgIHZhciBkYXlzID0gYS5kaWZmKGIsICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmICh5ZWFycyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChtb250aHMgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheXMgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vbnRocyArICcgbWVzICcgKyBkYXlzICsgJyBkaWEnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9udGhzICsgJyBtZXMgJyArIGRheXMgKyAnIGRpYXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXlzIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtb250aHMgKyAnIG1lc2VzICcgKyBkYXlzICsgJyBkaWEnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9udGhzICsgJyBtZXNlcyAnICsgZGF5cyArICcgZGlhcycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh5ZWFycyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh5ZWFycyArICcgYcOxbycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeWVhcnMgKyAnIGHDsW9zJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHllYXJzO1xyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZGF0ZUNlZHVsYTogKGNlZHVsYSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAvL1ByZWd1bnRhbW9zIHNpIGxhIGNlZHVsYSBjb25zdGEgZGUgMTAgZGlnaXRvc1xyXG4gICAgICAgICAgICBpZiAoY2VkdWxhLmxlbmd0aCA9PSAxMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vT2J0ZW5lbW9zIGVsIGRpZ2l0byBkZSBsYSByZWdpb24gcXVlIHNvbmxvcyBkb3MgcHJpbWVyb3MgZGlnaXRvc1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpZ2l0b19yZWdpb24gPSBjZWR1bGEuc3Vic3RyaW5nKDAsIDIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUHJlZ3VudG8gc2kgbGEgcmVnaW9uIGV4aXN0ZSBlY3VhZG9yIHNlIGRpdmlkZSBlbiAyNCByZWdpb25lc1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZ2l0b19yZWdpb24gPj0gMSAmJiBkaWdpdG9fcmVnaW9uIDw9IDI0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhaWdvIGVsIHVsdGltbyBkaWdpdG9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdWx0aW1vX2RpZ2l0byA9IGNlZHVsYS5zdWJzdHJpbmcoOSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0FncnVwbyB0b2RvcyBsb3MgcGFyZXMgeSBsb3Mgc3Vtb1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlcyA9IHBhcnNlSW50KGNlZHVsYS5zdWJzdHJpbmcoMSwgMikpICsgcGFyc2VJbnQoY2VkdWxhLnN1YnN0cmluZygzLCA0KSkgKyBwYXJzZUludChjZWR1bGEuc3Vic3RyaW5nKDUsIDYpKSArIHBhcnNlSW50KGNlZHVsYS5zdWJzdHJpbmcoNywgOCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0FncnVwbyBsb3MgaW1wYXJlcywgbG9zIG11bHRpcGxpY28gcG9yIHVuIGZhY3RvciBkZSAyLCBzaSBsYSByZXN1bHRhbnRlIGVzID4gcXVlIDkgbGUgcmVzdGFtb3MgZWwgOSBhIGxhIHJlc3VsdGFudGVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJvMSA9IGNlZHVsYS5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybzEgPSAobnVtZXJvMSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcm8xID4gOSkgeyB2YXIgbnVtZXJvMSA9IChudW1lcm8xIC0gOSk7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybzMgPSBjZWR1bGEuc3Vic3RyaW5nKDIsIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm8zID0gKG51bWVybzMgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJvMyA+IDkpIHsgdmFyIG51bWVybzMgPSAobnVtZXJvMyAtIDkpOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm81ID0gY2VkdWxhLnN1YnN0cmluZyg0LCA1KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJvNSA9IChudW1lcm81ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVybzUgPiA5KSB7IHZhciBudW1lcm81ID0gKG51bWVybzUgLSA5KTsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJvNyA9IGNlZHVsYS5zdWJzdHJpbmcoNiwgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybzcgPSAobnVtZXJvNyAqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcm83ID4gOSkgeyB2YXIgbnVtZXJvNyA9IChudW1lcm83IC0gOSk7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybzkgPSBjZWR1bGEuc3Vic3RyaW5nKDgsIDkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm85ID0gKG51bWVybzkgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJvOSA+IDkpIHsgdmFyIG51bWVybzkgPSAobnVtZXJvOSAtIDkpOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbXBhcmVzID0gbnVtZXJvMSArIG51bWVybzMgKyBudW1lcm81ICsgbnVtZXJvNyArIG51bWVybzk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vU3VtYSB0b3RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdW1hX3RvdGFsID0gKHBhcmVzICsgaW1wYXJlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0cmFlbW9zIGVsIHByaW1lcm8gZGlnaXRvXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaW1lcl9kaWdpdG9fc3VtYSA9IFN0cmluZyhzdW1hX3RvdGFsKS5zdWJzdHJpbmcoMCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vT2J0ZW5lbW9zIGxhIGRlY2VuYSBpbm1lZGlhdGFcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjZW5hID0gKHBhcnNlSW50KHByaW1lcl9kaWdpdG9fc3VtYSkgKyAxKSAqIDEwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL09idGVuZW1vcyBsYSByZXN0YSBkZSBsYSBkZWNlbmEgaW5tZWRpYXRhIC0gbGEgc3VtYV90b3RhbCBlc3RvIG5vcyBkYSBlbCBkaWdpdG8gdmFsaWRhZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpZ2l0b192YWxpZGFkb3IgPSBkZWNlbmEgLSBzdW1hX3RvdGFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1NpIGVsIGRpZ2l0byB2YWxpZGFkb3IgZXMgPSBhIDEwIHRvbWEgZWwgdmFsb3IgZGUgMFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWdpdG9fdmFsaWRhZG9yID09IDEwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRvX3ZhbGlkYWRvciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vVmFsaWRhbW9zIHF1ZSBlbCBkaWdpdG8gdmFsaWRhZG9yIHNlYSBpZ3VhbCBhbCBkZSBsYSBjZWR1bGFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlnaXRvX3ZhbGlkYWRvciA9PSB1bHRpbW9fZGlnaXRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkPDqWR1bGEgY29ycmVjdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkPDqWR1bGEgaW5jb3JyZWN0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbXByaW1pbW9zIGVuIGNvbnNvbGEgc2kgbGEgcmVnaW9uIG5vIHBlcnRlbmVjZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0YSBjw6lkdWxhIG5vIHBlcnRlbmVjZSBhIG5pbmd1bmEgcmVnacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9pbXByaW1pbW9zIGVuIGNvbnNvbGEgc2kgbGEgY2VkdWxhIHRpZW5lIG1hcyBvIG1lbm9zIGRlIDEwIGRpZ2l0b3NcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkPDqWR1bGEgZGViZSB0ZW5lciBvYmxpZ2F0b3JpYW1lbnRlIDEwIGTDrWdpdG9zXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuY29uc3QgaGVhZCA9IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbn1cclxuZXhwb3J0IGNvbnN0IGF4aW9zUG9zdCA9ICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVycyA9IGhlYWQsIHRpbWVvdXQgPSAwLCBzb3VyY2UpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgZGF0YSwge1xyXG4gICAgICAgIHRpbWVvdXQsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlPy50b2tlblxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF4aW9zUHV0ID0gKHVybCwgZGF0YSA9IHt9LCBoZWFkZXJzID0gaGVhZCwgdGltZW91dCA9IDAsIHNvdXJjZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnB1dCh1cmwsIGRhdGEsIHtcclxuICAgICAgICB0aW1lb3V0LFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZT8udG9rZW5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc1BhdGNoID0gKHVybCwgZGF0YSA9IHt9LCBoZWFkZXJzID0gaGVhZCwgdGltZW91dCA9IDAsIHNvdXJjZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKHVybCwgZGF0YSwge1xyXG4gICAgICAgIHRpbWVvdXQsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlPy50b2tlblxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF4aW9zRGVsZXRlID0gKHVybCwgZGF0YSA9IHt9LCBoZWFkZXJzID0gaGVhZCwgdGltZW91dCA9IDAsIHNvdXJjZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICB0aW1lb3V0LFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZT8udG9rZW5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc0dldCA9ICh1cmwsIHBhcmFtcyA9IHt9LCBoZWFkZXJzID0ge30sIHRpbWVvdXQgPSAwLCBzb3VyY2UpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgcGFyYW1zXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGltZW91dCxcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2U/LnRva2VuXHJcbiAgICB9KVxyXG59ICIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VWYWxpZGF0ZVNlc2lvbihyZWRpcmVjdExvZ2luID0gdHJ1ZSwgcmVkaXJlY3RTaWRlciA9IHRydWUpIHtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKVxyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdFNpZGVyKSBSb3V0ZXIucHVzaCgnL3NpZGVyJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRMb2dpbih0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvZ2luKSBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgICAgc2V0TG9naW4oZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0TG9naW4pIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgICBzZXRMb2dpbihmYWxzZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiBpc0xvZ2luXHJcbn0iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy9jb21wb25lbnRzL0xvYWRlci9jX0xvYWRlcidcclxuaW1wb3J0IHVzZVZhbGlkYXRlU2VzaW9uIGZyb20gXCIuLi8uLi9ob29rL3ZhbGlkYXRlU2VzaW9uXCI7XHJcbmltcG9ydCBDb21wb25lbnRMb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbidcclxuXHJcbmZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gICAgY29uc3QgaXNMb2dpbiA9IHVzZVZhbGlkYXRlU2VzaW9uKGZhbHNlLCB0cnVlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0xvZ2luID8gPExvYWRlciAvPiA6IDxDb21wb25lbnRMb2dpbiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSWNvbiwgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnL2NvbXBvbmVudHMvTG9hZGVyL2NfTG9hZGVyJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25LcnVnZXIsIE1vZGFsS3J1Z2VyIH0gZnJvbSBcIi9jb25maWcvYW50X2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgYXhpb3NHZXQgfSBmcm9tIFwiL2NvbmZpZy9odHRwXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb25maWcgZnJvbSAnL2NvbmZpZy9kZWZhdWx0J1xyXG5pbXBvcnQgZnVuY2lvbmVzIGZyb20gJy9jb25maWcvZnVuY2lvbmVzX2dlbmVyYWxlcydcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIExvZ2luKHsgZm9ybSB9KSB7XHJcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSBmb3JtO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBidG5fbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IGF3YWl0IGZ1bmNpb25lcy52YWxpZGF0ZUZvcm0oZm9ybSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgYXhpb3NHZXQoY29uZmlnLmlwX3dlYiArIFwiL3BlcnNvbj91c2VyTmFtZT1cIiArIGZvcm0uZ2V0RmllbGRWYWx1ZShcInR4dFVzZXJOYW1lXCIpPy50b0xvd2VyQ2FzZSgpICsgXCImcGFzc3dvcmQ9XCIgKyBmb3JtLmdldEZpZWxkVmFsdWUoXCJ0eHRQYXNzd29yZFwiKSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNb2RhbEtydWdlcihcIk9jdXJyaW8gdW4gcHJvYmxlbWEgYWwgcmV0b3JuYXIgZGF0b3MuXCIsIFwid2FyblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1vZGFsS3J1Z2VyKFwiQ29udHJhc2XDsWEgbyB1c3VhcmlvIGluY29ycmVjdG8uXCIsIFwid2FyblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHJlc3BvbnNlWzBdLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHJlc3BvbnNlWzBdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYXN0TmFtZSc6IHJlc3BvbnNlWzBdLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWRSb2wnOiByZXNwb25zZVswXS5yb2xJZCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWRlcicpXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBNb2RhbEtydWdlcihlcnIubWVzc2FnZSB8fCBcIkVycm9yIGluZXNwZXJhZG8sIGludGVudGUgZGUgbnVldm9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uS3J1Z2VyKFwid2FybmluZ1wiLCBcIktydWdlclwiLCBcIkZvcm11bGFyaW8gaW52w6FsaWRvXCIsIDIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExvYWRlciB2aXNpYmxlPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyTG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzYwJScgfX0gc3JjPVwiaW1nL2xvZ29fa3J1Z2VyLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3R4dFVzZXJOYW1lJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQ2FtcG8gdmFjaW8nIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17PEljb24gdHlwZT1cInVzZXJcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc3VhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndHh0UGFzc3dvcmQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdDYW1wbyB2YWNpbycgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXs8SWNvbiB0eXBlPVwibG9ja1wiIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgwLDAsMCwuMjUpJyB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e2J0bl9sb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA2MEE4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2J0bl9sb2dpbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpYXIgU2VzacOzblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9IEZvcm0uY3JlYXRlKCkoTG9naW4pO1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJTcGluIiwiSWNvbiIsIkNfTG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibWVuc2FqZSIsImNvbXBvbmVudERpZE1vdW50IiwibXNnIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJhbnRJY29uIiwidmlzaWJsZSIsIm5vdGlmaWNhdGlvbiIsIk1vZGFsIiwibm90aWZpY2F0aW9uS3J1Z2VyIiwidHlwZSIsInRpdHVsbyIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwiTW9kYWxLcnVnZXIiLCJjb250ZW50IiwidGl0bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGltZU91dCIsInRpbWVPdXQyIiwidGltZU91dDMiLCJ0aW1lT3V0NCIsImlwX3dlYiIsInBvcnRfd2ViIiwibW9tZW50IiwicmVxdWlyZSIsImJhc2U2NF9kZWNvZGUiLCJkYXRhIiwiYjY0IiwibzEiLCJvMiIsIm8zIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJiaXRzIiwiaSIsImFjIiwiZGVjIiwidG1wX2FyciIsImluZGV4T2YiLCJjaGFyQXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJsZW5ndGgiLCJqb2luIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwicmVwbGFjZSIsImJhc2U2NF9lbmNvZGUiLCJlbmMiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImNoYXJDb2RlQXQiLCJyIiwic2xpY2UiLCJ2YWxpZGF0ZUZvcm0iLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2YWxpZGF0ZUZpZWxkcyIsImVycm9yIiwidmFsdWVzIiwidmFsdWUiLCJjb2RpZmljYXIiLCJ0ZXh0byIsIngiLCJrIiwiZGVjb2RpZmljYXIiLCJjYWxjdWxhRWRhZCIsImZlY2hhX25hYyIsImEiLCJiIiwieWVhcnMiLCJkaWZmIiwiYWRkIiwibW9udGhzIiwiZGF5cyIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZUNlZHVsYSIsImNlZHVsYSIsImRpZ2l0b19yZWdpb24iLCJzdWJzdHJpbmciLCJ1bHRpbW9fZGlnaXRvIiwicGFyZXMiLCJwYXJzZUludCIsIm51bWVybzEiLCJudW1lcm8zIiwibnVtZXJvNSIsIm51bWVybzciLCJudW1lcm85IiwiaW1wYXJlcyIsInN1bWFfdG90YWwiLCJwcmltZXJfZGlnaXRvX3N1bWEiLCJkZWNlbmEiLCJkaWdpdG9fdmFsaWRhZG9yIiwic3RhdHVzIiwiYXhpb3MiLCJoZWFkIiwiYXhpb3NQb3N0IiwidXJsIiwiaGVhZGVycyIsInRpbWVvdXQiLCJzb3VyY2UiLCJwb3N0IiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImF4aW9zUHV0IiwicHV0IiwiYXhpb3NQYXRjaCIsInBhdGNoIiwiYXhpb3NEZWxldGUiLCJkZWxldGUiLCJheGlvc0dldCIsInBhcmFtcyIsImdldCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwidXNlVmFsaWRhdGVTZXNpb24iLCJyZWRpcmVjdExvZ2luIiwicmVkaXJlY3RTaWRlciIsImlzTG9naW4iLCJzZXRMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiTG9hZGVyIiwiQ29tcG9uZW50TG9naW4iLCJsb2dpbiIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIkxheW91dCIsImNvbmZpZyIsImZ1bmNpb25lcyIsIkxvZ2luIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImJ0bl9sb2dpbiIsInZhbGlkYXRlIiwiZ2V0RmllbGRWYWx1ZSIsInRvTG93ZXJDYXNlIiwidGhlbiIsInJlcyIsInJlc3BvbnNlIiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsIm5hbWUiLCJsYXN0TmFtZSIsInJvbElkIiwiY2F0Y2giLCJlcnIiLCJmaW5hbGx5Iiwid2lkdGgiLCJydWxlcyIsInJlcXVpcmVkIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJMb2dpbkZvcm0iLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9