<!-- @author Shivani Dodla <S531496@nwmissouri.edu> -->
<template>
<div class="container-fluid" style="margin-top:5em" >
  <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
    <button type="button" class="btn btn-success" title="Create CodeWord Set" data-toggle="modal" data-target="#addcourse">
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
            <div class="modal-body">
            <form>
            <!-- Retrive the course name from input field -->
            <div class="form-group">
              <input type="text" class="form-control" name="courseName" placeholder="Enter Course Name" data-toggle="tooltip" data-placement="bottom" title="Enter Course Name">
            </div>
            <div class="row">
                <div class="col tooltip-test" title="Start Date"> StartDate:<input  type="date" class="form-control" name="startDate" placeholder="Start Date"></div>
                <div class="col tooltip-test" title="End Date"> EndDate:<input type="date" class="form-control" name="endDate" placeholder="End Date"></div>
            </div>
            <div class="form-group">
                <input type="file" class="form-control-file" id="exampleFormControlFile1" style="margin-top:1em">
                Upload Student Details(Excel)
            </div>
            <div class="form-group">
                <select class="form-control form-control-sm">
                  <option>Select Codeword set</option>
                </select>
            </div>
            <div class="form-group" >
              <input type="text" class="form-control" placeholder="Enter Survey Start URL" name="startSurveyurl" data-toggle="tooltip" data-placement="bottom" title="Enter Survey Start URL" >
            </div>
            <div class="form-group" >
              <input type="text" class="form-control" placeholder="Enter Survey End URL"  name="endSurveyurl" data-toggle="tooltip" data-placement="bottom" title="Enter Survey End URL" >
            </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" v-on:click="CreateCourse" >Create Course</button>
            </div></div></div></div>  
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
      endSurveyurl: ''
    }
  },
  methods: {
    CreateCourse () {
      console.log('Create Course')
      let data = new FormData(document.querySelector('form'))
      this.courseName = data.get('courseName').toLowerCase()
      this.startDate = data.get('startDate')
      this.endDate = data.get('endDate')
      this.startSurveyurl = data.get('startSurveyurl')
      this.endSurveyurl = data.get('endSurveyurl')
      /* global axios */
      axios({
        method: 'post',
        url: 'codeword/addnewCourse',
        data: {
          courseNameKey: this.courseName,
          startDate: this.startDate,
          endDate: this.endDate,
          preSurveyURL: this.startSurveyurl,
          postSurveyURL: this.endSurveyurl
        }
      }).then(res => {
        console.log(res)
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
