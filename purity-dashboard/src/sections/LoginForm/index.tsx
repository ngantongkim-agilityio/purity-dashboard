'use client';

import { memo, useActionState, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

// Components
import { Button, Input, Text, Switch, Checkbox } from '@/components';

// Actions
import { authenticate } from '@/actions/auth';

// Constants
import { ROUTES } from '@/constants';

// Types
import { AuthState } from '@/types';

export const LoginForm = memo(() => {
  const initialState: AuthState = {
    data: undefined,
    errors: undefined,
    message: undefined
  };

  const [remember, setRemember] = useState(false);
  const authenticateWithRememberMe = authenticate.bind(null, remember);
  const [state, formAction, isPending] = useActionState(
    authenticateWithRememberMe,
    initialState
  );

  const [errors, setResetErrors] = useState(state?.errors);
  const [data, setData] = useState(state?.data);

  useEffect(() => {
    if (state?.errors) {
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

  const handleChangeRemember = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRemember(e.target.checked);
    },
    []
  );

  return (
    <form className='flex flex-col w-full mt-9 gap-y-8' action={formAction}>
      <div>
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
        <Switch
          id='remember'
          name='remember'
          aria-label='Remember'
          onChange={handleChangeRemember}
        >
          Remember me
        </Switch>
        {!!state?.message && (
          <Text className='mt-2 text-sm text-danger'>{state?.message}</Text>
        )}
      </div>
      <div className='flex flex-col gap-y-5'>
        <div className='h-[60px] flex flex-col justify-center'>
          <Button
            aria-label='Login button'
            type='submit'
            size='lg'
            isDisabled={isPending}
            isLoading={isPending}
          >
            Sign in
          </Button>
        </div>
        <div className='flex justify-center w-full gap-1'>
          <p className='text-secondary-200 text-sm'>
            Don&rsquo;t have an account?
          </p>
          <Link
            className='font-semibold text-primary text-sm'
            href={ROUTES.SIGNUP}
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';
