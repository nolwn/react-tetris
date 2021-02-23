import React, { useState } from "react";
import { useLoop, startLoop, GameState } from "./loop";
import BuildArea from "./components/BuildArea";
import Next from "./components/Next";
import "./App.css";
import Matrix from "./components/Matrix";

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
			<Matrix cells={game.grid} />
			<Next tetromino={next || []} />
		</div>
	);
};

export default App;
