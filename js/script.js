"use strict";
// ^ Theme and Lock Control
// ~ Initial States
let isLightMode = false;
let isLocked = false;
// ~ Initial States End
// ~ Element Selectors
const themeToggleButton = document.querySelector("button#modeCng_btn");
const mainElement = document.querySelector("main");
const lockToggleButton = document.querySelector("button#lockBtn");
const actionButtons = document.querySelectorAll("button.insertButton");
// ~ Element Selectors End
// * Save data to localStorage
const saveToLocalStorage = (key, value) => localStorage.setItem(key, value);
// * Handle theme changes
const handleThemeChange = () => {
    if (isLightMode) {
        saveToLocalStorage("lightMode", String(isLightMode));
        mainElement.classList.add("lightMode");
        mainElement.classList.remove("darkMode");
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i> <span>Dark</span>';
    }
    else {
        saveToLocalStorage("lightMode", String(isLightMode));
        mainElement.classList.add("darkMode");
        mainElement.classList.remove("lightMode");
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i> <span>Light</span>';
    }
};
// * Handle lock state changes
const handleLockStateChange = () => {
    if (isLocked) {
        saveToLocalStorage("locked", String(isLocked));
        lockToggleButton.classList.add("locked");
        lockToggleButton.innerHTML = '<i class="fas fa-unlock"></i>';
        actionButtons.forEach((button) => {
            button.disabled = true;
        });
    }
    else {
        saveToLocalStorage("locked", String(isLocked));
        lockToggleButton.classList.remove("locked");
        lockToggleButton.innerHTML = '<i class="fas fa-lock"></i>';
        actionButtons.forEach((button) => {
            button.disabled = false;
        });
    }
};
// * Retrieve data from localStorage and initialize
const initializeState = () => {
    const storedLightMode = localStorage.getItem("lightMode");
    isLightMode = storedLightMode === "true";
    handleThemeChange();
    const storedLockState = localStorage.getItem("locked");
    isLocked = storedLockState === "true";
    handleLockStateChange();
};
// * Toggle lock state
const toggleLockState = () => {
    isLocked = !isLocked;
    handleLockStateChange();
};
// * Toggle theme
const toggleTheme = () => {
    isLightMode = !isLightMode;
    handleThemeChange();
};
// * Show creator information
const showCreatorInfo = () => {
    const userConfirmed = window.confirm("Do you want to know about the creator of this application?");
    if (userConfirmed) {
        window.open("https://gravatar.com/mdmahimallsaklain", "_blank");
    }
};
// ~ Event Listeners
lockToggleButton.addEventListener("click", toggleLockState);
themeToggleButton.addEventListener("click", toggleTheme);
// ~ End Event Listeners
initializeState();
// ^ Calculator
// ~ Calculator States
let currentKey = "";
// ~ End Calculator States
// ~ Calculator Element Selectors
const inputField = document.querySelector("input#insert");
const resultField = document.querySelector("input#result");
// ~ End Calculator Element Selectors
// * Handle calculator input
const handleCalculatorInput = () => {
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"];
    switch (currentKey) {
        case "c": // Clear input and result fields
            inputField.value = "";
            resultField.value = "";
            break;
        case "l": // Toggle lock state
            toggleLockState();
            break;
        case "i": // Show creator information
            showCreatorInfo();
            break;
        case "=": // Calculate result
        case "enter":
            try {
                resultField.value = eval(inputField.value); // Note: Avoid `eval` in production!
            }
            catch (_a) {
                resultField.value = "Error";
            }
            break;
        case "backspace": // Remove the last character
            inputField.value = inputField.value.slice(0, -1);
            break;
        default: // Append allowed key to input field
            if (allowedKeys.includes(currentKey)) {
                inputField.value += currentKey;
            }
            break;
    }
};
// * Insert key data
const insertCalculatorKey = (key) => {
    currentKey = key.toLowerCase();
    handleCalculatorInput();
};
// * Handle keyboard input
document.addEventListener("keydown", (event) => {
    currentKey = event.key.toLowerCase();
    handleCalculatorInput();
});
// ^ End Calculator
