export const experimental_ppr = true;

// Components
import { Sidebar, Footer } from '@/layouts';

const DashboardLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <Sidebar />
      <div className='flex-grow min-h-screen flex flex-col justify-between p-6 md:overflow-y-auto md:px-8'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
