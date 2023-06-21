// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.

type ConsumedHorror = {
	evil: boolean;
	name: string;
	power: number;
};

type HorrorConstructObj = {
	name: string;
	isEvil: () => boolean;
	getPowerFrom: (horror: ConsumedHorror) => number;
};

export class Horror {
	readonly name: string;
	isEvil: () => boolean;
	getPowerFrom: (horror: ConsumedHorror) => number;
	#consumedHorrorsList: ConsumedHorror[] = [];

	constructor(constructObj: HorrorConstructObj) {
		this.isEvil = constructObj.isEvil;
		this.name = constructObj.name;
		this.getPowerFrom = constructObj.getPowerFrom;
	}

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
	// getPowerFrom(consumedHorror: ConsumedHorror) {
	// 	return consumedHorror.power;
	// }
	// abstract isEvil(): boolean;
}

export function createDemon() {
	let name = "Demon";

	function getPowerFrom(consumedHorror: ConsumedHorror) {
		if (consumedHorror.evil) {
			return consumedHorror.power / 2;
		} else {
			return consumedHorror.power * 2;
		}
	}

	function isEvil() {
		return true;
	}

	return new Horror({ name, isEvil, getPowerFrom });
}

export function createSorcerer(name: string, evil: boolean) {
	function getPowerFrom(consumedHorror: ConsumedHorror) {
		if (consumedHorror.evil === evil) {
			return consumedHorror.power * 2;
		} else {
			return consumedHorror.power;
		}
	}

	function isEvil() {
		return evil;
	}

	return new Horror({ name, getPowerFrom, isEvil });
}
