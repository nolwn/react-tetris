import React from "react";
import Cell, { CellColor } from "../Cell";
import "./BuildArea.css";

interface Props {
	cells: CellColor[];
	height: number;
	width: number;
}

const renderRows = (
	cellColors: CellColor[],
	width: number,
	height: number
): JSX.Element[] => {
	const rows = [];
	let cells: JSX.Element[] = [];

	for (let i = 0; i < height * width; i++) {
		const color = cellColors[i];

		cells.push(<Cell color={color} key={`index-${i}`} />);

		if ((i + 1) % width === 0) {
			rows.push(
				<div
					data-testid="BuildArea-row"
					className="BuildArea-row"
					key={`height-${(i + 1) / width}`}
				>
					{cells}
				</div>
			);

			cells = [];
		}
	}

	return rows;
};

const BuildArea: React.FC<Props> = ({ cells, width, height }) => (
	<div id="BuildArea" data-testid="build-area">
		{renderRows(cells, width, height)}
	</div>
);

export default BuildArea;
