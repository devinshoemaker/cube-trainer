import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dot from './Dot';

const meta: Meta = {
  title: '2Look OLL/Dot',
  component: Dot,
};
export default meta;

const Template: Story = () => <Dot />;

export const Default = Template.bind({});
