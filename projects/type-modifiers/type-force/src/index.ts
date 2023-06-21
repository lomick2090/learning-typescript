// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

export interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

export type Mutations =
	| "energy"
	| "healing"
	| "luck"
	| "flight"
	| "strength"
	| "wings";

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

function createCharacter(name: string, mutations: Mutations[]) {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

export interface DuelParams {
	mutations: Mutations[];
	name: string;
}

export type ReturnTuple = ["hero" | "villain", Character];

export function duel(good: DuelParams, bad: DuelParams): ReturnTuple {
	const goodCharacter = createCharacter(good.name, good.mutations);
	const badCharacter = createCharacter(bad.name, bad.mutations);

	const fightOutcome =
		goodCharacter.power / badCharacter.toughness >=
		badCharacter.power / goodCharacter.toughness;

	return fightOutcome ? ["hero", goodCharacter] : ["villain", badCharacter];
}
