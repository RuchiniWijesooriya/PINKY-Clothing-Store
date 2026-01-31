// Get form element
const registerForm = document.getElementById('registerForm');

// Add submit event
registerForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission

  // Optional: collect form values
  const firstName = registerForm.querySelector('input[placeholder="Enter first name"]').value;
  const lastName = registerForm.querySelector('input[placeholder="Enter last name"]').value;
  const email = registerForm.querySelector('input[placeholder="Enter email address"]').value;
  const password = registerForm.querySelector('input[placeholder="Enter password"]').value;

  // Optional: simple validation
  if (!firstName || !lastName || !email || !password) {
    alert('Please fill all required fields');
    return;
  }

  //loging succseefully
  alert('Account created successfully! Redirecting to login..');
  window.location.href = 'login.html';
});