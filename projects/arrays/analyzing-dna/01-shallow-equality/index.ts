// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.
type ShallowEqualityFunction = (a: any[], b: any[]) => boolean;

export const shallowEquality: ShallowEqualityFunction = function (
	a: any[],
	b: any[]
) {
	let result = true;
	if (a.length != b.length) {
		result = false;
	}

	a.forEach((item, index) => {
		if (item != b[index]) {
			result = false;
		}
	});

	return result;
};
