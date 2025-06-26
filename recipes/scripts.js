import { recipes } from './recipes.js';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	return list[random(list.length)];
}

function tagsTemplate(tags) {
	return `<ul class="recipe__tags">
		${tags.map(tag => `<li>${tag}</li>`).join("")}
	</ul>`;
}

function ratingTemplate(rating) {
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}
	html += `</span>`;
	return html;
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
		<img src="images/${recipe.image}" alt="image of ${recipe.name}" />
		<figcaption>
			${tagsTemplate(recipe.tags)}
			<h2><a href="#">${recipe.name}</a></h2>
			<p class="recipe__ratings">
				${ratingTemplate(recipe.rating)}
			</p>
			<p class="recipe__description">
				${recipe.description}
			</p>
		</figcaption>
	</figure>`;
}

function renderRecipes(recipeList) {
	const container = document.querySelector(".recipe-container");
	container.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
	const recipe = getRandomListEntry(recipes);
	renderRecipes([recipe]);
}

init();

function searchHandler(event) {
	event.preventDefault();
	const input = document.querySelector("#search");
	const query = input.value.toLowerCase();
	const results = filterRecipes(query);
	renderRecipes(results);
}

function filterRecipes(query) {
	return recipes
		.filter(recipe => {
			const inName = recipe.name.toLowerCase().includes(query);
			const inDesc = recipe.description.toLowerCase().includes(query);
			const inTags = recipe.tags.find(tag => tag.toLowerCase().includes(query));
			const inIngredients = recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(query));
			return inName || inDesc || inTags || inIngredients;
		})
		.sort((a, b) => a.name.localeCompare(b.name));
}

document.querySelector("form").addEventListener("submit", searchHandler);
