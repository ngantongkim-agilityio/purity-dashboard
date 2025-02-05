// Libs
import type { NextAuthConfig } from 'next-auth';

// Constants
import { ROUTES } from '@/constants';

const maxAge = 24 * 60 * 60;

export const authConfig = {
  pages: {
    signIn: ROUTES.LOGIN
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.sub = user.id;
        token['email'] = user.email;
        token['expires'] = user.expires;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub as string;
        session.user.email = token['email'] as string;
        session.expires = new Date(token['expires']).toISOString() as Date &
          string;

        if (Date.now() < new Date(session?.expires || '').getTime()) {
          return session;
        } else {
          return {
            ...session,
            user: null
          } as any;
        }
      }
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isPrivateRoute = nextUrl.pathname.startsWith(ROUTES.DASHBOARD);

      if (isPrivateRoute || nextUrl.pathname === ROUTES.HOME) {
        if (isLoggedIn) {
          if (nextUrl.pathname === ROUTES.HOME) {
            return Response.redirect(new URL(ROUTES.DASHBOARD, nextUrl));
          }
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        if (
          [ROUTES.LOGIN, ROUTES.SIGNUP, ROUTES.HOME].includes(nextUrl.pathname)
        )
          return Response.redirect(new URL(ROUTES.DASHBOARD, nextUrl));
      }
      return true;
    }
  },
  providers: [],
  session: {
    strategy: 'jwt',
    maxAge
  }
} satisfies NextAuthConfig;
