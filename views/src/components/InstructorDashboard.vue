<template>
<div class="container-fluid" style="margin-top:5em" >
  <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
    <button type="button" class="btn btn-success" title="Create CodeWord Set" data-toggle="modal" data-target="#addcourse" v-on:click="loadCourseModel">
      <span class="fa fa-plus"></span> Add Course </button>
  </div>
  <div class="row">
    <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
      <div class="card coursecard" >
        <div class="card-body">
          <h5 class="card-title">{{ courseName }}</h5>
          <br>          
          <p> <pre>{{ startDate }}            {{ endDate }}</pre></p>          
          <a href="#" class="card-link">Survey Start URL</a>
          <a href="#" class="card-link">Survey End URL</a>
          <button type="button" class="btn btn-primary">View students</button>
          </div>
        </div>
    </div>
  </div>
  <!-- Model to  add Course -->
      <div class="modal fade" id="addcourse" tabindex="-1" role="dialog" aria-labelledby="addcourseLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content" style= "width:fit-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addcourseLabel">New Course Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            </div>
            <form @submit.prevent="CreateCourse">
            <div class="modal-body">
            <!-- Retrive the course name from input field -->
            <div class="form-group">
              <input type="text" class="form-control" pattern=".{6,}" id="courseName" name="courseName" placeholder="Enter Course Name" data-toggle="tooltip"  title="Atleast 6 characters" required>
            </div>
            <div class="row">
                <div class="col tooltip-test" title="Start Date"> Start Date:<input type="date" class="form-control" id="startDate" name="startDate" placeholder="Start Date" required/></div>
                <div class="col tooltip-test" title="End Date"> End Date:<input type="date" class="form-control" id="endDate"  name="endDate" placeholder="End Date" required></div>
            </div>
            <div class="form-group">
                <input type="file" ref="file" v-on:change="handleFileUpload()" class="form-control-file" id="file" style="margin-top:1em" required>
                Upload Student Details(Excel)
            </div>
            <div class="form-group" required>
                <select class="form-control form-control-sm" >
                  <option v-for="codewordset in codeWordSetData" :key="codewordset._id">{{ codewordset.CodeWordSetName }}</option>
                </select>
            </div>
            <div class="form-group" >
              <input type="text" class="form-control" placeholder="Enter Survey Start URL" name="startSurveyurl" data-toggle="tooltip" data-placement="bottom" title="Enter Survey Start URL" >
            </div>
            <div class="form-group" >
              <input type="text" class="form-control" placeholder="Enter Survey End URL"  name="endSurveyurl" data-toggle="tooltip" data-placement="bottom" title="Enter Survey End URL" >
            </div>
            <div >
              <button type="cancel" class="btn btn-warning" data-dismiss="modal">Cancel</button>
              <button type="create" class="btn btn-primary">Create Course</button>
            </div>
            </div>
            </form></div></div></div>
  </div>
</template>
<script>
export default {
  name: 'InstructorDashboard',
  data () {
    return {
      courseName: '',
      startDate: '',
      endDate: '',
      startSurveyurl: '',
      endSurveyurl: '',
      CodeWordSetName: '',
      file: '',
      codeWordSetData: ''
    }
  },
  methods: {
    CreateCourse () {
      let data = new FormData(document.querySelector('form'))
      this.courseName = data.get('courseName')
      this.startDate = data.get('startDate')
      this.endDate = data.get('endDate')
      this.startSurveyurl = data.get('startSurveyurl')
      this.endSurveyurl = data.get('endSurveyurl')
      let formData = new FormData()
      formData.append('CourseNameKey', this.courseName)
      formData.append('CodeWordSetName', 'Large Set1')
      formData.append('file', this.file)
      /* global axios $ */
      axios.all([axios({
        method: 'post',
        url: 'codeword/addnewCourse',
        data: {
          token: window.localStorage.getItem('token'),
          courseNameKey: this.courseName,
          startDate: this.startDate,
          endDate: this.endDate,
          preSurveyURL: this.startSurveyurl,
          postSurveyURL: this.endSurveyurl
        }
      }),
      axios.post('codeword/addcoursestudent',
        formData, {headers: {
          'Content-Type': 'multipart/form-data',
          token: window.localStorage.getItem('token')
        }
        })])
        .then(res => {
          console.log('Res ponse')
          $('#addcourse').modal('hide')
        })
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    },
    getStartDate () {
      var today = new Date()
      document.getElementById('startDate').value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2)
    },
    loadCourseModel () {
      axios({
        method: 'get',
        url: 'codeword/getcodewordset'
      }).then(response => {
        this.codeWordSetData = response.data.data
        console.log(this.codeWordSetData[0].CodeWordSetName)
      })
    }
  }
}
</script>
<style>
#message{
    margin-top:5em;
}
.coursecard {
  width: 20rem;
  margin-top: 1em;
  margin-left: 8.5em;
  background-color:#41f4b2;
}
</style>
