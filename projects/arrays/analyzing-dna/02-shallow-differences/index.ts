// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
type ShallowDifferencesFunction = (a: any[], b: any[]) => any[] | undefined;

export const shallowDifferences: ShallowDifferencesFunction = (
	a: any[],
	b: any[]
) => {
	if (a.length !== b.length) {
		return;
	}
	let result: any[] = [];

	a.forEach((item, index) => {
		if (item === b[index]) {
			result.push(item);
		} else {
			result.push(undefined);
		}
	});

	return result;
};
