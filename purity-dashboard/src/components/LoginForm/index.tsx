'use client';

import { memo, useActionState } from 'react';
import Link from 'next/link';
import { Link as NextUILink, Switch } from '@nextui-org/react';

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
        <h1 className='text-primary font-bold text-3xl'>Welcome Back</h1>
        <p className='text-secondary-200 font-bold text-sm mt-2'>
          Enter your email and password to sign in
        </p>
      </div>
      <form className='flex flex-col w-full mt-9 gap-y-9' onSubmit={formAction}>
        <div>
          <Input
            name='email'
            label='Email'
            labelPlacement='outside'
            placeholder='Your email address'
            isInvalid={false}
          />
          <Input
            name='password'
            label='Password'
            labelPlacement='outside'
            placeholder='Your email address'
            isInvalid={false}
          />
          <Switch>Remember me</Switch>
        </div>
        <div className='flex flex-col gap-y-5'>
          <Button
            type='submit'
            size='lg'
            isDisabled={isPending}
            isLoading={isPending}
          >
            Sign in
          </Button>
          <div className='flex justify-center w-full gap-1'>
            <p className='text-secondary-200 text-sm'>
              Don&rsquo;t have an account?
            </p>
            <NextUILink
              as={Link}
              className='font-semibold text-primary text-sm'
              href={'#'}
            >
              Sign up
            </NextUILink>
          </div>
        </div>
      </form>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
