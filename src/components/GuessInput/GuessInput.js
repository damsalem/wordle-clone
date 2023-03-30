import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
	const [newGuess, setNewGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();

		const upperGuess = newGuess.toUpperCase();

		handleSubmitGuess(upperGuess);
		setNewGuess("");
	}

	return (
		<form onSubmit={handleSubmit} className="guess-input-wrapper">
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				disabled={gameStatus !== "active"}
				required
				name="guess-input"
				type="text"
				value={newGuess}
				minLength={5}
				maxLength={5}
				style={{ textTransform: "uppercase" }}
				onChange={(event) => {
					const nextGuess = event.target.value;
					setNewGuess(nextGuess);
				}}
			></input>
			{newGuess.length !== 5 && (
				<span style={{ color: "red" }}>5 char min/max</span>
			)}
		</form>
	);
}

export default GuessInput;
