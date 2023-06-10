"use client";
import classnames from "@/lib/classnames";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  variant?: 'default' | 'primary' | 'success' | 'destructive' | 'bare';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { variant = 'default', children, onClick } = props;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick && onClick(e);
  }
  const classes = classnames(
    {
      'active:bg-green-600': variant === 'success',
      'active:bg-primary-600': variant === 'primary',
      'active:bg-red-600': variant === 'destructive',
      'active:bg-slate-300': variant === 'default',
      'bg-green-500': variant === 'success',
      'bg-primary-500': variant === 'primary',
      'bg-red-500': variant === 'destructive',
      'bg-slate-200': variant === 'default',
      'border': variant !== 'bare',
      'border-green-600': variant === 'success',
      'border-primary-600': variant === 'primary',
      'border-red-600': variant === 'destructive',
      'border-slate-300': variant === 'default',
      'dark:active:bg-slate-600': variant === 'default',
      'dark:bg-green-700': variant === 'success',
      'dark:bg-primary-700': variant === 'primary',
      'dark:bg-red-700': variant === 'destructive',
      'dark:bg-slate-700': variant === 'default',
      'dark:border-green-600': variant === 'success',
      'dark:border-primary-500': variant === 'primary',
      'dark:border-red-500': variant === 'destructive',
      'dark:border-slate-600': variant === 'default',
      'dark:hover:border-green-500': variant === 'success',
      'dark:hover:border-primary-300': variant === 'primary',
      'dark:hover:border-red-300': variant === 'destructive',
      'dark:hover:text-primary-300': variant === 'bare',
      'hover:border-green-900': variant === 'success',
      'hover:border-primary-900': variant === 'primary',
      'hover:border-red-900': variant === 'destructive',
      'hover:border-slate-400': variant === 'default',
      'hover:text-primary-700': variant === 'bare',
      'm-1': variant !== 'bare',
      'p-2': variant !== 'bare',
      'rounded-lg': variant !== 'bare',
      'text-primary-500': variant === 'bare',
      'text-white': variant === 'primary' || variant === 'success' || variant === 'destructive',
    },
  );

  return <button className={classes} onClick={handleClick}>{children}</button>
}
