import { ReactNode } from 'react';

// Utils
import { cn } from '@/utils/styles';

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <main>
    <section className={cn('relative')}>{children}</section>
  </main>
);

export default AuthLayout;
