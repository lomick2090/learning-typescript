// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

interface CityObject {
	name: string;
	catchphrase?: string;
	coordinates: {
		north: (number | string)[];
		west: (number | string)[];
	};
}

export type DescribeCityFunction = (cityObject: CityObject) => string;

export const describeCity: DescribeCityFunction = (cityObject: CityObject) => {
	let string = "";
	string = string.concat(cityObject.name + `, New York\n`);
	if (cityObject?.catchphrase) {
		string = string.concat('* "' + cityObject.catchphrase + '"\n');
	}
	let n = cityObject.coordinates.north;
	let w = cityObject.coordinates.west;
	n.forEach((num: number | string, index) => {
		if (typeof num === "string") {
			num = parseInt(num);
		}
		if (num < 10) {
			let strNum = num.toString();
			strNum = "0".concat(strNum);
			n[index] = strNum;
		}
	});
	w.forEach((num: number | string, index) => {
		if (typeof num === "string") {
			num = parseInt(num);
		}
		if (num < 10) {
			let strNum = num.toString();
			strNum = "0".concat(strNum);
			w[index] = strNum;
		}
	});
	string = string.concat(
		"* Located at " + `${n[0]}°${n[1]}'${n[2]}"N ${w[0]}°${w[1]}'${w[2]}"W`
	);

	return string;
};
