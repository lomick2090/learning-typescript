type Catacomb<B> = {
	inside: Buried<B>;
	type: "catacomb";
};

export interface Treasure<B> {
	content: B;
	type: "treasure";
}

type TunnelSystem<B> = {
	entrances: Buried<B>[];
	type: "tunnels";
};

type NextArea<B> = Catacomb<B> | TunnelSystem<B>;

export type Buried<B> = Buried<B>[] | NextArea<B> | Treasure<B>;

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (item: Content) => item is Fake,
	isReal: (item: Content) => item is Real
): {
	fake: Fake[];
	real: Real[];
	scrap: Content[];
} {
	let fake: Fake[] = [];
	let real: Real[] = [];
	let scrap: Content[] = [];

	function exploreBuried(buried: Buried<Content>) {
		if (buried instanceof Array) {
			buried.forEach((item) => {
				exploreBuried(item);
			});
		} else {
			switch (buried.type) {
				case "catacomb":
					exploreBuried(buried.inside);
					break;
				case "tunnels":
					buried.entrances.forEach((item) => {
						exploreBuried(item);
					});
					break;
				case "treasure":
					if (isFake(buried.content)) {
						fake.push(buried.content);
					} else if (isReal(buried.content)) {
						real.push(buried.content);
					} else {
						scrap.push(buried.content);
					}
					break;
			}
		}
	}

	exploreBuried(buried);

	return {
		fake,
		real,
		scrap,
	};
}
