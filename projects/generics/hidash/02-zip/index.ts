// Write your zip function here! ✨
// You'll need to export it so the tests can run it.

export function zip(a: any[], b: any[]) {
	let length = a.length >= b.length ? a.length : b.length;
	let result: any[] = [];

	for (let i = 0; i < length; i++) {
		if (a.length <= i) {
			result.push(b[i]);
		} else if (b.length <= i) {
			result.push(a[i]);
		} else {
			result.push(a[i]);
			result.push(b[i]);
		}
	}
	return result;
}
