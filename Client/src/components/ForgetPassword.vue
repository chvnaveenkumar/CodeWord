<template>
<div class="container">
        <div class="row" style="margin-top: 7em">
            <div class="col-md-3 col-lg-3 col-xs-1 col-sm-1"></div>
            <div class="card col-md-6 col-lg-6 col-xs-10 col-sm-10">
            <div class="card-body">
            <div style="text-align: center">       
            </div>
            <div>
            <div class="alert alert-success" v-if="signed && msg" role="alert"> {{ msg }} </div>
            <div class="alert alert-danger" v-else-if="!signed && msg" role="alert"> {{ msg }} </div>
            <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Enter email" required="required" pattern=".+@*.edu" v-model="email" >
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
export default {
  name: 'ForgetPage',
  data () {
    return {
      msg: '',
      signed: false,
      email: ''
    }
  },
  methods: {
    forget () {
      this.msg = ''
      console.log(this.email)
      let emailid = this.email
      axios({
        method: 'post',
        url: process.env.URL + 'codeword/validateEmail',
        data: {
          email: emailid
        }
      }).then(res => {
        console.log(res.data.message)
        if (res.data.message === true) {
          axios.post(process.env.URL + 'codeword/sendmail', {
            email: emailid
          }).then(response => {
            this.msg = 'Sent temporary password to your email'
            this.signed = true
            let _this = this
            setTimeout(function () {
              _this.$router.push({ path: '/' })
            }, 1000)
          })
        } else {
          this.msg = 'This user not registered!!'
          this.signed = false
        }
      })
    }
  }
}
</script>
