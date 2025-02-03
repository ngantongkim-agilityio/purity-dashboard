'use client';

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
        secondary: 'bg-background uppercase text-grey-300'
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

// Button.displayName = 'Button';

// import clsx from 'clsx';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

// export function Button({ children, className, ...rest }: ButtonProps) {
//   return (
//     <button
//       {...rest}
//       className={clsx(
//         'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
//         className
//       )}
//     >
//       {children}
//     </button>
//   );
// }
