import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.
export interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

export function announceCharacter(rawCharText: string): Character {
	let char = JSON.parse(rawCharText);
	let powers = char.powers.join(", ");

	console.log(`I am ${char.name}.`);
	console.log(`My powers are: ${powers}.`);
	console.log(`I am ${char.side}.`);

	return {
		name: char.name,
		powers: char.powers,
		side: char.side,
	};
}
