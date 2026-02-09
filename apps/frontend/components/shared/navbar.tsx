'use client';

import { navlinks } from '@/constants';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NavigationSheet from './navigation-sheet';
import { ThemeModeToggler } from './theme-toggler';

const isDev = process.env.NODE_ENV === 'development';

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

        <nav className={'hidden lg:flex items-center gap-2'}>
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

        <div className={'hidden lg:flex items-center gap-2'}>
          {isDev && <ThemeModeToggler />}
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

        {/* Mobile menu */}
        <div className={'block lg:hidden'}>
          <NavigationSheet />
        </div>
      </div>
    </header>
  );
}
