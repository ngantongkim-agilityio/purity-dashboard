'use client';

// Libs
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Components
import { Button } from '@/components';

// Icons
import { SunIcon, MoonIcon } from '@/icons';

// Utils
import { cn } from '@/utils';

export const ThemeSwitcher = ({ className = '' }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [setTheme, theme]);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn('w-fit absolute top-0 p-4', className)}>
      <Button
        aria-label='theme switcher'
        isIconOnly
        className='bg-transparent px-0 w-5 h-5 min-w-5'
        onClick={handleSwitchTheme}
      >
        {theme === 'light' ? (
          <MoonIcon className='h-5 w-5 text-primary' />
        ) : (
          <SunIcon className='h-5 w-5 text-primary' />
        )}
      </Button>
    </div>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
