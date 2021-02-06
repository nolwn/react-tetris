import React from "react";
import "./Cell.css";

interface Props {}

enum CellStatus {
	Off = "off",
	Red = "red",
	Orange = "orange",
	Yellow = "yellow",
	Green = "green",
	LightBlue = "lightblue",
	Purple = "purple",
	DarkBlue = "darkblue",
}

const statusMap = {
	green: "Cell-green",
	off: "Cell-off",
};

const Cell: React.FC<Props> = () => (
	<div className="Cell Cell-off" data-testid="off-cell" />
);

export default Cell;
