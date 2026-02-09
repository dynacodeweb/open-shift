'use client';

import { navlinks } from '@/constants';
import { Button, buttonVariants } from '@workspace/ui/components/button';
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

export default function NavigationSheet() {
  return (
    <Sheet>
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
                          variant: 'skewed',
                          size: 'sm',
                          className: 'rounded-sm! w-full',
                        })
                      : buttonVariants({
                          variant: 'skewed-outline',
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
          <SheetClose asChild>
            <Link
              href={'/login'}
              className={buttonVariants({
                variant: 'skewed-outline',
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
                variant: 'skewed',
                size: 'sm',
                className: 'rounded-sm!',
              })}>
              Get Started
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
