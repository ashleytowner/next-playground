"use client";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function Home() {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			<h1>Ashley Towner</h1>
			<p>Hello</p>
			<span className="card">Button</span>
			<Button>Default Button</Button>
			<Button variant="primary" onClick={() => setModalOpen(true)}>Primary Button</Button>
			<Button variant="success">Success Button</Button>
			<Button variant="destructive">Destructive Button</Button>
			<Modal opened={modalOpen} onClose={() => setModalOpen(false)}>
				<h1>My First Modal</h1>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
				<p>Elit harum eos labore minima error Ad dicta impedit ab quidem delectus? Molestias ut ipsam voluptas aperiam dolore. Facere sapiente perferendis magni quam quod Eveniet nemo praesentium consequuntur modi quo?</p>
			</Modal>
		</>
	)
}
