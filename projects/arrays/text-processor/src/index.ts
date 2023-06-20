// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

type TextAlign = (
	texts: string[],
	options: {
		align?: "left" | "right" | "middle";
		width: number;
	}
) => string[][];

export const alignTexts: TextAlign = (
	texts: string[],
	options: {
		align?: "left" | "right" | "middle";
		width: number;
	}
) => {
	let result: string[][] = [];

	texts.forEach((line) => {
		let split = line.split(" ");
		for (let i = 0; i < split.length; i++) {
			while (
				split[i].length + split[i + 1]?.length + 1 <= options.width &&
				split.length != 1
			) {
				split[i + 1] = split[i] + " " + split[i + 1];
				split.shift();
			}

			if (options.align) {
				let spaces = options.width - split[i].length;
				switch (options.align) {
					case "left":
						split[i] = split[i] + " ".repeat(spaces);
						break;
					case "right":
						split[i] = " ".repeat(spaces) + split[i];
						break;
					case "middle":
						let midSpaces = spaces / 2;
						if (spaces % 2 != 0) {
							split[i] = split[i] + " ";
						}
						split[i] =
							" ".repeat(Math.floor(midSpaces)) +
							split[i] +
							" ".repeat(Math.floor(midSpaces));
						break;
				}
			} else {
				let spaces = options.width - split[i].length;
				if (spaces > 0) {
					split[i] = split[i] + " ".repeat(spaces);
				}
			}
		}
		result.push(split);
	});
	return result;
};
