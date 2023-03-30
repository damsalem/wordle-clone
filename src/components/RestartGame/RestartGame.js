import React from "react";
import ClickButton from "../ClickButton/ClickButton";

function RestartGame({ handleRestart }) {
	return <ClickButton clickFunction={handleRestart}>Restart Game</ClickButton>;
}

export default RestartGame;
