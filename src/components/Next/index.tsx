import React from "react";
import { CellColor } from "../../types";
import BuildArea from "../BuildArea";
import "./Next.css";

interface Props {
	tetromino: CellColor[];
}

const Next: React.FC<Props> = ({ tetromino }: Props) => {
	return (
		<div id="Next">
			<BuildArea cells={tetromino} width={4} height={4} />
		</div>
	);
};

export default Next;
