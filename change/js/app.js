console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  var totaln = $("#left")+ $("#right");
  $("#left, #right").on("keypress", function add(event){
  $("#total").change("totaln");
  });

  $("#time").text(Date.now());

});
