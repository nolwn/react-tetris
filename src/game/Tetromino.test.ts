import { parseFile } from "./snapshots/parseSnapshot";
import { OTetromino, STetromino } from "./Tetromino";

describe("O Tetromino", () => {
	test("Creates new O", () => {
		const o = new OTetromino();
		const expectedPattern = parseFile("./o.txt");

		expect(o.box).toBe(4);
		expect(o.pattern).toEqual(expectedPattern);
		expect(o.color).toEqual("yellow");
	});

	test("Does not rotate", () => {
		const o = new OTetromino();
		const expectedPattern = parseFile("./o.txt");

		o.clockwise();
		expect(o.pattern).toEqual(expectedPattern);

		o.counterClockwise();
		expect(o.pattern).toEqual(expectedPattern);
	});
});

describe("S Tetromino", () => {
	test("Create a new S", () => {
		const s = new STetromino();
		const expectedPattern = parseFile("./s.txt");

		expect(s.box).toBe(3);
		expect(s.pattern).toEqual(expectedPattern);
		expect(s.color).toBe("green");
	});

	test("Rotates clockwise", () => {
		const s = new STetromino();
		const expectedPattern = parseFile("./s-1x.txt");

		s.clockwise();
		expect(s.pattern).toEqual(expectedPattern);
	});
});
