//Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

export type Param = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: Param) {
	return (text: string) => {
		//let result: string | undefined;
		for (let i = 0; i < attempts; i += 1) {
			if (validateGuess(makeGuess(text, i))) {
				return makeGuess(text, i);
			}
		}
		return undefined;
	};
}

// export type CodeCrackerOptions = {
// 	attempts: number;
// 	makeGuess: (text: string, attempt: number) => string;
// 	validateGuess: (guess: string) => boolean;
// };

// export function createCodeCracker({
// 	attempts,
// 	makeGuess,
// 	validateGuess,
// }: CodeCrackerOptions) {
// 	return (text: string) => {
// 		for (let i = 0; i < attempts; i += 1) {
// 			const guess = makeGuess(text, i);
// 			if (validateGuess(guess)) {
// 				return guess;
// 			}
// 		}

// 		return undefined;
// 	};
// }
