
$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "data.csv",
        dataType: "text",
        success: function(inputData) {
            getData(inputData);
        }
       });
      });
   function getData(inputData) {
  var rows = inputData.split(/\r?\n|\r/);
  var table = '<table>';
  for (var eachRow = 0; eachRow < rows.length; eachRow++) {
    if (eachRow === 0) 
    {
      table += '<thead>';
      table += '<tr>';
    } 
    else {
      table += '<tr>';
    }
    var rowCells = ows[eachRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (eachRow === 0)
      {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } 
      else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (eachRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } 
    else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
  $('body').append(table);
}
