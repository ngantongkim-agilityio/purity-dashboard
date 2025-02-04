'use client';

// Libs
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Components
import { Button } from '@/components';
import { SunIcon, MoonIcon } from '@/icons';

const ThemeSwitcher = () => {
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
    <Button
      aria-label='theme switcher'
      isIconOnly
      onClick={handleSwitchTheme}
      className='bg-transparent'
    >
      {theme === 'light' ? (
        <MoonIcon className='h-5 w-5 text-primary' />
      ) : (
        <SunIcon className='h-5 w-5 text-primary' />
      )}
    </Button>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;
