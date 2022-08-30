import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Statistics from './Statistics';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Statistics',
  component: Statistics,
  decorators: [
    (Story) => (
      <Router>
        <div style={{ width: '80%', margin: '0 auto' }}>
          <Story />
        </div>
      </Router>
    ),
  ],
} as ComponentMeta<typeof Statistics>;
const Template: ComponentStory<typeof Statistics> = () => <Statistics />;

export const Standart = Template.bind({});
Standart.args = {};
