import Link from 'next/link';
import { Footer } from '@/layouts';
import { Text } from '@/components';
import LogoIcon from '@/icons/LogoIcon';

const GlobalLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <Link className='flex justify-start space-x-3 px-4 py-2' href='/'>
        <LogoIcon />
        <Text
          variant='h1'
          color='tertiary'
          className='uppercase font-lora font-medium'
        >
          Purity UI Dashboard
        </Text>
      </Link>
      <div className='flex-grow min-h-screen flex flex-col justify-between p-6 md:overflow-y-auto md:px-8'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default GlobalLayout;
