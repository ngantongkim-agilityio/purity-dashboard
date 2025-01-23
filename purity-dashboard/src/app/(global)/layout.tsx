import Link from 'next/link';
import { Footer } from '@/layouts';
import { Text } from '@/components';
import LogoIcon from '@/icons/LogoIcon';
import { ROUTES } from '@/constants';

const GlobalLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex flex-col justify-between items-center h-screen px-8'>
      <Link className='flex space-x-3 px-4 py-8' href={ROUTES.HOME}>
        <LogoIcon />
        <Text
          variant='h1'
          color='tertiary'
          className='uppercase font-lora font-medium'
        >
          Purity UI Dashboard
        </Text>
      </Link>
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
