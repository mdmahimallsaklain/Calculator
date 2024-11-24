// ^ Graphic
// ~ initial States
var lightMode = false;
var locked = false;
// ~ initial States end
var modeCng_btn = document.querySelector("button#modeCng_btn");
var main_elem = document.querySelector("main");
var lockButton = document.querySelector("button#lockBtn");
var insertButtons = document.querySelectorAll("button.insertButton");
// * saveData in localStorage
var saveData = function (name, value) {
    localStorage.setItem(name, value);
};
// * mode changed handler
var ModeChanged = function () {
    if (lightMode == false) {
        saveData("lightMode", String(lightMode));
        main_elem.classList.add("darkMode");
        main_elem.classList.remove("lightMode");
        modeCng_btn.innerHTML = '<i class="fas fa-sun"></i> <span>Light</span>';
    }
    else if (lightMode == true) {
        saveData("lightMode", String(lightMode));
        main_elem.classList.remove("darkMode");
        main_elem.classList.add("lightMode");
        modeCng_btn.innerHTML = '<i class="fas fa-moon"></i> <span>Dark</span>';
    }
};
// * lock mode changed handler
var lockModeChanged = function () {
    if (locked == false) {
        saveData("locked", String(locked));
        lockButton.classList.remove("locked");
        lockButton.innerHTML = '<i class="fas fa-lock"></i>';
        for (var i = 0; i < insertButtons.length; i++) {
            var element = insertButtons[i];
            element.disabled = false;
        }
    }
    else if (locked == true) {
        saveData("locked", String(locked));
        lockButton.classList.add("locked");
        lockButton.innerHTML = '<i class="fas fa-unlock">';
        for (var i = 0; i < insertButtons.length; i++) {
            var element = insertButtons[i];
            element.disabled = true;
        }
    }
};
// * Get Data from localStorage
var getData = function () {
    var isLightMode = localStorage.getItem("lightMode");
    if (isLightMode !== null && isLightMode == "true") {
        lightMode = true;
        ModeChanged();
    }
    else {
        saveData("lightMode", String(lightMode));
        ModeChanged();
    }
    var isLockedMode = localStorage.getItem("locked");
    if (isLockedMode !== null && isLockedMode == "true") {
        locked = true;
        lockModeChanged();
    }
    else {
        saveData("locked", String(locked));
        lockModeChanged();
    }
};
getData();
// * lock button event Handler
lockButton.addEventListener("click", function () {
    if (locked == false) {
        locked = true;
        saveData("locked", String(locked));
        lockModeChanged();
    }
    else if (locked == true) {
        locked = false;
        saveData("locked", String(locked));
        lockModeChanged();
    }
});
// * mode Change button event Handler
modeCng_btn.addEventListener("click", function () {
    if (lightMode == false) {
        lightMode = true;
        saveData("lightMode", String(lightMode));
        main_elem.classList.remove("darkMode");
        main_elem.classList.add("lightMode");
        modeCng_btn.innerHTML = '<i class="fas fa-moon"></i> <span>Dark</span>';
    }
    else if (lightMode == true) {
        lightMode = false;
        saveData("lightMode", String(lightMode));
        main_elem.classList.add("darkMode");
        main_elem.classList.remove("lightMode");
        modeCng_btn.innerHTML = '<i class="fas fa-sun"></i> <span>Light</span>';
    }
});
// ^ Graphic end
// ^ Calculator
// ~ States
var key = "";
// ~ States end
// ~ Initial dom Element select
var insert_dom = document.querySelector("input#insert");
var result_dom = document.querySelector("input#result");
// ~ Initial dom Element select end
// * here is the all kay which are going to use in this app
// * c = clear;
// * % = percent 
// * / = divided 
// * * = multi 
// * - = minus
// * + = plus 
// * = = equals 
// * backspace = backspace 
var modeKey = function () {
    switch (key) {
        case "c":
            break;
        default:
            break;
    }
};
var insert_data = function (key) {
    key = key;
};
// ^ Calculator end
