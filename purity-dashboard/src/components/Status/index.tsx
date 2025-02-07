import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils';

export const Status = ({ status = 'pending' }: { status?: string }) => {
  return (
    <span
      className={cn('inline-flex items-center rounded-full px-2 py-1 text-xs', {
        'bg-primary-200 text-white': status === 'pending',
        'bg-success text-white': status === 'paid'
      })}
    >
      {status === 'pending' && (
        <>
          Pending
          <ClockIcon className='ml-1 w-4 text-white' />
        </>
      )}
      {status === 'paid' && (
        <>
          Paid
          <CheckIcon className='ml-1 w-4 text-white' />
        </>
      )}
    </span>
  );
};
