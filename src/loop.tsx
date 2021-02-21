import { CellColor } from "./types";
import Game from "./game";
import { useEffect } from "react";
import Queue from "./game/Queue";

export interface GameState {
	grid: CellColor[];
	speed: number;
	queue: CellColor[][];
}

interface HookVariables {
	terminate: () => void;
}

let running = false;
let started = false;
let loadedGame: GameState | null = null;
let game;
const subscribers: ((game: GameState) => void)[] = [];

async function sleep(milliseconds: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, milliseconds);
	});
}

export async function startLoop(): Promise<void> {
	if (started === true) {
		console.log("Not restarting...");
		return;
	}

	if (loadedGame === null) {
		game = new Game(new Queue());
	} else {
		game = new Game(new Queue(), loadedGame);
	}

	running = true;
	started = true;
	let count = 0;

	while (running) {
		await sleep(game.speed);

		for (const subscriber of subscribers) {
			subscriber(game.state);
		}

		count++;

		if (count > 3) {
			running = false;
		}
	}
}

export function useLoop(update: (game: GameState) => void): HookVariables {
	useEffect(() => {
		const index = subscribers.push(update) - 1;

		return () => {
			subscribers.splice(index, 1);
		};
	});

	return {
		terminate: () => {
			running = false;
		},
	};
}

export function loadGame(game: GameState): void {
	loadedGame = game;
}

export function returnGame(): GameState | null {
	return loadedGame;
}

export function reset(): void {
	started = false;
	game = null;
}
