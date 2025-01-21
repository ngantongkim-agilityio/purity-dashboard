import { CustomClassType } from '@/types';

export const ChartIcon = ({
  customClass = 'w-4 h-4 text-primary'
}: CustomClassType) => (
  <svg fill='none' className={customClass}>
    <g fill='currentColor' clipPath='url(#a)'>
      <path d='M3.047 15.032h-.938a.703.703 0 0 1-.703-.704V10.11a.703.703 0 0 1 .703-.703h.938a.703.703 0 0 1 .703.703v4.219a.703.703 0 0 1-.703.703ZM9.61 15.03h-.938a.703.703 0 0 1-.703-.702V7.296a.703.703 0 0 1 .703-.703h.937a.703.703 0 0 1 .703.703v7.032a.703.703 0 0 1-.703.703ZM12.89 15.031h-.937a.703.703 0 0 1-.703-.703V4.015a.703.703 0 0 1 .703-.703h.938a.703.703 0 0 1 .703.704v10.312a.703.703 0 0 1-.703.703ZM6.328 15.031h-.937a.703.703 0 0 1-.704-.703V1.672a.703.703 0 0 1 .704-.703h.937a.703.703 0 0 1 .703.703v12.656a.703.703 0 0 1-.703.703Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 .5h15v15H0z' />
      </clipPath>
    </defs>
  </svg>
);
