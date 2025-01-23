'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { signIn } from '@/configs/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
};

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'User name is required').max(100).trim(),
  email: z.string().email({ message: 'Email is required' }),
  password: z
    .string()
    .min(8)
    .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
      message:
        'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    })
});
const SignupUser = FormSchema.omit({ id: true });

export const signup = async (prevState: State, formData: FormData) => {
  const validatedFields = SignupUser.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields'
    };
  }

  // Prepare data for insertion into the database
  const { name, email, password } = validatedFields.data;

  const newPassword = await bcrypt.hash(password, 10);

  // Insert data into the database
  try {
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${newPassword})
      ON CONFLICT(email) DO NOTHING;
    `;
  } catch (error) {
    return {
      message: 'Existing User'
    };
  }

  // redirect to login.
  redirect('/login');
};
