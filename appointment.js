const form = document.getElementById("booking-form");
const thankYouMsg = document.getElementById("thank-you");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  // Optionally hide the form
  form.style.display = "none";

  // Show thank you message with animation
  thankYouMsg.style.display = "block";
});

