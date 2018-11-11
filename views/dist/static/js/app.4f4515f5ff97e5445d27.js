webpackJsonp([1],Array(31).concat([
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Navbar_vue__ = __webpack_require__(67);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth__ = __webpack_require__(69);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    var _this = this;

    this.auth = __WEBPACK_IMPORTED_MODULE_0__services_auth__["a" /* default */].check();
    if (this.auth) {
      axios({
        method: "post",
        url: "codeword/details",
        headers: {
          token: window.localStorage.getItem("token")
        }
      }).then(function (result) {
        _this.email = result.data.emailKey;
      });
    }
  },

  methods: {
    onLogout: function onLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('status');
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
/* 33 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SignInPage',
  data: function data() {
    return {
      msg: '',
      signed: false,
      emailid: '',
      pass: ''
    };
  },

  methods: {
    signIn: function signIn() {
      var _this2 = this;

      var data = new FormData(document.querySelector('form'));
      this.emailid = data.get('emailID').toLowerCase();
      this.pass = data.get('password');
      this.msg = '';
      if (this.emailid === null) {
        this.msg = 'Login Invalid';
        this.signed = false;
      } else {
        axios({
          method: 'post',
          url: 'codeword/validateEmail',
          data: {
            email: this.emailid
          }
        }).then(function (res) {
          if (res.data.message === true) {
            _this2.msg = '';
            var _data = new FormData(document.querySelector('form'));
            /* global axios */
            axios.post('codeword/signin', {
              email: _this2.emailid,
              password: _this2.pass
            }).then(function (response) {
              console.log(response.data.isInstructor);
              if (response.data.token) {
                _this2.msg = 'Signed in successfully. Redirecting .';
                _this2.signed = true;
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('status', response.data.isInstructor);
                var _this = _this2;
                setTimeout(function () {
                  if (_data.get('password').length === 5) {
                    _this.$router.push({ name: 'ChangePassword' });
                  } else if (response.data.isInstructor === false) {
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
            _this2.msg = 'Invalid Login!!';
            _this2.signed = false;
          }
        });
      }
    }
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__(35);
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
      minLength: Object(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["minLength"])(8)
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
          console.log('onregister clicked fullnaem', _this2.email);
          axios.post('codeword/signup', {
            email: _this2.email.toLowerCase(),
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
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'InstructorDashboard',
  data: function data() {
    return {
      courseName: '',
      startDate: '',
      endDate: '',
      startSurveyurl: '',
      endSurveyurl: '',
      CodeWordSetName: '',
      file: '',
      codeWordSetData: ''
    };
  },
  created: function created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchCourseList();
  },

  watch: {
    // call again the method if the route changes
    '$route': 'fetchCourseList'
  },
  methods: {
    CreateCourse: function CreateCourse() {
      var data = new FormData(document.querySelector('form'));
      this.courseName = data.get('courseName');
      this.startDate = data.get('startDate');
      this.endDate = data.get('endDate');
      this.startSurveyurl = data.get('startSurveyurl');
      this.endSurveyurl = data.get('endSurveyurl');
      var formData = new FormData();
      formData.append('CourseNameKey', this.courseName);
      formData.append('CodeWordSetName', 'Large Set1');
      formData.append('file', this.file);
      /* global axios $ */
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([axios({
        method: 'post',
        url: 'codeword/addnewCourse',
        data: {
          token: window.localStorage.getItem('token'),
          courseNameKey: this.courseName,
          startDate: this.startDate,
          endDate: this.endDate,
          preSurveyURL: this.startSurveyurl,
          postSurveyURL: this.endSurveyurl
        }
      }), axios.post('codeword/addcoursestudent', formData, { headers: {
          'Content-Type': 'multipart/form-data',
          token: window.localStorage.getItem('token')
        }
      })]).then(function (res) {
        $('#addcourse').modal('hide');
      });
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getStartDate: function getStartDate() {
      var today = new Date();
      document.getElementById('startDate').value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    },
    loadCourseModel: function loadCourseModel() {
      var _this = this;

      axios({
        method: 'get',
        url: 'codeword/getcodewordset'
      }).then(function (response) {
        _this.codeWordSetData = response.data.data;
        console.log(_this.codeWordSetData[0].CodeWordSetName);
      });
    },
    fetchCourseList: function fetchCourseList() {
      console.log('fetchCourseList');
      axios({
        method: 'get',
        url: 'codeword/getCourseList',
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(function (response) {
        console.log('res fetchcourse');
        console.log(response.data.data);
      });
    }
  }
});

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
/* 51 */
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
      var emailid = this.email.toLowerCase();
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
            }, 2000);
          });
        } else {
          _this2.msg = 'Invalid User!!';
          _this2.signed = false;
        }
      });
    }
  }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__(35);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ChangePassword',
  data: function data() {
    return {
      newpassword: '',
      repeatPassword: '',
      changed: '',
      loginrole: this.$route.params.loginrole
    };
  },
  created: function created() {
    console.log('password page');
  },

  validations: {
    newpassword: {
      required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"],
      minLength: Object(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["minLength"])(8)
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(18);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CourseStudent',
  data: function data() {
    return {
      CourseNameKey: '',
      EmailKey: '',
      Name: '',
      Codeword: '',
      Acknowledged: ''

    };
  },
  mounted: function mounted() {
    var self = this;
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://raw.githubusercontent.com/chvnaveenkumar/CodeWord/Developer/data/data.coursestudent.json').then(function (res) {
      self.CourseNameKey = res.data;
      self.EmailKey = res.data;
      self.Name = res.data;
      self.Codeword = res.data;
      self.Acknowledged = res.data;
      console.log('Data: ', res.data);
    }).catch(function (error) {
      console.log('Error: ', error);
    });
  }
});

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(18);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CodeWordSet',
  data: function data() {
    return {
      files: '',
      tcodeWordSetData: [],
      codeWordSetData: [],
      count: 0
    };
  },


  methods: {
    // Getting the data from uploaded xls file
    previewFiles: function previewFiles() {
      var _this = this;

      this.files = this.$refs.myFile;
      var data = new FormData(document.querySelector('form'));
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('http://localhost:3000/codeword/getdataxlsx', data).then(function (response) {
        console.log(response.data.data);
        _this.tcodeWordSetData = response.data.data;
        _this.count = _this.tcodeWordSetData.length;
      });
    },


    // Calling API of codeWordSet controller and sending xls data in form of json
    saveCodeWordData: function saveCodeWordData() {
      var _this2 = this;

      var data = new FormData(document.querySelector('form'));
      var sendData = {
        codeWordSetName: data.get('dataSetName'),
        emailKeySet: this.tcodeWordSetData
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: 'post',
        url: 'http://localhost:3000/codeword/addcodewordset',
        data: sendData,
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(function (response) {
        console.log(response.data.data);
        _this2.getCodeWordData();
      });
    },
    getCodeWordData: function getCodeWordData() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://localhost:3000/codeword/getcodewordset').then(function (response) {
        _this3.codeWordSetData = response.data.data;
      });
    }
  },
  mounted: function mounted() {
    this.getCodeWordData();
  }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(18);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CodeWordSet',
  data: function data() {
    return {
      files: '',
      tcodeWordSetData: [],
      codeWordSetData: [],
      count: 0
    };
  },


  methods: {
    // Getting the data from uploaded xls file
    previewFiles: function previewFiles() {
      var _this = this;

      this.files = this.$refs.myFile;
      var data = new FormData(document.querySelector('form'));
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('http://localhost:3000/codeword/getdataxlsx', data).then(function (response) {
        console.log(response.data.data);
        _this.tcodeWordSetData = response.data.data;
        _this.count = _this.tcodeWordSetData.length;
      });
    },


    // Calling API of codeWordSet controller and sending xls data in form of json
    saveCodeWordData: function saveCodeWordData() {
      var _this2 = this;

      var data = new FormData(document.querySelector('form'));
      var sendData = {
        codeWordSetName: data.get('dataSetName'),
        emailKeySet: this.tcodeWordSetData
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('http://localhost:3000/codeword/addcodewordset', sendData).then(function (response) {
        console.log(response.data.data);
        _this2.getCodeWordData();
      });
    },
    getCodeWordData: function getCodeWordData() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://localhost:3000/codeword/getcodewordset').then(function (response) {
        _this3.codeWordSetData = response.data.data;
      });
    }
    // resetForm: function (e) {
    //   e.preventDefault()
    //   this.name = ''
    //   this.data = ''
    // }

  },
  mounted: function mounted() {
    this.getCodeWordData();
  }
});

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_routes__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_css_only_css_bootstrap_min_css__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_css_only_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_css_only_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mdbvue_build_css_mdb_css__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mdbvue_build_css_mdb_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mdbvue_build_css_mdb_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_min_css__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_sweetalert2__ = __webpack_require__(182);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










window.axios = __WEBPACK_IMPORTED_MODULE_4_axios___default.a.create({
  baseURL: "https://gdpcodeword.herokuapp.com/",
  timeout: 1000
});
window.$ = __webpack_require__(61);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_9_vue_sweetalert2__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuelidate___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__webpack_require__(185);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_routes__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] },
  template: '<App/>',
  store: __WEBPACK_IMPORTED_MODULE_7__store__["a" /* store */]
});

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_537fce3d_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(71);
function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var normalizeComponent = __webpack_require__(3)
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
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5737a538_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__(70);
function injectStyle (ssrContext) {
  __webpack_require__(68)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5737a538_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
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
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",attrs:{"id":"mainNav"}},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"navbar-brand",attrs:{"href":"#page-top"}},[_vm._v("Code Word")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbarResponsive"}},[(!_vm.auth)?_c('ul',{staticClass:"navbar-nav ml-auto"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("Sign Up")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Sign In")])],1)]):_vm._e(),_vm._v(" "),(_vm.auth)?_c('ul',{staticClass:"navbar-nav ml-auto"},[(this.$route.name != "StudentDashboard" && this.$route.name !== "ChangePassword")?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/instructordashboard"}},[_vm._v("Dashboard")])],1):_vm._e(),_vm._v(" "),(this.$route.name != "StudentDashboard" && this.$route.name !== "ChangePassword")?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/coursestudent"}},[_vm._v("Course Student")])],1):_vm._e(),_vm._v(" "),(this.$route.name != "StudentDashboard" && this.$route.name !== "ChangePassword")?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/codewordset"}},[_vm._v("CodeWord Set")])],1):_vm._e(),_vm._v(" "),(this.$route.name != "StudentDashboard" && this.$route.name !== "ChangePassword")?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/codeword"}},[_vm._v("CodeWord")])],1):_vm._e(),_vm._v(" "),_c('li',{staticClass:"nav-item dropdown"},[_c('div',{staticClass:"dropdown"},[_c('a',{staticClass:"dropdown-toggle",attrs:{"id":"dropdownMenuButton","data-toggle":"dropdown"}},[_vm._v("\n                    "+_vm._s(_vm.email)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.changePassword($event)}}},[_vm._v("Change Password")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.onLogout($event)}}},[_vm._v("Logout")])])])])]):_vm._e()])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('Navbar'),_vm._v(" "),_c('router-view')],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_User_SignIn__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_User_SignUp__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InstructorDashboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_User_ForgetPassword__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_User_ChangePassword__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_StudentDashboard__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CourseStudent__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CodeWordSet__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CodeWord__ = __webpack_require__(172);











__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    beforeEnter: function beforeEnter(to, from, next) {
      var logged = localStorage.getItem('status');
      console.log(logged + 'logged status');
      if (logged !== null) {
        if (logged) {
          next('/instructordashboard');
        } else {
          next('/studentdashboard');
        }
      }
      next();
    },

    name: 'SignIn',
    component: __WEBPACK_IMPORTED_MODULE_2__components_User_SignIn__["a" /* default */]
  }, {
    path: '/signup',
    name: 'Signup',
    component: __WEBPACK_IMPORTED_MODULE_3__components_User_SignUp__["a" /* default */]
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
    component: __WEBPACK_IMPORTED_MODULE_5__components_User_ForgetPassword__["a" /* default */]
  }, {
    path: '/changepassword',
    name: 'ChangePassword',
    component: __WEBPACK_IMPORTED_MODULE_6__components_User_ChangePassword__["a" /* default */]
  }, {
    path: '/coursestudent',
    name: 'CourseStudent',
    component: __WEBPACK_IMPORTED_MODULE_8__components_CourseStudent__["a" /* default */]
  }, {
    path: '/codewordset',
    name: 'CodeWordSet',
    component: __WEBPACK_IMPORTED_MODULE_9__components_CodeWordSet__["a" /* default */]
  }, {
    path: '/codeword',
    name: 'CodeWord',
    component: __WEBPACK_IMPORTED_MODULE_10__components_CodeWord__["a" /* default */]
  }, {
    path: '/studentdashboard',
    name: 'StudentDashboard',
    component: __WEBPACK_IMPORTED_MODULE_7__components_StudentDashboard__["a" /* default */],
    meta: {
      role: 'student'
    }
  }]
}));

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__ = __webpack_require__(33);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_36d2d53d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignIn_vue__ = __webpack_require__(76);
function injectStyle (ssrContext) {
  __webpack_require__(75)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-36d2d53d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_36d2d53d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignIn_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.signIn($event)}}},[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):_vm._e(),_vm._v(" "),_c('h2',[_vm._v(" Login")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('button',{staticClass:"btn btn-success  btn-sm btn-block",attrs:{"type":"submit"}},[_vm._v("Sign In")]),_vm._v(" "),_c('div',{staticClass:"text-right forgetpassword"},[_c('router-link',{attrs:{"to":"/forgetpassword"}},[_vm._v("Forget Password?")])],1),_vm._v(" "),_c('div',{staticClass:"text-right"},[_c('p',[_vm._v(" New to CodeWord? "),_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("Register")])],1)])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group row "},[_c('label',{attrs:{"for":"inputEmail"}},[_vm._v("Email Address")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","name":"emailID","id":"inputEmail","placeholder":"Email ID"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group row"},[_c('label',{attrs:{"for":"inputPassword"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"password","name":"password","id":"inputPassword","placeholder":"Password"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2096cd3c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__ = __webpack_require__(101);
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2096cd3c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
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
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.OnRegister($event)}}},[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                     ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                    ")]):_vm._e(),_vm._v(" "),_c('h2',[_vm._v(" Register")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"email","placeholder":"Enter email","required":"required","pattern":".+@nwmissouri.edu"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.password.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.password),expression:"password",modifiers:{"lazy":true}}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Password","required":"","pattern":"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","title":"Must contain at least one number and one uppercase and lowercase letter"},domProps:{"value":(_vm.password)},on:{"blur":function($event){_vm.$v.password.$touch()},"change":function($event){_vm.password=$event.target.value}}}),_vm._v(" "),(!_vm.$v.password.minLength)?_c('p',[_vm._v(" Password must have at least "+_vm._s(_vm.$v.password.$params.minLength.min)+" letters. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.repeatPassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeatPassword),expression:"repeatPassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Confirm Password"},domProps:{"value":(_vm.repeatPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeatPassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.repeatPassword.sameAsPassword)?_c('p',[_vm._v(" Password must be identical. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.instructor),expression:"instructor"}],attrs:{"type":"checkbox","id":"instructor"},domProps:{"checked":Array.isArray(_vm.instructor)?_vm._i(_vm.instructor,null)>-1:(_vm.instructor)},on:{"change":function($event){var $$a=_vm.instructor,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.instructor=$$a.concat([$$v]))}else{$$i>-1&&(_vm.instructor=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.instructor=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"terms"}},[_vm._v("Instructor")])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text-center"},[_vm._v("Already have an account?"),_c('router-link',{attrs:{"to":"/"}},[_vm._v("Sign in")])],1)])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-success btn-sm btn-block",attrs:{"type":"submit"}},[_vm._v("Register Now")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstructorDashboard_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5acb95ea_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstructorDashboard_vue__ = __webpack_require__(140);
function injectStyle (ssrContext) {
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InstructorDashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5acb95ea_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InstructorDashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
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
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"col-md-4 col-lg-4 col-xs-0 col-sm-0"},[_c('button',{staticClass:"btn btn-success",attrs:{"type":"button","title":"Create CodeWord Set","data-toggle":"modal","data-target":"#addcourse"},on:{"click":_vm.loadCourseModel}},[_c('span',{staticClass:"fa fa-plus"}),_vm._v(" Add Course ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-lg-4 col-xs-0 col-sm-0"},[_c('div',{staticClass:"card coursecard"},[_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.courseName))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_c('pre',[_vm._v(_vm._s(_vm.startDate)+"            "+_vm._s(_vm.endDate))])]),_vm._v(" "),_c('a',{staticClass:"card-link",attrs:{"href":"#"}},[_vm._v("Survey Start URL")]),_vm._v(" "),_c('a',{staticClass:"card-link",attrs:{"href":"#"}},[_vm._v("Survey End URL")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_vm._v("View students")])])])])]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"addcourse","tabindex":"-1","role":"dialog","aria-labelledby":"addcourseLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content",staticStyle:{"width":"fit-content"}},[_vm._m(0),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.CreateCourse($event)}}},[_c('div',{staticClass:"modal-body"},[_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{ref:"file",staticClass:"form-control-file",staticStyle:{"margin-top":"1em"},attrs:{"type":"file","id":"file","required":""},on:{"change":function($event){_vm.handleFileUpload()}}}),_vm._v("\r\n                Upload Student Details(Excel)\r\n            ")]),_vm._v(" "),_c('div',{staticClass:"form-group",attrs:{"required":""}},[_c('select',{staticClass:"form-control form-control-sm"},_vm._l((_vm.codeWordSetData),function(codewordset){return _c('option',{key:codewordset._id},[_vm._v(_vm._s(codewordset.CodeWordSetName))])}))]),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5)])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"addcourseLabel"}},[_vm._v("New Course Details")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","pattern":".{6,}","id":"courseName","name":"courseName","placeholder":"Enter Course Name","data-toggle":"tooltip","title":"Atleast 6 characters","required":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col tooltip-test",attrs:{"title":"Start Date"}},[_vm._v(" Start Date:"),_c('input',{staticClass:"form-control",attrs:{"type":"date","id":"startDate","name":"startDate","placeholder":"Start Date","required":""}})]),_vm._v(" "),_c('div',{staticClass:"col tooltip-test",attrs:{"title":"End Date"}},[_vm._v(" End Date:"),_c('input',{staticClass:"form-control",attrs:{"type":"date","id":"endDate","name":"endDate","placeholder":"End Date","required":""}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Survey Start URL","name":"startSurveyurl","data-toggle":"tooltip","data-placement":"bottom","title":"Enter Survey Start URL"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter Survey End URL","name":"endSurveyurl","data-toggle":"tooltip","data-placement":"bottom","title":"Enter Survey End URL"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{staticClass:"btn btn-warning",attrs:{"type":"cancel","data-dismiss":"modal"}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"create"}},[_vm._v("Create Course")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ForgetPassword_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00574910_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgetPassword_vue__ = __webpack_require__(142);
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00574910_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgetPassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row",staticStyle:{"margin-top":"7em"}},[_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"}),_vm._v(" "),_c('div',{staticClass:"card col-md-4 col-lg-4 col-xs-12 col-sm-12"},[_c('div',{staticClass:"card-body"},[_c('h3',[_vm._v(" Reset your password ")]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center"}}),_vm._v(" "),_c('div',[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):_vm._e(),_vm._v(" "),_c('form',[_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"email","placeholder":"Enter email","required":"required","pattern":".+@*.edu"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-success btn-sm btn-block",attrs:{"type":"button"},on:{"click":_vm.forget}},[_vm._v("Send password reset email")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChangePassword_vue__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b5dbe0f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChangePassword_vue__ = __webpack_require__(145);
function injectStyle (ssrContext) {
  __webpack_require__(144)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b5dbe0f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChangePassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-5 col-xs-8 col-sm-8",staticStyle:{"margin-top":"6em"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('h2',[_vm._v(" Change Password")]),_vm._v(" "),(_vm.changed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v(" "+_vm._s(_vm.msg)+" ")]):_vm._e(),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.changePassword($event)}}},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"col-lg-5 col-form-label",attrs:{"for":"inputPassword"}},[_vm._v("New Password:")]),_vm._v(" "),_c('div',{staticClass:"col-lg-7",class:{invalid: _vm.$v.newpassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpassword),expression:"newpassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"New Password","required":"","pattern":"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"},domProps:{"value":(_vm.newpassword)},on:{"blur":function($event){_vm.$v.newpassword.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.newpassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.newpassword.minLength)?_c('p',[_vm._v(" Password must have at least "+_vm._s(_vm.$v.newpassword.$params.minLength.min)+" letters. ")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"col-lg-5 col-form-label",attrs:{"for":"inputPassword"}},[_vm._v("Confirm Password:")]),_vm._v(" "),_c('div',{staticClass:"col-lg-7",class:{invalid: _vm.$v.repeatPassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeatPassword),expression:"repeatPassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Confirm Password"},domProps:{"value":(_vm.repeatPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeatPassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.repeatPassword.sameAsPassword)?_c('p',[_vm._v(" Password must be identical. ")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"col-lg-5 col-form-label",attrs:{"for":"changePassword"}}),_vm._v(" "),_c('div',{staticClass:"col-lg-7"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit","disabled":this.$v.$invalid}},[_vm._v("Change Password")])])])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-lg-3 col-xs-1 col-sm-1"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e31f311_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StudentDashboard_vue__ = __webpack_require__(147);
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e31f311_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StudentDashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-2 col-lg-2 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"table-responsive col-md-8 col-lg-8 col-xs-12 col-sm-12"},[_c('h2',[_vm._v("CodWords")]),_vm._v(" "),_c('table',{staticClass:"table col-md-12 col-lg-12 col-xs-12 col-sm-12 table-striped table-bordered table-hover"},[_c('thead',[_c('tr',[_c('th',[_vm._v("Course Name")]),_vm._v(" "),_c('th',[_vm._v("Codeword")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("Graduate Directed Project-1")]),_vm._v(" "),_c('td',[_vm._v("Cricket")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Mobile Computing-Android")]),_vm._v(" "),_c('td',[_vm._v("America")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("User Experience Design")]),_vm._v(" "),_c('td',[_vm._v("Bearcar")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-2 col-lg-2 col-xs-0 col-sm-0"})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CourseStudent_vue__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67d94cb7_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CourseStudent_vue__ = __webpack_require__(168);
function injectStyle (ssrContext) {
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CourseStudent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67d94cb7_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CourseStudent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"col-md-8 col-lg-12 col-xs-0 col-sm-0"}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(1),_vm._v(" "),_c('tbody',[_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v(_vm._s(_vm.CourseNameKey))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.EmailKey))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.Name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.Codeword))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.Acknowledged)+" ")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contan"},[_c('div',{staticClass:"skills html"},[_vm._v("10 of 20 Students  (50%)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Course Name")])])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Email")])])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Name")])])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Codeword")])])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Acknowledged")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CodeWordSet_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0766e8b3_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CodeWordSet_vue__ = __webpack_require__(171);
function injectStyle (ssrContext) {
  __webpack_require__(170)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0766e8b3_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CodeWordSet_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid",staticStyle:{"margin-top":"5em"},attrs:{"id":"codeWordSet"}},[_c('div',{staticClass:"col-md-4 col-lg-4 col-xs-0 col-sm-0"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"addcourse","tabindex":"-1","role":"dialog","aria-labelledby":"addcourseLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content",staticStyle:{"width":"fit-content"}},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('form',[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"form-group text-left"},[_vm._v("\r\n                                Upload Cordword Set(Excel)\r\n                                "),_c('input',{ref:"myFile",staticClass:"form-control-file",staticStyle:{"margin-top":".2em"},attrs:{"type":"file","name":"file","id":"exampleFormControlFile1","required":""},on:{"change":_vm.previewFiles}})]),_vm._v(" "),_c('div',{staticClass:"alert alert-info"},[(_vm.count == 0)?_c('p',[_vm._v("                          \r\n                                 No File is uploaded. Waiting for user to upload the CodeWord Set.")]):_c('p',[_c('strong',[_vm._v("Info!")]),_vm._v(" There are "+_vm._s(_vm.count)+" codewords in the Uploaded set.")])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn btn-success",attrs:{"type":"submit","data-dismiss":"modal"},on:{"click":function($event){$event.preventDefault();return _vm.saveCodeWordData($event)}}},[_vm._v("Create Codeword Set")])])])])])])])]),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(3),_vm._v(" "),_c('tbody',_vm._l((_vm.codeWordSetData),function(code,index){return _c('tr',{key:code._id},[_c('th',{attrs:{"scope":"row"}},[_vm._v(_vm._s(index + 1))]),_vm._v(" "),_c('td',[_vm._v(" "+_vm._s(code.CodeWordSetName)+" ")]),_vm._v(" "),_c('td',[_vm._v(" "+_vm._s(code.emailKey.length)+" ")]),_vm._v(" "),_c('td',[_vm._v(" "+_vm._s(code.codeWordCreator)+" ")])])}))])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-success",attrs:{"type":"button","title":"Create CodeWord Set","data-toggle":"modal","data-target":"#addcourse"}},[_c('span',{staticClass:"fa fa-plus"}),_vm._v(" Create Codeword Set\r\n                ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"addcourseLabel"}},[_vm._v("Create Codeword Set")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"name":"dataSetName","type":"text","placeholder":"Enter Cordword Set Name","data-toggle":"tooltip","data-placement":"top","title":"Enter Cordword Set Name","required":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("ID")])])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Codeword Set Name")])])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Count")])])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_c('h4',[_c('u',[_vm._v("Creator")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CodeWord_vue__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d7d138e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CodeWord_vue__ = __webpack_require__(173);
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CodeWord_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d7d138e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CodeWord_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid",staticStyle:{"margin-top":"5em"},attrs:{"id":"codeWord"}},[_c('div',{staticClass:"col-md-4 col-lg-4 col-xs-12 col-sm-12"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"createcodeword","tabindex":"-1","role":"dialog","aria-labelledby":"createcodewordLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"dropdown"},[_c('button',{staticClass:"btn btn-primary dropdown-toggle  text-left",attrs:{"type":"button","id":"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n    Select Codeword set\n  ")]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},_vm._l((_vm.codeWordSetData),function(code){return _c('a',{key:code._id,staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(" "+_vm._s(code.CodeWordSetName)+" ")])}))]),_vm._v(" "),_c('div',{staticClass:"form-group text-left"},[_vm._v("\n                                Upload Cordword Set(Excel)\n                                "),_c('input',{ref:"myFile",staticClass:"form-control-file",staticStyle:{"margin-top":".2em"},attrs:{"type":"file","name":"file","id":"exampleFormControlFile1","required":""}})])]),_vm._v(" "),_vm._m(2)])])]),_vm._v(" "),_c('div',{staticClass:"dropdown"},[_c('button',{staticClass:"btn btn-primary dropdown-toggle  text-left",attrs:{"type":"button","id":"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n    Select Codeword set\n  ")]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},_vm._l((_vm.codeWordSetData),function(code){return _c('a',{key:code._id,staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(" "+_vm._s(code.CodeWordSetName)+" ")])}))]),_vm._v(" "),_vm._m(3)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-success",attrs:{"type":"button","title":"Create CodeWord","data-toggle":"modal","data-target":"#createcodeword"}},[_c('span',{staticClass:"fa fa-plus"}),_vm._v(" Add codeword\n")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"createcodewordLabel"}},[_vm._v("Add COdeword")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_vm._v("Add")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table"},[_c('thead',{staticClass:"thead-dark"},[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v("#")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Codewords")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Options")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("1")]),_vm._v(" "),_c('td',[_vm._v("Codeword1")]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-warning",attrs:{"href":"#"}},[_vm._v(" Edit ")])])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("2")]),_vm._v(" "),_c('td',[_vm._v("Codeword2")]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-warning",attrs:{"href":"#"}},[_vm._v(" Edit ")])])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("3")]),_vm._v(" "),_c('td',[_vm._v("Codeword3")]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-warning",attrs:{"href":"#"}},[_vm._v(" Edit ")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Vue__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Vuex__ = __webpack_require__(180);



__WEBPACK_IMPORTED_MODULE_0_Vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_Vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_Vuex__["a" /* default */].Store({
  state: {
    role: 'student'
  }
});

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 182 */,
/* 183 */,
/* 184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
]),[62]);
//# sourceMappingURL=app.4f4515f5ff97e5445d27.js.map