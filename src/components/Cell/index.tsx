import React from "react";
import "./Cell.css";

interface Props {
	color?: CellColor;
}

export type CellColor =
	| "off"
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "lightblue"
	| "purple"
	| "darkblue";

const Cell: React.FC<Props> = ({ color = "off" }: Props) => (
	<div className={`Cell Cell-${color}`} data-testid={`cell`} />
);

export default Cell;
