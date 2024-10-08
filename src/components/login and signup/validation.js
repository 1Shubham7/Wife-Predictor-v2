const form = document.getElementById('signup-form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

// Show modal function
function showModal(message) {
  modalMessage.innerText = message;
  modal.classList.remove('hidden'); // Show the modal
}

// Close modal event
modalClose.addEventListener('click', () => {
  modal.classList.add('hidden'); // Hide the modal when close button is clicked
});

// Form submit event listener
form.addEventListener('submit', (e) => {
  let errors = getSignupFormErrors(
    firstname_input.value,
    email_input.value,
    password_input.value,
    repeat_password_input.value
  );

  if (errors.length > 0) {
    e.preventDefault(); // Prevent form submission
    error_message.innerText = errors.join(". ");
    showModal(errors.join(". ")); // Show modal with errors
  } else {
    showModal("Sign Up Successful!"); // Show sign-up success
  }
});

// Function to validate signup form
function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];

  if (!firstname) {
    errors.push('Firstname is required');
    firstname_input.parentElement.classList.add('incorrect');
  }
  if (!email) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if (!password) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password.length < 8) {
    errors.push('Password must have at least 8 characters');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password !== repeatPassword) {
    errors.push('Passwords do not match');
    password_input.parentElement.classList.add('incorrect');
    repeat_password_input.parentElement.classList.add('incorrect');
  }

  // Check for existing email (just for demonstration)
  if (email === "existing@example.com") {
    errors.push("Email ID already exists");
    email_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Input event listener to clear errors
const allInputs = [firstname_input, email_input, password_input, repeat_password_input];

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
    }

    // Check if there are any errors after input
    const currentErrors = getSignupFormErrors(
      firstname_input.value,
      email_input.value,
      password_input.value,
      repeat_password_input.value
    );

    // Clear modal and error message if no current errors
    if (currentErrors.length === 0) {
      error_message.innerText = '';
      modal.classList.add('hidden'); // Hide the modal if no errors
    } else {
      error_message.innerText = currentErrors.join(". ");
    }
  });
});
