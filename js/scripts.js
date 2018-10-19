// working test code
// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     var nameInput = $("input#name").val();
//
//     $(".name").append(nameInput);
//
//     $("#story").show();
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var challangeInput = $("#challenge").val();
    // var cultureInput = $("#culture").val();
    // var projectInput = $("#projects").val();
    // var locationInput = $("#location").val();

    $(".name").append(nameInput);
    $(".challenge").append(challengeInput);
    // $(".culture").append(cultureInput);
    // $(".projects").append(projectsInput);
    // $(".location").append(locationInput);

    $("#story").show();
    console.log(challengeInput)
    event.preventDefault();
  });
});



// Available Tracks
// Ruby/Rails
// PHP/Drupal
// Java/Android
// CSS/Design
// C#/.NET
