import type { Meta } from '@storybook/react';
import Timer from './timer';

const Story: Meta<typeof Timer> = {
  component: Timer,
  title: 'Timer',
};
export default Story;

export const Primary = {
  args: {},
};
