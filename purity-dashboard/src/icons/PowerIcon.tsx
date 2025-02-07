import { CustomClassType } from '@/types';

export const PowerIcon = ({
  customClass = 'w-6 h-6 text-secondary-300'
}: CustomClassType) => (
  <svg
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    className={customClass}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9'
    />
  </svg>
);
