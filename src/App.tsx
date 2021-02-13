import React from "react";
import useLoop, { State } from "./useLoop";
import BuildArea from "./components/BuildArea";
import { CellColor } from "./types";
import "./App.css";

const App = (): JSX.Element => {
	let blankBuildArea: CellColor[] = [];
	useLoop((state: State) => (blankBuildArea = state.grid));

	return (
		<div className="App">
			<BuildArea cells={blankBuildArea} width={10} height={20} />
		</div>
	);
};

export default App;
