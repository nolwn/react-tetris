import { GameState } from "../loop";
import { CellColor } from "../types";
import Queue from "./Queue";

export const GAME_WIDTH = 10;
export const GAME_HEIGHT = 20;
export const NEXT_WIDTH = 4;
export const NEXT_HEIGHT = 4;
export const INITIAL_SPEED = 1000;

export default class Game {
	board: CellColor[];
	#queue: Queue;
	speed: number;

	constructor(queue: Queue, game?: GameState) {
		this.speed = INITIAL_SPEED;
		this.#queue = queue;
		this.board = this.blankGrid(GAME_WIDTH, GAME_HEIGHT);

		if (game !== undefined) {
			this.speed = game.speed;
		}
	}

	get queue(): CellColor[][] {
		return this.#queue.colorData;
	}

	tick(): GameState {
		return {
			speed: this.speed,
			grid: this.board,
			queue: [],
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
