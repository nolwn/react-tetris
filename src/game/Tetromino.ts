import { CellColor } from "../types";

const OPattern = [
	false,
	false,
	false,
	false,
	false,
	true,
	true,
	false,
	false,
	true,
	true,
	false,
	false,
	false,
	false,
	false,
];

const SPattern = [false, true, true, true, true, false, false, false, false];

export abstract class Tetromino {
	pattern: boolean[];
	box: number;
	color: CellColor;
	rotation: number;

	constructor(pattern: boolean[], box: number, color: CellColor) {
		this.pattern = pattern;
		this.box = box;
		this.color = color;
		this.rotation = 0;
	}

	abstract clockwise(): void;

	abstract counterClockwise(): void;

	protected rotate(): Tetromino {
		const rotated = [];

		for (let i = 0; i < this.box; i++) {
			for (let j = this.box - 1; j >= 0; j--) {
				const idx = this.box * j + i;
				rotated.push(this.pattern[idx]);
			}
		}

		this.pattern = rotated;

		return this;
	}
}

export class OTetromino extends Tetromino {
	constructor() {
		super(OPattern, 4, "yellow");
	}

	clockwise(): void {
		return;
	}

	counterClockwise(): void {
		return;
	}
}

export class STetromino extends Tetromino {
	constructor() {
		super(SPattern, 3, "green");
	}

	clockwise(): void {
		this.rotate();
	}

	counterClockwise(): void {
		this.rotate();
	}
}
