import { CustomClassType } from '@/types';

export const ArrowIcon = ({
  customClass = 'w-3 h-3 text-secondary-300'
}: CustomClassType) => (
  <svg fill='none' className={customClass}>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.125}
      d='M6.281 2.625 9.656 6 6.281 9.375M9.187 6H2.344'
    />
  </svg>
);
