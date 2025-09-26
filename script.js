//Get the DOM elements
const myForm = document.getElementById("registrationForm");
const userNameInput = document.getElementById("username");
const emaiInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("confirmPassword");

//get the DOM elements for the error
const userNameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// get the DOM for over all message from the form
const formMessage = document.getElementById("formMessage");

// optional if I want strong password
/*const strongPasswordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;*/

userNameInput.addEventListener("input", function (event) {
  //check validity of username input using Constrain Validation API
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity("Please enter a valid user name");
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity("Username is required.");
  } else {
    userNameInput.setCustomValidity("");
  }
  //display the error message to the error classes JUST FOR STYLING??????????
  userNameError.textContent = userNameInput.validationMessage;
});

emaiInput.addEventListener("input", function (event) {
  //check validity of email input using Constrain Validation API
  if (emaiInput.validity.typeMismatch) {
    emaiInput.setCustomValidity("Enter the correct email format");
  } else if (emaiInput.validity.valueMissing) {
    emaiInput.setCustomValidity("Email is required.");
  } else {
    emaiInput.setCustomValidity("");
  }
  //display the error message to the error classes JUST FOR STYLING??????????
  emailError.textContent = emaiInput.validationMessage;
});

passwordInput.addEventListener("input", function (event) {
  //check validity of password input using Constrain Validation API
  if (passwordInput.validity.tooShort) {
    //passwordInput.setCustomValidity("Please enter a valid password");
    passwordInput.setCustomValidity(
      `Password must be at least ${passwordInput.minLength} characters.`
    );
  } else if (passwordInput.validity.valueMissing) {
    passwordInput.setCustomValidity("Password is required.");
  } else {
    passwordInput.setCustomValidity("");
  }
  //display the error message to the error classes JUST FOR STYLING??????????
  passwordError.textContent = passwordInput.validationMessage;
});

passwordConfirmInput.addEventListener("input", function (event) {
  //check validity of passwordconfirm input using Constrain Validation API
  if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmInput.setCustomValidity("Passwords do not match.");
  } else {
    passwordConfirmInput.setCustomValidity("");
  }
  //display the error message to the error classes JUST FOR STYLING??????????
  confirmPasswordError.textContent = passwordConfirmInput.validationMessage;
});

// Validate and handle submission
myForm.addEventListener("submit", function (event) {
  //stop submission till everything is correct
  event.preventDefault();

  //validation check on all fields the following report Triggers the browser’s native error messages
  userNameInput.reportValidity();
  emaiInput.reportValidity();
  passwordInput.reportValidity();
  passwordConfirmInput.reportValidity();

  //final check
  if (myForm.checkValidity()) {
    //success
    //alert("successfully submitted");
    formMessage.textContent = "Signup Successful";
    formMessage.style.color = "green";

    //store user name in local storage
    const username = userNameInput.value.trim();
    localStorage.setItem("userName", username);

    myForm.reset();

    // Clear errors if shown in <span> elements
    document
      .querySelectorAll(".error-message")
      .forEach((span) => (span.textContent = ""));
  } else {
    const firstInvalid = myForm.querySelector(":invalid");
    console.log(firstInvalid);

    if (firstInvalid) {
      firstInvalid.focus();
    }
  }
});

//On page load, check localStorage for a saved username if found insert it into the username field
window.addEventListener("DOMContentLoaded", function () {
  const userNameSaved = localStorage.getItem("userName");
  if (userNameSaved) {
    userNameInput.value = userNameSaved;
    document.getElementById("email").focus();
  }
});
