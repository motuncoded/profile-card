//Form Validation

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Reset messages
  [nameError, emailError, subjectError, messageError].forEach((err) => {
    err.textContent = "";
    err.classList.add("hidden");
  });
  successMessage.classList.add("hidden");

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameError.classList.remove("hidden");
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailError.classList.remove("hidden");
    isValid = false;
  } else if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.classList.remove("hidden");
    isValid = false;
  }

  // Subject validation
  if (subjectInput.value.trim() === "") {
    subjectError.textContent = "Subject is required.";
    subjectError.classList.remove("hidden");
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters long.";
    messageError.classList.remove("hidden");
    isValid = false;
  }

  // Success message
  if (isValid) {
    successMessage.textContent =
      "Thank you! Your message has been sent successfully.";
    successMessage.classList.remove("hidden");
    form.reset();
  }

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 5000);

  setTimeout(() => {
    nameError.classList.add("hidden");
    emailError.classList.add("hidden");
    subjectError.classList.add("hidden");
    messageError.classList.add("hidden");
  }, 3000);
});
