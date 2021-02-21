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

function colorizePatterns(pattern: Tetromino[]) {
	return pattern.map((tetro) =>
		tetro.pattern.map((flag) => (flag ? tetro.color : "off"))
	);
}

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
		return colorizePatterns(this.#tetrominoes);
	}

	private loadTetrominoes(): void {
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

	private fillBag(): void {
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

	protected getRandomIndex(max: number): number {
		return Math.floor(Math.random() * max);
	}
}

export class TestQueue extends Queue {
	#loadedTetrominoes: Tetromino[];

	constructor(tetrominoes: Tetromino[]) {
		super();

		this.#loadedTetrominoes = tetrominoes;
	}

	get tetrominoes(): Tetromino[] {
		return this.#loadedTetrominoes.slice(0, 6);
	}

	get colorData(): CellColor[][] {
		return colorizePatterns(this.#loadedTetrominoes);
	}
}
