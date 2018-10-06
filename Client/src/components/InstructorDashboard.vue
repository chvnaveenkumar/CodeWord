<template>
    <div class="container-fluid" style="margin-top:5em" >
      <div class="row">
      <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0">
         
      </div>
      <div class="table-responsive col-md-8 col-lg-8 col-xs-12 col-sm-12" >
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add Course
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form>
  <div class="form-group" >
    <label for="formGroupExampleInput" style="float:left">Course Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Course Name">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2" style="float:left">CRN #</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter CRN#">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2" style="float:left">Section#</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Section #">
  </div>
  <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Start Date">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="End Dae">
    </div>
  </div>
  <form>
  <div class="form-group">
    <label for="exampleFormControlFile1" style="float:left" >UploadbStudent Details(Excel)</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
  <select class="form-control form-control-sm">
  <option>Select Codeword set</option>
</select>
<div class="form-group" >
    <label for="formGroupExampleInput" style="float:left">Survey URL:</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter URL">
  </div>
</form>
</form>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
      </div>
</template>


<style>
#message{
    margin-top:5em;
}
</style>
