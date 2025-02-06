// Libs
import { memo, type ReactNode } from 'react';

// Utils
import { cn } from '@/utils/styles';

const COLORS = {
  primary: 'text-primary-100 font-normal',
  secondary: 'text-secondary-100',
  tertiary: 'text-secondary-300',
  title: 'text-primary-100 font-bold',
  subTitle: 'text-secondary-300 font-bold',
  description: 'text-primary-200 font-medium',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-danger',
  default: 'text-foreground'
};

const SIZES = {
  xxs: 'text-xxs',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl'
};

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'title'
    | 'subTitle'
    | 'description'
    | 'success'
    | 'warning'
    | 'error'
    | 'default';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  type?: 'nowrap' | 'wrap';
  className?: string;
  children: ReactNode;
}

export const Text = memo(
  ({
    variant = 'p',
    color = 'primary',
    size = 'sm',
    className,
    children
  }: TextProps) => {
    const TextName = variant;

    return (
      <TextName
        className={cn(`${COLORS[color]} ${SIZES[size]} ${className || ''}`)}
      >
        {children}
      </TextName>
    );
  }
);

Text.displayName = 'Text';
