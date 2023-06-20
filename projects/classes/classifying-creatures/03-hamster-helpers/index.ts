// Write your type and classes here! ✨
// You'll need to export the classes so the tests can run them.

export type SmallPetFood =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";

export abstract class SmallFurryPet {
	readonly species: string;
	protected happiness: number;

	constructor(species: string) {
		this.species = species;
		this.happiness = 0;
	}

	abstract eats(food: SmallPetFood): boolean;

	isHappy() {
		return this.happiness > 0;
	}
}

export class Gerbil extends SmallFurryPet {
	constructor(species: string = "Gerbil") {
		super(species);
	}

	eats(food: SmallPetFood) {
		if (
			food == "insects" ||
			food == "plants" ||
			food == "seeds" ||
			food == "vegetables"
		) {
			return true;
		}
		return false;
	}

	dig() {
		this.happiness = this.happiness + 1;
	}
}

export class Hamster extends SmallFurryPet {
	constructor(species: string = "Hamster") {
		super(species);
	}

	eats(food: SmallPetFood) {
		return true;
	}

	run() {
		this.happiness = this.happiness + 1;
	}
}
