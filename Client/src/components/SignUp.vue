<template>
<div class="signup-form">
<form>
<div class="card">
<div class="card-body">
    <h2>Student Register</h2>
    <div class="form-group" :class="{invalid: $v.fullname.$error}">
        <input type="text"  class="form-control" placeholder="Full Name" v-model="fullname" @blur="$v.fullname.$touch()" auto required="required">
    </div>
    <div class="form-group" :class="{invalid: $v.email.$error}">
        <input type="email" class="form-control" placeholder="Email" v-model.lazy="email" @blur="$v.email.$touch()">
        <p v-if="!$v.email.email">Please provide a valid email address.</p>
    </div>
    <div class="form-group" :class="{invalid: $v.password.$error}">
        <input type="password" class="form-control" placeholder="Password" required="required" v-model.lazy="password" @blur="$v.password.$touch()">
        <p v-if="!$v.password.minLength"> Password must have at least {{ $v.password.$params.minLength.min }} letters. </p>
    </div>
    <div class="form-group" :class="{invalid: $v.repeatPassword.$error}">
        <input type="password" class="form-control" placeholder="Confirm Password" v-model="repeatPassword">
        <p v-if="!$v.repeatPassword.sameAsPassword"> Password must be identical. </p>
    </div>
  <div class="form-group" :class="{invalid: $v.terms.$invalid}">
          <input type="checkbox" id="terms" @change="$v.terms.$touch()" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
  </div>
<div class="form-group">
    <button type="submit" class="btn btn-success btn-lg btn-block" :disabled="this.$v.$invalid" @click="OnRegister">Register Now</button>
</div>
<div class="text-center">Already have an account? <a href="#">Sign in</a></div>
</div>
</div>
   </form>
</div>
</template>
<script>
import axios from 'axios'
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      fullname: '',
      email: '',
      password: '',
      repeatPassword: '',
      terms: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    fullname: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    terms: {
      sameAs: sameAs(() => true)
    }
  },
  methods: {
    OnRegister () {
      console.log('onregister clicked fullnaem', this.fullname)
      axios.post('https://gdpcodeword.herokuapp.com/codeword/signup', {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res)
        if (res.data.message) {
          this.$router.push({path: '/signin'})
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
</style>
