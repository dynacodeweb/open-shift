import { authDB } from '@workspace/db/auth-db';
import * as schema from '@workspace/db/schema';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import {
  admin as adminPlugin,
  lastLoginMethod,
  openAPI,
} from 'better-auth/plugins';
import { config } from 'dotenv';
import { ac, admin, nurse, owner, user } from './utils/permissions.js';

config({ path: '.env.local' });

const isDev = process.env.NODE_ENV === 'development';

export const auth = betterAuth({
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      // domain: 'https://open-shift-backend.vercel.app',
    },
    database: {
      generateId: 'uuid',
    },
    useSecureCookies: true,
  },
  baseURL: process.env.BETTER_AUTH_URL,
  basePath: '/api/auth', // ADD THIS LINE
  database: drizzleAdapter(authDB, {
    provider: 'pg', // or "mysql", "sqlite"
    schema,
    transaction: true,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false, //defaults to true
  },
  experimental: {
    joins: true,
  },
  secret: process.env.BETTER_AUTH_SECRET,
  // socialProviders: {
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID as string,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  //   },
  // },
  trustedOrigins: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
    'https://open-shift-service.vercel.app',
    'https://open-shift-admin.vercel.app',
    'https://open-shift-nurse.vercel.app',
    'https://open-shift-owner.vercel.app',
    'https://open-shift-backend.vercel.app',
  ],
  plugins: [
    adminPlugin({
      ac,
      roles: { admin, user, owner, nurse },
    }),
    lastLoginMethod({
      storeInDatabase: true,
      cookieName: 'lastLoginMethod',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    }),
    openAPI({}),
    nextCookies(),
  ],

  session: {
    storeSessionInDatabase: true,
    preserveSessionInDatabase: true,
    cookieCache: {
      maxAge: 60 * 60 * 24, // 1 day
      enabled: true,
      // refreshCache: true,
    },
  },

  user: {
    additionalFields: {
      provideService: {
        fieldName: 'provideService',
        type: 'string',
        required: true,
      },
      weeklyWorkingHours: {
        fieldName: 'weeklyWorkingHours',
        type: 'string',
        required: true,
      },
      willingToStartWorking: {
        fieldName: 'willingToStartWorking',
        type: 'string',
        required: true,
      },
      isTermsAndConditionAccepted: {
        fieldName: 'isTermsAndConditionAccepted',
        type: 'boolean',
        required: true,
      },
      firstName: {
        fieldName: 'firstName',
        type: 'string',
        required: true,
      },
      lastName: {
        fieldName: 'lastName',
        type: 'string',
        required: true,
      },
      address: {
        fieldName: 'address',
        type: 'json',
        required: true,
      },
      mobileNumber: {
        fieldName: 'mobileNumber',
        type: 'string',
        required: true,
      },
      role: {
        fieldName: 'role',
        type: 'string',
        defaultValue: 'guest',
        input: false,
      },

      // Optional fields for onboarding survey
      reasonsForSupportWork: {
        fieldName: 'reasonsForSupportWork',
        type: 'string',
        required: false,
      },
      mostImportantReason: {
        fieldName: 'mostImportantReason',
        type: 'string',
        required: false,
      },
      isOnboardingCompleted: {
        fieldName: 'isOnboardingCompleted',
        type: 'boolean',
        defaultValue: false,
      },
      chatToken: {
        fieldName: 'chatToken',
        type: 'string',
        required: false,
      },
      chatTokenIssuedAt: {
        fieldName: 'chatTokenIssuedAt',
        type: 'date',
        required: false,
      },
      chatTokenExpiredAt: {
        fieldName: 'chatTokenExpiredAt',
        type: 'date',
        required: false,
      },
    },
  },
});

export type Auth = ReturnType<typeof betterAuth>;
// export const Session = Auth['$Infer']['Session'];
export type ServerSession = (typeof auth.$Infer)['Session'];
