<template>
<div class="container-fluid" style="margin-top:5em" >
            <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
                <button type="button" class="btn btn-success" title="Create CodeWord Set" data-toggle="modal" data-target="#addcourse">
                    <span class="fa fa-plus"></span> Add Course
                </button>
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
                                                StartDate:
                                                <input   type="date" class="form-control" placeholder="Start Date" >
                                            </div>
                                            <div class="col tooltip-test"   title="End Date">
                                                EndDate:
                                                <input type="date" class="form-control" placeholder="End Date" >
                                            </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" style="width: 20rem; margin-left: 1em;background-color:#41f4b2">
        <div class="card-body">
          <h5 class="card-title">Mobile Computing - Android</h5>
          <h6 class="card-subtitle mb-2 text-muted">44644-01</h6>
          <pre>10/21/2018      12/21/2018</pre>          
          <a href="#" class="card-link">Survey Start URL</a>
          <a href="#" class="card-link">Survey End URL</a>
          <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Viewcoursemodal">
  <i class="fas fa-eye"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="Viewcoursemodal" tabindex="-1" role="dialog" aria-labelledby="#ViewcoursemodalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ViewcoursemodalLabel">View Course Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">StudentName</th>
      <th scope="col">Student Email</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Naveenkumar Nuggu</td>
      <td>S531373@nwmissouri.edu</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Naveenkumar Chandaluri</td>
      <td>S530742@nwmissouri.edu</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>SriLekha Vijaya </td>
      <td>S531382@nwmissouri.edu</td>
      
    </tr>
  </tbody>
</table>
      </div>
     
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  <i class="fas fa-trash"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete the course?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-primary">No</button>
      </div>
    </div>
  </div>
</div>
          
        </div>
      </div></div>
            

</template>


<style>
#message{
    margin-top:5em;
}
</style>

