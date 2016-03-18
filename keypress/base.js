console.log("Sanity Check: JS is working!");

$(document).ready(function(){

/*

Fun fact: while debugging some issues in my code along with a T.A. named Justin, we learned that
NaN is a number! typeof NaN === "number"

Wuhhh???

*/

var startTime;
var endTime;
var counter = 0;

 $(window).on("keypress", function recordEnd(event) {
    if (event.keyCode === 32) {
      counter++;
      if (counter === 1) {
        startTime = Date.now();
      } else {
          endTime = Date.now();
          var totalTime = endTime - startTime;
          if (totalTime > 0) {
          $('span').text( (totalTime/1000) + ' seconds');
        }
      }
    }
 });

})
