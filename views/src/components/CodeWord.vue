<template>
    <div id="codeWord" class="container-fluid" style="margin-top:5em">
    <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
      
                <!-- Button trigger modal -->
<button type="button" class="btn btn-success" title="Create CodeWord" data-toggle="modal" data-target="#createcodeword">
   <span class="fa fa-plus"></span> Add codeword
</button>

<!-- Modal -->
<div class="modal fade" id="createcodeword" tabindex="-1" role="dialog" aria-labelledby="createcodewordLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="createcodewordLabel">Add COdeword</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle  text-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Codeword set
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Set1</a>
    <a class="dropdown-item" href="#">Set2</a>
    <a class="dropdown-item" href="#">Set2</a>
  </div>
</div>

<div class="form-group text-left">
                                Upload Cordword Set(Excel)
                                <input type="file"  name="file" ref="myFile"  class="form-control-file" id="exampleFormControlFile1" style="margin-top:.2em"
                                    required>
                            </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
  <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle  text-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Codeword set
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Set1</a>
    <a class="dropdown-item" href="#">Set2</a>
    <a class="dropdown-item" href="#">Set2</a>
  </div>
</div>
<table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Codewords</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Codeword1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Codeword2</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Codeword3</td>
                    </tr>

                </tbody>
            </table>


    </div>
    </div>  
</template>