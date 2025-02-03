import { ReactNode } from 'react';

// Layouts
import { Footer } from '@/layouts';

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div className='flex h-screen flex-col bg-primary-100'>
    <main className='flex h-screen flex-col'>{children}</main>
    <Footer className='xl:w-3/4 2xl:w-1/2 self-center px-10 2xl:px-0 py-10' />
  </div>
);

export default AuthLayout;
