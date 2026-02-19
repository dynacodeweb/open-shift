'use server';

import { auth } from '@workspace/auth/server';
import { cache } from 'react';

export const checkNursePermissions = cache(async (userId: string) => {
  const result = await auth.api.userHasPermission({
    body: {
      userId: userId,
      permissions: {
        jobApply: ['apply', 'withdraw'],
      },
    },
  });
  return result;
});
