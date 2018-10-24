<template>
  <div>
    <div class="container ">
        <div class="row">
        <div class="col-md-4 col-xs-0 col-sm-0"></div>
        <div class="col-md-5 col-xs-8 col-sm-8" style="margin-top:6em">
            <div class="card">
            <div class="card-body">
            <h2> Change Password</h2>  
            <div class="alert alert-success" v-if="changed && msg" role="alert"> {{ msg }} </div> 
        <form @submit.prevent="changePassword">
            <div class="form-group row">
            <label for="inputPassword" class="col-lg-5 col-form-label">New Password:</label>
            <div class="col-lg-7" :class="{invalid: $v.newpassword.$error}">
            <input type="password" class="form-control" placeholder="New Password" v-model="newpassword" @blur="$v.newpassword.$touch()">
      <p v-if="!$v.newpassword.minLength"> Password must have at least {{ $v.newpassword.$params.minLength.min }} letters. </p>
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword" class="col-lg-5 col-form-label">Confirm Password:</label>
    <div class="col-lg-7" :class="{invalid: $v.repeatPassword.$error}">
      <input type="password" class="form-control" placeholder="Confirm Password" v-model="repeatPassword">
      <p v-if="!$v.repeatPassword.sameAsPassword"> Password must be identical. </p>
    </div>
  </div>
  <div class="form-group row">
    <label for="changePassword" class="col-lg-5 col-form-label"></label>
    <div class="col-lg-7">
    <button type="submit" class="btn btn-primary" :disabled="this.$v.$invalid">Change Password</button>
    </div>
</div>
</form>
  </div></div></div></div>
  <div class="col-md-3 col-lg-3 col-xs-1 col-sm-1"></div>
  </div>
  </div>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      newpassword: '',
      repeatPassword: '',
      changed: '',
      loginrole: this.$route.params.loginrole
    }
  },
  validations: {
    newpassword: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('newpassword')
    }
  },
  methods: {
    changePassword () {
      this.msg = ''
      /* global axios */
      axios({
        method: 'post',
        url: 'codeword/changepassword',
        data: {
          token: window.localStorage.getItem('token'),
          password: this.newpassword
        }
      }).then(res => {
        var _this = this
        if (res.data.message === true) {
          setTimeout(function () {
            this.msg = 'Changed Password Successfully!!'
            if (_this.loginrole === true) {
              _this.$router.push({ path: '/instructordashboard' })
            } else {
              _this.$router.push({ path: '/studentdashboard' })
            }
          }, 1000)
        }
      })
    }
  }
}
</script>

<style>
.settings-page {
  width: 600px;
  margin: 0 auto;
  padding: 30px 0;
}
</style>
