import { PropsWithChildren } from "react";
import { SortOrder } from "./game";

interface ToggleButtonProps {
	sortOrder: SortOrder;
	setSortOrder: (order: SortOrder) => void;
}

export function ToggleButton({ sortOrder, setSortOrder }: ToggleButtonProps) {
	return (
		<button
			className="rounded-full flex gap-1 bg-blue-900 p-1 focus:outline-none hover:outline-none"
			onClick={() =>
				setSortOrder(
					sortOrder === SortOrder.RANK ? SortOrder.PROBABILITY : SortOrder.RANK
				)
			}
		>
			<Button selected={sortOrder === SortOrder.RANK}>tag</Button>
			<Button selected={sortOrder === SortOrder.PROBABILITY}>percent</Button>
		</button>
	);
}

function Button({
	children,
	selected,
}: PropsWithChildren<{ selected: boolean }>) {
	const background = selected ? "bg-blue-600" : "";
	return (
		<div
			className={`rounded-full px-4 py-2 text-2xl ${background} material-symbols-outlined`}
		>
			{children}
		</div>
	);
}
