import React from 'react';
import type { Preview } from '@storybook/react';

// Providers
import { Providers } from '../src/app/provider';

// CSS
import '../src/styles/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;
