import React from "react";
import { render } from "@testing-library/react";
import Matrix from "./";
import { parseFile } from "../../testUtilities/parseSnapshot";

const state = parseFile("o-spawn.txt").map((flag) => (flag ? "green" : "off"));

test("Matrix renders without crashing", () => {
	const { getAllByTestId } = render(<Matrix cells={state} />);

	expect(getAllByTestId("cell")[0]).toBeInTheDocument();
});

test("contains 20 rows and 200 cells eeach", () => {
	const { getAllByTestId } = render(<Matrix cells={state} />);
	const rows = getAllByTestId("BuildArea-row");
	const cells = getAllByTestId("cell");

	expect(rows.length).toBe(20);
	expect(cells.length).toBe(200);
});

test("Matrix renders a game state", () => {
	const { getAllByTestId } = render(<Matrix cells={state} />);
	const cells = getAllByTestId("cell");

	for (const index in state) {
		if (state[index] === "off") {
			expect(cells[index].classList).toContain("Cell-off");
		} else {
			expect(cells[index].classList).toContain("Cell-green");
		}
	}
});
