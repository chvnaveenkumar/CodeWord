<!-- @author Naveen Kumar Chandaluri <S530742@nwmissouri.edu> -->
<template>
<div class="container">
        <div class="row" style="margin-top: 7em">
            <div class="col-md-3 col-lg-3 col-xs-1 col-sm-1"></div>
            <div class="card col-md-4 col-lg-4 col-xs-12 col-sm-12">
            <div class="card-body">
            <h3> Reset your password </h3>
            <div style="text-align: center">       
            </div>
            <div>
            <div class="alert alert-success" v-if="signed && msg" role="alert"> {{ msg }} </div>
            <div class="alert alert-danger" v-else-if="!signed && msg" role="alert"> {{ msg }} </div>
            <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Enter email" required="required" pattern=".+@*.edu" v-model="email" >
                </div>
                <button type="button" class="btn btn-success btn-sm btn-block" @click="forget">Send password reset email</button>
            </form>
            </div>
            </div>
            </div>
            <div class="col-md-3 col-lg-3 col-xs-1 col-sm-1"></div>
        </div>
    </div>
</template>

<script>
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
      let emailid = this.email.toLowerCase()
      /* global axios */
      axios({
        method: 'post',
        url: 'codeword/validateEmail',
        data: {
          email: emailid
        }
      }).then(res => {
        console.log(res.data.message)
        if (res.data.message === true) {
          axios.post('codeword/sendmail', {
            email: emailid
          }).then(response => {
            this.msg = 'Sent temporary password to your email'
            this.signed = true
            let _this = this
            setTimeout(function () {
              _this.$router.push({ path: '/' })
            }, 2000)
          })
        } else {
          this.msg = 'Invalid User!!'
          this.signed = false
        }
      })
    }
  }
}
</script>
