import { SessionProvider } from 'next-auth/react';

// Config
import { auth } from '@/configs/auth';

// layouts
import { Sidebar, Footer } from '@/layouts';

const DashboardLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  console.log('session ===>', session);

  return (
    <SessionProvider session={session}>
      <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <Sidebar />
        <div className='flex-grow min-h-screen flex flex-col justify-between p-6 md:overflow-y-auto md:px-8'>
          {children}
          <Footer
            className='w-full grid grid-cols-1 gap-6 lg:grid-cols-2'
            subClassName='self-start justify-start lg:w-full'
          />
        </div>
      </div>
    </SessionProvider>
  );
};

export default DashboardLayout;
