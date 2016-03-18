
$(document).ready(function() {

  $("#time").text(Date.now());
  $("form").on("submit", function handleSubmit(event){
    event.preventDefault();
    $("body").append('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');

    });

});
