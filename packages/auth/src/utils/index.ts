// all better auth helper functions can be exported from this file for easier imports in other parts of the app

export { getCookieCache, getSessionCookie } from 'better-auth/cookies';
export type {
  GoogleOptions,
  GoogleProfile,
  Session,
  socialProviderList,
  SocialProviderListEnum,
  socialProviders,
  User,
} from 'better-auth/types';
