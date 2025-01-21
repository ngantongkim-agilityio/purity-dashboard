export const experimental_ppr = true;

// Components
import { Sidebar, Footer } from '@/layouts';

const DashboardLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <section className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <Sidebar />
        <section className='flex-grow p-6 md:overflow-y-auto md:p-12'>
          <section className=''>{children}</section>
          <Footer />
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
