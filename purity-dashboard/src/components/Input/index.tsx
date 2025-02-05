'use client';

import { memo } from 'react';
import { extendVariants, Input as NextUIInput } from '@heroui/react';
import { cn } from '@/utils/styles';

export const Input = memo(
  extendVariants(NextUIInput, {
    variants: {
      variant: {
        default: {
          inputWrapper: cn(
            'bg-primary-100 group-data-[hover=true]:opacity-95 group-data-[focus=true]:opacity-95 group-data-[invalid=true]:border-danger'
          ),
          input:
            'text-secondary-300 placeholder:text-secondary-200 bg-primary-100 text-sm mx-2 group-data-[invalid=true]:!text-danger-100',
          errorMessage: 'text-danger text-xs ml-2'
        },
        bordered: {
          inputWrapper: cn(
            'bg-primary-100 border-secondary-50 data-[hover=true]:!bg-primary-100 group-data-[focus=true]:!bg-primary-100 data-[focus=true]:!border-secondary-200 group-data-[invalid=true]:border-danger'
          ),
          input:
            'text-secondary-300 placeholder:text-secondary-200 bg-primary-100 text-sm mx-2 group-data-[invalid=true]:!text-danger rounded',
          errorMessage: 'text-danger text-xs ml-2',
          label: 'top-5 text-sm group-data-[invalid=true]:!text-secondary-300'
        }
      },
      size: {
        xs: {
          mainWrapper: 'h-[68px]',
          inputWrapper: 'h-auto py-3 max-h-10',
          input: 'mx-1',
          label: 'top-[20px]'
        },
        md: {
          mainWrapper: 'h-20',
          inputWrapper: 'h-auto py-4 rounded-2xl',
          label: 'top-[20px]'
        },
        lg: {
          mainWrapper: 'h-24',
          inputWrapper: 'h-auto py-5',
          label: 'top-[20px]'
        }
      }
    },
    defaultVariants: {
      variant: 'bordered',
      size: 'md'
    }
  })
);
