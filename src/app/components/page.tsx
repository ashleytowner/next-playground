import Accordion from '@/components/Accordion/Accordion';
import Modal from '@/components/Modal/Modal';
import Pagination from '@/components/Pagination/Pagination';
import Tabs from '@/components/Tabs/Tabs';
import ModalDemo from './ModalDemo';
import PaginationDemo from './PaginationDemo';

export default function ComponentsPage() {
  const tabs = [
    {
      label: 'Tab1',
      content: 'Contents of Tab 1',
    },
    {
      label: 'Tab2',
      content: 'Contents of Tab 2',
    },
  ];

  return (
    <div>
      <h1>Components</h1>
      <h2>Buttons</h2>
      <div className="border-2 p-4 rounded border-material-400">
        <button className="btn">Button</button>
        <button className="btn-primary">Primary</button>
        <button className="btn-secondary">Secondary</button>
        <button className="btn-destructive">Destructive</button>
        <button className="btn-ghost">Ghost</button>
        <button className="btn-outline">Outline</button>
      </div>
      <h2>Card</h2>
      <div className="border-2 p-4 rounded border-material-400">
        <div className="card">This is a card</div>
      </div>
      <h2>Accordion</h2>
      <div className="border-2 p-4 rounded border-material-400">
        <Accordion title="Item 1" level={3}>
          <p>Contents of Item 1</p>
        </Accordion>
        <Accordion title="Item 2" level={3}>
          <p>Contents of Item 2</p>
        </Accordion>
      </div>
      <h2>Tabs</h2>
      <div className="border-2 p-4 rounded border-material-400">
        <Tabs tabs={tabs} />
      </div>
      <h2>Pagination</h2>
      <div className="border-2 p-4 rounded border-material-400">
        <PaginationDemo />
      </div>
      <h2>Modal</h2>
      <div className="border-2 p-4 rounded border-material-400">
        <ModalDemo />
      </div>
    </div>
  );
}
