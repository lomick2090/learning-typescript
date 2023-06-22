// Write your pick function here! ✨
// You'll need to export it so the tests can run it.

export function pick<O, K extends keyof O>(obj: O, key: K) {
	return obj[key];
}
