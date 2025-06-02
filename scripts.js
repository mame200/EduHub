// scripts.js

// Mobile menu toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ✅ SIGN UP LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Save user data to localStorage
      const user = { fullName, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful!");
      window.location.href = "signin.html";
    });
  }

  // ✅ SIGN IN LOGIC
  const signinForm = document.getElementById("signin-form");
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputEmail = document.getElementById("email").value;
      const inputPassword = document.getElementById("password").value;

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === inputEmail &&
        storedUser.password === inputPassword
      ) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }
});
  