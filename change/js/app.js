console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#left, #right").on("change", function add(event){
    var num1 = parseInt($("#left").val());
    var num2 = parseInt($("#right").val());
    var totaln = num1 + num2;
  $(".confused").val(totaln).val();
  console.log(totaln);


  });

  $("#time").text(Date.now());

});
