import Grid from "./Grid";
import { OTetromino } from "./Tetromino";
import { CellColor } from "../types";
import { parseFile } from "../testUtilities/parseSnapshot";

function isActive(c: CellColor) {
	c !== "off";
}

test("Creates a new Grid", () => {
	const grid = new Grid(10, 20);
	const { width, height, spawn } = grid;

	expect(width).toBe(10);
	expect(height).toBe(20);
	expect(typeof spawn).toBe("function");
	expect(grid.data.length).toBe(200);

	grid.data.forEach((cell) => expect(cell).toBe("off"));
});

test("Spawns tetrominos at the top", () => {
	const grid = new Grid(10, 20);
	const tetro = new OTetromino();
	const expectedState = parseFile("o-spawn.txt");

	grid.data.forEach((cell) => expect(cell).toBe("off"));

	grid.spawn(tetro);

	const boolData = grid.data.map((cell) => cell !== "off");

	expect(boolData).toEqual(expectedState);
});
