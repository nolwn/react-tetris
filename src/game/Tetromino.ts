import { CellColor } from "../types";

const iPattern = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	true,
	true,
	true,
	true,
	false,
	false,
	false,
	false,
];
const lPattern = [false, false, true, true, true, true, false, false, false];
const jPattern = [true, false, false, true, true, true, false, false, false];
const oPattern = [
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
const sPattern = [false, true, true, true, true, false, false, false, false];
const tPattern = [false, true, false, true, true, true, false, false, false];
const zPattern = [true, true, false, false, true, true, false, false, false];

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

	clockwise(): void {
		this.rotate();
	}

	counterClockwise(): void {
		this.rotate().rotate().rotate();
	}

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
		super(oPattern, 4, "yellow");
	}
}

export class STetromino extends Tetromino {
	constructor() {
		super(sPattern, 3, "green");
	}
}

export class ZTetromino extends Tetromino {
	constructor() {
		super(zPattern, 3, "red");
	}
}

export class ITetromino extends Tetromino {
	constructor() {
		super(iPattern, 4, "lightblue");
	}
}

export class JTetromino extends Tetromino {
	constructor() {
		super(jPattern, 3, "darkblue");
	}
}

export class LTetromino extends Tetromino {
	constructor() {
		super(lPattern, 3, "orange");
	}
}

export class TTetromino extends Tetromino {
	constructor() {
		super(tPattern, 3, "purple");
	}
}
