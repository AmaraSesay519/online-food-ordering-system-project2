
// User Authentation & Reddirection

// Waits until HTML is fully loaded

document.addEventListener("DOMContentLoaded", function() {
    // Get the login form element
    const loginForm = document.getElementById("loginForm");

    // Check if login form exists
    if (loginForm) {
        // Add submit event listener
        loginForm.addEventListener("submit", function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Get email value
            const email = document.getElementById("email").value;

            // Get password value
            const password = document.getElementById("password").value;

            // Get selected role
            const role = document.getElementById("role").value;

            // Get message element
            const message = document.getElementById("message");

            // Validate inputs
            if (email === "" || password === "") {
                // Show error message
                message.innerHTML = "Please enter email and password";
                return;
            }

            // If role is user go to Landing Page 
            if (role === "user") {
                window.location.href = "index.html";
            }

            // If role is restaurant go to the restaurant dashboard
            else if (role === "restaurant") {
                window.location.href = "restaurant_dashboard.html";
            }

            // If role is admin go to admin dashboard
            else if (role === "admin") {
                window.location.href = "admin_dashboard.html";
            }
        });
    }
});


// REGISTER SCRIPT

// Select the form element
document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Stop form submission
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Message container
    let message = document.getElementById("message");

    // Validate empty fields
    if (name === "" || email === "" || password === "") {
        message.innerHTML = "Please complete all fields";
        return;
    }

    // Success message
    message.innerHTML = "Registration Successful";
    
    window.location.href = "login.html";
});

// ADMIN DASHBOARD SCRIPT

// Get modal element
let modal = document.getElementById("foodModal");

// Function to open modal
function openModal() {
    // Display modal
    modal.style.display = "block";
}
// Function to close modal
function closeModal() {
    // Hide modal
    modal.style.display = "none";
}

// Function to add new food item
function addFood() {
    // Get food name from input
    let name = document.getElementById("foodName").value;

    // Get food price
    let price = document.getElementById("foodPrice").value;

    // Check if fields are empty
    if (name === "" || price === "") {
        // Alert user
        alert("Please fill all fields");
        return;
    }

    // Display success message
    alert("Food Added: " + name + " ($" + price + ")");

    // Clear inputs
    document.getElementById("foodName").value = "";
    document.getElementById("foodPrice").value = "";

    // Close modal
    closeModal();
}


// RESTAURANT DASHBOARD SCRIPT

// Get modal form
let form = document.getElementById("menuForm");

// Function to open menu form
function openForm() {
    // Show modal
    form.style.display = "block";
}

// Function to close form
function closeForm() {
    // Hide modal
    form.style.display = "none";
}

// Function to add new menu item
function addMenu() {
    // Get food name
    let food = document.getElementById("foodName").value;

    // Get food price
    let price = document.getElementById("foodPrice").value;

    // Check empty fields
    if (food == "" || price == "") {
        alert("Please fill all fields");
        return;
    }

    // Show confirmation
    alert("Menu item added: " + food + " - $" + price);

    // Increase menu counter
    let count = document.getElementById("menuCount");

    // Convert to number and add 1
    count.innerText = parseInt(count.innerText) + 1;

    // Clear inputs
    document.getElementById("foodName").value = "";
    document.getElementById("foodPrice").value = "";

    // Close modal
    closeForm();
}