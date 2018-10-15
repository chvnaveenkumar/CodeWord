<template>
    <div class="container-fluid" style="margin-top:5em" >
      <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
         <!-- Button trigger modal -->

  <i class="fas fa-plus-circle fa-2x  tooltip-test"   title="Add Course"   data-toggle="modal" data-target="#addcourse"  style="color:green; float: left; margin-left:1em">Add Course</i>



<!-- modal -->
<div class="modal fade" id="addcourse" tabindex="-1" role="dialog" aria-labelledby="addcourseLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style= "width:fit-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addcourseLabel">Add Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form>
  <div class="form-group" >
    
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Course Name" data-toggle="tooltip" data-placement="bottom" title="Enter Course Name"   >
  </div>
  
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Section Number" data-toggle="tooltip" data-placement="bottom" title="Enter Section Number" >
  </div>
  <form>
  <div class="row">
    <div class="col tooltip-test"   title="Start Date">
      <p style="float:left">StartDate:</p>
      <input   type="date" class="form-control" placeholder="Start Date">
    </div>
    <div class="col tooltip-test"   title="End Date">
      <p style="float:left">EndDate:</p>
      <input type="date" class="form-control" placeholder="End Date">
    </div>
  </div>
  <form>
  <div class="form-group">
    <label for="exampleFormControlFile1" style="float:left" >Upload Student Details(Excel)</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
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
</form>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
      </div></div>
      <!-- <div class="row">
      <div class="col-md-4 col-lg-4 col-xs-6 col-sm-6" >

        <div class="card" style="width: 18rem; margin-left:2em;margin-top:2em; margin-right:20em">
  <img class="card-img-top" src="./android.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Mobile Computing - Android</h5>
    <p class="card-text">44644-01  2018 Fall Term</p>
    
    <a href="#" class="btn btn-primary">View</a>
  </div>
</div>
</div>
<div class="col-md-4 col-lg-4 col-xs-6 col-sm-6">
<div class="card" style="width: 18rem; margin-left:1em;margin-top:2em">
  <img class="card-img-top" src="./userinterface.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">User Experience Design</h5>
    <p class="card-text">44664-04  2018 Fall Term</p>
    
    <a href="#" class="btn btn-primary">View</a>
  </div>
</div>
</div> -->
      </div>
      </div>      
</template>


<style>
#message{
    margin-top:5em;
}
</style>

