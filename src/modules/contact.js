export default function renderContact() {
	const contact = document.createElement("div");
	contact.classList += "contact";
	contact.innerHTML = `
		<div>
			<h2>Contact Number:</h2>
			<h3>#87000</h3>
		</div>

		<div>
			<h2>Order via:</h2>
			<h3>Grab Food, Food Panda</h3>
		</div>
	
		<div>
			<h2>Email:</h2>
			<h3>contact@jollibee.com.ph</h3>
		</div>
	`;

	const content = document.getElementById("content");
	content.innerHTML = "";
	content.classList = "";

	content.appendChild(contact);
}
