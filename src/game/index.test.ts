import Game from ".";
import { CellColor } from "../types";
import Queue, { TestQueue } from "./Queue";
import {
	Tetromino,
	ITetromino,
	JTetromino,
	LTetromino,
	OTetromino,
	STetromino,
	TTetromino,
	ZTetromino,
} from "./Tetromino";

function makeEmptyBoard(): CellColor[] {
	const colors: CellColor[] = [];

	for (let i = 0; i < 200; i++) {
		colors.push("off");
	}

	return colors;
}

test("Creates a new game", () => {
	const game = new Game(new Queue());
	const { board } = game;
	const expectedBoard = makeEmptyBoard();

	expect(board).toEqual(expectedBoard);
	expect(Array.isArray(game.queue)).toBeTruthy();
});

test("Game accepts a queue and returns pieces based on what it returns", () => {
	const tetros = [
		new ITetromino(),
		new ZTetromino(),
		new LTetromino(),
		new JTetromino(),
		new STetromino(),
		new OTetromino(),
		new TTetromino(),
	];
	const colorizePatterns = (tetrominoes: Tetromino[]) =>
		tetrominoes.map((t) => t.pattern.map((b) => (b ? t.color : "off")));
	const q = new TestQueue(tetros);
	const game = new Game(q);

	expect(game.queue).toEqual(colorizePatterns(tetros));
});
