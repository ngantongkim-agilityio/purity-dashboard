import { memo, type ReactNode } from 'react';
import { cn } from '@/utils/styles';

const COLORS = {
  primary: 'text-primary-100 font-normal',
  secondary: 'text-secondary-100',
  title: ' text-primary-100 font-bold',
  subTitle: 'text-primary-200 font-normal',
  description: 'text-primary-200 font-medium',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-danger-100',
  default: 'text-foreground'
};

const SIZES = {
  '2xs': 'text-2xs',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl'
};

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  color?:
    | 'primary'
    | 'secondary'
    | 'title'
    | 'subTitle'
    | 'description'
    | 'success'
    | 'warning'
    | 'error'
    | 'default';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
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
