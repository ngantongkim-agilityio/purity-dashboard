'use client';

import { memo, useActionState } from 'react';
import Link from 'next/link';
import { Link as NextUILink } from '@heroui/react';

// Components
import { Button, Input } from '@/components';

// Constants
import { ROUTES } from '@/constants';
import { State, signup } from '@/actions/auth';

export const SignupForm = memo(() => {
  const initialState: State = { message: null, errors: {} };
  const [errorMessage, formAction, isPending] = useActionState(
    signup,
    initialState
  );

  return (
    <div className='bg-primary-100 min-w-[440px] p-12 rounded-3xl shadow-2xl'>
      <form className='flex flex-col w-full gap-y-6' action={formAction}>
        <div>
          <Input
            name='name'
            label='Name'
            labelPlacement='outside'
            placeholder='Your full name'
          />
          <Input
            name='email'
            label='Email'
            labelPlacement='outside'
            placeholder='Your email address'
          />
          <Input
            name='password'
            label='Password'
            labelPlacement='outside'
            placeholder='Your email address'
          />
        </div>
        <div className='flex flex-col gap-y-5'>
          <Button
            type='submit'
            size='lg'
            isDisabled={isPending}
            isLoading={isPending}
          >
            Sign up
          </Button>
          <div className='flex justify-center w-full gap-1'>
            <p className='text-secondary-200 text-sm'>
              Already have an account?
            </p>
            <NextUILink
              as={Link}
              className='font-semibold text-primary text-sm'
              href={ROUTES.LOGIN}
            >
              Sign in
            </NextUILink>
          </div>
        </div>
      </form>
    </div>
  );
});

SignupForm.displayName = 'SignupForm';
