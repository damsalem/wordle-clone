import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
	const classes = status ? `cell ${status}` : `cell`;
	return <span className={classes}>{letter}</span>;
}

function Guess({ value, answer }) {
	const letterArr = checkGuess(value, answer);

	return (
		<p className="guess">
			{range(5).map((num) => (
				<Cell
					key={num}
					letter={letterArr ? letterArr[num].letter : undefined}
					status={letterArr ? letterArr[num].status : undefined}
				/>
			))}
		</p>
	);
}

export default Guess;
