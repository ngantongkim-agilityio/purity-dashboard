import { CustomClassType } from '@/types';

export const CardIcon = ({ customClass = 'w-4 h-4' }: CustomClassType) => (
  <svg fill='none' className={customClass}>
    <g fill='currentColor' clipPath='url(#a)'>
      <path d='M.937 11.515a1.64 1.64 0 0 0 1.641 1.64h9.844a1.641 1.641 0 0 0 1.64-1.64V7.004H.937v4.511ZM2.871 9.29a.879.879 0 0 1 .879-.88h1.406a.879.879 0 0 1 .88.88v.586a.879.879 0 0 1-.88.879H3.75a.879.879 0 0 1-.879-.88V9.29ZM12.422 2.843H2.578a1.64 1.64 0 0 0-1.64 1.64v.762h13.124v-.761a1.64 1.64 0 0 0-1.64-1.641Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 .5h15v15H0z' />
      </clipPath>
    </defs>
  </svg>
);
