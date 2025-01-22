import {heroui} from "@heroui/react"

import {
  colors,
  baseColors,
  fontSize,
} from './src/themes';


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...baseColors,
        ...colors,
      },
      fontSize,
      fontFamily: {
        sans: ['var(--font-inter)'],
        lora: ['var(--font-lora)'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors,
      },
      dark: {},
    }
  })],
}
