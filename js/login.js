// Get the form element
const loginForm = document.querySelector('form');

// Add submit event
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); 

  // Get input values
  const email = loginForm.querySelector('input[type="email"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value.trim();

  // Simple validation
  if (email === "" || password === "") {
    alert("Please enter both email and password!");
    return;
  }

 
  // if you want specific admin credentials check
  if(email === "admin@pinky.lk" && password === "admin123") {
    alert("Admin login successful!");
    window.location.href = "admin.html"; // redirect to admin page
    return;
  }

  // Normal user login (dummy)
  alert("Login successful! Redirecting to home page...");
  window.location.href = "home.html"; // redirect to home page
});