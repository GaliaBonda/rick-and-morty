import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    changeSort: { action: 'change sort', table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Table>;
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  header: ['header 1', 'header 2'],
  rows: [
    {
      id: 0,
      data: ['one', 'two', 'three'],
    },
    {
      id: 1,
      data: ['three', 'two', 'one'],
    },
  ],
};
