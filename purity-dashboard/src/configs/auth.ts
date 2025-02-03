import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { getUser } from '@/services';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
            remember: z.string().optional()
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password, remember = '' } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          (await cookies()).set('remember', remember);

          if (passwordsMatch) {
            const maxAge = remember === 'on' ? 7 * 24 * 60 * 60 : 24 * 60 * 60;
            const expires = Date.now() + maxAge * 1000;
            const { password, ...userWithoutPassword } = user;
            return { ...userWithoutPassword, remember, expires };
          }
        }

        return null;
      }
    })
  ]
});
