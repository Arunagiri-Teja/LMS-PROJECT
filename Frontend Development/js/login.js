document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".login-container h2");
  const hour = new Date().getHours();

  if (hour < 12) {
    heading.textContent = "Good Morning ☀️";
  } else if (hour < 16) {
    heading.textContent = "Good Afternoon 🌤️";
  } else {
    heading.textContent = "Good Evening 🌙";
  }

  const toggle = document.getElementById("togglePassword");
  const input = toggle?.previousElementSibling; // Get the input before the icon

  if (toggle && input) {
    toggle.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";

      // Optional: toggle icon style (font-awesome)
      toggle.classList.toggle("fa-eye");
      toggle.classList.toggle("fa-eye-slash");
    });
  }
});
