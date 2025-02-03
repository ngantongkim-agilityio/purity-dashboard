export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export const API_ENDPOINT = {
  AUTH: '/auth/local'
};

export const ROUTE_ENDPOINT = {
  AUTH: {
    LOGIN: 'api/auth/login',
    SIGNUP: 'api/auth/signup',
    LOGOUT: 'api/auth/logout'
  },
  PRODUCTS: {
    LATEST_PRODUCTS: 'api/products/latest-products',
    PRODUCTS_PAGES: 'api/products/products-pages'
  },
  REVENUE: 'api/revenue',
  ANALYTICS: 'api/analytics'
};

export const BASE_API = process.env.NEXT_PUBLIC_API_URL;
export const AUTH_SECRET = process.env.AUTH_SECRET;

export const DOMAIN = process.env.SITE_DOMAIN ?? 'http://localhost:3000';
