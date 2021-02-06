import React from "react";
import Cell from ".";
import { render } from "@testing-library/react";

test("renders off cell", () => {
	const { getByTestId } = render(<Cell />);
	const cell = getByTestId("off-cell");

	expect(cell).toBeInTheDocument();
});
