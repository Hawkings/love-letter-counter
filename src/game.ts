export type GameState = ReadonlyMap<number, number>;

export const INITIAL_STATE: GameState = new Map([
	[0, 2],
	[1, 6],
	[2, 2],
	[3, 2],
	[4, 2],
	[5, 2],
	[6, 2],
	[7, 1],
	[8, 1],
	[9, 1],
]);

export function isInitialState(state: GameState) {
	for (let i = 0; i <= 9; i++) {
		if (INITIAL_STATE.get(i) != state.get(i)) {
			return false;
		}
	}
	return true;
}

export const cardNames = [
	"Espía",
	"Guardia",
	"Sacerdote",
	"Barón",
	"Doncella",
	"Príncipe",
	"Chanciller",
	"Rey",
	"Condesa",
	"Princesa",
] as const;

function sum(numbers: number[]) {
	return numbers.reduce((total, n) => total + n, 0);
}

export function totalRemaining(state: GameState) {
	return sum(Array.from(state.values()));
}

export function removeOne(state: GameState, nToRemove: number) {
	return new Map(
		Array.from(state.entries()).map(([n, remaining]) => [
			n,
			n === nToRemove ? remaining - 1 : remaining,
		])
	);
}

export enum SortOrder {
	RANK,
	PROBABILITY,
}

type Comparator = (a: [number, number], b: [number, number]) => number;

export const sortOrderComparators: Readonly<Record<SortOrder, Comparator>> = {
	[SortOrder.RANK]: ([a], [b]) => a - b,
	[SortOrder.PROBABILITY]: ([, a], [, b]) => b - a,
};
