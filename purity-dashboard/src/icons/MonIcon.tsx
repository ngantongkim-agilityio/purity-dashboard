import * as React from 'react';
import { SVGProps } from 'react';

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    className='size-6'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
    />
  </svg>
);
