import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="bg-slate-50 dark:bg-slate-900 flex flex-row gap-3 p-4 shadow-slate-400 dark:shadow-slate-950 shadow">
			<Link href="/">Home</Link>
			<Link href="/elo">Elo Calculator</Link>
		</nav>
	)
}
