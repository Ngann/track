$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var challengeInput = $("#challenge").val();
    var cultureInput = $("#culture").val();
    var projectsInput = $("#projects").val();
    var locationInput = $("#location").val();

    $(".name").append(nameInput);
    $(".challenge").append(challengeInput);
    $(".culture").append(cultureInput);
    $(".projects").append(projectsInput);
    $(".location").append(locationInput);

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
