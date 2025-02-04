'use client';

import { memo, useActionState, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

// Components
import { Button, Input, Text } from '@/components';

// Constants
import { ROUTES } from '@/constants';

// Actions
import { signup } from '@/actions';

// Types
import { AuthState } from '@/types';

export const SignupForm = memo(() => {
  const initialState: AuthState = {
    data: undefined,
    message: null,
    errors: undefined
  };
  const [state, formAction, isPending] = useActionState(signup, initialState);
  const [errors, setResetErrors] = useState(state.errors);
  const [data, setData] = useState(state.data);

  useEffect(() => {
    if (state.errors) {
      setResetErrors(state.errors);
    }
  }, [state]);

  const handleChangeInput = useCallback(
    (field: string, value: string) => {
      setData({
        ...data,
        [field]: value
      });
      setResetErrors({
        ...(errors || {}),
        [field]: []
      });
    },
    [data, errors]
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
            value={data?.name}
            errorMessage={errors?.name?.[0]}
            isInvalid={!!errors?.name?.[0]}
            onChange={(e) => handleChangeInput('name', e.target.value)}
          />
          <Input
            name='email'
            label='Email'
            labelPlacement='outside'
            placeholder='Your email address'
            value={data?.email}
            errorMessage={errors?.email?.[0]}
            isInvalid={!!errors?.email?.[0]}
            onChange={(e) => handleChangeInput('email', e.target.value)}
          />
          <Input
            name='password'
            label='Password'
            labelPlacement='outside'
            placeholder='Your email address'
            value={data?.password}
            errorMessage={errors?.password?.[0]}
            isInvalid={!!errors?.password?.[0]}
            onChange={(e) => handleChangeInput('password', e.target.value)}
          />
          {!state.errors && state.message && (
            <Text className='text-sm text-danger'>{state.message}</Text>
          )}
        </div>
        <div className='flex flex-col gap-y-5'>
          <div className='h-[78px] flex flex-col justify-center'>
            <Button
              aria-label='Signup button'
              type='submit'
              size='lg'
              isDisabled={isPending}
              isLoading={isPending}
            >
              Sign up
            </Button>
          </div>

          <div className='flex justify-center w-full gap-1'>
            <p className='text-secondary-200 text-sm'>
              Already have an account?
            </p>
            <Link
              className='font-semibold text-primary text-sm'
              href={ROUTES.LOGIN}
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
});

SignupForm.displayName = 'SignupForm';
