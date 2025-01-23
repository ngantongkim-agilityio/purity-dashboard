import type { NextAuthConfig } from 'next-auth';
import { ROUTES } from '@/constants';

export const authConfig = {
  pages: {
    signIn: ROUTES.LOGIN
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith(ROUTES.DASHBOARD);

      if (isOnDashboard && !isLoggedIn) {
        return false;
      }

      if (nextUrl.pathname === ROUTES.HOME) {
        if (isLoggedIn) {
          return Response.redirect(new URL(ROUTES.DASHBOARD, nextUrl));
        }
        return false;
      }

      return true;
    }
  },
  providers: []
} satisfies NextAuthConfig;
