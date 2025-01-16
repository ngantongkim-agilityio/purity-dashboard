export const baseColors = {
  white: '#ffffff',
  green: {
    100: '#4fd1c5',
    200: '#48bb78'
  },
  red: '#e53e3e',
  grey: {
    100: '#f8f9fa',
    200: '#a0aec0',
    300: '#2d3748'
  },
  yellow: '#f5a524'
};

export const colors = {
  background: {
    DEFAULT: baseColors.white,
    foreground: baseColors.grey[100]
  },
  primary: {
    DEFAULT: baseColors.green[100],
    100: baseColors.white
  },
  secondary: {
    100: baseColors.grey[100],
    200: baseColors.grey[200],
    300: baseColors.grey[300]
  },
  success: baseColors.green[200],
  warning: baseColors.yellow,
  danger: baseColors.red
};
