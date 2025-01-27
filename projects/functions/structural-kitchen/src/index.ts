// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

export type Cleaner = (dirt: number, time?: number) => number;

export type Supplier = (expense: number) => {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Recipe = (ingredients: Stock) => {
	succeeded: boolean;
	newStock: Stock;
};

export type Kitchen = (
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
) => {
	announce: Announce;
	clean: Clean;
	purchase: Purchase;
	prepare: Prepare;
};
export type Announce = () => string;

export type Clean = (time: number) => void;

export type Purchase = (expense: number) => boolean;

export type Prepare = (recipe: Recipe) => boolean;

export function createKitchen(
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
		dirt = cleaner(dirt, time);
	};

	const purchase: Purchase = function (expense: number) {
		if (budget >= expense) {
			stock.breads = stock.breads + supplier(expense).breads;
			stock.fruits = stock.fruits + supplier(expense).fruits;
			stock.sauces = stock.sauces + supplier(expense).sauces;
			stock.vegetables = stock.vegetables + supplier(expense).vegetables;

			budget = budget - expense;
			return true;
		}
		return false;
	};

	const prepare: Prepare = function (recipe: Recipe) {
		if (dirt < 100) {
			let recipeObject = recipe(stock);
			if (recipeObject.succeeded) {
				stock = recipeObject.newStock;
				dirt++;
				return true;
			}
			dirt++;
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
