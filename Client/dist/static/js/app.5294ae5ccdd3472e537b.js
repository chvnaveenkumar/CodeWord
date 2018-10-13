webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Navbar_vue__ = __webpack_require__(27);
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
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    console.log('meta' + this.$route.name);
    this.auth = __WEBPACK_IMPORTED_MODULE_0__services_auth__["a" /* default */].check();
    if (this.auth) {
      axios({
        method: "post",
        url: "codeword/details",
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
      this.auth = __WEBPACK_IMPORTED_MODULE_0__services_auth__["a" /* default */].check();
      this.$router.push({ path: "/" });
    },
    changePassword: function changePassword() {
      this.$router.push({ path: "/changePassword" });
    },
    createCodeWordSet: function createCodeWordSet() {
      this.$router.push({ path: "/createcodewordset" });
    },
    deleteCodeWordSet: function deleteCodeWordSet() {
      this.$router.push({ path: "/deletecodewordset" });
    }
  },
  watch: {
    $route: function $route(to, from, next) {
      this.auth = __WEBPACK_IMPORTED_MODULE_0__services_auth__["a" /* default */].check();
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      signed: false,
      email: '',
      instructor: false
    };
  },

  methods: {
    signIn: function signIn() {
      var _this2 = this;

      this.msg = '';
      var emailid = this.email;
      axios({
        method: 'post',
        url: 'codeword/validateEmail',
        data: {
          email: emailid
        }
      }).then(function (res) {
        if (res.data.message === true) {
          _this2.msg = '';
          var data = new FormData(document.querySelector('form'));
          /* global axios */
          axios.post('codeword/signin', {
            email: data.get('emailID'),
            password: data.get('password')
          }).then(function (response) {
            if (response.data.token) {
              _this2.msg = 'Signed in successfully. Redirecting .';
              _this2.signed = true;
              localStorage.setItem('token', response.data.token);
              var _this = _this2;
              setTimeout(function () {
                if (data.get('password').length === 5) {
                  _this.$router.push({ name: 'ChangePassword', params: { loginrole: _this.instructor } });
                } else if (_this.instructor === false) {
                  _this.$router.push({ name: 'StudentDashboard' });
                } else {
                  _this.$router.push({ name: 'InstructorDashboard' });
                }
              }, 1000);
            } else {
              _this2.msg = response.data.message;
              _this2.signed = false;
            }
          });
        } else {
          _this2.msg = 'User is not registered!!';
          _this2.signed = false;
        }
      });
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    password: {
      required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"],
      minLength: Object(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["minLength"])(6)
    },
    repeatPassword: {
      sameAsPassword: Object(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["sameAs"])('password')
    },
    instructor: {
      sameAs: Object(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["sameAs"])(function () {
        return true;
      })
    }
  },
  methods: {
    OnRegister: function OnRegister() {
      var _this2 = this;

      this.msg = '';
      var emailid = this.email;
      /* global axios */
      axios({
        method: 'post',
        url: 'codeword/validateEmail',
        data: {
          email: emailid
        }
      }).then(function (res) {
        console.log('validate' + res.data.message);
        var _this = _this2;
        if (res.data.message === false) {
          /* global axios */
          console.log('onregister clicked fullnaem', _this2.email);
          axios.post('codeword/signup', {
            email: _this2.email,
            password: _this2.password
          }).then(function (res) {
            _this2.msg = 'Successfully Registered and Redirecting to SignIn Page.';
            _this2.signed = true;
            if (res.data.message) {
              setTimeout(function () {
                _this.$router.push({ path: '/' });
              }, 1000);
            }
          });
        } else {
          _this2.msg = 'This user registerd already!!';
          _this2.signed = false;
        }
      });
    }
  }
});

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      var emailid = this.email;
      /* global axios */
      axios({
        method: 'post',
        url: 'codeword/validateEmail',
        data: {
          email: emailid
        }
      }).then(function (res) {
        console.log(res.data.message);
        if (res.data.message === true) {
          axios.post('codeword/sendmail', {
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
          _this2.msg = 'User is not registered!!';
          _this2.signed = false;
        }
      });
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      newpassword: '',
      repeatPassword: '',
      changed: '',
      loginrole: this.$route.params.loginrole
    };
  },

  validations: {
    newpassword: {
      required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"],
      minLength: Object(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["minLength"])(6)
    },
    repeatPassword: {
      sameAsPassword: Object(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["sameAs"])('newpassword')
    }
  },
  methods: {
    changePassword: function changePassword() {
      var _this2 = this;

      this.msg = '';
      /* global axios */
      axios({
        method: 'post',
        url: 'codeword/changepassword',
        data: {
          token: window.localStorage.getItem('token'),
          password: this.newpassword
        }
      }).then(function (res) {
        var _this = _this2;
        if (res.data.message === true) {
          setTimeout(function () {
            this.msg = 'Changed Password Successfully!!';
            if (_this.loginrole === true) {
              _this.$router.push({ path: '/instructordashboard' });
            } else {
              _this.$router.push({ path: '/studentdashboard' });
            }
          }, 1000);
        }
      });
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CreateCodeWordPage',
  data: function data() {
    return {
      codewordName: ''
    };
  },

  methods: {
    create: function create() {
      console.log(this.codewordName);
    }
  }
});

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_routes__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_css_only_css_bootstrap_min_css__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_css_only_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_css_only_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mdbvue_build_css_mdb_css__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mdbvue_build_css_mdb_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mdbvue_build_css_mdb_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_min_css__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_min_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









window.axios = __WEBPACK_IMPORTED_MODULE_4_axios___default.a.create({
  baseURL: "https://gdpcodeword.herokuapp.com/",
  timeout: 1000
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuelidate___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__webpack_require__(104);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_routes__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] },
  template: '<App/>',
  store: __WEBPACK_IMPORTED_MODULE_7__store__["a" /* store */]
});

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_537fce3d_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(31);
function injectStyle (ssrContext) {
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_537fce3d_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6127e8c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__(30);
function injectStyle (ssrContext) {
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6127e8c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",attrs:{"id":"mainNav"}},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"navbar-brand",attrs:{"href":"#page-top"}},[_vm._v("Code Word")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbarResponsive"}},[(!_vm.auth)?_c('ul',{staticClass:"navbar-nav ml-auto"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("Sign Up")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Sign In")])],1)]):_vm._e(),_vm._v(" "),(_vm.auth)?_c('ul',{staticClass:"navbar-nav ml-auto"},[(this.$route.name != "StudentDashboard")?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/instructordashboard"}},[_vm._v("Dashboard")])],1):_vm._e(),_vm._v(" "),(this.$route.name != "StudentDashboard" || this.$router.name === "ChangePassword")?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/codewordset"}},[_vm._v("CodeWord")])],1):_vm._e(),_vm._v(" "),_c('li',{staticClass:"nav-item dropdown"},[_c('div',{staticClass:"dropdown"},[_c('a',{staticClass:"dropdown-toggle",attrs:{"id":"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n                    "+_vm._s(_vm.email)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.changePassword($event)}}},[_vm._v("Change Password")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.onLogout($event)}}},[_vm._v("Logout")])])])])]):_vm._e()])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('Navbar'),_vm._v(" "),_c('router-view')],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Signup__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InstructorDashboard__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ForgetPassword__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ChangePassword__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CodeWordSet__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_StudentDashboard__ = __webpack_require__(75);









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
    path: '/instructordashboard',
    name: 'InstructorDashboard',
    component: __WEBPACK_IMPORTED_MODULE_4__components_InstructorDashboard__["a" /* default */],
    meta: {
      role: 'instructor'
    }
  }, {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: __WEBPACK_IMPORTED_MODULE_5__components_ForgetPassword__["a" /* default */]
  }, {
    path: '/changepassword/:loginrole',
    name: 'ChangePassword',
    component: __WEBPACK_IMPORTED_MODULE_6__components_ChangePassword__["a" /* default */]
  }, {
    path: '/codewordset',
    name: 'CodeWordSet',
    component: __WEBPACK_IMPORTED_MODULE_7__components_CodeWordSet__["a" /* default */],
    meta: {
      role: 'instructor'
    }
  }, {
    path: '/studentdashboard',
    name: 'StudentDashboard',
    component: __WEBPACK_IMPORTED_MODULE_8__components_StudentDashboard__["a" /* default */],
    meta: {
      role: 'student'
    }
  }]
}));

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4641ed06_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(36);
function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4641ed06"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4641ed06_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.signIn($event)}}},[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):_vm._e(),_vm._v(" "),_c('h2',[_vm._v(" Login")]),_vm._v(" "),_c('div',{staticClass:"form-group row "},[_c('label',{attrs:{"for":"inputEmail"}},[_vm._v("Email address")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"text","name":"emailID","id":"inputEmail","placeholder":"Email ID"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.instructor),expression:"instructor"}],attrs:{"type":"checkbox","name":"type","value":"true"},domProps:{"checked":Array.isArray(_vm.instructor)?_vm._i(_vm.instructor,"true")>-1:(_vm.instructor)},on:{"change":function($event){var $$a=_vm.instructor,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.instructor=$$a.concat([$$v]))}else{$$i>-1&&(_vm.instructor=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.instructor=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"terms"}},[_vm._v("Instructor")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-success  btn-sm btn-block",attrs:{"type":"submit"}},[_vm._v("Sign In")]),_vm._v(" "),_c('div',{staticClass:"text-right forgetpassword"},[_c('router-link',{attrs:{"to":"/forgetpassword"}},[_vm._v("Forget Password?")])],1),_vm._v(" "),_c('div',{staticClass:"text-right"},[_c('p',[_vm._v(" New to CodeWord? "),_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("Register")])],1)])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group row"},[_c('label',{attrs:{"for":"inputPassword"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"password","name":"password","id":"inputPassword","placeholder":"Password"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75b0bd70_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__ = __webpack_require__(61);
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75b0bd70_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('form',[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                     ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                    ")]):_vm._e(),_vm._v(" "),_c('h2',[_vm._v(" Register")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"email","placeholder":"Enter email","required":"required","pattern":".+@*.edu"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.password.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.password),expression:"password",modifiers:{"lazy":true}}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Password","required":"required"},domProps:{"value":(_vm.password)},on:{"blur":function($event){_vm.$v.password.$touch()},"change":function($event){_vm.password=$event.target.value}}}),_vm._v(" "),(!_vm.$v.password.minLength)?_c('p',[_vm._v(" Password must have at least "+_vm._s(_vm.$v.password.$params.minLength.min)+" letters. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.repeatPassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeatPassword),expression:"repeatPassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Confirm Password"},domProps:{"value":(_vm.repeatPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeatPassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.repeatPassword.sameAsPassword)?_c('p',[_vm._v(" Password must be identical. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.instructor),expression:"instructor"}],attrs:{"type":"checkbox","id":"instructor"},domProps:{"checked":Array.isArray(_vm.instructor)?_vm._i(_vm.instructor,null)>-1:(_vm.instructor)},on:{"change":function($event){var $$a=_vm.instructor,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.instructor=$$a.concat([$$v]))}else{$$i>-1&&(_vm.instructor=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.instructor=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"terms"}},[_vm._v("Instructor")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-success btn-sm btn-block",attrs:{"type":"submit"},on:{"click":_vm.OnRegister}},[_vm._v("Register Now")])]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_vm._v("Already have an account?"),_c('router-link',{attrs:{"to":"/"}},[_vm._v("Sign in")])],1)])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1eaf68e6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstructorDashboard_vue__ = __webpack_require__(64);
function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1eaf68e6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstructorDashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12 col-lg-12 col-xs-12 col-sm-12"},[_c('i',{staticClass:"fas fa-plus-circle fa-3x  tooltip-test",staticStyle:{"color":"green","float":"left","margin-left":"1em"},attrs:{"title":"Add Course","data-toggle":"modal","data-target":"#addcourse"}}),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"addcourse","tabindex":"-1","role":"dialog","aria-labelledby":"addcourseLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content",staticStyle:{"width":"min-content"}},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"addcourseLabel"}},[_vm._v("Add Course")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('form',[_c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"formGroupExampleInput","placeholder":"Enter Course Name","data-toggle":"tooltip","data-placement":"bottom","title":"Enter Course Name"}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"formGroupExampleInput2","placeholder":"Enter CRN#","data-toggle":"tooltip","data-placement":"bottom","title":"Enter CRN#"}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"formGroupExampleInput2","placeholder":"Enter Section #","data-toggle":"tooltip","data-placement":"bottom","title":"Enter Section #"}})]),_vm._v(" "),_c('form',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col tooltip-test",attrs:{"title":"Start Date"}},[_c('input',{staticClass:"form-control",attrs:{"type":"date","placeholder":"Start Date"}})]),_vm._v(" "),_c('div',{staticClass:"col tooltip-test",attrs:{"title":"End Date"}},[_c('input',{staticClass:"form-control",attrs:{"type":"date","placeholder":"End Date"}})])]),_vm._v(" "),_c('form',[_c('div',{staticClass:"form-group"},[_c('label',{staticStyle:{"float":"left"},attrs:{"for":"exampleFormControlFile1"}},[_vm._v("UploadbStudent Details(Excel)")]),_vm._v(" "),_c('input',{staticClass:"form-control-file",attrs:{"type":"file","id":"exampleFormControlFile1"}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('select',{staticClass:"form-control form-control-sm"},[_c('option',[_vm._v("Select Codeword set")])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"formGroupExampleInput","placeholder":"Enter Survey URL","data-toggle":"tooltip","data-placement":"bottom","title":"Enter Survey URL"}})])])])])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-warning",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Close")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_vm._v("Save")])])])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-lg-4 col-xs-6 col-sm-6"},[_c('div',{staticClass:"card",staticStyle:{"width":"18rem","margin-left":"2em","margin-top":"2em","margin-right":"20em"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":__webpack_require__(65),"alt":"Card image cap"}}),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v("Mobile Computing - Android")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("44644-01  2018 Fall Term")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary",attrs:{"href":"#"}},[_vm._v("View")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-lg-4 col-xs-6 col-sm-6"},[_c('div',{staticClass:"card",staticStyle:{"width":"18rem","margin-left":"1em","margin-top":"2em"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":__webpack_require__(66),"alt":"Card image cap"}}),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v("User Experience Design")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("44664-04  2018 Fall Term")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary",attrs:{"href":"#"}},[_vm._v("View")])])])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/android.b4228ec.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/userinterface.d4e8994.png";

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ForgetPassword_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62d03492_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgetPassword_vue__ = __webpack_require__(68);
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62d03492_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgetPassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row",staticStyle:{"margin-top":"7em"}},[_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"}),_vm._v(" "),_c('div',{staticClass:"card col-md-4 col-lg-4 col-xs-12 col-sm-12"},[_c('div',{staticClass:"card-body"},[_c('h3',[_vm._v(" Reset your password ")]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center"}}),_vm._v(" "),_c('div',[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):_vm._e(),_vm._v(" "),_c('form',[_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"email","placeholder":"Enter email","required":"required","pattern":".+@*.edu"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-success btn-sm btn-block",attrs:{"type":"button"},on:{"click":_vm.forget}},[_vm._v("Send password reset email")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChangePassword_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_261d9994_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChangePassword_vue__ = __webpack_require__(71);
function injectStyle (ssrContext) {
  __webpack_require__(70)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChangePassword_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_261d9994_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChangePassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-5 col-xs-8 col-sm-8",staticStyle:{"margin-top":"6em"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('h2',[_vm._v(" Change Password")]),_vm._v(" "),(_vm.changed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):_vm._e(),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.changePassword($event)}}},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"col-lg-5 col-form-label",attrs:{"for":"inputPassword"}},[_vm._v("New Password:")]),_vm._v(" "),_c('div',{staticClass:"col-lg-7",class:{invalid: _vm.$v.newpassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpassword),expression:"newpassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"New Password"},domProps:{"value":(_vm.newpassword)},on:{"blur":function($event){_vm.$v.newpassword.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.newpassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.newpassword.minLength)?_c('p',[_vm._v(" Password must have at least "+_vm._s(_vm.$v.newpassword.$params.minLength.min)+" letters. ")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"col-lg-5 col-form-label",attrs:{"for":"inputPassword"}},[_vm._v("Confirm Password:")]),_vm._v(" "),_c('div',{staticClass:"col-lg-7",class:{invalid: _vm.$v.repeatPassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeatPassword),expression:"repeatPassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Confirm Password"},domProps:{"value":(_vm.repeatPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeatPassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.repeatPassword.sameAsPassword)?_c('p',[_vm._v(" Password must be identical. ")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"col-lg-5 col-form-label",attrs:{"for":"changePassword"}}),_vm._v(" "),_c('div',{staticClass:"col-lg-7"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit","disabled":this.$v.$invalid}},[_vm._v("Change Password")])])])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CodeWordSet_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8f05da4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CodeWordSet_vue__ = __webpack_require__(74);
function injectStyle (ssrContext) {
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CodeWordSet_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8f05da4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CodeWordSet_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"row"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-10 col-lg-10 col-xs-0 col-sm-0"},[_c('i',{staticClass:"fas fa-plus-circle fa-2x",staticStyle:{"color":"green","margin-left":"1em"},attrs:{"title":"Create CodeWord Set","data-toggle":"modal","data-target":"#createCodeWordSet"}},[_vm._v("Add Codeword Set")]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"createCodeWordSet","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('form',[_c('div',{staticClass:"form-group"},[_c('label',{staticStyle:{"float":"left"},attrs:{"for":"formGroupExampleInput"}},[_vm._v("CodeWord Set Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codewordsetName),expression:"codewordsetName"}],staticClass:"form-control",attrs:{"type":"text","id":"formGroupExampleInput","placeholder":"Enter CodeWord Set Name"},domProps:{"value":(_vm.codewordsetName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.codewordsetName=$event.target.value}}})]),_vm._v(" "),_vm._m(2)])]),_vm._v(" "),_vm._m(3)])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-8 col-lg-8 col-xs-12 col-sm-12"}),_vm._v(" "),_c('div',{staticClass:"col-md-2 col-lg-2 col-xs-0 col-sm-0"})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-12 col-lg-12 col-xs-12 col-sm-12"},[_c('h1',[_vm._v("\n           CodeWord Set\n         ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_vm._v("Add New CodeWord")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_c('label',{staticStyle:{"float":"left"},attrs:{"for":"exampleFormControlFile1"}},[_vm._v("Upload CodeWord Set(Excel)")]),_vm._v(" "),_c('input',{staticClass:"form-control-file",attrs:{"type":"file","id":"exampleFormControlFile1"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-warning",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("CANCEL")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button","onclick":"create()"}},[_vm._v("CREATE")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_294c4546_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StudentDashboard_vue__ = __webpack_require__(76);
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = null
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
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_294c4546_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StudentDashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-2 col-lg-2 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"table-responsive col-md-8 col-lg-8 col-xs-12 col-sm-12"},[_c('h2',[_vm._v("CodWords")]),_vm._v(" "),_c('table',{staticClass:"table col-md-12 col-lg-12 col-xs-12 col-sm-12 table-striped table-bordered table-hover"},[_c('thead',[_c('tr',[_c('th',[_vm._v("CRN-Section")]),_vm._v(" "),_c('th',[_vm._v("Course Name")]),_vm._v(" "),_c('th',[_vm._v("Codeword")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("44691-05")]),_vm._v(" "),_c('td',[_vm._v("Graduate Directed Project-1")]),_vm._v(" "),_c('td',[_vm._v("Cricket")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("44644-01")]),_vm._v(" "),_c('td',[_vm._v("Mobile Computing-Android")]),_vm._v(" "),_c('td',[_vm._v("America")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("44664-04")]),_vm._v(" "),_c('td',[_vm._v("User Experience Design")]),_vm._v(" "),_c('td',[_vm._v("Bearcar")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-2 col-lg-2 col-xs-0 col-sm-0"})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
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
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Vuex__ = __webpack_require__(102);



__WEBPACK_IMPORTED_MODULE_0_Vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_Vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_Vuex__["a" /* default */].Store({
  state: {
    role: 'student'
  }
});

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[22]);
//# sourceMappingURL=app.5294ae5ccdd3472e537b.js.map