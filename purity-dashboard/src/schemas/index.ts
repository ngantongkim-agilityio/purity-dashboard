import { z } from 'zod';

export const SignupFormSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'User name is required').max(100).trim(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z
    .string()
    .min(8)
    .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
      message:
        'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    })
});

export const ProductFormSchema = z.object({
  id: z.string(),
  authorId: z.string({
    invalid_type_error: 'Please select a author.'
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an product status.'
  }),
  date: z.string()
});
