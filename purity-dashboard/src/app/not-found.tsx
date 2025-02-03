import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { Text } from '@/components';
import { ROUTES } from '@/constants';

const NotFound = () => {
  return (
    <main className='flex h-screen flex-col items-center justify-center gap-2'>
      <FaceFrownIcon className='w-10 text-gray-400' />
      <Text variant='h1' color='subTitle'>
        404 - Page Not Found
      </Text>
      <Link
        href={ROUTES.HOME}
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
      >
        Go Back
      </Link>
    </main>
  );
};

export default NotFound;
