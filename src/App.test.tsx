import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("contains 2 build areas", () => {
	const { getAllByTestId } = render(<App />);
	const buildAreas = getAllByTestId("build-area");

	expect(buildAreas.length).toBe(2);
});
