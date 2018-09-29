<template>
  <div>
    <div class="container ">
        <div class="row">
        <div class="col-md-4 col-xs-0 col-sm-0"></div>
        <div class="col-md-4 col-xs-12 col-sm-12" style="margin-top:5em">
            <div class="card">
                <div class="card-body">
                    <form>
                       <div class="alert alert-success" v-if="signed && msg" role="alert">
                      {{ msg }}
                       </div>
                          <h2> Register</h2>
                              <div class="form-group" :class="{invalid: $v.email.$error}">
                                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required="required" pattern=".+@*.edu" v-model="email">
                                  <p v-if="!$v.email.isUnique">This email id already registered!!</p>
                              </div>
                              <div class="form-group" :class="{invalid: $v.password.$error}">
                                    <input type="password" class="form-control" placeholder="Password" required="required"
                                        v-model.lazy="password" @blur="$v.password.$touch()">
                                    <p v-if="!$v.password.minLength"> Password must have at least {{ $v.password.$params.minLength.min }} letters. </p>
                              </div>
                              <div class="form-group" :class="{invalid: $v.repeatPassword.$error}">
                                    <input type="password" class="form-control" placeholder="Confirm Password" v-model="repeatPassword">
                                    <p v-if="!$v.repeatPassword.sameAsPassword"> Password must be identical. </p>
                              </div>
                              <div class="form-group">
                                    <input type="checkbox" id="instructor" v-model="instructor">
                                    <label for="terms">Instructor</label>
                              </div>
                              <div class="form-group">
                                    <button type="submit" class="btn btn-success btn-lg btn-block" @click="OnRegister">Register Now</button>
                              </div>
                              <div class="text-center">Already have an account? <a href="#">Sign in</a></div>                        
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-xs-0 col-sm-0"></div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      instructor: false,
      msg: '',
      signed: false
    }
  },
  validations: {
    email: {
      required,
      email,
      async isUnique (email) {
        console.log('is uni')
        if (email === '') return true
        return axios({
          method: 'post',
          url: 'http://localhost:3000/codeword/validateEmail',
          data: {
            email
          }
        }).then(res => {
          console.log(res.data.message)
          console.log(Object.keys(res.data).length)
          return !res.data.message
        })
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    instructor: {
      sameAs: sameAs(() => true)
    }
  },
  methods: {
    OnRegister () {
      console.log('onregister clicked fullnaem', this.email)
      axios.post('http://localhost:3000/codeword/signup', {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      }).then(res => {
        this.msg = 'Successfully Registered and Redirecting to SignIn Page.'
        this.signed = true
        let _this = this
        if (res.data.message) {
          setTimeout(function () {
            _this.$router.push({ path: '/' })
          }, 1000)
        }
      })
    }
  }
}
</script>

<style>

  .form-group.invalid input {
    background-color: rgb(238, 169, 169);
  }
  .form-group.invalid label {
    color: red
  }
body {
  color: #fff;
  font-family: "Roboto", sans-serif;
}
.signup-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form h2 {
  color: #636363;
  margin: 0 0 5px;
  position: relative;
  text-align: center;
}
.signup-form h2:before,
.signup-form h2:after {
  content: "";
  height: 2px;
  width: 15%;
  background: #d4d4d4;
  position: absolute;
  top: 50%;
  z-index: 2;
}
.signup-form h2:before {
  left: 0;
}
.signup-form h2:after {
  right: 0;
}
.signup-form .btn {
  font-size: 16px;
  font-weight: bold;
  min-width: 140px;
  outline: none !important;
}
.reg{
  margin-top:2em;
}
</style>
