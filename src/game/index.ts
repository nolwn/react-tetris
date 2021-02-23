import { GameState } from "../loop";
import { CellColor } from "../types";
import Grid from "./Grid";
import Queue from "./Queue";

export const GAME_WIDTH = 10;
export const GAME_HEIGHT = 20;
export const NEXT_WIDTH = 4;
export const NEXT_HEIGHT = 4;
export const INITIAL_SPEED = 1000;

export default class Game {
	board: Grid;
	#queue: Queue;
	speed: number;

	constructor(queue: Queue, game?: GameState) {
		this.speed = INITIAL_SPEED;
		this.#queue = queue;
		this.board = new Grid(GAME_WIDTH, GAME_HEIGHT);

		if (game !== undefined) {
			this.speed = game.speed;
		}
	}

	get queue(): CellColor[][] {
		return this.#queue.colorData;
	}

	tick(): GameState {
		if (!this.board.active) {
			const t = this.#queue.tetrominoes.shift();
			if (t) {
				this.board.spawn(t);
			}
		}

		return {
			speed: this.speed,
			grid: this.board.data,
			queue: this.#queue.colorData,
		};
	}
}
