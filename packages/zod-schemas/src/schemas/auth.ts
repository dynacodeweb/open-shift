import { z } from 'zod';

export const provideServices = ['nursing', 'personal_care'] as const;
export const weeklyWorkingHours = ['1-10', '11-25', '26-35', '36+'] as const;
export const startWorkingOptions = [
  'immediately',
  'within_the_next_2_weeks',
  'in_2_4_weeks',
  'later_than_4_weeks',
  'i_am_not_sure',
] as const;
export const reasonsForSupportWork = [
  'maximize_earnings',
  'be_my_own_boss',
  'to_do_meaningful_work_helping_others',
  'be_part_of_the_worker_community',
  'to_have_more_flexibility_in_my_work_life',
] as const;
export const mostImportantReason = [
  'be_my_own_boss',
  'to_do_meaningful_work_helping_others',
  'be_part_of_the_worker_community',
  'to_have_more_flexibility_in_my_work_life',
] as const;

export const passwordRequirements = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
  { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  { regex: /[0-9]/, text: 'At least 1 number' },
  {
    regex: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
    text: 'At least 1 special character',
  },
];

export const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters'),
  rememberMe: z.boolean().refine((val) => {
    return val === true || val === false;
  }),
});

export const registerSchema = z.object({
  provideService: z.enum(provideServices, {
    error: 'Select a valid service option',
  }),
  'address-line1': z.string().trim().min(1, 'Street address is required'),
  'address-line2': z.string().trim().optional(),
  city: z.string().trim().min(1, 'City is required'),
  state: z.string().trim().min(1, 'State/Region is required'),
  'postal-code': z.string().trim().optional(),
  weeklyWorkingHours: z.enum(weeklyWorkingHours, {
    error: 'Select a valid working hours option',
  }),
  willingToStartWorking: z.enum(startWorkingOptions, {
    error: 'Select a valid start working option',
  }),
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be at most 50 characters'),
  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be at most 50 characters'),
  mobileNumber: z
    .string()
    .trim()
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number must be at most 15 digits'),
  // TODO: Add regex validation for email to ensure it follows a standard email domain format (e.g. example.com, domain.co.uk).
  email: z.email('Invalid email address'),
  // Create a strong password that is 8+ characters long and includes uppercase and lowercase letters, numbers and special characters (e.g. @, !, #, %).
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character (@, $, !, %, *, ?, &)',
    )
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters'),
  isTermsAndConditionAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export const onboardingSchema = z.object({
  reasonForSupportWork: z.enum(reasonsForSupportWork).optional(),
  mostImportantReason: z.enum(mostImportantReason).optional(),
  isOnboardingCompleted: z.boolean().refine((val) => val === true, {
    error: 'You must complete the onboarding process',
  }),
});

// export const mergedSteps = z.intersection(
//   z.intersection(
//     z.intersection(
//       z.intersection(z.intersection(Step1Schema, Step2Schema), Step3Schema),
//       Step4Schema,
//     ),
//     Step5Schema,
//   ),
//   Step6Schema,
// );

export const addressSchema = z.object({
  'address-line1': z.string().trim().min(1, 'Street address is required'),
  'address-line2': z.string().trim().optional(),
  city: z.string().trim().min(1, 'City is required'),
  state: z.string().trim().min(1, 'State/Region is required'),
  'postal-code': z.string().trim().optional(),
});
export type AddressValues = z.infer<typeof addressSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
export type OnboardingValues = z.infer<typeof onboardingSchema>;
