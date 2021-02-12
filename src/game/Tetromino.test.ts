import { parseFile } from "./snapshots/parseSnapshot";
import {
	ITetromino,
	JTetromino,
	LTetromino,
	OTetromino,
	STetromino,
	TTetromino,
	ZTetromino,
} from "./Tetromino";

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
		const oneRotation = parseFile("./s-1x.txt");
		const twoRotations = parseFile("./s-2x.txt");
		const threeRotations = parseFile("./s-3x.txt");
		const fourRotations = parseFile("./s.txt");

		s.clockwise();
		expect(s.pattern).toEqual(oneRotation);

		s.clockwise();
		expect(s.pattern).toEqual(twoRotations);

		s.clockwise();
		expect(s.pattern).toEqual(threeRotations);

		s.clockwise();
		expect(s.pattern).toEqual(fourRotations);
	});

	test("Rotates counter clockwise", () => {
		const s = new STetromino();
		const oneRotation = parseFile("./s-3x.txt");
		const twoRotations = parseFile("./s-2x.txt");
		const threeRotations = parseFile("./s-1x.txt");
		const fourRotations = parseFile("./s.txt");

		s.counterClockwise();
		expect(s.pattern).toEqual(oneRotation);

		s.counterClockwise();
		expect(s.pattern).toEqual(twoRotations);

		s.counterClockwise();
		expect(s.pattern).toEqual(threeRotations);

		s.counterClockwise();
		expect(s.pattern).toEqual(fourRotations);
	});
});

describe("Z Tetromino", () => {
	test("Create a new Z", () => {
		const z = new ZTetromino();
		const expectedPattern = parseFile("./z.txt");

		expect(z.box).toBe(3);
		expect(z.pattern).toEqual(expectedPattern);
		expect(z.color).toBe("red");
	});

	test("Rotates clockwise", () => {
		const z = new ZTetromino();
		const oneRotation = parseFile("./z-1x.txt");
		const twoRotations = parseFile("./z-2x.txt");
		const threeRotations = parseFile("./z-3x.txt");
		const fourRotations = parseFile("./z.txt");

		z.clockwise();
		expect(z.pattern).toEqual(oneRotation);

		z.clockwise();
		expect(z.pattern).toEqual(twoRotations);

		z.clockwise();
		expect(z.pattern).toEqual(threeRotations);

		z.clockwise();
		expect(z.pattern).toEqual(fourRotations);
	});

	test("Rotates counter clockwise", () => {
		const z = new ZTetromino();
		const oneRotation = parseFile("./z-3x.txt");
		const twoRotations = parseFile("./z-2x.txt");
		const threeRotations = parseFile("./z-1x.txt");
		const fourRotations = parseFile("./z.txt");

		z.counterClockwise();
		expect(z.pattern).toEqual(oneRotation);

		z.counterClockwise();
		expect(z.pattern).toEqual(twoRotations);

		z.counterClockwise();
		expect(z.pattern).toEqual(threeRotations);

		z.counterClockwise();
		expect(z.pattern).toEqual(fourRotations);
	});
});

describe("J Tetromino", () => {
	test("Create a new L", () => {
		const j = new JTetromino();
		const expectedPattern = parseFile("./j.txt");

		expect(j.box).toBe(3);
		expect(j.pattern).toEqual(expectedPattern);
		expect(j.color).toBe("darkblue");
	});

	test("Rotates clockwise", () => {
		const j = new JTetromino();
		const oneRotation = parseFile("./j-1x.txt");
		const twoRotations = parseFile("./j-2x.txt");
		const threeRotations = parseFile("./j-3x.txt");
		const fourRotations = parseFile("./j.txt");

		j.clockwise();
		expect(j.pattern).toEqual(oneRotation);

		j.clockwise();
		expect(j.pattern).toEqual(twoRotations);

		j.clockwise();
		expect(j.pattern).toEqual(threeRotations);

		j.clockwise();
		expect(j.pattern).toEqual(fourRotations);
	});

	test("Rotates counter clockwise", () => {
		const j = new JTetromino();
		const oneRotation = parseFile("./j-3x.txt");
		const twoRotations = parseFile("./j-2x.txt");
		const threeRotations = parseFile("./j-1x.txt");
		const fourRotations = parseFile("./j.txt");

		j.counterClockwise();
		expect(j.pattern).toEqual(oneRotation);

		j.counterClockwise();
		expect(j.pattern).toEqual(twoRotations);

		j.counterClockwise();
		expect(j.pattern).toEqual(threeRotations);

		j.counterClockwise();
		expect(j.pattern).toEqual(fourRotations);
	});
});

describe("L Tetromino", () => {
	test("Create a new L", () => {
		const l = new LTetromino();
		const expectedPattern = parseFile("./l.txt");

		expect(l.box).toBe(3);
		expect(l.pattern).toEqual(expectedPattern);
		expect(l.color).toBe("orange");
	});

	test("Rotates clockwise", () => {
		const l = new LTetromino();
		const oneRotation = parseFile("./l-1x.txt");
		const twoRotations = parseFile("./l-2x.txt");
		const threeRotations = parseFile("./l-3x.txt");
		const fourRotations = parseFile("./l.txt");

		l.clockwise();
		expect(l.pattern).toEqual(oneRotation);

		l.clockwise();
		expect(l.pattern).toEqual(twoRotations);

		l.clockwise();
		expect(l.pattern).toEqual(threeRotations);

		l.clockwise();
		expect(l.pattern).toEqual(fourRotations);
	});

	test("Rotates counter clockwise", () => {
		const l = new LTetromino();
		const oneRotation = parseFile("./l-3x.txt");
		const twoRotations = parseFile("./l-2x.txt");
		const threeRotations = parseFile("./l-1x.txt");
		const fourRotations = parseFile("./l.txt");

		l.counterClockwise();
		expect(l.pattern).toEqual(oneRotation);

		l.counterClockwise();
		expect(l.pattern).toEqual(twoRotations);

		l.counterClockwise();
		expect(l.pattern).toEqual(threeRotations);

		l.counterClockwise();
		expect(l.pattern).toEqual(fourRotations);
	});
});

describe("I Tetromino", () => {
	test("Create a new I", () => {
		const i = new ITetromino();
		const expectedPattern = parseFile("./i.txt");

		expect(i.box).toBe(4);
		expect(i.pattern).toEqual(expectedPattern);
		expect(i.color).toBe("lightblue");
	});

	test("Rotates clockwise", () => {
		const i = new ITetromino();
		const oneRotation = parseFile("./i-1x.txt");
		const twoRotations = parseFile("./i-2x.txt");
		const threeRotations = parseFile("./i-3x.txt");
		const fourRotations = parseFile("./i.txt");

		i.clockwise();
		expect(i.pattern).toEqual(oneRotation);

		i.clockwise();
		expect(i.pattern).toEqual(twoRotations);

		i.clockwise();
		expect(i.pattern).toEqual(threeRotations);

		i.clockwise();
		expect(i.pattern).toEqual(fourRotations);
	});

	test("Rotates counter clockwise", () => {
		const i = new ITetromino();
		const oneRotation = parseFile("./i-3x.txt");
		const twoRotations = parseFile("./i-2x.txt");
		const threeRotations = parseFile("./i-1x.txt");
		const fourRotations = parseFile("./i.txt");

		i.counterClockwise();
		expect(i.pattern).toEqual(oneRotation);

		i.counterClockwise();
		expect(i.pattern).toEqual(twoRotations);

		i.counterClockwise();
		expect(i.pattern).toEqual(threeRotations);

		i.counterClockwise();
		expect(i.pattern).toEqual(fourRotations);
	});
});

describe("T Tetromino", () => {
	test("Create a new T", () => {
		const t = new TTetromino();
		const expectedPattern = parseFile("./t.txt");

		expect(t.box).toBe(3);
		expect(t.pattern).toEqual(expectedPattern);
		expect(t.color).toBe("purple");
	});

	test("Rotates clockwise", () => {
		const t = new TTetromino();
		const oneRotation = parseFile("./t-1x.txt");
		const twoRotations = parseFile("./t-2x.txt");
		const threeRotations = parseFile("./t-3x.txt");
		const fourRotations = parseFile("./t.txt");

		t.clockwise();
		expect(t.pattern).toEqual(oneRotation);

		t.clockwise();
		expect(t.pattern).toEqual(twoRotations);

		t.clockwise();
		expect(t.pattern).toEqual(threeRotations);

		t.clockwise();
		expect(t.pattern).toEqual(fourRotations);
	});

	test("Rotates counter clockwise", () => {
		const t = new TTetromino();
		const oneRotation = parseFile("./t-3x.txt");
		const twoRotations = parseFile("./t-2x.txt");
		const threeRotations = parseFile("./t-1x.txt");
		const fourRotations = parseFile("./t.txt");

		t.counterClockwise();
		expect(t.pattern).toEqual(oneRotation);

		t.counterClockwise();
		expect(t.pattern).toEqual(twoRotations);

		t.counterClockwise();
		expect(t.pattern).toEqual(threeRotations);

		t.counterClockwise();
		expect(t.pattern).toEqual(fourRotations);
	});
});
