import { AddressValues } from '@workspace/zod-schemas/auth';
import {
  mostImportantReason,
  provideServices,
  reasonsForSupportWork,
  role,
  startWorkingOptions,
  weeklyWorkingHours,
} from '@workspace/zod-schemas/constants';
import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  index,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const provideServicesEnum = pgEnum('provide_services', provideServices);
export const willingToStartWorkingEnum = pgEnum(
  'willing_to_start_working',
  startWorkingOptions,
);
export const weeklyWorkingHoursEnum = pgEnum(
  'weekly_working_hours',
  weeklyWorkingHours,
);
export const reasonsForSupportWorkEnum = pgEnum(
  'reasons_for_support_work',
  reasonsForSupportWork,
);
export const mostImportantReasonEnum = pgEnum(
  'most_important_reason',
  mostImportantReason,
);
export const rolesEnum = pgEnum('role', role);

export const user = pgTable('user', {
  id: uuid('id')
    .default(sql`pg_catalog.gen_random_uuid()`)
    .primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  role: rolesEnum('role'),
  banned: boolean('banned').default(false),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires'),
  lastLoginMethod: text('last_login_method'),

  // additional fields
  provideService: provideServicesEnum('provide_service').notNull(),
  weeklyWorkingHours: weeklyWorkingHoursEnum('weekly_working_hours').notNull(),
  willingToStartWorking: willingToStartWorkingEnum(
    'willing_to_start_working',
  ).notNull(),
  isTermsAndConditionAccepted: boolean(
    'is_terms_and_condition_accepted',
  ).notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  address: jsonb('address').$type<AddressValues>().notNull(),
  mobileNumber: varchar('mobile_number', { length: 15 }).notNull(),
  reasonsForSupportWork: reasonsForSupportWorkEnum('reasons_for_support_work'),
  mostImportantReason: mostImportantReasonEnum('most_important_reason'),
  isOnboardingCompleted: boolean('is_onboarding_completed').default(false),
  chatToken: text('chat_token'),
  chatTokenIssuedAt: timestamp('chat_token_issued_at'),
  chatTokenExpiredAt: timestamp('chat_token_expired_at'),
});

export const session = pgTable(
  'session',
  {
    id: uuid('id')
      .default(sql`pg_catalog.gen_random_uuid()`)
      .primaryKey(),
    expiresAt: timestamp('expires_at').notNull(),
    token: text('token').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    userId: uuid('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    impersonatedBy: text('impersonated_by'),
  },
  (table) => [index('session_userId_idx').on(table.userId)],
);

export const account = pgTable(
  'account',
  {
    id: uuid('id')
      .default(sql`pg_catalog.gen_random_uuid()`)
      .primaryKey(),
    accountId: text('account_id').notNull(),
    providerId: text('provider_id').notNull(),
    userId: uuid('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    idToken: text('id_token'),
    accessTokenExpiresAt: timestamp('access_token_expires_at'),
    refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
    scope: text('scope'),
    password: text('password'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index('account_userId_idx').on(table.userId)],
);

export const verification = pgTable(
  'verification',
  {
    id: uuid('id')
      .default(sql`pg_catalog.gen_random_uuid()`)
      .primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index('verification_identifier_idx').on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

// Infer types for insert and select operations
export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
export type InsertSession = typeof session.$inferInsert;
export type SelectSession = typeof session.$inferSelect;
export type InsertAccount = typeof account.$inferInsert;
export type SelectAccount = typeof account.$inferSelect;
export type InsertVerification = typeof verification.$inferInsert;
export type SelectVerification = typeof verification.$inferSelect;
