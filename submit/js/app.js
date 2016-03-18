console.log("Sanity Check: JS is working!");
$("p").on("click", function noGo(event){
event.preventDefault();
});

$(document).ready(function() {
  $("input").on("click", function noGo(event){
  event.preventDefault();
  
  });
  $("#time").text(Date.now());


});
