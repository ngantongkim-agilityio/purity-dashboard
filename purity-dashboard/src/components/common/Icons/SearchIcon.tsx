import * as React from 'react';
import { SVGProps } from 'react';
import { baseColors } from '@/themes/colors';

export const SearchIcon = ({
  color = baseColors.grey[300],
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg width={15} height={15} fill='none' {...props}>
    <path
      fill={color}
      d='M12.131 11.097 9.375 8.341a5.092 5.092 0 0 0 1.02-3.064A5.125 5.125 0 0 0 5.276.158 5.125 5.125 0 0 0 .158 5.277a5.125 5.125 0 0 0 5.118 5.119A5.092 5.092 0 0 0 8.34 9.375l2.757 2.757a.733.733 0 0 0 1.034-1.035Zm-10.51-5.82a3.656 3.656 0 1 1 7.312 0 3.656 3.656 0 0 1-7.313 0Z'
    />
  </svg>
);
