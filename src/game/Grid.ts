import { CellColor } from "../types";
import { Tetromino } from "./Tetromino";

export default class {
	width: number;
	height: number;
	#data: CellColor[];
	active: {
		tetromino: Tetromino;
		coords: [number, number];
	} | null;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.active = null;
		this.#data = [];

		for (let i = 0; i < height * width; i++) {
			this.#data.push("off");
		}
	}

	get data(): CellColor[] {
		if (this.active === null) {
			return this.#data;
		}

		const dataWithTetro = [...this.#data];
		let {
			coords: [x, y],
		} = this.active;
		const { tetromino } = this.active;

		tetromino.pattern.forEach((cell) => {
			const idx = this.coordsToIdx(x, y);
			if (idx >= 0 && cell) {
				dataWithTetro[idx] = tetromino.color;
			}

			const nextCoords = this.nextCoord(x, y);
			x = nextCoords[0];
			y = nextCoords[1];
		});

		return dataWithTetro;
	}

	spawn(t: Tetromino): void {
		this.active = {
			coords: t.spawnCoords,
			tetromino: t,
		};
	}

	private coordsToIdx(x: number, y: number): number {
		if (x < 0 || x >= this.width) {
			return -1;
		} else if (y < 0 || y >= this.height) {
			return -1;
		} else {
			return y * this.width + x;
		}
	}

	private nextCoord(x: number, y: number): [x: number, y: number] {
		const end =
			<number>this.active?.coords[0] + <number>this.active?.tetromino.box;

		if (x === end - 1) {
			return [this.active?.coords[0] || 0, y + 1];
		} else {
			return [x + 1, y];
		}
	}
}
