$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // var nameInput = $("input#name").val();
    var challengeInput = parseInt($("#challenge").val());
    var cultureInput = parseInt($("#culture").val());
    var projectsInput = parseInt($("#projects").val());
    var locationInput = parseInt($("#location").val());
    var total = challengeInput+cultureInput+projectsInput+locationInput

    // $(".name").append(nameInput);
    // $(".challenge").append(challengeInput);
    // $(".culture").append(cultureInput);
    // $(".projects").append(projectsInput);
    // $(".location").append(locationInput);

    // if (challengeInput + cultureInput >= 5) {
    //     $(".trackResult").append("does this work?");
    // }

    if (challengeInput === 2) {
       // $(".trackResult").append("Sorry, we don't think you would enjoy a career in coding");
       $('#other').show();
    } else if (total < 5) {
      $(".trackResult").append("Ruby");
      $("#story").show()
    } else if (total < 7) {
      $(".trackResult").append("Java");
      $("#story").show()
    } else if (total > 10) {
      $(".trackResult").append("Python");
      $("#story").show()
    } else {
      //else what? //
    }

    // $("#story").show();
    console.log(total)
    event.preventDefault();
  });
});
// Available Tracks
// Ruby/Rails
// PHP/Drupal
// Java/Android
// CSS/Design
// C#/.NET
