import { ThemeModeToggler } from '@/components/shared/theme-toggler';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';

export default function Page() {
  return (
    <div className={'h-dvh flex flex-col gap-8 items-center justify-center'}>
      <h1 className={'text-4xl font-bold'}>Admin Page</h1>
      <Link
        href='/dashboard'
        className={cn(
          buttonVariants({
            className: 'rounded-full',
            size: 'lg',
          })
        )}>
        Go to Dashboard
      </Link>
      <ThemeModeToggler />
    </div>
  );
}
