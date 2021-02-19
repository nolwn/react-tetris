import Game from ".";
import { CellColor } from "../types";

function makeEmptyBoard(): CellColor[] {
	const colors: CellColor[] = [];

	for (let i = 0; i < 200; i++) {
		colors.push("off");
	}

	return colors;
}

test("Creates a new game", () => {
	const game = new Game(null);
	const { board } = game;
	const expectedBoard = makeEmptyBoard();

	expect(board).toEqual(expectedBoard);
});

test("Gets the next piece", () => {
	const game = new Game(null);
	const { next } = game;

	expect(next).toHaveLength(16);

	const colors = next.reduce(
		(acc: { [key: string]: boolean }, cell: CellColor) => {
			acc[cell] = true;

			return acc;
		},
		{}
	);

	expect(Object.values(colors)).toHaveLength(2);
});
