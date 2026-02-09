import { buttonVariants } from '@workspace/ui/components/button';
import { Separator } from '@workspace/ui/components/separator';
import { cn } from '@workspace/ui/lib/utils';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  usefullLinks: [
    { id: crypto.randomUUID(), label: 'Terms and Conditions', href: '#' },
    { id: crypto.randomUUID(), label: 'Terms and Conditions', href: '#' },
    { id: crypto.randomUUID(), label: 'Privacy policy', href: '#' },
    { id: crypto.randomUUID(), label: 'Updates', href: '#' },
    { id: crypto.randomUUID(), label: 'Help', href: '#' },
  ],
  companyLinks: [
    { id: crypto.randomUUID(), label: 'About', href: '#' },
    { id: crypto.randomUUID(), label: 'Contact us', href: '#' },
    { id: crypto.randomUUID(), label: 'Careers', href: '#' },
    { id: crypto.randomUUID(), label: 'Culture', href: '#' },
    { id: crypto.randomUUID(), label: 'Blog', href: '#' },
  ],
  support: [
    { id: crypto.randomUUID(), label: 'Getting started', href: '#' },
    { id: crypto.randomUUID(), label: 'Help center', href: '#' },
    { id: crypto.randomUUID(), label: 'Server status', href: '#' },
    { id: crypto.randomUUID(), label: 'Report a bug', href: '#' },
    { id: crypto.randomUUID(), label: 'Chat support', href: '#' },
  ],
  contactUs: [
    {
      id: crypto.randomUUID(),
      label: 'info@theopenservices.com',
      href: 'mailto:info@theopenservices.com',
    },
    {
      id: crypto.randomUUID(),
      label: '+ 00000 0000',
      href: 'tel:+ 00000 0000',
    },
    { id: crypto.randomUUID(), label: 'NoWhere', href: '#' },
  ],
};

const footerSocialLinks = [
  {
    id: crypto.randomUUID(),
    label: 'Facebook',
    href: '#',
    icon: FacebookIcon,
  },
  {
    id: crypto.randomUUID(),
    label: 'X',
    href: '#',
    icon: TwitterIcon,
  },
  {
    id: crypto.randomUUID(),
    label: 'Instagram',
    href: '#',
    icon: InstagramIcon,
  },
  {
    id: crypto.randomUUID(),
    label: 'LinkedIn',
    href: '#',
    icon: LinkedinIcon,
  },
  {
    id: crypto.randomUUID(),
    label: 'YouTube',
    href: '#',
    icon: YoutubeIcon,
  },
];

export default function Footer() {
  return (
    <footer
      className={
        'px-4 pt-24 bg-[linear-gradient(280.56deg,_rgba(255,_160,_160,_0.6)_0%,_rgba(255,_225,_225,_0.8)_24.02%,_rgba(215,_244,_232,_0.8)_80%,_#EEFBF6_100%)]'
      }>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div
          className={'grid grid-cols-1 xs-2:grid-cols-2 lg:grid-cols-5 gap-4'}>
          <div className={'col-span-full lg:col-span-1'}>
            <div className={'grid grid-cols-subgrid gap-4'}>
              <Link href={'/'} className={'w-full h-full'}>
                <Image
                  src={'/logo.svg'}
                  alt='logo'
                  width={375}
                  height={40}
                  className={'w-full h-full object-top'}
                  priority={true}
                />
              </Link>
              <p className={'text-sm text-muted-foreground'}>
                We are dedicated to providing exceptional caregiving services
                tailored to your unique needs.
              </p>
              <div className={'flex items-center gap-2'}>
                {footerSocialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.id} href={link.href as Route}>
                      <Icon
                        className={cn(
                          'size-4 md:size-6 stroke-1 stroke-primary hover:stroke-secondary hover:fill-primary transition-all duration-200',
                        )}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map((item, idx) => {
            const lastCol = idx === Object.entries(footerLinks).length - 1;

            const [key, links] = item;

            return (
              <div
                key={key}
                className={cn(
                  'grid grid-cols-subgrid gap-4 px-4',
                  lastCol ? 'content-start' : '',
                )}>
                <h6
                  className={
                    'font-medium capitalize underline underline-offset-2'
                  }>
                  {key.replace(/([A-Z])/g, ' $1')}
                </h6>

                <div className={'grid grid-cols-subgrid gap-2'}>
                  {links.map((link) => {
                    return (
                      <Link
                        key={link.id}
                        href={link.href as Route}
                        className={buttonVariants({
                          variant: 'link',
                          size: 'sm',
                          className:
                            'px-0! rounded-none! text-sm text-muted-foreground! justify-start! hover:text-primary!',
                        })}>
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <Separator className={'my-4 bg-primary'} />
        <div className={'flex flex-wrap items-center justify-between h-20'}>
          <p className={'text-sm text-muted-foreground'}>
            Copyright &copy; {new Date().getFullYear()} The Open Services All
            Rights Reserved
          </p>
          <div className={'flex items-center gap-2 h-6'}>
            <Link
              href='#'
              className={buttonVariants({
                variant: 'link',
                size: 'sm',
                className:
                  'px-0! rounded-none! text-sm text-muted-foreground! justify-start! hover:text-primary!',
              })}>
              Terms and Conditions
            </Link>{' '}
            <Separator orientation='vertical' className={'h-4'} />
            <Link
              href={'#'}
              className={buttonVariants({
                variant: 'link',
                size: 'sm',
                className:
                  'px-0! rounded-none! text-sm text-muted-foreground! justify-start! hover:text-primary!',
              })}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
