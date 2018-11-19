<template>
    <div class="container" style="margin-top:5em" >
      <div class="row">
      <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0">
      </div>
      <div class="table-responsive col-md-8 col-lg-8 col-xs-12 col-sm-12" >
        <!-- Button trigger modal -->
      <h2>CodWords</h2>
              
  <table class="table col-md-12 col-lg-12 col-xs-12 col-sm-12 table-striped table-bordered table-hover" >
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Codeword</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Graduate Directed Project-1</td>
        <td>Cricket</td>
      </tr>
      
    </tbody>
  </table>
  <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0"></div>
</div></div>
</div>
</template>
<script>

export default {
  name: 'InstructorDashboard',
  data () {
    return {
      courseName: '',
      startSurveyurldata: '',
      endSurveyurldata: '',
      Codeword: ''
    }
  },
  /* global axios */
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchUserData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchUserData'
  },
  methods: {
    fetchUserData () {
      axios({
        method: 'get',
        url: 'codeword/getstudentcodeword',
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(response => {
        this.userCodeword = response.data.data
        console.log(this.userCodeword)
      })
    }
  }
}
</script>