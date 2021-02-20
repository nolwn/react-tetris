import Cell from "../components/Cell";
import { CellColor } from "../types";
import {
	Tetromino,
	ITetromino,
	JTetromino,
	LTetromino,
	STetromino,
	TTetromino,
	OTetromino,
	ZTetromino,
} from "./Tetromino";

export default class Queue {
	#tetrominoes: Tetromino[];
	#bag: Tetromino[];

	constructor() {
		this.#bag = [];
		this.#tetrominoes = [];

		this.loadTetrominoes();
	}

	get tetrominoes(): Tetromino[] {
		return this.#tetrominoes;
	}

	get colorData(): CellColor[][] {
		return this.#tetrominoes.map((tetro) =>
			tetro.pattern.map((flag) => (flag ? tetro.color : "off"))
		);
	}

	loadTetrominoes(): void {
		while (this.#tetrominoes.length < 7) {
			const piece = this.#bag.pop();

			if (piece) {
				this.#tetrominoes.push(piece);
			} else {
				// If we let it loop again I don't have to tell TypeScript that I'm not
				// popping unknown, thus avoiding a pet peeve of mine at the cost of
				// an extra loop.
				this.fillBag();
			}
		}
	}

	fillBag(): void {
		const filler = [
			new ITetromino(),
			new JTetromino(),
			new LTetromino(),
			new STetromino(),
			new TTetromino(),
			new OTetromino(),
			new ZTetromino(),
		];

		while (filler.length) {
			const length = filler.length;
			const rIndex = this.getRandomIndex(length);
			const [piece] = filler.splice(rIndex, 1);

			this.#bag.push(piece);
		}
	}

	getRandomIndex(max: number): number {
		return Math.floor(Math.random() * max);
	}
}
