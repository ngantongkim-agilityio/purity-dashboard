import { Metadata } from 'next';

// Constants
import { AUTH_BACKGROUND } from '@/constants';

// Components
import { Image } from '@/components/common';
import LoginForm from '@/components/LoginForm';

// Utils
import { cn, generateImageToBase64 } from '@/utils';

export const metadata: Metadata = {
  title: 'Login'
};

const LoginPage = () => {
  return (
    <div className='bg-primary-100 fixed left-0 w-full h-full'>
      <div className='container flex'>
        <div className='w-[585px] pt-20 md:pt-[194px]'>
          <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
            <LoginForm />
          </div>
        </div>

        <div
          className={cn(
            'relative 2xl:block overflow-hidden hidden ',
            'min-w-[800px] h-full fixed right-0'
          )}
        >
          <Image
            alt=''
            src={AUTH_BACKGROUND}
            blurDataURL={generateImageToBase64(100, 100)}
            className={cn(
              'hidden 2xl:block',
              'min-w-[800px] h-full fixed right-0'
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
