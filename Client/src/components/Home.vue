<template>
  <div>
    <div class="container ">
        <div class="row">
          <div class="col-md-4 col-xs-0 col-sm-0"></div>
          <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="card">
                <div class="card-body">
                  <h2> Login</h2>
                  <div class="alert alert-success" v-if="signed && msg" role="alert">
                      {{ msg }}
                  </div>
                  <div class="alert alert-danger" v-else-if="!signed && msg" role="alert">
                      {{ msg }}
                  </div>
                  <form @submit.prevent="signIn">
                      <div class="form-group row ">
                         <label for="inputEmail">Email address</label>
                          <input type="text" name="emailID" class="form-control" id="inputEmail" placeholder="Email ID" v-model='email'>
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
  name: 'HomePage',
  data () {
    return {
      msg: '',
      signed: false,
      email: ''
    }
  },
  mounted () {
    console.log(process.env.URL)
  },
  methods: {
    signIn () {
      this.msg = ''
      console.log(this.email)
      let emailid = this.email
      console.log(emailid)
      axios({
        method: 'post',
        url: 'codeword/validateEmail',
        data: {
          email: emailid
        }
      }).then(res => {
        console.log(res.data.message)
        if (res.data.message === true) {
          this.msg = ''
          let data = new FormData(document.querySelector('form'))
          /* global axios */
          axios.post('codeword/signin', {
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
        } else {
          this.msg = 'User not registered!!'
          this.signed = false
        }
      })
    }
  }
}
</script>

<style scoped>
.card {
  padding: 40px !important;
  margin-top: 5em;
}
.btn{
  margin-right: center;
}
.forgetpassword{
  padding: 10px !important;
}
</style>
