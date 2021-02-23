import Game from ".";
import { colorizeFile } from "../testUtilities/parseSnapshot";
import { CellColor } from "../types";
import { TestQueue } from "./Queue";
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

const tetros = [
	new OTetromino(),
	new ITetromino(),
	new ZTetromino(),
	new LTetromino(),
	new JTetromino(),
	new STetromino(),
	new TTetromino(),
];
const colorizePatterns = (tetrominoes: Tetromino[]) =>
	tetrominoes.map((t) => t.pattern.map((b) => (b ? t.color : "off")));
const q = new TestQueue(tetros);

const oSpawn = colorizeFile("o-spawn.txt", "yellow");

test("Creates a new game", () => {
	const game = new Game(q);
	const { data } = game.board;

	expect(data).toEqual(makeEmptyBoard());
	expect(Array.isArray(game.queue)).toBeTruthy();
});

test("Game accepts a queue and returns pieces based on what it returns", () => {
	const game = new Game(q);

	expect(game.queue).toEqual(colorizePatterns(tetros));
});

test("Game spawns first tetromino in queue after first tick", () => {
	const game = new Game(q);

	game.tick();

	const { data } = game.board;

	expect(data).toEqual(oSpawn);
	expect(Array.isArray(game.queue)).toBeTruthy();
});
