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
                      <div class="alert alert-danger" v-else-if="!signed && msg" role="alert">
                      {{ msg }}
                      </div>
                          <h2> Register</h2>
                              <div class="form-group">
                                  <input type="email" class="form-control" placeholder="Enter email" required="required" pattern=".+@*.edu" v-model="email">
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
                              <div class="text-center">Already have an account?<router-link to="/">Sign in</router-link></div>                        
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
import {required, minLength, sameAs} from 'vuelidate/lib/validators'

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
      this.msg = ''
      console.log(this.email)
      let emailid = this.email
      console.log(emailid)
      axios({
        method: 'post',
        url: process.env.URL + 'codeword/validateEmail',
        data: {
          email: emailid
        }
      }).then(res => {
        console.log(res.data.message)
        let _this = this
        if (res.data.message === false) {
          console.log('onregister clicked fullnaem', this.email)
          axios.post(process.env.URL + 'codeword/signup', {
            email: this.email,
            password: this.password
          }).then(res => {
            this.msg = 'Successfully Registered and Redirecting to SignIn Page.'
            this.signed = true
            if (res.data.message) {
              setTimeout(function () {
                _this.$router.push({ path: '/' })
              }, 1000)
            }
          })
        } else {
          this.msg = 'This user registerd already!!'
          this.signed = false
        }
      })
    }
  }
}
</script>
