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
    });
  });
</script>