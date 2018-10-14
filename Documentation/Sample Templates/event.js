
// (function(){
//     var resources = document.getElementById('resources');
//     var links = resources.getElementsByTagName('a');
//     var all = links.length;
//     for(var i=0;i<all;i++){
//       links[i].addEventListener('click',handler,false);
//     };
//     function handler(e){
//       var x = e.target; 
//       alert(x);
//       e.preventDefault();
//     };
//   })();



//   (function(){
//     var resources = document.getElementById('resources');
//     resources.addEventListener('click',handler,false);
//     function handler(e){
//       var x = e.target; // get the link tha
//       if(x.nodeName.toLowerCase() === 'a'){
//         alert('Event delegation:' + x);
//         e.preventDefault();
//       }
//     };
//   })();

 


// var firstValue = "2012-05-12".split('-');
// var secondValue = "2014-07-12".split('-');

//  var firstDate=new Date();
//  firstDate.setFullYear(firstValue[0],(firstValue[1] - 1 ),firstValue[2]);

//  var secondDate=new Date();
//  secondDate.setFullYear(secondValue[0],(secondValue[1] - 1 ),secondValue[2]);     

//   if (firstDate > secondDate)
//   {
//    alert("First Date  is greater than Second Date");
//   }
//  else
//   {
//     alert("Second Date  is greater than First Date");
//   }






// function formatDate(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'PM' : 'AM';

//     hours = hours % 12;
//     hours = hours ? hours : 12; 
//     hours   = hours < 10 ? '0'+hours : hours ;

//     minutes = minutes < 10 ? '0'+minutes : minutes;

//     var strTime = hours+":"+minutes+ ' ' + ampm;
//     return  date.getFullYear()+ "/" + ((date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) :
//     (date.getMonth()+1) ) + "/" + (date.getDate() < 10 ? "0"+date.getDate() :
//     date.getDate()) + " " + strTime;
// }




var curDate=new Date();
var startDate=document.forms[0].m_strStartDate;

var endDate=document.forms[0].m_strEndDate;
var startDateVal=startDate.value.split('-');
var endDateVal=endDate.value.split('-');
var firstDate=new Date();
firstDate.setFullYear(startDateVal[2], (startDateVal[1] - 1), startDateVal[0]);

var secondDate=new Date();
secondDate.setFullYear(endDateVal[2], (endDateVal[1] - 1), endDateVal[0]);
if(firstDate > curDate) {
    alert("Start date cannot be greater than current date!");
    return false;
}
if (firstDate > secondDate) {
    alert("Start date cannot be greater!");
    return false;
}