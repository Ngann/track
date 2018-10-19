$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").append(nameInput);

    $("#story").show();
    event.preventDefault();
  });
});

// Available Tracks
// Ruby/Rails
// PHP/Drupal
// Java/Android
// CSS/Design
// C#/.NET
