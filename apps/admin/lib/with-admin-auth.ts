'use server';

import { redirect } from 'next/navigation';
import { checkAdminPermissions } from './check-permissions';
import { requireAuth } from './require-auth';

export async function withAdminAuth() {
  const { user } = await requireAuth();
  const permissions = await checkAdminPermissions(user.id);

  if (!permissions.success) {
    redirect('/unauthorized');
  }

  return { user, permissions };
}
