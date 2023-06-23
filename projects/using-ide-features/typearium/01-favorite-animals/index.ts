// Refactor here! ✨

import { animalList } from "./animals";

export function checkIsAnyAnimalFavorite(...animals: string[]) {
	const favoriteAnimalsUnique = new Set(animalList);

	return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
	return animalList.slice(0, max);
}

export function logFavoriteAnimals() {
	animalList.forEach((animal, i) => {
		console.log(`I like ${animal} number ${i}!`);
	});
}
