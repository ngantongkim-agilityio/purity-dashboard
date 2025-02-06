import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';

const meta = {
  title: 'Components/Text',
  tags: ['autodocs'],

  component: Text,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      control: { type: 'text' }
    },
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span'],
      control: { type: 'select' }
    },
    color: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'error',
        'warning'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a default text',
    variant: 'p',
    color: 'tertiary'
  }
};

export const Tile: Story = {
  args: {
    children: 'This is a title text',
    variant: 'h1',
    color: 'subTitle',
    size: '2xl'
  }
};

export const Success: Story = {
  args: {
    children: 'This is a success text',
    size: 'sm',
    color: 'success'
  }
};

export const Warning: Story = {
  args: {
    children: 'This is a warning text',
    color: 'warning',
    size: 'sm',
    type: 'nowrap'
  }
};

export const Error: Story = {
  args: {
    children: 'This is a error text',
    color: 'error'
  }
};
