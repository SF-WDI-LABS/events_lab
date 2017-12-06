console.log("Sanity Check: JS is working!");

var startTime; // undefined
var endTime; // undefined
var timerId; // undefined
var total = 0;

$(document).ready(function(){
  $(window).on("keypress", function handleKeypress(event){

    if ( startTime ) {
      endTime = Date.now();
      total = (endTime - startTime) / 1000;
      displayTotal();
      window.clearInterval(timerId);
    } else {
      startTime = Date.now();
      // now that start has been clicked,
      // use a JavaScript timing function to call
      // displayTotal every second!
      timerId = window.setInterval(displayTotal, 500);
    }

  })

})

function displayTotal(){
  total = (Date.now() - startTime) / 1000;
  $("#total-time").text( total + " seconds" );
}
