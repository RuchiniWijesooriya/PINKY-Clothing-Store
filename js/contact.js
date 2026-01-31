
  // Contact Form Submit Handling
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload eka stop karanawa

    // Get input values
    const firstName = contactForm.querySelector('input[placeholder="First Name"]').value.trim();
    const lastName = contactForm.querySelector('input[placeholder="Last Name"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const phone = contactForm.querySelector('input[type="tel"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    // Selected subject
    const subject = contactForm.querySelector('input[name="subject"]:checked').parentElement.innerText;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }
    // Success message
    alert("Thank you! Your message has been sent successfully !!!");

    // Reset form
    contactForm.reset();
  });