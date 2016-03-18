console.log("Sanity Check: JS is working!");
//var text = "string";
$(document).ready(function() {
$(this).find('span').on("click", function challenge1(event) {
var $copy = $(this).text();
$("ul").text($copy);
console.log($copy);

});

});
