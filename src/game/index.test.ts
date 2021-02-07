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
	const game = new Game();
	const { board } = game;
	const expectedBoard = makeEmptyBoard();

	expect(board).toEqual(expectedBoard);
});
