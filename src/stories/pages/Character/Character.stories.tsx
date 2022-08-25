import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Character from './Character';
import { BrowserRouter as Router } from 'react-router-dom';

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
      <Router>
        <Story />
      </Router>
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
