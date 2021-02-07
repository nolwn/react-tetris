import { CellColor } from "../types";

const GAME_WIDTH = 10;
const GAME_HEIGHT = 20;
const NEXT_WIDTH = 4;
const NEXT_HEIGHT = 4;

export default class Game {
	board: CellColor[];
	next: CellColor[];

	constructor() {
		this.next = this.blankGrid(NEXT_WIDTH, NEXT_HEIGHT);
		this.board = this.blankGrid(GAME_WIDTH, GAME_HEIGHT);

		this.next[0] = "darkblue";
	}

	private blankGrid(width: number, height: number): CellColor[] {
		const grid: CellColor[] = [];

		for (let i = 0; i < width * height; i++) {
			grid.push("off");
		}

		return grid;
	}
}
