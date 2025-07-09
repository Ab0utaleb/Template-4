let darkMode = localStorage.getItem("darkMode");
const themeSwitch = document.querySelector("#themsswitch");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "null");
};

if (darkMode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});
