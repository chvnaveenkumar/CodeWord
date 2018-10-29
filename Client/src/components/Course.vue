<style>
.grid-container {
  display: grid;
  grid-gap: 10px;
 
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 15px;
  font-size: 17px;
}
.item1 {
  grid-column: 1/spam 3;
  grid-row: 2;
}
.item2 {
  grid-column: 3/span 3;
  grid-row:1;
}
.item3{
grid-column: 1;
  grid-row: 3;
  }
  .item4{
grid-column: 2;
  grid-row: 3;
  }
    .item5{
grid-column: 3;
  grid-row: 3;
  }
   .item6{
grid-column: 1/spam 2;
  grid-row: 4;
  }
  .item7{
grid-column: 2;
  grid-row: 5;
  }
</style>
<template>
<div class="grid-container">
  
  <div class="grid-item item1">Enter Course Name/No:
      <input type="text" placeholder="Enter the Course Name" id="myText" ></div>
      <div class="grid-item item2">Instructure name</div>
  <div class="grid-item item3"><gc-spread-sheets [hostStyle]="hostStyle" (workbookInitialized)="workbookInit($event)">
        </gc-spread-sheets><input type="file" name="files[]" multiple id="jsonFile" accept=".xlsx" (change)="onFileChange($event)" /></div>
        <div class="grid-item item4">
            <button (click)="onClickMe($event)">Save Excel!</button></div>  
   <div class ="grid-item item5">
<meta name="viewport" content="width=device-width, initial-scale=1">
</template>
<style>
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
}

#myInput {
    border-box: box-sizing;
    background-image: url('searchicon.png');
    background-position: 14px 12px;
    background-repeat: no-repeat;
    font-size: 16px;
    padding: 14px 20px 12px 45px;
    border: none;
    border-bottom: 1px solid #ddd;
}

#myInput:focus {outline: 3px solid #ddd;}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f6f6f6;
    min-width: 230px;
    overflow: auto;
    border: 1px solid #ddd;
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
</style>
<template>

<div class="dropdown">
<button onclick="myFunction()" class="dropbtn">Select The Code Word</button>
  <div id="myDropdown" class="dropdown-content">
    <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
    <a href="#">Excel 1</a>
    <a href="#">Excel 2</a>
    <a href="#">Excel 3</a>
      </div>
</div>
</template>

<script>

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
</script>
<template>
<div class="grid-item item6">Hint: Upload excel sheet with SID and Name of the student</div> 
<div class="grid-item item7">
    
        <input type="submit" value="Submit" class="btn btn-primary" />
    
</div>
</div>
</p>
</template>

