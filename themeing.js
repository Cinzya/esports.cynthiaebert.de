// Select the button
var checkbox = document.getElementById("switch");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

function applyDarkTheme() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  document.getElementById("switch").checked = true;
  localStorage.setItem("theme", "dark");
}

function applyLightTheme() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  localStorage.setItem("theme", "light");
}

// Check if a theme was already set in the localStorage
if (currentTheme) {
  // If the current theme in localStorage is "dark"...
  if (currentTheme == "dark") {
    // ...then use the .dark-theme class
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
} else {
  // if no theme was declared in localStorage, then check system settings
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    // Theme set to dark.
    applyDarkTheme();
  } else {
    // Theme set to light.
    applyLightTheme();
  }
}

// Listen for a click on the switch
checkbox.addEventListener("change", function () {
  if (this.checked) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
});
