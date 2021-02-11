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

export abstract class Tetromino {
	abstract pattern: boolean[];
	abstract box: number;
	abstract color: CellColor;
}

export class OTetromino implements Tetromino {
	pattern: boolean[];
	box: number;
	color: CellColor;

	constructor() {
		this.pattern = OPattern;
		this.box = 4;
		this.color = "yellow";
	}
}
