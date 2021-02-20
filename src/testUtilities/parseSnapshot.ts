import fs from "fs";
import path from "path";

function isBlock(cell: string): boolean {
	if (cell === "[]") return true;
	else return false;
}

export function parseFile(filename: string): boolean[] {
	const file = path.resolve(__dirname, filename);
	const data = fs.readFileSync(file);
	const [heading, ...lines] = String(data).split("\n");
	const [width] = heading.split("_");
	const rows = lines.map((line) => line.slice(1, Number(width) * 2 + 1));
	const blockMap: boolean[] = [];

	for (const row of rows) {
		let chars = "";
		for (const char of row) {
			if (chars.length === 2) {
				blockMap.push(isBlock(chars));
				chars = "";
			}

			chars += char;
		}

		blockMap.push(isBlock(chars));
	}

	return blockMap;
}
