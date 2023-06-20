// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.

interface Restaurant {
	city: string;
	name: string;
}

export type groupFunction = (restArr: Restaurant[]) => {};

export const groupRestaurants: groupFunction = (restArr: Restaurant[]) => {
	let result = {};
	let shallowCity: string[] = [];
	restArr.forEach((rest) => {
		shallowCity.push(rest.city);
	});
	let uniqueCity = [...new Set(shallowCity)];

	uniqueCity.forEach((city) => {
		let cityRestArr: string[] = [];
		let filteredRestArr = restArr.filter((rest) => {
			return rest.city === city;
		});
		filteredRestArr.forEach((rest) => {
			cityRestArr.push(rest.name);
		});
		result = {
			...result,
			[city]: cityRestArr,
		};
	});

	return result;
};
