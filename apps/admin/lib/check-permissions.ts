'use server';

import { auth } from '@workspace/auth/server';
import { cache } from 'react';

export const checkAdminPermissions = cache(async (userId: string) => {
  const result = await auth.api.userHasPermission({
    body: {
      userId: userId,
      permissions: {
        user: [
          'create',
          'list',
          'set-role',
          'ban',
          'impersonate',
          'delete',
          'set-password',
          'get',
          'update',
        ],
      },
    },
  });
  return result;
});
