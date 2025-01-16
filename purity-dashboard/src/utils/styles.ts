import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Efficiently merge Tailwind css classes in JS without style conflicts
 * @param classes string
 * @returns string
 */
export const cn = (...classes: ClassValue[]): string => twMerge(clsx(classes));
