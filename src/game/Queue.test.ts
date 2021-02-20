import Queue from "./Queue";

test("Queue can be constructed", () => {
	const q = new Queue();

	expect(q).toBeDefined();
});

test("Queue starts with each of the tetriminoes", () => {
	const q = new Queue();
	const tetros = q.tetrominoes;
	const tetroNames = new Set();

	for (const tetro of tetros) {
		tetroNames.add(tetro.constructor.name);
	}

	expect(tetroNames.size).toBe(7);
});

test("Queue returns its data as cell colors", () => {
	const q = new Queue();
	const { tetrominoes } = q;
	const { colorData } = q;

	expect(colorData.length).toBe(7);

	for (const i in colorData) {
		const colorArr = colorData[i];
		const tetromino = tetrominoes[i];

		for (const j in colorArr) {
			const color = colorArr[j];
			const flag = tetromino.pattern[j];

			if (flag) {
				expect(color).toBe(tetromino.color);
			} else {
				expect(color).toBe("off");
			}
		}
	}
});
