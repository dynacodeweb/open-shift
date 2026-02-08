'use client';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeModeToggler } from './theme-toggler';

const navlinks = [
  {
    id: crypto.randomUUID(),
    label: 'Home',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    label: 'Programs',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    label: 'Trainers',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    label: 'Blog',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    label: 'About',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    label: 'Pricing',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    label: 'Contact',
    href: '#',
  },
];

export default function Navbar() {
  return (
    <header
      className={'bg-background border-border shadow-sm sticky top-0 z-50'}>
      <div className={'flex items-center justify-between px-4 h-20'}>
        <Link href={'/'} className={'w-48 h-auto'}>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={375}
            height={40}
            className={'w-full h-full'}
            priority={true}
          />
        </Link>

        <nav className={'flex items-center gap-2'}>
          {navlinks.map((link, idx) => {
            const firstItem = idx === 0;
            return (
              <Link
                key={link.id}
                href={link.href as Route}
                className={cn(
                  firstItem
                    ? buttonVariants({
                        variant: 'skewed',
                        size: 'sm',
                        className: 'rounded-sm!',
                      })
                    : buttonVariants({
                        variant: 'skewed-outline',
                        size: 'sm',
                        className: 'rounded-sm!',
                      }),
                )}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={'flex items-center gap-2'}>
          <ThemeModeToggler />
          <Link
            href={'/login'}
            className={buttonVariants({
              variant: 'skewed-outline',
              size: 'sm',
              className: 'rounded-sm!',
            })}>
            Login
          </Link>
          <Link
            href={'/sign-up'}
            className={buttonVariants({
              variant: 'skewed',
              size: 'sm',
              className: 'rounded-sm!',
            })}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
