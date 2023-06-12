type TabsHeaderProps = {
	labels: string[];
	value: string;
	onChange: (label: string) => void;
	className?: string;
};

export default function TabsHeader(props: TabsHeaderProps) {
	return (
		<div className={`${props.className || ''} sm:flex-row bg-slate-200 dark:bg-slate-900 p-1 rounded border-slate-300 dark:border-slate-600 border-2 inline-flex flex-col gap-3 justify-between`}>
			{props.labels.map((label, index) => {
				return (
					<button className={`${props.value === label ? 'dark:bg-slate-700' : ''} w-full pt-1 pb-1 pl-5 pr-5 rounded`} key={index} onClick={() => props.onChange(label)}>
						{label}
					</button>
				);
			})}
		</div>
	);
}
