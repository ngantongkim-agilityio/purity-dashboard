'use client';

import { extendVariants, Button as ButtonNextUI } from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    variant: {
      solid: 'border-transparent font-semibold p',
      outline: 'border-1 border-primary font-semibold'
    },

    color: {
      default: 'bg-transparent text-primary',
      primary: 'bg-primary uppercase text-white',
      secondary: 'bg-background uppercase text-grey-300'
    },

    isIconOnly: {
      true: 'bg-none',
      ariaLabel: 'button icon'
    },

    size: {
      xs: 'px-3 text-sm h-8 gap-1 text-sm rounded-lg',
      md: 'px-4 min-w-20 h-9 text-small gap-2 rounded-xl',
      lg: 'w-full h-12 text-small gap-2 rounded-xl'
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md'
  }
});
