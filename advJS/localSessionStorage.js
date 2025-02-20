// Check for saved theme preference
const theme = localStorage.getItem("theme") || "light";
document.body.className = theme;

// Toggle theme and store preference
function toggleTheme() {
    const newTheme = document.body.className === "light" ? "dark" : "light";
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
}


const inputField = document.getElementById("name");

// Restore input field value from sessionStorage
inputField.value = sessionStorage.getItem("name") || "";

// Save input field value on change
inputField.addEventListener("input", (event) => {
    sessionStorage.setItem("name", event.target.value);
});
