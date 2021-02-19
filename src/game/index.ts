import { GameState } from "../loop";
import { CellColor } from "../types";
import Grid from "./Grid";

export const GAME_WIDTH = 10;
export const GAME_HEIGHT = 20;
export const NEXT_WIDTH = 4;
export const NEXT_HEIGHT = 4;
export const INITIAL_SPEED = 1000;

export default class Game {
	board: CellColor[];
	next: CellColor[];
	speed: number;

	constructor(game: GameState | null) {
		this.speed = INITIAL_SPEED;
		this.next = this.blankGrid(NEXT_WIDTH, NEXT_HEIGHT);
		this.board = this.blankGrid(GAME_WIDTH, GAME_HEIGHT);

		this.next[0] = "darkblue";

		if (game !== null) {
			this.speed = game.speed;
		}
	}

	get state(): GameState {
		return {
			speed: this.speed,
			grid: this.board,
		};
	}

	tick(): GameState {
		return {
			grid: [],
			speed: 1000,
		};
	}

	private blankGrid(width: number, height: number): CellColor[] {
		const grid: CellColor[] = [];

		for (let i = 0; i < width * height; i++) {
			grid.push("off");
		}

		return grid;
	}
}
