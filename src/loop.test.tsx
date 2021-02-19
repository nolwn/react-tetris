import { cleanup, render, waitFor } from "@testing-library/react";
import React from "react";
import {
	GameState,
	loadGame,
	reset,
	returnGame,
	startLoop,
	useLoop,
} from "./loop";

test("returnGame returns null when a game has not been started", () => {
	const game = returnGame();

	expect(game).toBeNull();
});

test("loadGame takes a game state which can then be returned", () => {
	const game: GameState = { grid: [], speed: 0 };
	loadGame(game);

	const loadedGame = returnGame();

	expect(game).toEqual(loadedGame);
});

test("useLoop takes a function which doesn't fire on its own", async () => {
	let fired = false;
	const game: GameState = { grid: [], speed: 0 };
	loadGame(game);

	const LoopTest: React.FC<Record<string, never>> = () => {
		useLoop(() => {
			fired = true;
		});

		return <div></div>;
	};
	render(<LoopTest />);

	await waitFor(
		async (): Promise<void> =>
			new Promise((resolve) => setTimeout(() => resolve(), 500))
	);

	expect(fired).toBe(false);

	cleanup();
});

test("useLoop begins returning data once startLoop has been fired", async () => {
	let fired = false;
	const game: GameState = { grid: [], speed: 0 };
	loadGame(game);

	const LoopTest: React.FC<Record<string, never>> = () => {
		useLoop((game: GameState) => {
			expect(game).toBeDefined();
			fired = true;
		});
		startLoop();

		return <div></div>;
	};
	render(<LoopTest />);

	await waitFor(() => expect(fired).toBe(true));

	reset();
	cleanup();
});

test("useLoop returns a terminate function", async () => {
	let kill: () => void;
	let count = 0;

	const game: GameState = { grid: [], speed: 0 };
	loadGame(game);

	const LoopTest: React.FC<Record<string, never>> = () => {
		const { terminate } = useLoop(() => {
			count++;
			kill();
		});

		kill = terminate;
		startLoop();

		return <div></div>;
	};
	render(<LoopTest />);

	await waitFor(
		async (): Promise<void> =>
			new Promise((resolve) => setTimeout(() => resolve(), 500))
	);

	expect(count).toBe(1);

	reset();
	cleanup();
});
