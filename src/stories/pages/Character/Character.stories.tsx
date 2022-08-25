import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Character from './Character';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

export default {
  title: 'Character',
  component: Character,
  argTypes: {
    type: { table: { disable: true } },
    origin: { table: { disable: true } },
    location: { table: { disable: true } },
    episode: { table: { disable: true } },
    url: { table: { disable: true } },
    created: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Router>
          <Story />
        </Router>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Character>;
const Template: ComponentStory<typeof Character> = (args) => (
  <Character {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  character: {
    name: 'MORTY SMITH',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: '/assets/Morty.jpeg',
    id: 0,
  },
};
