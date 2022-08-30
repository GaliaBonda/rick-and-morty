import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CharacterMain from './CharacterMain';

export default {
  title: 'CharacterMain',
  component: CharacterMain,
  argTypes: {
    clickHandler: { action: 'handle click', table: { disable: true } },
  },
} as ComponentMeta<typeof CharacterMain>;
const Template: ComponentStory<typeof CharacterMain> = (args) => (
  <CharacterMain {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  image: 'assets/Morty.jpeg',
  name: 'Mosty Smith',
  id: 0,
};
