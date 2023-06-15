// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
export type Cipher = (character: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	return (text: string) => {
		let newString = "";
		for (const character of text) {
			if (character.match(`/[aeiou]/i`)) {
				newString = newString.concat(onVowel(character));
			} else if (character.match(`/[bcdfghjklmnpqrstvwxyz]/i`)) {
				newString = newString.concat(onConsonant(character));
			} else {
				newString = newString.concat(onPunctuation(character));
			}
		}
		return newString;
	};
}
