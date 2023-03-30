import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import RestartGame from "../RestartGame/RestartGame";
import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState("active");

	function handleSubmitGuess(guess) {
		const nextGuesses = [...guesses, guess];
		setGuesses(nextGuesses);

		if (guess === answer) {
			setGameStatus("win");
		}
		if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}

	function handleRestart() {
		setGuesses([]);
		setGameStatus("active");
		answer = sample(WORDS);
		console.info({ answer });
	}

	return (
		<>
			<RestartGame handleRestart={handleRestart} />
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
			/>
			{gameStatus === "win" && <WinBanner numOfGuesses={guesses.length} />}
			{gameStatus === "lost" && <LostBanner answer={answer} />}
		</>
	);
}

export default Game;
