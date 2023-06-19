// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.
type DeepEqualityFunction = (a: any[], b: any[]) => boolean;

export const deepEquality: DeepEqualityFunction = (a: any[], b: any[]) => {
	let result = true;

	if (a.length != b.length) {
		result = false;
	}

	a.forEach((item, index) => {
		if (Array.isArray(item) && Array.isArray(b[index])) {
			if (!deepEquality(item, b[index])) {
				result = false;
			}
		} else if (!(item === b[index])) {
			result = false;
		}
	});

	return result;
};
