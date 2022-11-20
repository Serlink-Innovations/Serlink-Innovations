let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#sunnyMode");

const enableDarkMode = () => {
	document.body.classList.toggle("darkMode");

	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	document.body.classList.toggle("darkMode");

	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();

		console.log(darkMode);
	} else {
		disableDarkMode();
		console.log(darkMode);
	}
});

/**
 *	Navigation Menu Toggler
 **/
const navigationMenu = document.querySelector("#navigation__navbar");
const navToggler = document.querySelector("#hamburgerToggle");

navToggler.addEventListener("click", () => {
	if (navigationMenu.classList.contains("active")) {
		navigationMenu.classList.remove("active");
	} else {
		navigationMenu.classList.add("active");
	}
});