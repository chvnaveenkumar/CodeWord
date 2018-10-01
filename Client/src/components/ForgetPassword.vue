<template>
<div class="container">
        <div class="row" style="margin-top: 7em">
            <div class="col-md-3 col-lg-3 col-xs-1 col-sm-1"></div>
            <div class="card col-md-6 col-lg-6 col-xs-10 col-sm-10">
                <div class="card-body">
                        <div style="text-align: center">       
                            </div>
                            <div>
                                <div class="alert alert-success" v-if="signed && msg" role="alert">
                                       {{ msg }}
                                </div>
                                <div class="alert alert-danger" v-else-if="!signed && msg" role="alert">
                                      {{ msg }}
                                </div>
                                <form>
                                    <div class="form-group row " style="padding-left: 10px;padding-right: 10px">
                                    <label for="inputEmail" style="font-family: inherit">Email Address</label>
                                    <input type="text" name="emailID" class="form-control" id="inputEmail" placeholder="Email ID">
                                    </div>
                                    <div class="form-group" :class="{invalid: $v.email.$error}">
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required="required" pattern=".+@*.edu" v-model="email">
                                        <p v-if="!$v.email.isUnique">This email id already registered!!</p>
                                    </div>
                                    <button type="button" class="btn btn-primary btn-lg btn-block" @click="forget">Get Password</button>
                                    </form>
                                </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-xs-1 col-sm-1"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  name: 'ForgetPage',
  data () {
    return {
      msg: '',
      signed: false,
      email: '',
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
  methods: {
    forget () {
      this.msg = ''
      let data = new FormData(document.querySelector('form'))
      axios.post('http://localhost:3000/codeword/signin', {
        email: data.get('emailID'),
        password: data.get('password')
      }).then(response => {
        if (response.data.token) {
          this.msg = 'Signed in successfully. Redirecting .'
          this.signed = true
          localStorage.setItem('token', response.data.token)
          let _this = this
          setTimeout(function () {
            _this.$router.push({ path: '/dashboard' })
          }, 1000)
        } else {
          this.msg = response.data.message
          this.signed = false
        }
      })
    }
  }
}
}
</script>
