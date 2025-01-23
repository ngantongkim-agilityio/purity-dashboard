import type { NextAuthConfig } from 'next-auth';
import { ROUTES } from '@/constants';

export const authConfig = {
  pages: {
    signIn: ROUTES.LOGIN
  },
  callbacks: {
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
  providers: []
} satisfies NextAuthConfig;
