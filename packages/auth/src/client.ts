import {
  adminClient,
  inferAdditionalFields,
  lastLoginMethodClient,
} from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import { ac, admin, nurse, owner, user } from './lib/permissions.js';
import type { auth } from './server.js';

export const authClient = createAuthClient({
  // baseURL: 'http://localhost:3000',
  basePath: '/api/auth',
  plugins: [
    adminClient({
      ac,
      roles: { admin, user, owner, nurse },
    }),
    inferAdditionalFields<typeof auth>(),
    lastLoginMethodClient(),
  ],
});

// export type SignIn = ReturnType<(typeof authClient)['signIn']>;

export const { signIn, signUp, useSession, signOut } = authClient;

export type ClientSession = (typeof authClient.$Infer)['Session'];
