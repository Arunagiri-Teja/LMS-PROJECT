function setupToggle(toggleId, inputId) {
  const toggle = document.getElementById(toggleId);
  const input = document.getElementById(inputId);

  if (toggle && input) {
    toggle.addEventListener("click", () => {
      input.type = input.type === "password" ? "text" : "password";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupToggle("togglePassword", "password");
  setupToggle("toggleConfirmPassword", "confirmPassword");
});
