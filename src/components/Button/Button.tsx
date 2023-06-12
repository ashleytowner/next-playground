'use client';
import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  variant?:
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'destructive'
  | 'bare';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: ButtonProps) {
  const { variant = 'default', children, onClick } = props;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick && onClick(e);
  };

  return (
    <button className={`btn-${variant}`} onClick={handleClick}>
      {children}
    </button>
  );
}
