$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // var nameInput = $("input#name").val();
    var challengeInput = parseInt($("#challenge").val());
    var cultureInput = parseInt($("#culture").val());
    // var projectsInput = $("#projects").val();
    // var locationInput = $("#location").val();

    // $(".name").append(nameInput);
    // $(".challenge").append(challengeInput);
    // $(".culture").append(cultureInput);
    // $(".projects").append(projectsInput);
    // $(".location").append(locationInput);

    if (challengeInput + cultureInput >= 2) {
        $(".trackResult").append("does this work?");
    }


    $("#story").show();
    console.log(cultureInput)
    event.preventDefault();
  });
});

// if (age >= 21) {
  //   $('#drinks').show();
  // }

// Available Tracks
// Ruby/Rails
// PHP/Drupal
// Java/Android
// CSS/Design
// C#/.NET
