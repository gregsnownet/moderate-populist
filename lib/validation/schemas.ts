import { z } from 'zod';

// Registration schema
export const registerSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'Username can only contain letters, numbers, underscores, and hyphens'
    ),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one lowercase letter, one uppercase letter, and one number'
    ),
  country: z
    .string()
    .min(2, 'Please select a country')
    .max(100, 'Country must be less than 100 characters'),
  state: z
    .string()
    .min(2, 'Please enter your state/region')
    .max(100, 'State must be less than 100 characters'),
});

export type RegisterInput = z.infer<typeof registerSchema>;

// Login schema
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginInput = z.infer<typeof loginSchema>;

// Comment creation schema
export const createCommentSchema = z.object({
  issueId: z.string().min(1, 'Issue ID is required'),
  content: z
    .string()
    .min(10, 'Comment must be at least 10 characters')
    .max(2000, 'Comment must be less than 2000 characters')
    .refine(
      (val) => val.trim().length >= 10,
      'Comment must have meaningful content'
    ),
  parentCommentId: z.string().optional(),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;

// Comment moderation schema
export const moderateCommentSchema = z.object({
  action: z.enum(['approve', 'reject']),
});

export type ModerateCommentInput = z.infer<typeof moderateCommentSchema>;

// User update schema (for admin)
export const updateUserSchema = z.object({
  role: z.enum(['user', 'admin']).optional(),
  banned: z.boolean().optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

// Validation helper function
export function validateInput<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: z.ZodError } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return { success: false, errors: result.error };
}

// Format Zod errors for API response
export function formatZodErrors(errors: z.ZodError): Record<string, string> {
  const formatted: Record<string, string> = {};

  for (const error of errors.errors) {
    const path = error.path.join('.');
    if (!formatted[path]) {
      formatted[path] = error.message;
    }
  }

  return formatted;
}
