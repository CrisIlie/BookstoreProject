
// Attach event listeners to buttons
document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("register-btn").addEventListener("click", register);

function login(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Check if the user exists in local storage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUsers.find(user => user.email === email && user.password === hashPassword(password));

  if (user) {
    // Successful login
    alert("Login successful!");
    document.getElementById("login-email").value = ""; // Clear email field
    document.getElementById("login-password").value = ""; // Clear password field

    // Redirect to the home page
    window.location.href = "index.html"; 
  } else {
    // Invalid credentials
    alert("Invalid email or password.");

    document.getElementById("login-email").value = ""; // Clear email field
    document.getElementById("login-password").value = ""; // Clear password field

  }
}

function register() {
  const email = document.getElementById("register-email").value;
  const password1 = document.getElementById("register-password1").value;
  const password2 = document.getElementById("register-password2").value;


  if (password1 !== password2) {
      alert("Passwords do not match.");
      return;
  }

  // Hash the password
  const hashedPassword = hashPassword(password1);

  // Store the user in local storage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  storedUsers.push({ email, password: hashedPassword });
  localStorage.setItem("users", JSON.stringify(storedUsers));

  alert("Registration successful!");

  // Clear the form fields
  document.getElementById("register-email").value = "";
  document.getElementById("register-password1").value = "";
  document.getElementById("register-password2").value = "";

  // Show the login form after successful registration
  toggleForm("login-form");
}


// Simple hashing function
function hashPassword(password) {
  return password; 
}

