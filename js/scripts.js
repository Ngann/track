$(document).ready(function() {
  $(".flash").click(function() {
      $(this).children("h3").toggle();
      $(this).children("p").toggle();
  });

  // (".bucket#btn").click(function() {
  //     $(".bucket").hide();
  //     $(".survey").show();
  // });


  $("#formOne").submit(function(event) {
    // var nameInput = $("input#name").val();
    var challengeInput = parseInt($("#challenge").val());
    var cultureInput = parseInt($("#culture").val());
    var projectsInput = parseInt($("#projects").val());
    var locationInput = parseInt($("#location").val());
    var total = challengeInput+cultureInput+projectsInput+locationInput
    var resultOne = "Ruby/Rails and PHP/Drupal"
    var resultTwo = "PHP/Drupal and Java/Android"
    var resultThree = "Java/Android and C#/.NET"
    var resultFour = "CSS/Design and Ruby/Rails"

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
      $(".trackResult").append(resultOne);
      $("#story").show()
    } else if (total < 7) {
      $(".trackResult").append(resultTwo);
      $("#story").show()
    } else if (total < 10) {
      $(".trackResult").append(resultThree);
      $("#story").show()
    } else if (total > 10) {
      $(".trackResult").append(resultFour);
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
