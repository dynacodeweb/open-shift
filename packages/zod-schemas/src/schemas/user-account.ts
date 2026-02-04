import { z } from 'zod/v4';

const commonSchema = z.object({
  // TODO: missing format checking
  referenceNumber: z
    .string()
    .trim()
    .min(1, 'Reference number is required')
    .optional(),
  dateOfExpiry: z.date().optional(),
});

export const npcSchema = commonSchema.extend({
  providerName: z
    .string()
    .trim()
    .min(1, 'Provider name is required')
    .optional(),
  dateOfIssue: z.date().optional(),
});

export const vevoSchema = commonSchema.extend({});

export const ahpraSchema = commonSchema.extend({});

export const cprSchema = commonSchema.extend({});

export type NPCValues = z.infer<typeof npcSchema>;
export type VEVOValues = z.infer<typeof vevoSchema>;
export type AHPRAValues = z.infer<typeof ahpraSchema>;
export type CPRValues = z.infer<typeof cprSchema>;
