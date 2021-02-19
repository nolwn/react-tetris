import React, { useState } from "react";
import { useLoop, startLoop, GameState } from "./loop";
import BuildArea from "./components/BuildArea";
import "./App.css";

const App = (): JSX.Element => {
	const [game, setGame] = useState<GameState>({ grid: [], speed: 0 });
	startLoop();
	useLoop((update: GameState) => {
		setGame(update);
	});

	return (
		<div className="App">
			<BuildArea cells={game.grid} width={10} height={20} />
		</div>
	);
};

export default App;
