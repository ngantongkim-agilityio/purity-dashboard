import { UserSession } from './user';

export type AuthResponse = {
  jwt: string;
  user: UserSession | null;
  error: string | null;
};

export interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

export type AuthState = {
  data?: {
    name?: string;
    email?: string;
    password?: string;
  };
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};
