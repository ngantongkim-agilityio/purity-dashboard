import { Metadata } from 'next';

// Constants
import { AUTH_BACKGROUND } from '@/constants';

// Components
import { Image, Text } from '@/components/common';
import SignupForm from '@/components/SignupForm';

// Utils
import { generateImageToBase64 } from '@/utils';

export const metadata: Metadata = {
  title: 'Signup'
};

const SignUpPage = () => {
  return (
    <div className='bg-primary-100 fixed w-full h-full p-6'>
      <div className='relative w-full h-1/2'>
        <Image
          alt='signup background'
          src={AUTH_BACKGROUND.signup}
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
