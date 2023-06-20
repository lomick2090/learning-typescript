export interface PuppyInTheWindow {
	colors: string[];
	furriness: number;
	owner: string | undefined;
}

export class Puppy implements PuppyInTheWindow {
	colors: string[];
	furriness: number;
	owner: string | undefined;

	constructor(
		colors: string[],
		furriness: number,
		owner: string | undefined = undefined
	) {
		this.colors = colors;
		this.furriness = furriness;
		this.owner = owner;
	}

	adopt(newOwner: string) {
		this.owner = newOwner;
	}
}
