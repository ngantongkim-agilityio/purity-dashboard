'use client';

import { Button, Text } from '@/components';

const Error = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <main className='h-screen flex flex-col items-center justify-center'>
      <Text>Something went wrong!</Text>
      <Button onClick={() => reset()}>Try again</Button>
    </main>
  );
};

export default Error;
