export enum Colors {
	Blue = "blue",
	Red = "red",
	Yellow = "yellow",
}

export type Color = typeof Colors[keyof typeof Colors];
