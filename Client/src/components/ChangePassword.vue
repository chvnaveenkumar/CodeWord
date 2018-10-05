<template>
  <div>
    <div class="container ">
        <div class="row">
        <div class="col-md-3 col-xs-0 col-sm-0"></div>
        <div class="col-md-6 col-xs-8 col-sm-8" style="margin-top:5em">
            <div class="card">
                    <div class="card-body">
            <h2> Change Password</h2>   
        <form>
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
    <button type="submit" class="btn btn-primary" :disabled="this.$v.$invalid" @click="changePassword">Change Password</button>
    </div>
</div>
</form>
</div>
</div>
</div>
</div>

</form>
   </div>
  </div>
</div>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      newpassword: '',
      repeatPassword: ''
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
      console.log('change password')
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
