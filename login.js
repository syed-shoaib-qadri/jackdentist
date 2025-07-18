// login.js

function showSignup() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

// Show temporary success message
function showSuccessMessage() {
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: white;">
      <h1 style="font-size: 2rem; color: green;">✅ Account Created! Redirecting to Home...</h1>
    </div>
  `;
  setTimeout(() => {
    window.location.href = "/index.html"; // Change path to your home page
  }, 2000); // Redirect after 2 seconds
}

// Handle login
document.querySelector("#login-form form").addEventListener("submit", function (e) {
  e.preventDefault();
  showSuccessMessage();
});

// Handle register
document.querySelector("#signup-form form").addEventListener("submit", function (e) {
  e.preventDefault();
  showSuccessMessage();
});
