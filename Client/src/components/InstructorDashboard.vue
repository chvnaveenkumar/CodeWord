<template>
<div class="container">
<div class="row">
<div class="col-md-2 col-lg-2 col-xs-0 col-sm-0"></div>
  <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12" style="margin-top:5em">
  <div class="card">
    <div class="card-header deep-orange lighten-1 white-text">Course Name</div>
    <div class="card-body">
        <h4 class="card-title"></h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a class="btn btn-deep-orange">Go somewhere</a>
        <a class="btn btn-deep-orange">Go somewhere</a>
    </div>
</div>
    </div>
        <div class="col-md-4 col-lg-4 col-xs-8 col-sm-8" style="margin-top:5em">
    <!-- Card -->
<div class="card">

  <!-- Card image -->
  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">

  <!-- Card content -->
  <div class="card-body">

    <!-- Title -->
    <h4 class="card-title"><a>Card title</a></h4>
    <!-- Text -->
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <!-- Button -->
    <a href="#" class="btn btn-primary">Button</a>

  </div>
</div>
</div>
<!-- Card -->
    </div></div>
</template>
<script>
import {store} from './../store'
export default {
  name: 'HomePage',
  data () {
    return {
      store
    }
  }
}
</script>
<style>
#message{
    margin-top:5em;
}
</style>
