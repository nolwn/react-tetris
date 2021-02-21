import React from "react";
import { CellColor } from "../../types";
import BuildArea from "../BuildArea";
import "./Next.css";

interface Props {
	tetromino: CellColor[];
}

function trimTetromino(
	tetromino: CellColor[]
): { trimmed: CellColor[]; dimensions: [number, number] } {
	const size = tetromino.length === 16 ? 4 : 3;
	const keepRows: boolean[] = [];
	const keepCols: boolean[] = [];
	const trimmed: CellColor[] = [];
	let keepRow = false;

	// determine rows and cols to keep
	for (let i = 0; i < tetromino.length; i++) {
		if (i < size) {
			keepCols.push(false);
		}

		if (tetromino[i] !== "off") {
			keepRow = true;
			keepCols[i % size] = true;
		}

		if ((i + 1) % size === 0) {
			keepRows.push(keepRow);
			keepRow = false;
		}
	}

	const width = keepCols.reduce((n, flag) => (flag ? n + 1 : n), 0);
	const height = keepRows.reduce((n, flag) => (flag ? n + 1 : n), 0);

	// add cells that are in keep rows or cols
	for (let i = 0; i < tetromino.length; i++) {
		if (keepRows[Math.floor(i / size)]) {
			if (keepCols[i % size]) {
				trimmed.push(tetromino[i]);
			}
		}
	}

	return { trimmed, dimensions: [width, height] };
}

const Next: React.FC<Props> = ({ tetromino }: Props) => {
	const {
		trimmed,
		dimensions: [width, height],
	} = trimTetromino(tetromino);

	return (
		<div id="Next">
			<BuildArea cells={trimmed} width={width} height={height} />
		</div>
	);
};

export default Next;
