<template>
  <div>
    <div class="container ">
        <div class="row">
          <div class="col-md-4 col-xs-0 col-sm-0"></div>
          <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="card">
                <div class="card-body">
                  <div class="alert alert-success" v-if="signed && msg" role="alert">
                      {{ msg }}
                  </div>
                  <div class="alert alert-danger" v-else-if="!signed && msg" role="alert">
                      {{ msg }}
                  </div>
                  <form>
                      <div class="form-group row ">
                         <label for="inputEmail">Email address</label>
                          <input type="text" name="emailID" class="form-control" id="inputEmail" placeholder="Email ID">
                      </div>
                      <div class="form-group row">
                        <label for="inputPassword">Password</label>
                          <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password">
                      </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="signIn">Sign In</button>
                  </form>
                </div>
              </div>
          </div>
          <div class="col-md-4 col-xs-0 col-sm-0"></div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 40px !important;
  margin-top: 5em;
  border-radius: 7.35em;
  border: 9px solid rgba(0, 0, 0, 0.125);
}
.btn{
  margin-right: 180px;
}
</style>
