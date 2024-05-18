import type { Meta, StoryObj } from '@storybook/react';

import SeedCard from '.';

const meta = {
  title: 'Components/seedCard',
  component: SeedCard,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SeedCard>;

export default meta;

type Story = StoryObj<typeof SeedCard>;

const mockInActiveSeed = {
  completedRoutineCount: 1,
  endDate: '2024-05-15',
  id: 145,
  routineInfos: [
    {
      value: 'teset',
    },
    {
      value: 'teset',
    },
    {
      value: 'teset',
    },
  ],
  seed: 'ㅁㄷㄹㅁㄷ',
  seedState: 'SEED' as const,
  startDate: '2024-05-17',
};

export const Active: Story = {
  render: () => (
    <div className="w-[410px] layout overflow-auto bg-gray-10 scroll-smooth flex flex-col gap-6">
      <SeedCard mode="active">
        <SeedCard.Header endDate="2024-05-20" />
        <SeedCard.Body
          seed={mockInActiveSeed.seed}
          routineInfos={mockInActiveSeed.routineInfos}
          seedState={mockInActiveSeed.seedState}
        />
        <SeedCard.Footer />
      </SeedCard>
    </div>
  ),
};

export const InActive: Story = {
  render: () => (
    <div className="w-[410px] layout overflow-auto bg-gray-10 scroll-smooth flex flex-col gap-6">
      <SeedCard mode="inactive">
        <SeedCard.Header endDate="2024-05-15" />
        <SeedCard.Background />
        <SeedCard.Body
          seed={mockInActiveSeed.seed}
          routineInfos={mockInActiveSeed.routineInfos}
          seedState={mockInActiveSeed.seedState}
        />
        <SeedCard.Footer />
      </SeedCard>
    </div>
  ),
};
