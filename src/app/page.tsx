import Button from '@/components/Button/Button';
import { Github, Linkedin } from 'lucide-react';
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
				This site is just for some of my personal projects, and I just play
				around with ideas here. It&apos;s not intended to be a complete site or
				to fulfil any specific purpose. If you want to view my more well-defined
				projects, or reach out to me, use the links below:
			</p>
			<div className="flex">
				<Link href="https://github.com/ashleytowner">
					<button className="btn flex gap-2">
						<Github /> GitHub
					</button>
				</Link>
				<Link href="https://www.linkedin.com/in/ashley-towner/">
					<button className="btn flex gap-2">
						<Linkedin /> Linkedin
					</button>
				</Link>
			</div>
		</>
	);
}
