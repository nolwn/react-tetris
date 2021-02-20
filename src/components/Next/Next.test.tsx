import React from "react";
import { render } from "@testing-library/react";
import Next from "./";
import { parseFile } from "../../testUtilities/parseSnapshot";

const tetromino = parseFile("i.txt").map((flag) => (flag ? "green" : "off"));

test("Next renders without crashing", () => {
	const { getAllByTestId } = render(<Next tetromino={[]} />);

	expect(getAllByTestId("cell")[0]);
});

test("Next renders the correct size", () => {
	const { getAllByTestId } = render(<Next tetromino={tetromino} />);
	const rows = getAllByTestId("BuildArea-row");

	expect(rows.length).toBe(4);

	for (const row of rows) {
		expect(row.childElementCount).toBe(4);
	}
});

test("Next renders a tetromino", () => {
	const { getAllByTestId } = render(<Next tetromino={tetromino} />);
	const cells = getAllByTestId("cell");

	for (const index in tetromino) {
		if (tetromino[index] === "off") {
			expect(cells[index].classList).toContain("Cell-off");
		} else {
			expect(cells[index].classList).toContain("Cell-green");
		}
	}
});
