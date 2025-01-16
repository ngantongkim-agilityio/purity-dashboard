import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';
import { SearchIcon } from '@/components/common/Icons';

const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],

  component: Input,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'md', 'lg']
    },
    labelPlacement: {
      control: { type: 'select' },
      options: ['inside', 'outside', 'inside-left']
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    className: 'w-[380px]'
  }
};

export const Small: Story = {
  args: {
    variant: 'bordered',
    size: 'sm',
    className: 'w-[380px]',
    placeholder: 'Your full name'
  }
};

export const Medium: Story = {
  args: {
    variant: 'bordered',
    size: 'md',
    className: 'w-[380px]',
    placeholder: 'Your full name'
  }
};

export const LabelPlacement: Story = {
  args: {
    variant: 'bordered',
    className: 'w-[380px]',
    label: 'Email',
    placeholder: 'Your full name',
    labelPlacement: 'outside'
  }
};

export const WithStartContent: Story = {
  args: {
    variant: 'default',
    className: 'w-[380px] rounded-xl',
    placeholder: 'Type here...',
    startContent: <SearchIcon className='ml-2 text-primary-200' />
  }
};

export const Disabled: Story = {
  args: {
    variant: 'bordered',
    placeholder: 'Type here...',
    className: 'w-[380px]',
    isDisabled: true
  }
};

export const WithErrorMessage: Story = {
  args: {
    variant: 'bordered',
    className: 'w-[380px]',
    isInvalid: true,
    errorMessage: 'Please enter a valid email address',
    placeholder: 'Your email address'
  }
};
