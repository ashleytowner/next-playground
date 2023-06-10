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
				<main className="p-2">{props.children}</main>
				<div id="portal-root"></div>
			</body>
		</html>
	);
}
