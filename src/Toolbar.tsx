import { PropsWithChildren } from "react";
import { SortOrder } from "./game";
import { ToggleButton } from "./ToggleButton";

interface ToolbarProps {
	canUndo: boolean;
	undo: () => void;
	sortOrder: SortOrder;
	setSortOrder: (order: SortOrder) => void;
	canStartNewGame: boolean;
	startNewGame: () => void;
}

export function Toolbar({
	sortOrder,
	setSortOrder,
	canUndo,
	undo,
	canStartNewGame,
	startNewGame,
}: ToolbarProps) {
	return (
		<div
			role="toolbar"
			className="bg-blue-950 fixed bottom-0 w-full py-2 flex justify-end"
		>
			<div className="flex justify-around max-w-full md:max-w-screen-sm grow">
				<Button disabled={!canStartNewGame} onClick={startNewGame}>
					restart_alt
				</Button>
				<ToggleButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
				<Button onClick={undo} disabled={!canUndo}>
					undo
				</Button>
			</div>
		</div>
	);
}

interface ButtonProps {
	disabled: boolean;
	onClick: () => void;
}

function Button({
	children,
	disabled,
	onClick,
}: PropsWithChildren<ButtonProps>) {
	return (
		<button
			className="bg-blue-700 rounded-full px-4 disabled:bg-blue-900 disabled:text-gray-500 material-symbols-outlined"
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
