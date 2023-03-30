import React from "react";

function ClickButton({ clickFunction, children }) {
	return (
		<button className="clickButton" onClick={() => clickFunction()}>
			{children}
		</button>
	);
}

export default ClickButton;
