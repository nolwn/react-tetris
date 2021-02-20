import React from "react";
import { CellColor } from "../../types";
import BuildArea from "../BuildArea";
import "./Matrix.css";

interface Props {
	cells: CellColor[];
}

const Matrix: React.FC<Props> = ({ cells }: Props) => {
	return (
		<div>
			<BuildArea cells={cells} width={10} height={20} />
		</div>
	);
};

export default Matrix;
