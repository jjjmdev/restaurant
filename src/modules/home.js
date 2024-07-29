import renderMenu from "./menu.js";

function createHero() {
	const hero = document.createElement("div");
	hero.classList += "hero";

	hero.innerHTML = `
		<h1>Bringing joy to you</h1>
		<h2>Have your Jollibee favorites!</h2>
		`;

	const heroBtn = document.createElement("button");
	heroBtn.innerHTML = "View Menu";
	heroBtn.addEventListener("click", renderMenu);

	hero.appendChild(heroBtn);

	return hero;
}

function createCards() {
	const mission = document.createElement("div");
	mission.classList += "mission";
	mission.innerHTML = `
		<div class="card">
			<img src="/src/assets/what_we_do.png" alt="Staff serving" />
			<div class="card-title">What We Do</div>

			<div class="card-description">
				Jollibee's mission is to serve great-tasting food, bringing the joy
				of eating to everyone.
			</div>
		</div>
		
		<div class="card">
			<img src="/src/assets/what_we_stand_for.png" alt="People eating" />
			<div class="card-title">What We Stand For</div>

			<div class="card-description">
				Jollibee is a family-centric brand that promotes family values and
				togetherness and espouses Filipino pride.
			</div>
		</div>`;

	return mission;
}

export default function renderHome() {
	const content = document.getElementById("content");
	content.innerHTML = "";
	content.classList = "";
	content.appendChild(createHero());
	content.appendChild(createCards());
}
