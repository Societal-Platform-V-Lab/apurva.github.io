const thankYouMessage = document.getElementById("thank-you");

function showThankYouMessage() {
  thankYouMessage.style.display = "inline";
  // Automatically close the modal after 5 seconds
  setTimeout(function () {
    $("#exampleModalCenter").modal("hide"); // Close the modal
    // location.reload();
  }, 3000);
}

// Variable to hold request
var request;

// Bind to the submit event of our form
$("#reachoutForm").submit(function (event) {
  // Get google script deployed web app url
  // Change the inner html of the button
  $("#reachoutformButton").text("Sending . . .").attr("disabled", true);

  // Get the deplyed web app url from google script
  var webAppUrl =
    "https://script.google.com/macros/s/AKfycbwBZ8oBmbo0qczs4vfFu9DHgBeCLJZPVW99Rit_ETx4YJSlThf0QKFJ0Phympb2DHlf7Q/exec";

  // Abort any pending request
  if (request) {
    request.abort();
  }
  // setup some local variables
  var $form = $(this);

  // Let's select and cache all the fields
  var $inputs = $form.find("input, select, button, textarea");

  // Serialize the data in the form
  var serializedData = $form.serialize();

  // Let's disable the inputs for the duration of the Ajax request.
  // Note: we disable elements AFTER the form data has been serialized.
  // Disabled form elements will not be serialized.
  $inputs.prop("disabled", true);

  // Fire off the request to /form.php
  request = $.ajax({
    url: webAppUrl,
    type: "GET",
    data: serializedData,
  });

  // Callback handler that will be called on success
  request.done(function (response) {
    // Log a message to the console
    showThankYouMessage();
  });

  // Callback handler that will be called on failure
  request.fail(function (jqXHR, textStatus, errorThrown) {
    // Log the error to the console

    $("#reachoutForm").reset();
  });

  // Callback handler that will be called regardless
  // if the request failed or succeeded
  request.always(function () {
    // Reenable the inputs
    $("#reachoutformButton").text("Send Message");
    $inputs.prop("disabled", false);
  });

  // Prevent default posting of form
  event.preventDefault();
});