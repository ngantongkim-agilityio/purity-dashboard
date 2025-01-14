'use client';

import { memo } from 'react';
import { extendVariants, Button as ButtonNextUI } from '@nextui-org/react';

export const Button = memo(
  extendVariants(ButtonNextUI, {
    variants: {
      variant: {
        solid: 'border-transparent font-semibold',
        outline:
          'border-1 border-secondary-300 hover:bg-linear-success hover:text-content1 font-semibold'
      },
      color: {
        default: 'bg-primary-100 disabled:bg-background-400 text-primary-500',
        primary: 'bg-background-300 disabled:opacity-50 text-primary-500',
        danger: 'bg-red-50 disabled:opacity-50 text-red-100'
      },
      size: {
        xs: 'py-6 px-16 h-19 text-xs',
        md: 'py-10 px-20 h-21 text-xs',
        lg: 'py-10 px-18 h-22 text-base'
      }
    },
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md'
    }
  })
);
