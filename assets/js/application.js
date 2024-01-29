document.addEventListener('DOMContentLoaded', (event) => {
    // Load saved form data from localStorage if the form hasn't been submitted yet
    if (localStorage.getItem('formSubmitted') !== 'true') {
        loadFormData();
    } else {
        // Clear all form-related data from localStorage if the form has been submitted
        clearAllFormData();
    }

    // Attach event listeners to form fields
    const formElements = document.querySelectorAll('input[type=text], input[type=email], textarea');
    formElements.forEach(element => {
        element.addEventListener('input', () => saveFormData());
    });

    // Attach a submit event listener to the form
    // const form = document.querySelector('form');
    // form.addEventListener('submit', (event) => {
    //     // Set form submitted flag in localStorage
    //     localStorage.setItem('formSubmitted', 'true');
    // });
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Set form submitted flag in localStorage
        localStorage.setItem('formSubmitted', 'true');

        // Programmatically submit the form
        form.submit();
    });

});

function saveFormData() {
    document.querySelectorAll('input[type=text], input[type=email], textarea').forEach(element => {
        if (element.name) {
            localStorage.setItem(element.name, element.value);
        }
    });
}

function loadFormData() {
    document.querySelectorAll('input[type=text], input[type=email], textarea').forEach(element => {
        if (element.name && localStorage.getItem(element.name)) {
            element.value = localStorage.getItem(element.name);
        }
    });
}

function clearAllFormData() {
    // Clear all stored form data
    document.querySelectorAll('input[type=text], input[type=email], textarea').forEach(element => {
        if (element.name) {
            localStorage.removeItem(element.name);
        }
    });
    // Remove the submitted flag
    localStorage.removeItem('formSubmitted');
}

function clearFormData(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    document.querySelectorAll('input[type=text], input[type=email], textarea').forEach(element => {
        if (element.name) {
            localStorage.removeItem(element.name);
        }
    });
    alert('Form data cleared from localStorage.');
    // Here, you would typically submit the form using `form.submit()` or AJAX.
}