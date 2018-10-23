$(document).ready(function() {
  $(".flash").click(function() {
      $(this).children("h3").toggle();
      $(this).children("p").toggle();
  });

  $(".btn-success").click(function(){
    $(".survey").show();
    $(".bucket").hide();
    $(this).remove();
  });

  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var challengeInput = parseInt($("#challenge").val());
    var cultureInput = parseInt($("#culture").val());
    var projectsInput = parseInt($("#projects").val());
    var locationInput = parseInt($("#location").val());
    var total = challengeInput+cultureInput+projectsInput+locationInput
    var resultOne = "Ruby/Rails"
    var resultTwo = "PHP/Drupal"
    var resultThree = "Java/Android"
    var resultFour = "CSS/Design"

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
      $("#ruby").show()
    } else if (total < 7) {
      $(".trackResult").append(resultTwo);
      $("#story").show()
      $("#php").show()
    } else if (total < 10) {
      $(".trackResult").append(resultThree);
      $("#story").show()
      $("#java").show()
    } else if (total > 10) {
      $(".trackResult").append(resultFour);
      $("#story").show()
      $("#css").show()
    } else {
      alert("We think all tracks will be great for you!");
    }

    $(".survey").hide();
    $(".name").append(nameInput);
    $(".image").show();


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
