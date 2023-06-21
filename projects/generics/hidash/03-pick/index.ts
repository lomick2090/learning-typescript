// Write your pick function here! ✨
// You'll need to export it so the tests can run it.

export function pick(obj: {}, key: keyof typeof obj) {
	return obj[key];
}
