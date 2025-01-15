import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Components
import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline']
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'md', 'lg']
    }
  },
  args: {
    onPress: fn()
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary'
  }
};

export const Danger: Story = {
  args: {
    children: 'Secondary',
    color: 'default'
  }
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    color: 'default'
  }
};

export const Disabled: Story = {
  args: {
    children: 'Primary',
    isDisabled: true
  }
};
