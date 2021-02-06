import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("contains build area", () => {
	const { getByTestId } = render(<App />);
	const buildArea = getByTestId("build-area");

	expect(buildArea).toBeInTheDocument();
});
