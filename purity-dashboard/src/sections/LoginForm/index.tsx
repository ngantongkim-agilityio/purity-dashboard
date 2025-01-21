'use client';

import { memo, useActionState } from 'react';
import Link from 'next/link';
import { Link as NextUILink, Switch } from '@nextui-org/react';

// Components
import { Button, Input } from '@/components';

// Actions
import { authenticate } from '@/actions/auth';

// Constants
import { ROUTES } from '@/constants';

export const LoginForm = memo(() => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form className='flex flex-col w-full mt-9 gap-y-9' action={formAction}>
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
            href={ROUTES.SIGNUP}
          >
            Sign up
          </NextUILink>
        </div>
      </div>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';
