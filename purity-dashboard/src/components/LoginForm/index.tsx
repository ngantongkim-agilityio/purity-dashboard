'use client';

import { memo, useActionState } from 'react';
import Link from 'next/link';
import { Link as NextUILink } from '@nextui-org/react';

// Components
import { Button, Input } from '@/components/common';

const LoginForm = memo(() => {
  const [errorMessage, formAction, isPending] = useActionState(
    () => {},
    undefined
  );

  return (
    <div>
      <div>
        <h1 className='text-primary'>Welcome Back</h1>
        <p className='text-secondary-200'>
          Enter your email and password to sign in
        </p>
      </div>
      <form
        className='flex flex-col md:px-10 px-4 pt-4 w-full'
        onSubmit={formAction}
      >
        <Input
          name='email'
          placeholder='Your email address'
          isInvalid={false}
        />
        <Input
          name='password'
          placeholder='Your email address'
          isInvalid={false}
        />
        <div className='h-[78px] flex flex-col justify-end'>
          <Button
            type='submit'
            size='lg'
            isDisabled={isPending}
            isLoading={isPending}
          >
            Sign in
          </Button>
        </div>
        <div className='flex justify-center w-full gap-6 pt-10 pb-3'>
          <p className='text-secondary-200'>Don&rsquo;t have an account?</p>
          <NextUILink
            as={Link}
            className='font-semibold text-primary'
            href={'#'}
          >
            Sign up
          </NextUILink>
        </div>
      </form>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
