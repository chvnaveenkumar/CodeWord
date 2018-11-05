<template>
    <div class="container">
      <div class="row">
      <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0"></div>
      <div class="table-responsive col-md-8 col-lg-8 col-xs-12 col-sm-12" style="margin-top:5em">
    
      <h2>Codewords Page</h2>
      
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Create a new codeword
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Codeword</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select CodewordSet</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Set1</a>
      <a class="dropdown-item" href="#">Set2</a>
      <a class="dropdown-item" href="#">Set3</a>
  </div>
</div>
        
        <input type="text" aria-label="First name" class="form-control">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">ADD</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select CodewordSet
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Set1</a>
    <a class="dropdown-item" href="#">Set2</a>
    <a class="dropdown-item" href="#">Set3</a>
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
      <td>Codeword2</td>
      <td>Codeword3</td>
    </tr>
   
  </tbody>
</table>

    </div>
    </div>
</template>