import { CellColor } from "../types";

const GAME_WIDTH = 10;
const GAME_HEIGHT = 20;

export default class Game {
	board: CellColor[];

	constructor() {
		const board: CellColor[] = [];

		for (let i = 0; i < GAME_WIDTH * GAME_HEIGHT; i++) {
			board.push("off");
		}

		this.board = board;
	}
}
