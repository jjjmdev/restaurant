export default function renderFooter() {
	const footer = document.createElement("footer");
	footer.classList += "footer";

	footer.textContent = "2024, Jollibee mock";
	document.body.appendChild(footer);
}
