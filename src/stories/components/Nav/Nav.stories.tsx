import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Nav from './Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Nav',
  component: Nav,
  decorators: [
    (Story) => (
      <Router>
        <div style={{ width: '50%' }}>
          <Story />
        </div>
      </Router>
    ),
  ],
  argTypes: {
    clickHandle: { action: 'handle click', table: { disable: true } },
  },
} as ComponentMeta<typeof Nav>;
const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  links: ['Link 1', 'Link 2'],
};
Standart.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const link = canvas.getAllByRole('link');
  await userEvent.click(link[0]);
  await waitFor(() => expect(args.clickHandle).toBeCalled());
};
