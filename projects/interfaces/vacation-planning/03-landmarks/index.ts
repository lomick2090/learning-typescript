// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.

export interface LandmarkBase {
	name: string;
}

export interface HeightLandmark extends LandmarkBase {
	height: number;
}

export interface Lighthouse extends HeightLandmark {
	lit: number;
	type: "lighthouse";
}

export interface Waterfall extends HeightLandmark {
	type: "waterfall";
}

export interface Mountain extends HeightLandmark {
	type: "mountain";
}

export interface Park extends LandmarkBase {
	acres: number;
	type: "park";
}

export interface River extends LandmarkBase {
	depth?: number;
	length: number;
	type: "river";
}

export interface Lake extends LandmarkBase {
	miles: number;
	type: "lake";
}

export interface Fort extends LandmarkBase {
	type: "fort";
}

export type Landmark =
	| Fort
	| Lake
	| River
	| Park
	| Mountain
	| Waterfall
	| Lighthouse;

export type DescribeLandmarkFunc = (landmark: Landmark) => string;

export const describeLandmark: DescribeLandmarkFunc = (landmark: Landmark) => {
	let string = `${landmark.name} is a ${landmark.type} in Upstate New York.`;

	switch (landmark.type) {
		case "lake":
			string = string + `\nIt covers ${landmark.miles} square miles of water.`;
			break;
		case "lighthouse":
			string =
				string +
				`\nIt was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
		case "mountain":
			string = string + `\nIts peak is ${landmark.height} feet high.`;
			break;
		case "park":
			string = string + `\nIt covers ${landmark.acres} square acres.`;
			break;
		case "river":
			string =
				string +
				`\nIt flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "waterfall":
			string = string + `\nIt is ${landmark.height} feet high.`;
			break;
		default:
			break;
	}

	return string;
};
