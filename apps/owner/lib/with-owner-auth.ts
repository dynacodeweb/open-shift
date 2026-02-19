'use server';

import { auth } from '@workspace/auth/server';
import { cache } from 'react';

export const checkOwnerPermissions = cache(async (userId: string) => {
  const result = await auth.api.userHasPermission({
    body: {
      userId: userId,
      permissions: {
        jobCreate: ['create', 'share', 'update', 'publish'],
      },
    },
  });
  return result;
});
