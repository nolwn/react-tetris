import React from "react";
import Cell from "../Cell";
import "./BuildArea.css";

const WIDTH = 10;
const HEIGHT = 20;

interface Props {}

const renderRows = (width: number, height: number): JSX.Element[] => {
	const rows = [];

	for (let i = 0; i < height; i++) {
		const cells = [];

		for (let j = 0; j < width; j++) {
			cells.push(<Cell key={`width: ${j} height: ${i}`} />);
		}
		rows.push(
			<div className="BuildArea-row" key={`height-${i}`}>
				{cells}
			</div>
		);
	}

	return rows;
};

const BuildArea: React.FC<Props> = () => (
	<div id="BuildArea" data-testid="build-area">
		{renderRows(WIDTH, HEIGHT)}
	</div>
);

export default BuildArea;
