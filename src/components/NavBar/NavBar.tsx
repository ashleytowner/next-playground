'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const currentRoute = usePathname();

  return (
    <nav className="bg-slate-50 dark:bg-slate-900 flex flex-row gap-3 p-4 shadow-slate-400 dark:shadow-slate-950 shadow">
      <Link href="/">Home {currentRoute === '/' && '*'}</Link>
      <Link href="/elo">Elo Calculator {currentRoute === '/elo' && '*'}</Link>
      <Link href="/spotify">
        Spotify Insights {currentRoute === '/spotify' && '*'}
      </Link>
    </nav>
  );
}
