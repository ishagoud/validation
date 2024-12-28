document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    validateForm();
});

function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const termsChecked = document.getElementById("termsCheckbox").checked;

    let isValid = true;

    // Name validation
    if (fullName.length < 5) {
        showError("nameError", "Name must be at least 5 characters long.");
        isValid = false;
    } else {
        clearError("nameError");
    }

    // Email validation
    if (!email.includes("@")) {
        showError("emailError", "Enter a valid email address.");
        isValid = false;
    } else {
        clearError("emailError");
    }

    // Phone validation
    if (phone.length !== 10 || phone === "123456789") {
        showError("phoneError", "Enter a valid 10-digit phone number.");
        isValid = false;
    } else {
        clearError("phoneError");
    }

    // Password validation
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        showError("passwordError", "Password must be strong and at least 8 characters.");
        isValid = false;
    } else {
        clearError("passwordError");
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    } else {
        clearError("confirmPasswordError");
    }

    // Terms validation
    if (!termsChecked) {
        showError("termsError", "You must agree to the terms and conditions.");
        isValid = false;
    } else {
        clearError("termsError");
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearError(id) {
    document.getElementById(id).textContent = "";
}