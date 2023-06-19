// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
type DeepDifferencesFunction = (a: any[], b: any[]) => any[] | undefined;

export const deepDifferences: DeepDifferencesFunction = (
	a: any[],
	b: any[]
) => {
	if (a.length !== b.length) {
		return;
	}
	let result: any[] = [];

	a.forEach((item, index) => {
		if (Array.isArray(item) && Array.isArray(b[index])) {
			result.push(deepDifferences(item, b[index]));
		} else if (item === b[index]) {
			result.push(item);
		} else {
			result.push(undefined);
		}
	});

	return result;
};
