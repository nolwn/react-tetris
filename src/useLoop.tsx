import { CellColor } from "./types";
import Game from "./game";

export interface State {
	grid: CellColor[];
}

export default function useLoop(update: (state: State) => void): void {
	let running = true;
	const game = new Game();

	while (running) {
		const grid = game.board;
		update({ grid });
		running = false;
	}
}
