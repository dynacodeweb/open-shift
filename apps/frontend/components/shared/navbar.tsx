'use client';

import { navlinks } from '@/constants';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';
import { cn } from '@workspace/ui/lib/utils';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavigationSheet from './navigation-sheet';
import { ThemeModeToggler } from './theme-toggler';

const isDev = process.env.NODE_ENV === 'development';

const OWNER_BASE_URL = process.env.NEXT_PUBLIC_OWNER_BASE_URL;
const NURSE_BASE_URL = process.env.NEXT_PUBLIC_NURSE_BASE_URL;

export default function Navbar() {
  const [isLoginPopoverOpen, setIsLoginPopoverOpen] = useState(false);
  const [isSignUpPopoverOpen, setIsSignUpPopoverOpen] = useState(false);

  function toggleLoginPopover() {
    setIsLoginPopoverOpen((prev) => !prev);
    if (isSignUpPopoverOpen) {
      setIsSignUpPopoverOpen(false);
    }
  }

  function toggleSignUpPopover() {
    setIsSignUpPopoverOpen((prev) => !prev);
    if (isLoginPopoverOpen) {
      setIsLoginPopoverOpen(false);
    }
  }

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
                        // variant: 'skewed',
                        size: 'sm',
                        className: 'rounded-sm!',
                      })
                    : buttonVariants({
                        variant: 'outline',
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
          <Popover open={isLoginPopoverOpen} onOpenChange={toggleLoginPopover}>
            <PopoverTrigger asChild>
              <Button variant='outline'>Login</Button>
            </PopoverTrigger>

            <PopoverContent className={'space-y-2 p-1'}>
              <div>
                <Link
                  prefetch={true}
                  href={`${OWNER_BASE_URL}/login` as Route}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  target='_blank'
                  onClick={toggleLoginPopover}>
                  <p className={'text-sm'}>Login as Owner</p>
                  <span className={'text-xs text-balance'}>
                    I own a clinic and want to manage my appointments, staff,
                    and more.
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  prefetch={true}
                  href={`${NURSE_BASE_URL}/login` as Route}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  target='_blank'
                  onClick={toggleLoginPopover}>
                  <p className={'text-sm'}>Login as Nurse</p>
                  <span className={'text-xs text-balance'}>
                    I am a nurse and want to view my schedule, manage my
                    appointments, and communicate with patients.
                  </span>
                </Link>
              </div>
            </PopoverContent>
          </Popover>

          <Popover
            open={isSignUpPopoverOpen}
            onOpenChange={toggleSignUpPopover}>
            <PopoverTrigger asChild>
              <Button>Get Started</Button>
            </PopoverTrigger>

            <PopoverContent className={'space-y-2 p-1'}>
              <div>
                <Link
                  prefetch={true}
                  href={`${OWNER_BASE_URL}/sign-up` as Route}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  target='_blank'
                  onClick={toggleSignUpPopover}>
                  <p className={'text-sm'}>Register as Owner</p>
                  <span className={'text-xs text-balance'}>
                    I own a clinic and want to manage my appointments, staff,
                    and more.
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  prefetch={true}
                  href={`${NURSE_BASE_URL}/sign-up` as Route}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  target='_blank'
                  onClick={toggleSignUpPopover}>
                  <p className={'text-sm'}>Register as Provider</p>
                  <span className={'text-xs text-balance'}>
                    I am a nurse and want to view my schedule, manage my
                    appointments, and communicate with patients.
                  </span>
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Mobile menu */}
        <div className={'block lg:hidden'}>
          <NavigationSheet />
        </div>
      </div>
    </header>
  );
}
