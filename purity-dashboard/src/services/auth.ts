'use server';

// libs
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

// schemas
import { SignupFormSchema } from '@/schemas';

// constants
import { ROUTES } from '@/constants';

// types
import { AuthState, User } from '@/types';

export const getUser = async (email: string): Promise<User | null> => {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
};

const SignupUser = SignupFormSchema.omit({ id: true });

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
  const validatedFields = SignupUser.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  });
  const data = Object.fromEntries(formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      data: data as User,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields'
    };
  }

  // Prepare data for insertion into the database
  const { name, email, password } = validatedFields.data;

  const userExistingByEmail =
    await sql`SELECT * FROM users WHERE email=${email}`;

  if (!!userExistingByEmail.rows[0]) {
    return {
      message: 'User with this email already exists'
    };
  }

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
      message: 'Failed to create account'
    };
  }

  // redirect to login.
  redirect(ROUTES.LOGIN);
};
