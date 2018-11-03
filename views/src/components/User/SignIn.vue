<!-- @author Naveen Kumar Chandaluri <S530742@nwmissouri.edu> -->
<template>
  <div>
    <div class="container ">
        <div class="row">
          <div class="col-md-4 col-xs-0 col-sm-0"></div>
          <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="signIn">
                  <div class="alert alert-success" v-if="signed && msg" role="alert">
                      {{ msg }}
                  </div>
                  <div class="alert alert-danger" v-else-if="!signed && msg" role="alert">
                      {{ msg }}
                  </div>
                  <h2> Login</h2>
                      <div class="form-group row ">
                         <label for="inputEmail">Email Address</label>
                          <input type="text" name="emailID" class="form-control" id="inputEmail" placeholder="Email ID">
                      </div>
                      <div class="form-group row">
                        <label for="inputPassword">Password</label>
                          <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password">
                      </div>
                    <button type="submit" class="btn btn-success  btn-sm btn-block">Sign In</button>
                    <div class="text-right forgetpassword"><router-link to="/forgetpassword">Forget Password?</router-link></div>
                    <div class="text-right"><p> New to CodeWord? <router-link to="/signup">Register</router-link> </p></div>
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
export default {
  name: 'SignInPage',
  data () {
    return {
      msg: '',
      signed: false,
      emailid: '',
      pass: ''
    }
  },
  methods: {
    signIn () {
      let data = new FormData(document.querySelector('form'))
      this.emailid = data.get('emailID').toLowerCase()
      this.pass = data.get('password')
      this.msg = ''
      if (this.emailid === null) {
        this.msg = 'Email ID cannot be empty'
        this.signed = false
      } else {
        axios({
          method: 'post',
          url: 'codeword/validateEmail',
          data: {
            email: this.emailid
          }
        }).then(res => {
          if (res.data.message === true) {
            this.msg = ''
            let data = new FormData(document.querySelector('form'))
            /* global axios */
            axios.post('codeword/signin', {
              email: this.emailid,
              password: this.pass
            }).then(response => {
              if (response.data.token) {
                this.msg = 'Signed in successfully. Redirecting .'
                this.signed = true
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('status', response.data.isInstructor)
                let _this = this
                setTimeout(function () {
                  if (data.get('password').length === 5) {
                    _this.$router.push({ name: 'ChangePassword', params: { loginrole: response.data.isInstructor } })
                  } else if (response.data.isInstructor === false) {
                    _this.$router.push({ name: 'StudentDashboard' })
                  } else {
                    _this.$router.push({ name: 'InstructorDashboard' })
                  }
                }, 1000)
              } else {
                this.msg = response.data.message
                this.signed = false
              }
            })
          } else {
            this.msg = 'Invalid Login!!'
            this.signed = false
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.card {
  padding: 5px !important;
  margin-top: 5em;
}
.btn{
  margin-right: center;
}
.forgetpassword{
  padding: 10px !important;
}
</style>
