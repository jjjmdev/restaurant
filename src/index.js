import "./styles.css";
import renderNav from "./modules/nav.js";
import renderHome from "./modules/home.js";
import renderMenu from "./modules/menu.js";
import renderContact from "./modules/contact.js";
import renderFooter from "./modules/footer.js";

init();

function init() {
	renderNav();
	renderHome();
	renderFooter();

	const homeBtn = document.getElementById("home");
	const menuBtn = document.getElementById("menu");
	const contactBtn = document.getElementById("contact");

	homeBtn.addEventListener("click", () => {
		renderHome();
		const heroBtn = document.querySelector(".hero button");
		heroBtn.addEventListener("click", () => console.log("Hello"));
	});
	menuBtn.addEventListener("click", renderMenu);

	contactBtn.addEventListener("click", renderContact);
}
