<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand " href="#page-top">Code Word</a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
             <div class="navbar-collapse collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-if="!auth">
                        <router-link to="/signup">Sign Up</router-link>
                    </li>
                    <li class="nav-item" v-if="!auth">
                        <router-link to="/">Sign In</router-link>
                    </li>
                    <li class="nav-item" v-if="auth">
                        <router-link to="/dashboard"></router-link>
                    </li>
                    <li v-if="auth" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ email }}</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                          
                            <a class="dropdown-item">  {{ email }} </a>
                             <a @click.prevent="profilePage" class="dropdown-item">Profile</a>
                            <a @click.prevent="changePassword" class="dropdown-item">Change Password</a>
                            <a class="dropdown-item" @click.prevent="onLogout" >Logout</a>
                        </div>
                      </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import axios from "axios";
import User from "@/../services/auth";
import Config from "@/../config/config";
export default {
  data() {
    return {
      auth: false,
      email: ""
    };
  },
  mounted() {
    this.auth = User.check();
    if (this.auth) {
      axios({
        method: "post",
        url: "http://localhost:3000/codeword/details",
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

</style>
