import { z } from 'zod';

export const idSchema = z.string().trim().uuid('Id must be a valid UUID');

export const paginationSchema = z
  .object({
    page: z.number().int().positive().default(1),
    pageSize: z.number().int().positive().max(100).default(20),
    search: z.string().trim().optional(),
  })
  .strict();

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Allowed 100 characters'),
  email: z.email('Invalid email address'),
  phone: z
    .string()
    .trim()
    .regex(
      /^\+?\d{10,15}$/,
      'Mobile number must be 10-15 digits, optionally prefixed with +',
    )
    .min(10, 'Mobile number must be at least 10 digits')
    .max(16, 'Mobile number must be at most 15 digits with optional + prefix'),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(1000, 'Message must be at most 1000 characters'),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    error: 'You must agree to the privacy policy',
  }),
});

export type IdInput = z.infer<typeof idSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
export type ContactValues = z.infer<typeof contactSchema>;
