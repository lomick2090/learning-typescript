export function unique() {
	let joinedArray: string[] = [];
	let args = [...arguments];
	args.forEach((array: string[]) => {
		joinedArray = joinedArray.concat(array);
	});

	return [...new Set(joinedArray)];
}
