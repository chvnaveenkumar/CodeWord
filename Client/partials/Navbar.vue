<template>
  <header id="header">
    <div class="logo">
      <a class="active"><router-link to="/">CodeWord</router-link></a>
    </div>
    <nav>
      <ul>
        <li v-if="!auth">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="auth">
     <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" @click.prevent="onProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item">Signed in as</a>
        <a class="dropdown-item">  {{ email }} </a>
        <b-dropdown-divider></b-dropdown-divider>
        <a @click.prevent="profilePage" class="dropdown-item">Profile</a>
        <a @click.prevent="changePassword" class="dropdown-item">Change Password</a>
        <b-dropdown-divider></b-dropdown-divider>
        <a class="dropdown-item" @click.prevent="onLogout" >Logout</a>
    </div>
</div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import axios from 'axios'
import User from '@/../services/auth'
export default {
  data () {
    return {
      auth: false,
      email: ''
    }
  },
  mounted () {
    this.auth = User.check()
  },
  methods: {
    onLogout () {
      localStorage.removeItem('token')
      this.auth = User.check()
      this.$router.push({ path: '/' })
    }
  },
    watch: {
      '$route' (to, from, next) {
      this.auth = User.check()
  }
}
}
</script>
<style scoped>
#header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #212529;
  padding: 0 20px;
}
nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-left: -6px !important;
}

li {
  margin: 0 16px;
}

li a {
  color: white;
}
.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
.logo{
    background-color: #0B3B39;
    overflow: hidden;
}

.logo a:hover {
    background-color: #848484;
    color: black;
}

.logo a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 7.5px 10px;
     text-shadow: 2px 2px #FF0000;
    font-size: 17px;
}
</style>
