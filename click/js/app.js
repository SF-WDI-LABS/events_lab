
console.log("Sanity Check: JS is working!");
$(document).ready(function() {

 $('span').on ("click", function listOnClick(event){
 $("ul").append(this);
  });
});
