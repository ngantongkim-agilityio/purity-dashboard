'use client';

import { Button, Text } from '@/components';

const GlobalError = ({
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
          <Text>Something went wrong!</Text>
          <Button onClick={() => reset()}>Try again</Button>
        </main>
      </body>
    </html>
  );
};

export default GlobalError;
