import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CharacterView from './CharacterView';

export default {
  title: 'CharacterView',
  component: CharacterView,
} as ComponentMeta<typeof CharacterView>;
const Template: ComponentStory<typeof CharacterView> = (args) => (
  <CharacterView {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  gender: 'somegender',
  species: 'somespecies',
  status: 'somestatus',
  name: 'somename',
  image: '/assets/Morty.jpeg',
};
