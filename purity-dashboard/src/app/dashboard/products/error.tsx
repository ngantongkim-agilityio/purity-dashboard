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
    <html lang='en'>
      <body>
        <main className='h-screen flex flex-col items-center justify-center'>
          <Text color='subTitle'>Something went wrong!</Text>
          <Button onClick={() => reset()}>Try again</Button>
        </main>
      </body>
    </html>
  );
};

export default Error;
