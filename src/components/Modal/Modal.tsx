'use client';
import { ReactNode } from 'react';
import Portal from '../Portal/Portal';
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
			<div className="p-6 overflow-auto inset-4 lg:inset-1/4 bg-material-100 dark:bg-material-800 absolute rounded-xl border-2 border-material-400 dark:border-material-700 shadow shadow-gray-800">
				<div className="flex flex-row-reverse w-full">
					<button className="btn-ghost" onClick={onClose}>
						<X />
					</button>
				</div>
				{children}
			</div>
		</Portal>
	);
}
