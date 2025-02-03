'use server';

import { signIn } from '@/configs/auth';
import { AuthError } from 'next-auth';
import { signup as signupService } from '@/services';
import { AuthState, User } from '@/types';

// const LoginFormSchema = z.object({
//   email: z.string().min(1, {message: 'Email is required'}).email({ message: 'Email is invalid' }),
//   password: z
//     .string()
//     .min(1, { message: 'Password is required' })
// });

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  // const validatedFields = LoginFormSchema.safeParse({
  //   email: formData.get('email'),
  //   password: formData.get('password')
  // });

  // // If form validation fails, return errors early. Otherwise, continue.
  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: 'Missing Fields'
  //   };
  // }

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

export const signup = async (
  prevState: AuthState,
  formData: FormData
): Promise<{
  data?: User;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}> => {
  const data = await signupService(prevState, formData);
  return data;
};
