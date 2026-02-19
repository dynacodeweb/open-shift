import { account, session, user, verification } from './schema.js';

// Infer Insert and Select types
export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
export type InsertSession = typeof session.$inferInsert;
export type SelectSession = typeof session.$inferSelect;
export type InsertAccount = typeof account.$inferInsert;
export type SelectAccount = typeof account.$inferSelect;
export type InsertVerification = typeof verification.$inferInsert;
export type SelectVerification = typeof verification.$inferSelect;
