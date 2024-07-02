export function showSuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Submitted Successfully!";
  successMessage.classList.add("success-message");
  form.appendChild(successMessage);
  setTimeout(function () {
    successMessage.remove();
  }, 3000); 
}
