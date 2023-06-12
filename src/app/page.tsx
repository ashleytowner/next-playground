import Tabs from '@/components/Tabs/Tabs';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ashley Towner',
	description: 'A site about Ashley Towner',
};

export default function Home() {
	return (
		<>
			<h1>Ashley Towner</h1>
			<Tabs
				tabs={[
					{ label: 'Home', content: 'Home Tab' },
					{ label: 'About', content: 'About Tab' },
				]}
			/>
		</>
	);
}
