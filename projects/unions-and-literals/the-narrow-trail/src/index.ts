export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let water = 5;
	let food = 5;
	let day = 1;
	let result = true;
	let availableResource: "food" | "water" | undefined;

	function startNewDay(roll: number) {
		console.log("Start of day " + day);
		console.log("-----------------");
		console.log("you rolled a " + roll);
		switch (roll) {
			case 1:
				availableResource = "food";
				console.log("Available resource is now food");
				break;

			case 2:
				availableResource = "water";
				console.log("Available resource is now water");
				break;

			case 3:
				if (!availableResource) {
					availableResource = "water";
					console.log("Available resource is now food");
				} else if (availableResource === "food") {
					food = food + 3;
					console.log("You gained 3 food");
					availableResource = undefined;
					console.log("No Available resource now");
				} else {
					water = water + 3;
					console.log("You gained 3 water");
					availableResource = undefined;
					console.log("No Available resource now");
				}
				break;

			case 4:
				if (!availableResource) {
					availableResource = "food";
					console.log("Available resource is now water");
				} else if (availableResource === "food") {
					food = food + 4;
					console.log("You gained 4 food");
					availableResource = undefined;
					console.log("No Available resource now");
				} else {
					water = water + 4;
					console.log("You gained 4 water");
					availableResource = undefined;
					console.log("No Available resource now");
				}
				break;

			case 5:
				if (!availableResource) {
					availableResource = "water";
					console.log("Available resource is now food");
				} else if (availableResource === "food") {
					food = food + 5;
					console.log("You gained 5 food");
					availableResource = undefined;
					console.log("No Available resource now");
				} else {
					water = water + 5;
					console.log("You gained 5 water");
					availableResource = undefined;
					console.log("No Available resource now");
				}
				break;

			case 6:
				if (!availableResource) {
					availableResource = "food";
					console.log("Available resource is now water");
				} else if (availableResource === "food") {
					food = food + 6;
					console.log("You gained 6 food");
					availableResource = undefined;
					console.log("No Available resource now");
				} else {
					water = water + 6;
					console.log("You gained 6 water");
					availableResource = undefined;
					console.log("No Available resource now");
				}
				break;
		}
		food--;
		water--;
		console.log(
			"After day " +
				day +
				", you are left with " +
				food +
				" food and " +
				water +
				" water."
		);
		day++;
		if (food == 0 || water == 0) {
			result = false;
		}
	}

	while (result && day <= 7) {
		let diceRoll = Math.floor(Math.random() * 6) + 1;
		startNewDay(diceRoll);
	}

	if (result) {
		console.log("You survived 7 days, you win!");
	} else {
		console.log("You lost!");
	}
	return result;
}
