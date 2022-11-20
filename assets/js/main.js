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

/**
 *	Portfolio Buttons Function
 **/
const btnEcommerce = document.querySelector("#eCommerce");
const btnAllItems = document.querySelector("#allItems");

const allItems = document.querySelectorAll(".portfolio__item")[0];
const ecommerceItems = document.querySelectorAll(".commerce")[0];

btnEcommerce.addEventListener('click', () => {
	ecommerceItems.style.display = "block";
	allItems.style.display = "none";

	btnEcommerce.classList.add("active");
	btnAllItems.classList.remove("active");
});

btnAllItems.addEventListener('click', () => {
	allItems.style.display = "block";
	ecommerceItems.style.display = "initial";

	btnEcommerce.classList.remove("active");
	btnAllItems.classList.add("active");
});