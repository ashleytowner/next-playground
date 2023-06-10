'use client';
import { ReactNode } from 'react';
import Portal from '../Portal/Portal';
import Button from '../Button/Button';
import { X } from 'lucide-react';

type ModalProps = {
	children: ReactNode;
	opened?: boolean;
	onClose?: () => void;
};

export default function Modal(props: ModalProps) {
	const { children, opened = false, onClose = () => { } } = props;

	if (!opened) {
		return null;
	}

	return (
		<Portal>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="p-6 overflow-auto inset-4 lg:inset-1/4 bg-slate-100 dark:bg-slate-800 absolute rounded-xl border-2 border-slate-400 dark:border-slate-700 shadow shadow-gray-800">
				<div className="flex flex-row-reverse w-full">
					<Button variant="bare" onClick={onClose}>
						<X />
					</Button>
				</div>
				{children}
			</div>
		</Portal>
	);
}
