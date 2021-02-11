import { OTetromino } from "./Tetromino";

describe("O Tetromino", () => {
	test("Creates new O", () => {
		const o = new OTetromino();
		const expectedPattern = [
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

		expect(o.box).toBe(4);
		expect(o.pattern).toEqual(expectedPattern);
		expect(o.color).toEqual("yellow");
	});
});
