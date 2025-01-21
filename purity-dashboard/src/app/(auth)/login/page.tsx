import { Metadata } from 'next';

// Constants
import { BACKGROUND } from '@/constants';

// Components
import { Image } from '@/components';
import { LoginForm } from '@/sections';

// Utils
import { cn, generateImageToBase64 } from '@/utils';

export const metadata: Metadata = {
  title: 'Login'
};

const LoginPage = () => {
  return (
    <div className='bg-primary-100 fixed left-0 w-full h-full'>
      <div className='w-full flex justify-between h-full'>
        <div className='w-1/2 h-full justify-items-end pr-44'>
          <div className='flex min-w-[353px] h-full justify-center flex-col'>
            <h1 className='text-primary font-bold text-3xl'>Welcome Back</h1>
            <p className='text-secondary-200 font-bold text-sm mt-2'>
              Enter your email and password to sign in
            </p>
            <LoginForm />
          </div>
        </div>
        <div className='w-1/2 pl-16 pb-28'>
          <div className='relative h-full'>
            <Image
              alt='login background'
              src={BACKGROUND.login}
              blurDataURL={generateImageToBase64(100, 100)}
              className={cn(
                'hidden 2xl:block object-cover rounded-bl-3xl',
                'h-full fixed right-0'
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
