'use client';

import { signOut } from '@workspace/auth/client';
import { Spinner } from '@workspace/ui/components/spinner';
import { LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import ResponsiveButton from './responsive-button';

export default function Logout() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleLogout() {
    startTransition(async () => {
      await signOut();
      router.push('/login');
    });
  }

  return (
    <ResponsiveButton onClick={handleLogout} disabled={isPending}>
      {isPending ? (
        <span className={'inline-flex items-center gap-2'}>
          Logging out... <Spinner className={'size-4'} />
        </span>
      ) : (
        <span className={'inline-flex items-center gap-2'}>
          Logout <LogOutIcon className={'size-4'} />
        </span>
      )}
    </ResponsiveButton>
  );
}
