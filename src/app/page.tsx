import Button from '@/components/Button/Button';
import { Github } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Ashley Towner',
	description: 'A site about Ashley Towner',
};

export default function Home() {
	return (
		<>
			<h1>Ashley Towner</h1>
			<p>
				This site is just for my personal projects. For other projects you can
				check out the links below:
			</p>
			<div>
				<button className="btn">button</button>
				<button className="btn-primary">primary</button>
				<button className="btn-secondary">secondary</button>
				<button className="btn-destructive">destructive</button>
				<button className="btn-outline">outline</button>
				<button className="btn-ghost">ghost</button>
			</div>
		</>
	);
}

				// <Link href="https://github.com/ashleytowner">
				// 	<button className="btn">Github</button>
				// </Link>
