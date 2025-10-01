const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMsg = document.getElementById("success");

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission
  
  let isValid = true;

  // Reset messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  successMsg.textContent = "";

  // Validate name
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name is required");
    isValid = false;
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    setError(emailInput, "Email is required");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    setError(emailInput, "Enter a valid email");
    isValid = false;
  }

  // Validate message
  if (messageInput.value.trim() === "") {
    setError(messageInput, "Message cannot be empty");
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    successMsg.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});

// Function to show error message
function setError(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector(".error");
  errorMsg.textContent = message;
}
