// Write your classes here! ✨
// You'll need to export them so the tests can run them.

type ConsumedHorror = {
	evil: boolean;
	name: string;
	power: number;
};

export abstract class Horror {
	abstract readonly name: string;
	#consumedHorrorsList: ConsumedHorror[] = [];

	doBattle(horror: Horror) {
		if (this.getPower() >= horror.getPower()) {
			let newConsumedHorror: ConsumedHorror = {
				evil: horror.isEvil(),
				name: horror.name,
				power: horror.getPower(),
			};
			this.#consumedHorrorsList.push(newConsumedHorror);
		}
	}

	getPower() {
		let result = 0;
		this.#consumedHorrorsList.forEach((consumedHorror) => {
			result += this.getPowerFrom(consumedHorror);
		});
		result += this.#consumedHorrorsList.length;
		return result;
	}

	getPowerFrom(consumedHorror: ConsumedHorror) {
		return consumedHorror.power;
	}

	abstract isEvil(): boolean;
}

export class Demon extends Horror {
	name = "Demon";

	getPowerFrom(consumedHorror: ConsumedHorror) {
		if (consumedHorror.evil) {
			return consumedHorror.power / 2;
		} else {
			return consumedHorror.power * 2;
		}
	}

	isEvil() {
		return true;
	}
}

export class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;
	constructor(name: string, evil: boolean) {
		super();
		this.#evil = evil;
		this.name = name;
	}

	getPowerFrom(consumedHorror: ConsumedHorror) {
		if (consumedHorror.evil === this.isEvil()) {
			return consumedHorror.power * 2;
		} else {
			return consumedHorror.power;
		}
	}

	isEvil() {
		return this.#evil;
	}
}
