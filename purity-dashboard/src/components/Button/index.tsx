'use client';

import { extendVariants, Button as ButtonNextUI } from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    variant: {
      solid: 'border-transparent font-semibold',
      outline: 'border-1 border-primary-100 font-semibold'
    },

    color: {
      default: 'bg-transparent text-primary-100',
      primary: 'bg-primary-100 uppercase text-white',
      secondary: 'bg-white uppercase text-grey-300'
    },

    isIconOnly: {
      true: 'bg-none',
      ariaLabel: 'button icon'
    },

    size: {
      xs: 'px-3 text-sm max-h-10 h-10 gap-1 text-sm rounded-lg',
      md: 'px-4 min-w-20 max-h-10 h-10 text-small gap-2 rounded-small',
      lg: 'w-full max-h-12 h-12 text-small gap-2 rounded-small'
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary'
  }
});
