if ( !(eventHandle = elemData.handle) ) {
    eventHandle = elemData.handle = function( e ) {
        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
            jQuery.event.dispatch.apply( elem, arguments ) : undefined;
    };
}

<button onclick="myFunction()">Copy Text</button>


function myFunction() {
    document.getElementById("field2").value = document.getElementById("field1").value;
}



window.onload = function() {
    init();
    alert("Hello!");
 }
  
 function init() {
    document.getElementById("magic").onmouseover = function() {
       this.className = "highlight";
    }
    document.getElementById("magic").onmouseout = function() {
       this.className = "";
    }
 }window.onload = init;
 
 function init() {
   document.getElementById("btn1").onclick = changeHeading1;
   document.getElementById("btn2").onclick = changeHeading2;
   document.getElementById("btn3").onclick = changeParagraph;
 }
  
 function changeHeading1() {
   var elm = document.getElementById("heading1");  // One element
   elm.innerHTML = "Hello";
 }
  
 function changeHeading2() {
   var elms = document.getElementsByTagName("h2");  // Array of elements
   for (var i = 0; i < elms.length; i++) {
     elms[i].innerHTML = "Hello again!";
   }
 }
  
 function changeParagraph() {
   var elms = document.getElementsByClassName("para");  // Array of elements
   for (var i = 0; i < elms.length; i++) {
     elms[i].innerHTML = "Hello again and again!";
   }
 }


 window.onload = init;
 
function init() {
  document.getElementById("myLink").onclick = showWarning;
}
 
function showWarning() {
  return confirm("Warning! Proceed with care!");
}

window.onload = init;
 
function init() {
  document.getElementById("btn1").onclick = changeHeading1;
  document.getElementById("btn2").onclick = changeHeading2;
  document.getElementById("btn3").onclick = changeParagraph;
}
 
function changeHeading1() {
  var elm = document.getElementById("heading1");  // One element
  console.log(elm.innerHTML);  // Print current value before modification
  elm.innerHTML = "Hello";
}
 
function changeHeading2() {
  var elms = document.getElementsByTagName("h2");  // Array of elements
  for (var i = 0; i < elms.length; i++) {
     console.log(elms[i].innerHTML);
    elms[i].innerHTML = "Hello again!";
  }
}
 
function changeParagraph() {
  var elms = document.getElementsByClassName("para");  // Array of elements
  for (var i = 0; i < elms.length; i++) {
     console.log(elms[i].innerHTML);
    elms[i].innerHTML = "Hello again and again!";
  }
}