function formData() {
  // Get form values
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var streetAddress = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var pinCode = document.getElementById("pinCode").value;
  var file = document.getElementById("file").value;
  var comment = document.getElementById("comment").value;
  // Format the address
  var formattedAddress = `${name}\n${phone}\n${email}\n${date}\n${streetAddress}\n${city}, ${state} ${pinCode}\n${file}\n${comment}`;

  // Display the formatted address
  // document.getElementById("formattedAddress").innerText = formattedAddress;
  // console.log(formattedAddress);

  // Assuming you have a form with id="myForm"
  const form = document.getElementById("form-page");

  // Function to show success message
  function showSuccessMessage() {
    // Create a new element for the success message
    const successMessage = document.createElement("div");
    successMessage.textContent = "Submitted Successfully!";
    successMessage.classList.add("success-message");

    // Append the success message to the form
    form.appendChild(successMessage);

    // Optional: Remove the success message after a certain time (e.g., 3 seconds)
    setTimeout(function () {
      successMessage.remove();
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  // Add a submit event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Simulate data submission (you can replace this with actual AJAX/fetch call)
    // For demonstration purposes, I'm using a setTimeout to simulate a delay
    setTimeout(function () {
      // Reset the form after submission
      form.reset();

      // Show the success message
      showSuccessMessage();
    }, 1000); // Simulating a 1 second delay before resetting and showing success message
  });
}
