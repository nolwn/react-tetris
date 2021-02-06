import React from "react";
import { render } from "@testing-library/react";
import BuildArea from ".";

test("Contains 200 off cells", () => {
	const { getAllByTestId } = render(<BuildArea />);
	const cells = getAllByTestId("off-cell");

	expect(cells.length).toBe(200);
});
