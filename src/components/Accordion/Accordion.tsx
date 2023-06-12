'use client';
import { ChevronDown, ChevronRight } from 'lucide-react';
import './Accordion.scss';
import { ReactNode, SyntheticEvent } from 'react';

type AccordionProps = {
  children: ReactNode;
  title: string;
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onToggle?: (open: boolean) => void;
  startOpen?: boolean;
};

function Heading(props: Omit<AccordionProps, 'title'>) {
  switch (props.level) {
    case 0:
      return <>{props.children}</>;
    case 1:
      return <h1>{props.children}</h1>;
    case 2:
      return <h2>{props.children}</h2>;
    case 3:
      return <h3>{props.children}</h3>;
    case 4:
      return <h4>{props.children}</h4>;
    case 5:
      return <h5>{props.children}</h5>;
    case 6:
      return <h6>{props.children}</h6>;
  }
}

export default function Accordion(props: AccordionProps) {
  const { children, title, level = 2, onToggle, startOpen = false } = props;
  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement, Event>) => {
    if (e.target instanceof HTMLDetailsElement) {
      onToggle?.(e.target.open);
    } else {
      onToggle?.(false);
    }
  };
  return (
    <details className="accordion" onToggle={handleToggle} open={startOpen}>
      <summary>
        <Heading level={level}>{title}</Heading>
        <span className="open-icon">
          <ChevronDown />
        </span>
        <span className="close-icon">
          <ChevronRight />
        </span>
      </summary>
      <div className="accordion-body">{children}</div>
    </details>
  );
}
