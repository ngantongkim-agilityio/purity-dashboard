import { CustomClassType } from '@/types';

export const GlobeIcon = ({
  customClass = 'w-6 h-6 text-primary-100'
}: CustomClassType) => (
  <svg fill='none' className={customClass}>
    <path
      fill='currentColor'
      stroke='#4FD1C5'
      strokeMiterlimit={10}
      strokeWidth={0.75}
      d='M12 2.359a9.14 9.14 0 1 0 0 18.281A9.14 9.14 0 0 0 12 2.36Z'
    />
    <path
      fill='currentColor'
      stroke='#4FD1C5'
      strokeMiterlimit={10}
      strokeWidth={0.75}
      d='M12 2.359c-2.552 0-4.951 4.092-4.951 9.14 0 5.048 2.399 9.14 4.95 9.14 2.553 0 4.952-4.092 4.952-9.14 0-5.048-2.4-9.14-4.951-9.14Z'
    />
    <path
      fill='currentColor'
      d='M5.906 5.406C7.586 6.599 9.702 7.31 12 7.31c2.298 0 4.413-.711 6.094-1.904'
    />
    <path
      stroke='#4FD1C5'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={0.75}
      d='M5.906 5.406C7.586 6.599 9.702 7.31 12 7.31c2.298 0 4.413-.711 6.094-1.904M18.094 17.594c-1.68-1.193-3.796-1.904-6.094-1.904-2.298 0-4.414.711-6.094 1.904'
    />
    <path
      stroke='#4FD1C5'
      strokeMiterlimit={10}
      strokeWidth={0.75}
      d='M12 2.359v18.28M21.14 11.499H2.86'
    />
  </svg>
);
