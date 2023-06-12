'use client';
import { ReactNode, useState } from 'react';
import TabsHeader from './TabsHeader';

type TabsProps = {
	tabs: { label: string; content: ReactNode }[];
	className?: string;
};

export default function Tabs(props: TabsProps) {
	const labels = props.tabs.map((tab) => tab.label);

	const [selectedTab, setSelectedTab] = useState(labels[0]);

	return (
		<>
			<TabsHeader
				labels={labels}
				value={selectedTab}
				onChange={setSelectedTab}
				className={props.className}
			/>
			<div>{props.tabs.find((tab) => tab.label === selectedTab)?.content}</div>
		</>
	);
}
