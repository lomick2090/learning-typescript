export function unique<S>() {
	let joinedArray: S[] = [];
	let args = [...arguments];
	args.forEach((array: S[]) => {
		array.forEach((item: S) => {
			joinedArray.push(item);
		});
	});

	return [...new Set(joinedArray)];
}
