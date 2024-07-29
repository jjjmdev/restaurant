function createBtn(id, text) {
	const btn = document.createElement("button");
	btn.setAttribute("id", id);
	btn.innerHTML = text;
	return btn;
}

function createNav() {
	const nav = document.createElement("nav");

	const homeBtn = createBtn("home", "Home");
	const menuBtn = createBtn("menu", "Menu");
	const contactBtn = createBtn("contact", "Contact");

	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(contactBtn);

	return nav;
}

export default function renderNav() {
	const header = document.getElementById("header");
	header.appendChild(createNav());
}
