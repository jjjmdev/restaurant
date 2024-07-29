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
		createItem("/src/assets/yumburger.png", "Yumburger", "Yumburger", "₱40"),
		createItem(
			"/src/assets/1pc-chicken.png",
			"1 pc Chickenjoy",
			"1 pc Chickenjoy",
			"₱90"
		),
		createItem(
			"/src/assets/jollispaghetti.png",
			"Jolli Spaghetti",
			"Jolli Spaghetti",
			"₱60"
		),
		createItem(
			"/src/assets/2pc-burger-steak.png",
			"2 pc Burger Steak",
			"2 pc Burger Steak",
			"₱100"
		),
	];

	items.forEach((item) => content.appendChild(item));
}
