import { useState } from "react";
import { GameState, INITIAL_STATE, isInitialState, SortOrder } from "./game";
import { CardList } from "./CardList";
import { Toolbar } from "./Toolbar";

const MAX_HISTORY_ENTRIES = 100;

function App() {
	const [stateHistory, setStateHistory] = useState<GameState[]>([
		INITIAL_STATE,
	]);
	const state = stateHistory[stateHistory.length - 1];
	const pushState = (newState: GameState) => {
		setStateHistory([...stateHistory.slice(0, MAX_HISTORY_ENTRIES), newState]);
	};
	const newGame = () => {
		pushState(INITIAL_STATE);
	};
	const canUndo = stateHistory.length > 1;
	const undo = () => {
		if (!canUndo) return;
		setStateHistory(stateHistory.slice(0, -1));
	};
	const [sortOrder, setSortOrder] = useState(SortOrder.RANK);
	return (
		<>
			<CardList state={state} onStateChange={pushState} sortOrder={sortOrder} />
			<Toolbar
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
				undo={undo}
				canUndo={canUndo}
				startNewGame={newGame}
				canStartNewGame={!isInitialState(state)}
			/>
		</>
	);
}

export default App;
