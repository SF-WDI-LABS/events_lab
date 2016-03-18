console.log("Sanity Check: JS is working!");
$(document).ready(function(){
  var startTime;
  var endTime;
  var total;

  $(window).on("keypress", function handleKeypress(event) {
    if (startTime) {
      endTime = Date.now();
      total = (endTime - startTime) / 1000;
      $("#total-time").text(total + " seconds");
    } else {
      startTime = Date.now();
    }
  });
});
