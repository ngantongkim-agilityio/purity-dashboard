'use client';

import { extendVariants, Divider as DividerNextUI } from '@heroui/react';

export const Divider = extendVariants(DividerNextUI, {
  variants: {
    variant: {
      linear:
        'bg-gradient-to-r from-grey-100 from-0% via-red via-transparent to-grey-100 to-100%',
      default: 'shrink-0 bg-divider border-none'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
