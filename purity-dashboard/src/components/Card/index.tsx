// Libs

import { JSX } from 'react';

// Components
import { Text } from '../Text';

// Types
import { CustomClassType } from '@/types';

export const Card = ({
  title,
  value,
  icon
}: {
  title: string;
  value: number | string;
  icon: ({ customClass }: CustomClassType) => JSX.Element;
}) => {
  const CardIcon = icon;

  return (
    <div className='flex justify-between rounded-xl bg-primary-100 p-4 shadow-secondary-50 shadow-md'>
      <div>
        <Text variant='h3' className='text-xs font-bold text-secondary-200'>
          {title}
        </Text>
        <Text className='text-lg font-bold text-secondary-300'>{value}</Text>
      </div>
      <div className='p-2.5 rounded-lg bg-primary'>
        <CardIcon />
      </div>
    </div>
  );
};
