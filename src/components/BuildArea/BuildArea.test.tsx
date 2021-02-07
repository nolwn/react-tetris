import React from "react";
import { render } from "@testing-library/react";
import BuildArea from ".";
import { CellColor } from "../../types";

test("Accepts and renders a list of cells", () => {
	const cells: CellColor[] = ["off", "off", "green", "off", "red", "red"];
	const { getAllByTestId } = render(
		<BuildArea width={2} height={3} cells={cells} />
	);

	const checkRowColors = (row: HTMLElement, expected: CellColor[]) => {
		const { children } = row;

		expect(children.length).toBe(expected.length);

		expected.forEach((expected, i) => {
			const hasClass = children[i].classList.contains(`Cell-${expected}`);

			expect(hasClass).toBeTruthy();
		});
	};

	const rows = getAllByTestId("BuildArea-row");
	expect(rows.length).toBe(3);

	const [firstRow, secondRow, thirdRow] = rows;

	checkRowColors(firstRow, ["off", "off"]);
	checkRowColors(secondRow, ["green", "off"]);
	checkRowColors(thirdRow, ["red", "red"]);
});
