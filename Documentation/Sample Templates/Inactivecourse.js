var timeoutInMiliseconds = 60000;
var timeoutId; 
 
function startTimer() { 
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}
 
function doInactive() {
    // does whatever you need it to actually do - probably signs them out or stops polling the server for info
}
