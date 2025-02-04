import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import bcrypt from 'bcrypt';
import { getUser } from '@/services';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        remember: { label: 'Remember me', type: 'checkbox' }
      },
      async authorize(credentials) {
        const { email, password, remember } = credentials || {};

        if (!!email && !!password) {
          const user = await getUser(email as string);

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(
            password as string,
            user.password
          );

          if (passwordsMatch) {
            const maxAge =
              remember === 'true' ? 7 * 24 * 60 * 60 : 24 * 60 * 60;
            const expires = Date.now() + maxAge * 1000;
            const { password, ...userWithoutPassword } = user;
            return { ...userWithoutPassword, expires };
          }
        }

        return null;
      }
    })
  ]
});
