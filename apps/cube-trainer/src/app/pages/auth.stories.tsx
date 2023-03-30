import type { Meta } from '@storybook/react';
import Authentication from './auth';

const Story: Meta<typeof Authentication> = {
  component: Authentication,
  title: 'Authentication',
};
export default Story;

export const Primary = {
  args: {},
};
