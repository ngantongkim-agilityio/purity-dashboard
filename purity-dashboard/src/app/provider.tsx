'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='light'>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
