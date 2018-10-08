<template>
    <div class="container-fluid" style="margin-top:5em" >
      <div class="row">
       <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12"> 
         <h1>
           CodeWord Set
         </h1>
        </div>
      <div class="row">
        
      <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0">
      


      <i class="fas fa-plus-circle fa-3x  tooltip-test"   title="create CodeWord Set"   data-toggle="modal" data-target="#createCodeWordSet"  style="color:green; margin-left: 1em"></i>


<!-- Modal -->
<div class="modal fade" id="createCodeWordSet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New CodeWord</h5>
      </div>
      <div class="modal-body">
   <form>
  <div class="form-group" >
    <label for="formGroupExampleInput" style="float:left">CodeWord Set Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter CodeWord Set Name">
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1" style="float:left" >Upload CodeWord Set(Excel)</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Upload</button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
    <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12" >
        
      </div>
      <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0"></div>
</template>


<style>
#message{
    margin-top:5em;
}
</style>
