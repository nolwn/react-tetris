import React from "react";
import { CellColor } from "../../types";
import "./Cell.css";

interface Props {
	color?: CellColor;
}

const Cell: React.FC<Props> = ({ color = "off" }: Props) => (
	<div className={`Cell Cell-${color}`} data-testid={`cell`} />
);

export default Cell;
