type TabsHeaderProps = {
	labels: string[];
	value: string;
	onChange: (label: string) => void;
	className?: string;
};

export default function TabsHeader(props: TabsHeaderProps) {
	return (
		<div className={`${props.className || ''} card sm:flex-row p-1 inline-flex flex-col gap-3 justify-between`}>
			{props.labels.map((label, index) => {
				return (
					<button className={`${label === props.value ? 'btn-active' : ''} btn-ghost w-full pt-1 pb-1 pl-5 pr-5 rounded`} key={index} onClick={() => props.onChange(label)}>
						{label}
					</button>
				);
			})}
		</div>
	);
}
