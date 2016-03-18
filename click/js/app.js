console.log("Sanity Check: JS is working!");

$(document).ready(function() {

$("span").on("click", function trackClick(event){
  $("ul").append(this);
});

});
