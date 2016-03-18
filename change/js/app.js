console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function() {

  $("#time").text(Date.now());

  $("input.add").on("change", function handleChange(event) {
    var left = $("input#left").val();
    var right = $("input#right").val();
    var leftVal = parseInt(left) || 0;
    var rightVal = parseInt(right) || 0;
    var total = leftVal + rightVal;
    $("#total").val(total);
  });

});
