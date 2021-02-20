import React, { useState } from "react";
import { useLoop, startLoop, GameState } from "./loop";
import BuildArea from "./components/BuildArea";
import Next from "./components/Next";
import "./App.css";

const App = (): JSX.Element => {
	const [game, setGame] = useState<GameState>({
		grid: [],
		speed: 0,
		queue: [],
	});

	startLoop();
	useLoop((update: GameState) => {
		setGame(update);
	});

	const [next] = game.queue;

	return (
		<div className="App">
			<BuildArea cells={game.grid} width={10} height={20} />
			<Next tetromino={next || []} />
		</div>
	);
};

export default App;
