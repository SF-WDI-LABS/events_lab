console.log("Sanity Check: JS is working!");


$(document).ready(function() {

  $("#time").text(Date.now());

  $("form").on("submit", function handleSubmit(event) {
    event.preventDefault();
    $("body").append(rick_roll_youtube_embed_code);
  });

});
