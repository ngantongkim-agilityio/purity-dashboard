import { Metadata } from 'next';
import dynamic, { Loader } from 'next/dynamic';

// Constants
import { BACKGROUND } from '@/constants';

// Components
import { Image, Text } from '@/components';

// Utils
import { generateImageToBase64 } from '@/utils';

const SignupForm = dynamic(() =>
  import('@/sections/SignupForm').then((module) => module.SignupForm)
);

export const metadata: Metadata = {
  title: 'Signup'
};

const SignUpPage = () => {
  return (
    <div className='bg-primary-100 relative w-full h-full p-6'>
      <div className='relative w-full h-1/2'>
        <Image
          alt='signup background'
          src={BACKGROUND.signup}
          blurDataURL={generateImageToBase64(100, 100)}
          className='rounded-3xl'
        />
      </div>
      <div className='absolute top-0 left-0 z-20 w-full h-full justify-items-center'>
        <div className='flex h-full items-center justify-center flex-col'>
          <div className='max-w-[330px] text-center mb-14'>
            <Text variant='h1' size='3xl' color='title'>
              Welcome!
            </Text>
            <Text>
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
