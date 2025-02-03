'use client';

import { memo, useActionState } from 'react';
import Link from 'next/link';
// import { Switch } from '@heroui/react';

// Components
import { Button, Input, Text, Switch, Checkbox } from '@/components';

// Actions
import { authenticate } from '@/actions/auth';

// Constants
import { ROUTES } from '@/constants';

export const LoginForm = memo(() => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  console.log('errorMessage ===>', errorMessage);

  return (
    <form className='flex flex-col w-full mt-9 gap-y-8' action={formAction}>
      <div>
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
        <input id='remember' name='remember' type='checkbox' />
        <label htmlFor='remember'>Remember me</label>
        {/* <Switch id="remember" name='remember' aria-label="Remember" >Remember</Switch> */}
        {/* <Checkbox id="remember" name='remember' aria-label="Remember" >Remember</Checkbox> */}
        {!!errorMessage && (
          <Text className='mt-2 text-sm text-danger'>{errorMessage}</Text>
        )}
      </div>
      <div className='flex flex-col gap-y-5'>
        <div className='h-[60px] flex flex-col justify-center'>
          <Button
            // type='submit'
            // className='w-full'
            // aria-disabled={isPending}
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
