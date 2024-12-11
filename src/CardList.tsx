import {
	GameState,
	removeOne,
	SortOrder,
	sortOrderComparators,
	totalRemaining,
} from "./game";
import { Card } from "./Card";

interface CardListProps {
	sortOrder: SortOrder;
	state: GameState;
	onStateChange: (newState: GameState) => void;
}

export function CardList({ state, onStateChange, sortOrder }: CardListProps) {
	const cards = Array.from(state.entries());
	cards.sort(sortOrderComparators[sortOrder]);
	return (
		<div className="flex flex-col" style={{ marginBottom: 72 }}>
			{cards.map(([n, remaining]) => {
				return (
					<Card
						key={n}
						n={n}
						remaining={remaining}
						onClick={() => {
							const newState = removeOne(state, n);
							onStateChange(newState);
						}}
						disabled={remaining <= 0}
						probability={remaining / totalRemaining(state)}
					/>
				);
			})}
		</div>
	);
}
