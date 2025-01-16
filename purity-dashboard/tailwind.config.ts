import {nextui} from '@nextui-org/react'

import {
  colors,
  baseColors,
} from './src/themes';


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ...baseColors,
        ...colors,
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-lusitana)'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors,
      },
      dark: {},
    }
  })],
}
