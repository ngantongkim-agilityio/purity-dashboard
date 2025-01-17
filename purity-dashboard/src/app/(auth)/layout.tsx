import { ReactNode } from 'react';

// Utils
import { cn } from '@/utils/styles';

const Layout = ({ children }: { children: ReactNode }) => (
  <main>
    <section className={cn('relative')}>{children}</section>
  </main>
);

export default Layout;
