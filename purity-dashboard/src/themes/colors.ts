export const baseColors = {
  white: '#ffffff',
  green: {
    100: '#4fd1c5',
    200: '#48bb78'
  },
  red: '#e53e3e',
  grey: {
    50: '#e2e8f0',
    100: '#f8f9fa',
    200: '#a0aec0',
    300: '#2d3748',
    400: '#e0e1e2'
  },
  dark: {
    100: '#313860',
    200: '#151928'
  },
  yellow: '#f5a524'
};

export const colors = {
  background: {
    DEFAULT: baseColors.grey[100],
    foreground: baseColors.white
  },
  primary: {
    DEFAULT: baseColors.green[100],
    100: baseColors.white
  },
  secondary: {
    50: baseColors.grey[50],
    100: baseColors.grey[100],
    200: baseColors.grey[200],
    300: baseColors.grey[300]
  },
  success: baseColors.green[200],
  warning: baseColors.yellow,
  danger: baseColors.red
};
