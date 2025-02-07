'use client';

// Libs
import { memo } from 'react';
import { extendVariants, Switch as NextUISwitch } from '@heroui/react';

export const Switch = memo(
  extendVariants(NextUISwitch, {
    variants: {
      color: {
        default: {
          wrapper: [
            'group-data-[selected=true]:bg-default-400',
            'group-data-[selected=true]:text-default-foreground'
          ]
        },
        primary: {
          wrapper: [
            'bg-primary-200',
            'group-data-[selected=true]:bg-primary',
            'group-data-[selected=true]:text-primary-foreground'
          ]
        }
      },
      size: {
        sm: {
          wrapper: 'w-12 h-6',
          thumb: ['w-4 h-4 text-xs', 'group-data-[selected=true]:ms-4'],
          endContent: 'text-xs',
          startContent: 'text-xs',
          label: 'text-xs'
        },
        md: {
          wrapper: 'w-12 h-7',
          thumb: ['w-5 h-5 text-md', 'group-data-[selected=true]:ms-5'],
          endContent: 'text-md',
          startContent: 'text-md',
          label: 'text-medium'
        },
        lg: {
          wrapper: 'w-14 h-8',
          thumb: ['w-6 h-6 text-lg', 'group-data-[selected=true]:ms-6'],
          endContent: 'text-lg',
          startContent: 'text-lg',
          label: 'text-large'
        }
      }
    },
    defaultVariants: {
      color: 'primary',
      size: 'md'
    }
  })
);
