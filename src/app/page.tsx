import { Github, Linkedin, ScrollText } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

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
			<div className="flex justify-around w-full">
				<Link href="https://github.com/ashleytowner" target="_blank">
					<button className="btn flex gap-2">
						<Github /> GitHub
					</button>
				</Link>
				<Link href="/resume">
					<button className="btn flex gap-2">
						<ScrollText /> Resume
					</button>
				</Link>
				<Link href="https://www.linkedin.com/in/ashley-towner/" target="_blank">
					<button className="btn flex gap-2">
						<Linkedin /> Linkedin
					</button>
				</Link>
			</div>
		</>
	);
}
