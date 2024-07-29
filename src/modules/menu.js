import yumBurger from "../assets/yumburger.png";
import onePcChicken from "../assets/1pc-chicken.png";
import jolliSpaghetti from "../assets/jollispaghetti.png";
import twoPcBurgerSteak from "../assets/2pc-burger-steak.png";

function createItem(src, alt, name, price) {
	const img = document.createElement("img");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);

	const item = document.createElement("div");
	item.classList += "item";
	item.appendChild(img);

	const itemName = document.createElement("h2");
	itemName.classList += "item-name";
	itemName.innerHTML = name;
	item.appendChild(itemName);

	const itemPrice = document.createElement("p");
	itemPrice.classList += "item-price";
	itemPrice.innerHTML = price;
	item.appendChild(itemPrice);

	return item;
}

export default function renderMenu() {
	const content = document.getElementById("content");
	content.innerHTML = "";
	content.classList = "";
	content.classList += "menu";

	const items = [
		createItem(yumBurger, "Yumburger", "Yumburger", "₱40"),
		createItem(onePcChicken, "1 pc Chickenjoy", "1 pc Chickenjoy", "₱90"),
		createItem(jolliSpaghetti, "Jolli Spaghetti", "Jolli Spaghetti", "₱60"),
		createItem(
			twoPcBurgerSteak,
			"2 pc Burger Steak",
			"2 pc Burger Steak",
			"₱100"
		),
	];

	items.forEach((item) => content.appendChild(item));
}
