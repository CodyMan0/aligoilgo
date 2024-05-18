import type { Meta, StoryObj } from '@storybook/react';

import SeedEmptyCard from '.';

const meta = {
  title: 'Components/seedEmptyCard',
  component: SeedEmptyCard,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SeedEmptyCard>;

export default meta;

type Story = StoryObj<typeof SeedEmptyCard>;

export const Active: Story = {
  render: () => (
    <div className="w-[410px] layout overflow-auto bg-gray-10 scroll-smooth flex flex-col gap-6">
      <SeedEmptyCard isActive={true} />
    </div>
  ),
};

export const InActive: Story = {
  render: () => (
    <div className="w-[410px] layout overflow-auto bg-gray-10 scroll-smooth flex flex-col gap-6">
      <SeedEmptyCard isActive={false} />
    </div>
  ),
};
