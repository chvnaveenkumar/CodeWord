<script>
  $(function() {
    // Catch the file being removed.
    $('.selector').on('froalaEditor.file.unlink', function (e, editor, file) {
      $.ajax({
        // Request method.
        method: 'POST',
 
        // Request URL.
        url: '/delete_file',
 
        // Request params.
        data: {
          src: file.getAttribute('href')
        }
      })
      .done (function (data) {
        console.log ('File was deleted');
      })
      .fail (function (err) {
        console.log ('File delete problem: ' + JSON.stringify(err));
      })
    })
  });
</script>

// editing a file
(function () {
    var textFile = null;
  function makeTextFile(text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  }


  var create = document.getElementById('create');
  var textbox = document.getElementById('textbox');

    //create a click event listener
  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.setAttribute('download', 'info.txt');
    //make the text file
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
        //wait for the link to be rendered and then initiate a click to download the file
     window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
  }, false);

})();



//javascript
var dataVal = $('#TextArea').val();
if(dataVal!="")
{
$.ajax({
            url: '/createTextFile',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: dataVal,
            success: function (response) {
                alert('Success');      
            },
            error: function (xhr) {
                alert('Error: There was some error while posting. Please try again later.');
            }
        });
}

//You can server side code (C#)

function SaveToTextFIle(text)
{
    try
    {
        // The using statement automatically closes the stream and calls  
        // IDisposable.Dispose on the stream object. 
        using (System.IO.StreamWriter )
        {
            file.WriteLine(text);
        }
    }
    catch(ex)
    {
        throw ex;
    }
}