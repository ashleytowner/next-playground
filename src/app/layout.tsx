import NavBar from '@/components/NavBar/NavBar';
import './globals.scss';
import { ReactNode } from 'react';

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<NavBar client-only />
				<main className="p-2 w-full lg:w-10/12 xl:w-8/12 m-auto">{props.children}</main>
				<div id="portal-root"></div>
			</body>
		</html>
	);
}
