'use server';

// Libs
import { AuthError } from 'next-auth';

// Configs
import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut
} from '@/configs/auth';

// Services
import { signup as signupService } from '@/services';

// Schemas
import { LoginFormSchema } from '@/schemas';

// Constants
import { ROUTES } from '@/constants';

// Types
import { AuthState, User } from '@/types';

export const authenticate = async (
  remember: boolean,
  prevState: AuthState | undefined,
  formData: FormData
): Promise<AuthState | undefined> => {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  });
  const data = Object.fromEntries(formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      data: data as User,
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const options = {
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    remember,
    redirectTo: ROUTES.DASHBOARD
  };

  try {
    await nextAuthSignIn('credentials', { ...options });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { message: 'Invalid credentials.' };
        default:
          return { message: 'Something went wrong.' };
      }
    }
    throw error;
  }
};

export const signup = async (
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> => {
  const data = await signupService(prevState, formData);
  return data;
};

export const signOut = async () => {
  await nextAuthSignOut();
};
