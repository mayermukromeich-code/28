// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Display form data in console (or handle it as needed)
    console.log('Form submitted with data:', data);

    // Clear the form
    event.target.reset();
}

// Function to add event listeners
function setupForm() {
    const form = document.querySelector('form'); // Assuming there's a form element
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// Initialize the script
setupForm();