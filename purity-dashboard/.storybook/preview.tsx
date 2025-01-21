import React from 'react';
import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google'

// Providers
import { Providers } from '../src/app/provider';

// CSS global
import '../src/app/globals.css';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${inter.className}`}>
        <Providers>
          <Story />
        </Providers>
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f9fa' },
        { name: 'dark', value: '#2d3748' },
      ],
    },

  },
};


export default preview;
