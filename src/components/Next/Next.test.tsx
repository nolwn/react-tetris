import React from "react";
import { render } from "@testing-library/react";
import Next from "./";
import { parseFile } from "../../testUtilities/parseSnapshot";
import { CellColor } from "../../types";

function colorizedFile(fileName: string, color: CellColor): CellColor[] {
	return parseFile(fileName).map((flag) => (flag ? color : "off"));
}

function checkCells(cells: HTMLElement[], tetro: CellColor[]): void {
	expect(cells.length).toBe(tetro.length);
	for (const index in tetro) {
		if (tetro[index] === "off") {
			expect(cells[index].classList).toContain("Cell-off");
		} else {
			expect(cells[index].classList).toContain(`Cell-${tetro[index]}`);
		}
	}
}

const iTetromino = colorizedFile("i.txt", "green");
const sTetromino = colorizedFile("s.txt", "darkblue");
const lTetromino = colorizedFile("l.txt", "darkblue");
const oTetromino = colorizedFile("o.txt", "purple");
const iTrimmed = colorizedFile("i-trimmed.txt", "green");
const sTrimmed = colorizedFile("s-trimmed.txt", "darkblue");

test("Next renders the correct size for an I Tetromino", () => {
	const { getAllByTestId } = render(<Next tetromino={iTetromino} />);
	const rows = getAllByTestId("BuildArea-row");

	expect(rows.length).toBe(1);

	for (const row of rows) {
		expect(row.childElementCount).toBe(4);
	}
});

test("Next renders the correct size for an s Tetromino", () => {
	const { getAllByTestId } = render(<Next tetromino={sTetromino} />);
	const rows = getAllByTestId("BuildArea-row");

	expect(rows.length).toBe(2);

	for (const row of rows) {
		expect(row.childElementCount).toBe(3);
	}
});

test("Next renders the correct size for an L Tetromino", () => {
	const { getAllByTestId } = render(<Next tetromino={lTetromino} />);
	const rows = getAllByTestId("BuildArea-row");

	expect(rows.length).toBe(2);

	for (const row of rows) {
		expect(row.childElementCount).toBe(3);
	}
});

test("Next renders the correct size for an O Tetromino", () => {
	const { getAllByTestId } = render(<Next tetromino={oTetromino} />);
	const rows = getAllByTestId("BuildArea-row");

	expect(rows.length).toBe(2);

	for (const row of rows) {
		expect(row.childElementCount).toBe(2);
	}
});

test("Next renders a 4x4 tetromino", () => {
	const { getAllByTestId } = render(<Next tetromino={iTetromino} />);
	const cells = getAllByTestId("cell");

	checkCells(cells, iTrimmed);
});

test("Next renders a 3x3 tetromino", () => {
	const { getAllByTestId } = render(<Next tetromino={sTetromino} />);
	const cells = getAllByTestId("cell");

	checkCells(cells, sTrimmed);
});
