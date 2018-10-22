<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top">Code Word</a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
             <div class="navbar-collapse collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto" v-if="!auth">
                    <li class="nav-item">
                        <router-link to="/signup">Sign Up</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/">Sign In</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto" v-if="auth">
                    <li class="nav-item" v-if='this.$route.name != "StudentDashboard"'>
                        <router-link to="/instructordashboard">Dashboard</router-link>
                    </li>
                    <li class="nav-item" v-if='this.$route.name != "StudentDashboard" || this.$router.name === "ChangePassword"'>
                        <router-link to="/codewordset">CodeWord</router-link>
                    </li>
                      <li class="nav-item dropdown">
                      <div class="dropdown">
                      <a class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {{ email }}
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" @click.prevent="changePassword" >Change Password</a>                                            
                          <a class="dropdown-item" @click.prevent="onLogout" >   Logout <img id="bg"src="https://cdn3.iconfinder.com/data/icons/basic-colored/1024/shutdown-128.png" style="width:50px;height:30px" > </a>
                      </div>
                      </div>
                      </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import User from "@/../services/auth";
export default {
  data() {
    return {
      auth: false,
      email: ""
    };
  },
  mounted () {
    console.log('meta'+ this.$route.name )
    this.auth = User.check();
    if (this.auth) {
      axios({
        method: "post",
        url: "codeword/details",
        headers: {
          token: window.localStorage.getItem("token")
        }
      }).then(result => {
        this.email = result.data.email;
      });
    }
  },
  methods: {
    onLogout() {
      localStorage.removeItem("token");
      this.auth = User.check();
      this.$router.push({ path: "/" });
    },
    changePassword() {
      this.$router.push({ path: "/changePassword" });
    },
    createCodeWordSet() {
      this.$router.push({ path: "/createcodewordset" });
    },
     deleteCodeWordSet() {
      this.$router.push({ path: "/deletecodewordset" });
    }
  },
  watch: {
    $route(to, from, next) {
      this.auth = User.check();
    }
  }
};
</script>
<style>
li a {
  color: white;
  padding-left: 1em;
  
}
#bg{
  position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
}

#dropdownMenuButton{
  color: white
}
</style>
