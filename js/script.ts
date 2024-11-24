// ^ Graphic

// ~ initial States

let lightMode: boolean = false;
let locked: boolean = false;

// ~ initial States end

const modeCng_btn = document.querySelector(
  "button#modeCng_btn"
) as HTMLButtonElement;
const main_elem = document.querySelector("main") as HTMLElement;

const lockButton = document.querySelector(
  "button#lockBtn"
) as HTMLButtonElement;

const insertButtons = document.querySelectorAll(
  "button.insertButton"
) as NodeListOf<Element>;

// * saveData in localStorage
const saveData = (name: string, value: string): void => {
  localStorage.setItem(name, value);
};

// * mode changed handler
const ModeChanged = (): void => {
  if (lightMode == false) {
    saveData("lightMode", String(lightMode));
    main_elem.classList.add("darkMode");
    main_elem.classList.remove("lightMode");
    modeCng_btn.innerHTML = '<i class="fas fa-sun"></i> <span>Light</span>';
  } else if (lightMode == true) {
    saveData("lightMode", String(lightMode));
    main_elem.classList.remove("darkMode");
    main_elem.classList.add("lightMode");
    modeCng_btn.innerHTML = '<i class="fas fa-moon"></i> <span>Dark</span>';
  }
};

// * lock mode changed handler
const lockModeChanged = (): void => {
  if (locked == false) {
    saveData("locked", String(locked));
    lockButton.classList.remove("locked");
    lockButton.innerHTML = '<i class="fas fa-lock"></i>';

    for (let i = 0; i < insertButtons.length; i++) {
      const element = insertButtons[i] as HTMLButtonElement;
      element.disabled = false;
    }
  } else if (locked == true) {
    saveData("locked", String(locked));
    lockButton.classList.add("locked");
    lockButton.innerHTML = '<i class="fas fa-unlock">';

    for (let i = 0; i < insertButtons.length; i++) {
      const element = insertButtons[i] as HTMLButtonElement;
      element.disabled = true;
    }
  }
};

// * Get Data from localStorage
const getData = (): void => {
  const isLightMode = localStorage.getItem("lightMode");
  if (isLightMode !== null && isLightMode == "true") {
    lightMode = true;
    ModeChanged();
  } else {
    saveData("lightMode", String(lightMode));
    ModeChanged();
  }
  const isLockedMode = localStorage.getItem("locked");
  if (isLockedMode !== null && isLockedMode == "true") {
    locked = true;
    lockModeChanged();
  } else {
    saveData("locked", String(locked));
    lockModeChanged();
  }
};

getData();

// * lock button event Handler
lockButton.addEventListener("click", () => {
  if (locked == false) {
    locked = true;
    saveData("locked", String(locked));
    lockModeChanged();
  } else if (locked == true) {
    locked = false;
    saveData("locked", String(locked));
    lockModeChanged();
  }
});

// * mode Change button event Handler
modeCng_btn.addEventListener("click", () => {
  if (lightMode == false) {
    lightMode = true;
    saveData("lightMode", String(lightMode));
    main_elem.classList.remove("darkMode");
    main_elem.classList.add("lightMode");
    modeCng_btn.innerHTML = '<i class="fas fa-moon"></i> <span>Dark</span>';
  } else if (lightMode == true) {
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

let key: string = "";

// ~ States end

// ~ Initial dom Element select

const insert_dom = document.querySelector("input#insert") as HTMLInputElement;
const result_dom = document.querySelector("input#result") as HTMLInputElement;

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

const modeKey = (): void => {
  switch (key) {
    case "c":
      break;

    default:
      break;
  }
};

const insert_data = (key: string): void => {
  key = key;
};

// ^ Calculator end
