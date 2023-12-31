import EloCalculator from '@/components/EloCalculator/EloCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Elo Calculator',
	description: 'A calculator which will tell you your changes of winning based on your Elo',
};

export default function Form() {
	return (
		<>
			<h1>Elo Calculator</h1>
			<p>Enter your elo rating and your opponent&apos;s elo rating to calculate your chance of winning, and your elo gain</p>
			<EloCalculator />
		</>
	);
}
