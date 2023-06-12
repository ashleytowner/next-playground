'use client';
import classnames from '@/lib/classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = (props: { route: string; label: string }) => {
	const pathname = usePathname();
	const classname = classnames(
		{
			'text-secondary-400': pathname === props.route,
			'border-b-2': pathname === props.route,
			'border-secondary-400': pathname === props.route,
		},
		'pt-4',
		'pb-4',
		'pl-1',
		'pr-1',
		'no-underline',
		'hover:text-secondary-400',
	);
	return (
		<Link href={props.route} className={classname}>
			{props.label}
		</Link>
	);
};

export default function NavBar() {
	return (
		<nav className="bg-slate-50 pl-4 dark:bg-slate-900 flex flex-row gap-3 shadow-slate-400 dark:shadow-slate-950 shadow">
			<NavLink route="/" label="Home" />
			<NavLink route="/elo" label="Elo Calculator" />
			<NavLink route="/spotify" label="Spotify Insights" />
		</nav>
	);
}
