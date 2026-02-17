'use client';

import { navlinks } from '@/constants';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';
import { Separator } from '@workspace/ui/components/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@workspace/ui/components/sheet';
import { cn } from '@workspace/ui/lib/utils';
import { MenuIcon } from 'lucide-react';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavigationSheet() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
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
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' size={'icon-sm'}>
          <MenuIcon className={'size-4'} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className={'mt-4'}>
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
          </SheetTitle>
        </SheetHeader>
        <Separator />

        <nav className={'flex flex-col h-full items-start gap-2 px-4'}>
          {navlinks.map((link, idx) => {
            const firstItem = idx === 0;
            return (
              <SheetClose asChild key={link.id}>
                <Link
                  href={link.href as Route}
                  className={cn(
                    firstItem
                      ? buttonVariants({
                          // variant: 'skewed',
                          size: 'sm',
                          className: 'rounded-sm! w-full',
                        })
                      : buttonVariants({
                          variant: 'outline',
                          size: 'sm',
                          className: 'rounded-sm! w-full',
                        }),
                  )}>
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <Separator />
        <SheetFooter>
          <Popover open={isLoginPopoverOpen} onOpenChange={toggleLoginPopover}>
            <PopoverTrigger asChild>
              <Button variant='outline'>Login</Button>
            </PopoverTrigger>

            <PopoverContent className={'space-y-2 p-1'}>
              <div>
                <Link
                  href={'/login'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  onClick={() => {
                    toggleLoginPopover();
                    setIsSheetOpen(false);
                  }}>
                  <p className={'text-sm'}>Login as Owner</p>
                  <span className={'text-xs text-balance'}>
                    I own a clinic and want to manage my appointments, staff,
                    and more.
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href={'/login'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  onClick={() => {
                    toggleLoginPopover();
                    setIsSheetOpen(false);
                  }}>
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
                  href={'/sign-up'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  onClick={() => {
                    toggleSignUpPopover();
                    setIsSheetOpen(false);
                  }}>
                  <p className={'text-sm'}>Register as Owner</p>
                  <span className={'text-xs text-balance'}>
                    I own a clinic and want to manage my appointments, staff,
                    and more.
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href={'/sign-up'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className:
                      'rounded-sm! flex-col items-start h-fit! gap-1! py-1',
                  })}
                  onClick={() => {
                    toggleSignUpPopover();
                    setIsSheetOpen(false);
                  }}>
                  <p className={'text-sm'}>Register as Provider</p>
                  <span className={'text-xs text-balance'}>
                    I am a nurse and want to view my schedule, manage my
                    appointments, and communicate with patients.
                  </span>
                </Link>
              </div>
            </PopoverContent>
          </Popover>
          {/* <SheetClose asChild>
            <Link
              href={'/login'}
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
                className: 'rounded-sm!',
              })}>
              Login
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={'/sign-up'}
              className={buttonVariants({
                // variant: 'skewed',
                size: 'sm',
                className: 'rounded-sm!',
              })}>
              Get Started
            </Link>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
