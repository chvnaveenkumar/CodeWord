<template>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
<!-- <div class="container">

        <div class="row">
          <div class="col"></div>
          
          <div class="col"></div>
          <div class="w-100"></div>
          
              
        </div>

      </div> -->
      <div class="d-flex flex-column"><div class="align-self-center"><div class="col">
            <div class="h-50 p-3"><p class="font-weight-bold"><h3>Add Course</h3> </p></div></div></div></div>
<!--      
            <div class="mx-auto" style="width: 200px;">
                    <h5>Add Course</h5>
                  </div> -->

                  <!-- <p class="text-xl-center"></p> -->
                  <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-success">ADD</button>
<button type="button" class="btn btn-outline-danger">Cancle</button>
</div>
<div class="card text-center">
        <div class="card-header">
                <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                <p class="font-weight-bold"><h3>Add Course</h3> </p>
        </div>
        <div class="card-body">
                <form>
                        <div class="form-group">
                <!-- <p><input class="form-control" type="text" placeholder="Enter the Course Name"></p> -->
                        


              <p> <form autocomplete="off" action="/action_page.php">
                    <div class="autocomplete">
                      <input class="form-control" id="myInput" type="text" name="myCountry" placeholder="Enter the Course Name">
                    </div>
                                      </form></p> 


               <p> <input class="form-control" type="text" placeholder="Enter the Section Number"></p>
            </div>
        </form>
        <div class="input-group mb-3">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile02">
                  <label class="custom-file-label" data-toggle="Upload excel sheet with SID and Name of the student" for="inputGroupFile02">Choose file</label>
                </div>
                <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Upload</button>
                      </div>
                      
              </div>
              <label for="basic-url">Hint:Upload excel sheet with SID and Names of the students</label>
              <p><input class="form-control" type="text" placeholder="Enter the Survay Start URL"></p>
              <p> <input class="form-control" type="text" placeholder="Enter the Survay End URL"></p>
      


        </div>
        <div class="card-footer text-muted">
                <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-success">ADD</button>
      <button type="button" class="btn btn-outline-danger">Cancle</button>
      </div>
        </div>
        
      </div>
</template>
      <script>
            function autocomplete(inp, arr) {
               var currentFocus;
              inp.addEventListener("input", function(e) {
                  var a, b, i, val = this.value;
                   closeAllLists();
                  if (!val) { return false;}
                  currentFocus = -1;
                  a = document.createElement("DIV");
                  a.setAttribute("id", this.id + "autocomplete-list");
                  a.setAttribute("class", "autocomplete-items");
                  this.parentNode.appendChild(a);
                  for (i = 0; i < arr.length; i++) {
                    
                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                      
                      b = document.createElement("DIV");
                      
                      b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                      b.innerHTML += arr[i].substr(val.length);
                      
                      b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                      
                      b.addEventListener("click", function(e) {
                          
                          inp.value = this.getElementsByTagName("input")[0].value;
                         
                          closeAllLists();
                      });
                      a.appendChild(b);
                    }
                  }
              });
              
              inp.addEventListener("keydown", function(e) {
                  var x = document.getElementById(this.id + "autocomplete-list");
                  if (x) x = x.getElementsByTagName("div");
                  if (e.keyCode == 40) {
                    
                    currentFocus++;
                    
                    addActive(x);
                  } else if (e.keyCode == 38) { //up
                    
                    currentFocus--;
                    
                    addActive(x);
                  } else if (e.keyCode == 13) {
                    
                    e.preventDefault();
                    if (currentFocus > -1) {
                    
                      if (x) x[currentFocus].click();
                    }
                  }
              });
              function addActive(x) {
                
                if (!x) return false;
               
                removeActive(x);
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (x.length - 1);
                
                x[currentFocus].classList.add("autocomplete-active");
              }
              function removeActive(x) {
               
                for (var i = 0; i < x.length; i++) {
                  x[i].classList.remove("autocomplete-active");
                }
              }
              function closeAllLists(elmnt) {
                
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                  if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                  }
                }
              }
              /*execute a function when someone clicks in the document:*/
              document.addEventListener("click", function (e) {
                  closeAllLists(e.target);
              });
            }
            
            
            var countries = ["Object Oriented Programming","Mobile Computing"]
            autocomplete(document.getElementById("myInput"), countries);






            let getcourse = (req, res) => {
      var body = _.pick(req.body,['']);
    var Course = new Codewordset({
       course: body.course,
       coursecreator: req.session.email
    });
    course.save().then((codes) => {
        return res.json({ code: 200, data: codes });
    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message: e });
    })
}
module.exports.addcodewordset = addcodewordset;

let getcodewordset = (req, res) => {
    Codewordset.find({ $or: [{CourseCreator: req.session.email}, {defaultRow: true},{CourseCreator: 'twosets' }] } ).then((codes) => {
        if (codes)
            return res.json({ code: 200, data: codes });
    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message: e });
    })
}
module.exports.getcourse = getcourse;
            </script>
            

      