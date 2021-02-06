import React from "react";
import Cell, { CellColor } from ".";
import { render } from "@testing-library/react";

test("renders off cell", () => {
	const { getByTestId } = render(<Cell />);

	const cell = getByTestId("cell");
	expect(cell).toBeInTheDocument();

	const cellClasses = cell.classList;
	expect(cellClasses.contains(`Cell-off`)).toBeTruthy();
});

test("renders colors cell", () => {
	const colors: CellColor[] = [
		"red",
		"orange",
		"yellow",
		"green",
		"lightblue",
		"purple",
		"darkblue",
	];
	const { getAllByTestId } = render(
		<>
			{colors.map((color) => (
				<Cell key={color} color={color} />
			))}
		</>
	);

	const cells = getAllByTestId("cell");

	colors.forEach((color, i) => {
		const cellClasses = cells[i].classList;
		expect(cellClasses.contains(`Cell-${color}`)).toBeTruthy();
	});
});
