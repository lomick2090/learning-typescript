// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.
async function simulateTimer() {
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});

	return;
}
async function checkEmotion(knownEmotions, emotion) {
	await simulateTimer();

	return knownEmotions.has(emotion);
}

async function speak(knownEmotions, newEmotion, phrase) {
	let hasEmotion = await checkEmotion(knownEmotions, newEmotion);
	if (hasEmotion) {
		return `"${phrase}" (${newEmotion})`;
	} else {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
