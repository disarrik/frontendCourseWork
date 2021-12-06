$(document).ready(function () {
    $("#term").keyup (function () {
      var term = "";
      term = $('#term').val();
      $('#content').unhighlight();
      var elem = document.getElementById("content");
      if ($('#term').val() != "") {
        $('#content').highlight(term);
        for(var i = 0; i < elem.children.length; i++) {
          if (myHasClass(elem.children[i], "highlight")) {
            elem.children[i].style.display = "block";
          }
          else {
            elem.children[i].style.display = "none";
          }
        }
      }
      else {
        for(var i = 0; i < elem.children.length; i++) {
          elem.children[i].style.display = "block";
        }
      }
      return true;
    });
  });

function myHasClass(elem, className) {
  if (elem.children.length == 0) {
    return elem.classList.contains(className);
  }
  else {
    var flag = false
    for(var i = 0; i < elem.children.length; i++) {
      var flag = myHasClass(elem.children[i], className)
      if (flag) break
    }
    return (elem.classList.contains(className) || flag)
  }
}