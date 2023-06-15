// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

type ciph = (character: string) => string;

export const createCipher = function (cipher: ciph) {
	return (str: string) => {
		const newString = "";
		for (let letter of str) {
			newString.concat(cipher(letter));
		}
		return newString;
	};
};
