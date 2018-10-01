webpackJsonp([1],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('form',[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                     ")]):_vm._e(),_vm._v(" "),_c('h2',[_vm._v(" Register")]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.email.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"email","id":"exampleInputEmail1","placeholder":"Enter email","required":"required","pattern":".+@*.edu"},domProps:{"value":(_vm.email)},on:{"blur":function($event){_vm.$v.email.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_vm._v(" "),(!_vm.$v.email.isUnique)?_c('p',[_vm._v("This email id already registered!!")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.password.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.password),expression:"password",modifiers:{"lazy":true}}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Password","required":"required"},domProps:{"value":(_vm.password)},on:{"blur":function($event){_vm.$v.password.$touch()},"change":function($event){_vm.password=$event.target.value}}}),_vm._v(" "),(!_vm.$v.password.minLength)?_c('p',[_vm._v(" Password must have at least "+_vm._s(_vm.$v.password.$params.minLength.min)+" letters. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.repeatPassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeatPassword),expression:"repeatPassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Confirm Password"},domProps:{"value":(_vm.repeatPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeatPassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.repeatPassword.sameAsPassword)?_c('p',[_vm._v(" Password must be identical. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.instructor),expression:"instructor"}],attrs:{"type":"checkbox","id":"instructor"},domProps:{"checked":Array.isArray(_vm.instructor)?_vm._i(_vm.instructor,null)>-1:(_vm.instructor)},on:{"change":function($event){var $$a=_vm.instructor,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.instructor=$$a.concat([$$v]))}else{$$i>-1&&(_vm.instructor=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.instructor=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"terms"}},[_vm._v("Instructor")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-success btn-lg btn-block",attrs:{"type":"submit"},on:{"click":_vm.OnRegister}},[_vm._v("Register Now")])]),_vm._v(" "),_vm._m(0)])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._v("Already have an account? "),_c('a',{attrs:{"href":"#"}},[_vm._v("Sign in")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f02b96e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__ = __webpack_require__(163);
function injectStyle (ssrContext) {
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f02b96e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-2 col-lg-2 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"table-responsive col-md-8 col-lg-8 col-xs-12 col-sm-12",staticStyle:{"margin-top":"5em"}},[_c('h2',[_vm._v("CodWords")]),_vm._v(" "),_c('table',{staticClass:"table col-md-12 col-lg-12 col-xs-12 col-sm-12 table-striped table-bordered table-hover"},[_c('thead',[_c('tr',[_c('th',[_vm._v("CRN-Section")]),_vm._v(" "),_c('th',[_vm._v("Course Name")]),_vm._v(" "),_c('th',[_vm._v("Codeword")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("44691-05")]),_vm._v(" "),_c('td',[_vm._v("Graduate Directed Project-1")]),_vm._v(" "),_c('td',[_vm._v("Cricket")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("44644-01")]),_vm._v(" "),_c('td',[_vm._v("Mobile Computing-Android")]),_vm._v(" "),_c('td',[_vm._v("America")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("44664-04")]),_vm._v(" "),_c('td',[_vm._v("User Experience Design")]),_vm._v(" "),_c('td',[_vm._v("Bearcar")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-2 col-lg-2 col-xs-0 col-sm-0"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ForgetPassword_vue__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e2287d6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgetPassword_vue__ = __webpack_require__(165);
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ForgetPassword_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e2287d6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgetPassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row",staticStyle:{"margin-top":"7em"}},[_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"}),_vm._v(" "),_c('div',{staticClass:"card col-md-6 col-lg-6 col-xs-10 col-sm-10"},[_c('div',{staticClass:"card-body"},[_c('div',{staticStyle:{"text-align":"center"}}),_vm._v(" "),_c('div',[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):_vm._e(),_vm._v(" "),_c('form',[_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"email","placeholder":"Enter email","required":"required","pattern":".+@*.edu"},domProps:{"value":(_vm.email)},on:{"blur":function($event){_vm.$v.email.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary btn-lg btn-block",attrs:{"type":"button"},on:{"click":_vm.forget}},[_vm._v("Get Password")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Navbar_vue__ = __webpack_require__(63);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'App',
  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_0__partials_Navbar_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_config__);
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
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      auth: false,
      email: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.auth = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].check();
    if (this.auth) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: "post",
        url: "https://gdpcodeword.herokuapp.com/codeword/details",
        headers: {
          token: window.localStorage.getItem("token")
        }
      }).then(function (result) {
        _this.email = result.data.email;
      });
    }
  },

  methods: {
    onLogout: function onLogout() {
      localStorage.removeItem("token");
      this.auth = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].check();
      this.$router.push({ path: "/" });
    }
  },
  watch: {
    $route: function $route(to, from, next) {
      this.auth = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].check();
    }
  }
});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
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
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HomePage',
  data: function data() {
    return {
      msg: '',
      signed: false
    };
  },

  methods: {
    signIn: function signIn() {
      var _this2 = this;

      this.msg = '';
      var data = new FormData(document.querySelector('form'));
      console.log(data.get('password'));
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://gdpcodeword.herokuapp.com/codeword/signin', {
        email: data.get('emailID'),
        password: data.get('password')
      }).then(function (response) {
        if (response.data.token) {
          _this2.msg = 'Signed in successfully. Redirecting .';
          _this2.signed = true;
          localStorage.setItem('token', response.data.token);
          var _this = _this2;
          setTimeout(function () {
            _this.$router.push({ path: '/dashboard' });
          }, 1000);
        } else {
          _this2.msg = response.data.message;
          _this2.signed = false;
        }
      });
    }
  }
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__);



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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      instructor: false,
      msg: '',
      signed: false
    };
  },

  validations: {
    email: {
      required: __WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__["required"],
      email: __WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__["email"],
      isUnique: function isUnique(email) {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('is uni');

                  if (!(email === '')) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt('return', true);

                case 3:
                  return _context.abrupt('return', __WEBPACK_IMPORTED_MODULE_3_axios___default()({
                    method: 'post',
                    url: 'https://gdpcodeword.herokuapp.com/codeword/validateEmail',
                    data: {
                      email: email
                    }
                  }).then(function (res) {
                    console.log(res.data.message);
                    console.log(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(res.data).length);
                    return !res.data.message;
                  }));

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    },
    password: {
      required: __WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__["required"],
      minLength: Object(__WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__["minLength"])(6)
    },
    repeatPassword: {
      sameAsPassword: Object(__WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__["sameAs"])('password')
    },
    instructor: {
      sameAs: Object(__WEBPACK_IMPORTED_MODULE_4_vuelidate_lib_validators__["sameAs"])(function () {
        return true;
      })
    }
  },
  methods: {
    OnRegister: function OnRegister() {
      var _this3 = this;

      console.log('onregister clicked fullnaem', this.email);
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('https://gdpcodeword.herokuapp.com/codeword/signup', {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      }).then(function (res) {
        _this3.msg = 'Successfully Registered and Redirecting to SignIn Page.';
        _this3.signed = true;
        var _this = _this3;
        if (res.data.message) {
          setTimeout(function () {
            _this.$router.push({ path: '/' });
          }, 1000);
        }
      });
    }
  }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ForgetPage',
  data: function data() {
    return {
      msg: '',
      signed: false,
      email: ''
    };
  },

  methods: {
    forget: function forget() {
      var _this2 = this;

      this.msg = '';
      console.log(this.email);
      var emailid = this.email;
      __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: 'post',
        url: 'https://gdpcodeword.herokuapp.com/codeword/validateEmail',
        data: {
          emailid: emailid
        }
      }).then(function (res) {
        console.log(res.data.message);
        if (res.data.message === false || res.data.message === 'false') {
          __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://gdpcodeword.herokuapp.com/codeword/sendmail', {
            email: emailid
          }).then(function (response) {
            _this2.msg = 'Sent temporary password to your email';
            _this2.signed = true;
            var _this = _this2;
            setTimeout(function () {
              _this.$router.push({ path: '/' });
            }, 1000);
          });
        } else {
          _this2.msg = 'This user not registered!!';
          _this2.signed = false;
        }
      });
    }
  }
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_routes__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_dist_bootstrap_vue_esm__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuelidate__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuelidate__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_dist_bootstrap_vue_esm__["a" /* default */]);
__webpack_require__(174);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vuelidate___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_routes__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] },
  template: '<App/>'
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0c3fab8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(86);
function injectStyle (ssrContext) {
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0c3fab8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4673674b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__(85);
function injectStyle (ssrContext) {
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4673674b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    user () {
      return this.$store.state.user
    },
    check () {
      console.log(localStorage.getItem('token'))
      return localStorage.getItem('token') // get token from localStorage
    }
  });

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = {
    url:"http://localhost:3000"
}

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",attrs:{"id":"mainNav"}},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"navbar-brand ",attrs:{"href":"#page-top"}},[_vm._v("Code Word")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbarResponsive"}},[_c('ul',{staticClass:"navbar-nav ml-auto"},[(!_vm.auth)?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("Sign Up")])],1):_vm._e(),_vm._v(" "),(!_vm.auth)?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Sign In")])],1):_vm._e(),_vm._v(" "),(_vm.auth)?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/dashboard"}})],1):_vm._e(),_vm._v(" "),(_vm.auth)?_c('li',{staticClass:"nav-item dropdown"},[_c('a',{staticClass:"nav-link dropdown-toggle",attrs:{"id":"dropdown01","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v(_vm._s(_vm.email))]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdown01"}},[_c('a',{staticClass:"dropdown-item"},[_vm._v("  "+_vm._s(_vm.email)+" ")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.profilePage($event)}}},[_vm._v("Profile")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.changePassword($event)}}},[_vm._v("Change Password")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.onLogout($event)}}},[_vm._v("Logout")])])]):_vm._e()])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('Navbar'),_vm._v(" "),_c('router-view')],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Signup__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Dashboard__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ForgetPassword__ = __webpack_require__(164);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home__["a" /* default */]
  }, {
    path: '/signup',
    name: 'Signup',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Signup__["a" /* default */]
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Dashboard__["a" /* default */]
  }, {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: __WEBPACK_IMPORTED_MODULE_5__components_ForgetPassword__["a" /* default */]
  }]
}));

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe6b4ab4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(91);
function injectStyle (ssrContext) {
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fe6b4ab4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe6b4ab4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('h2',[_vm._v(" Login")]),_vm._v(" "),(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):_vm._e(),_vm._v(" "),_c('form',[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"},on:{"click":_vm.signIn}},[_vm._v("Sign In")]),_vm._v(" "),_c('div',{staticClass:"text-right"},[_c('router-link',{attrs:{"to":"/forgetpassword"}},[_vm._v("Forget Password?")])],1)])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group row "},[_c('label',{attrs:{"for":"inputEmail"}},[_vm._v("Email address")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","name":"emailID","id":"inputEmail","placeholder":"Email ID"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group row"},[_c('label',{attrs:{"for":"inputPassword"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"password","name":"password","id":"inputPassword","placeholder":"Password"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cc3d92bc_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__ = __webpack_require__(160);
function injectStyle (ssrContext) {
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cc3d92bc_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[57]);
//# sourceMappingURL=app.a9f75fff087ffc0380cd.js.map