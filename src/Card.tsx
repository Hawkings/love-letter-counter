import { cardNames } from "./game";

interface CardParams {
	n: number;
	remaining: number;
	onClick: (n: number) => void;
	disabled: boolean;
	probability: number;
}

export function Card({
	n,
	remaining,
	disabled,
	probability,
	onClick,
}: CardParams) {
	return (
		<button
			onClick={() => onClick(n)}
			disabled={disabled}
			className="p-4 bg-slate-900 text-xl flex items-center gap-2"
			style={{
				minHeight: "calc((100dvh - 72px) / 10)",
			}}
		>
			<div className="rounded-full bg-red-700 px-3 py-1 mr-2">{n}</div>
			<div>
				{cardNames[n]} {window.innerWidth}
			</div>
			<div className="grow text-right"> ({remaining})</div>
			<div> {(probability * 100).toFixed(1)}%</div>
		</button>
	);
}
