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
