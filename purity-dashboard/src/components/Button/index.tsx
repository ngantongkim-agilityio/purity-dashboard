'use client';

// Libs
import { memo } from 'react';
import { extendVariants, Button as ButtonNextUI } from '@heroui/react';

export const Button = memo(
  extendVariants(ButtonNextUI, {
    variants: {
      variant: {
        solid: 'border-transparent font-semibold p',
        outline: 'border-1 border-primary font-semibold'
      },

      color: {
        default: 'bg-transparent text-primary',
        primary: 'bg-primary uppercase text-white',
        secondary: 'bg-primary-100 uppercase text-secondary-300'
      },

      isIconOnly: {
        true: 'bg-none',
        ariaLabel: 'button icon'
      },

      size: {
        xs: 'px-3 text-xs h-8 gap-1 rounded-lg',
        md: 'px-4 min-w-20 h-9 text-xs gap-2 rounded-xl',
        lg: 'w-full h-12 text-xs gap-2 rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md'
    }
  })
);
