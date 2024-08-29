// Initialize EmailJS with your user ID
emailjs.init("7T0ymTq_e8ExA6v6h"); // Replace with your EmailJS user ID

// Add an event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    
});

