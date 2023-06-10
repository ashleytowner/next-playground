import { EloFormValues } from './EloForm';

type EloTableProps = {
	value: EloFormValues;
};

function expectedScore(elo1: number, elo2: number) {
	const qa = Math.pow(10, elo1 / 400);
	const qb = Math.pow(10, elo2 / 400);
	return Math.round((qa / (qa + qb)) * 100) / 100;
}

function eloChange(elo1: number, elo2: number, kFactor: number) {
	const win = Math.round(expectedScore(elo2, elo1) * kFactor);
	const lose = Math.round(expectedScore(elo1, elo2) * kFactor) * -1;
	const draw = Math.round(kFactor / 2) + lose;
	return { win, draw, lose };
}

function formatNumber(n: number) {
	if (n < 0) return String(n);
	return `${n === 0 ? '±' : '+'}${n}`;
}

export default function EloTable(props: EloTableProps) {
	const { elo1, elo2, kFactor } = props.value;
	const { win, draw, lose } = eloChange(elo1, elo2, kFactor);
	return (
		<table className="m-auto">
			<thead>
				<tr>
					<th></th>
					<th>Win</th>
					<th>Draw</th>
					<th>Lose</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Elo Change</th>
					<td>{formatNumber(win)}</td>
					<td>{formatNumber(draw)}</td>
					<td>{formatNumber(lose)}</td>
				</tr>
				<tr>
					<th>Odds</th>
					<td>{expectedScore(elo1, elo2)}</td>
					<td></td>
					<td>{expectedScore(elo2, elo1)}</td>
				</tr>
			</tbody>
		</table>
	);
}
