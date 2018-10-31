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
          <h5 class="card-title">Mobile Computing - Android</h5>
          <br>          
          <p> <pre>10/21/2018             12/21/2018</pre></p>          
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
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Enter Course Name" data-toggle="tooltip" data-placement="bottom" title="Enter Course Name"   >
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Enter Section Number" data-toggle="tooltip" data-placement="bottom" title="Enter Section Number" >
            </div>
            <div class="row">
                <div class="col tooltip-test" title="Start Date"> StartDate:<input   type="date" class="form-control" placeholder="Start Date"></div>
                <div class="col tooltip-test"   title="End Date"> EndDate:<input type="date" class="form-control" placeholder="End Date"></div>
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
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Survey Start URL"  data-toggle="tooltip" data-placement="bottom" title="Enter Survey Start URL" >
            </div>
            <div class="form-group" >
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Survey End URL"  data-toggle="tooltip" data-placement="bottom" title="Enter Survey End URL" >
            </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Add</button>
            </div></div></div></div>  
  </div>
</template>
<script>
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

