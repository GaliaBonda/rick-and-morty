import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkView from './LinkView';
import { BrowserRouter as Router } from 'react-router-dom';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'LinkView',
  component: LinkView,
  argTypes: {
    handleClick: { action: 'handle click', table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <Router>
        <div style={{ width: '50%' }}>
          <Story />
        </div>
      </Router>
    ),
  ],
} as ComponentMeta<typeof LinkView>;
const Template: ComponentStory<typeof LinkView> = (args) => (
  <LinkView {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  link: '/',
  title: 'Link',
  image: '',
  hiddenImage: true,
  activeTab: false,
};
Standart.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByTestId('test-link');
  await userEvent.click(link);
  await waitFor(() => expect(args.handleClick).toBeCalled());
};

export const Active = Template.bind({});
Active.args = {
  ...Standart.args,
  activeTab: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Standart.args,
  image: 'assets/rm-episodes.webp',
  hiddenImage: false,
};
