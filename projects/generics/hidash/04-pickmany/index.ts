// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.

export function pickMany<O, K extends keyof O>(Obj: O, keys: K[]) {
	let result: O[K][] = [];
	keys.forEach((key, index) => {
		result.push(Obj[key]);
	});
	return result;
}
