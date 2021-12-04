
$(document).ready(function () {
    $("#term").keypress(function () {
      var term = "";
      term = $('#term').val();
      $('#content').unhighlight();
      console.log(term);
      if ($('#term').val() == "") {

      } else {
        $('#content').highlight(term);
        return true;
      }
    });
  });