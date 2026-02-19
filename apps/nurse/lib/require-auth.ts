'use server';

import { auth } from '@workspace/auth/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export const requireAuth = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  if (session.user.role !== 'nurse') {
    redirect('/login');
  }

  return session;
});
