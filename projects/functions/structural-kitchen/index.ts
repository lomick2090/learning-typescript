type Cleaner = (dirt: number, time: number) => number;

type Supplier = (expense: number) => {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

type Recipe = (ingredients: Stock) => {
	succeeded: boolean;
	newStock: Stock;
};

type Kitchen = (
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
) => {
	announce: Announce;
	clean: Clean;
	purchase: Purchase;
	prepare: Prepare;
};
type Announce = () => string;

type Clean = (time: number) => void;

type Purchase = (expense: number) => boolean;

type Prepare = (recipe: Recipe) => boolean;

export default function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
) {
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	function announce() {
		return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
	}

	const clean: Clean = function (time: number) {
		cleaner(dirt, time);
	};

	const purchase: Purchase = function (expense: number) {
		if (budget >= expense) {
			stock = supplier(expense);
			return true;
		}
		return false;
	};

	const prepare: Prepare = function (recipe: Recipe) {
		if (dirt < 100) {
			if (recipe(stock).succeeded) {
				stock = recipe(stock).newStock;
				dirt++;
				return true;
			}
			return false;
		}
		return false;
	};

	return {
		announce,
		clean,
		purchase,
		prepare,
	};
}
