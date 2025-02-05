import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Image } from '.';

// Constants
import { BACKGROUND } from '@/constants';

// Utils
import { generateImageToBase64 } from '@/utils';

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text'
    },
    alt: {
      control: 'text'
    }
  },
  args: {
    src: BACKGROUND.signup,
    alt: 'Image',
    width: 300,
    height: 200
  }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'Need help background'
  }
};

export const Blur: Story = {
  args: {
    alt: 'Blur image',
    blurDataURL: generateImageToBase64(100, 100)
  }
};

export const Fallback: Story = {
  args: {
    src: 'error',
    alt: 'Fallback image'
  }
};
