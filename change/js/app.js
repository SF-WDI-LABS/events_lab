console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());

  $("input.add").on("change", function handleCHnage(e) {
    var left = $("input#left").val();
    var right = $("input#right").val();
    var leftVal = parseInt(left) || 0;
    var rightVal = parseInt(right) || 0;
    $("#total").val(total);
  });

});
