import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from './Main';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';

export default {
  title: 'Main',
  component: Main,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  argTypes: {
    uploadNewCharacters: {
      action: 'upload new characters',
      table: { disable: true },
    },
    testScrollingCallback: {
      action: 'scroll testing callback',
      table: { disable: true },
    },
    goToCharacter: {
      action: 'go to character',
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Main>;
const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  characters: [
    {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
    {
      id: 3,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
  ],
};

Standart.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const listEl = canvas.getAllByTestId('test-list-element');
  await userEvent.click(listEl[0]);
  await waitFor(() => expect(args.goToCharacter).toBeCalled());
  // const scrollTestElement = canvas.getByTestId('scroll-test-element');
  // scrollTestElement.scrollIntoView();
  const mainDiv = canvas.getByTestId('test-main');
  fireEvent.scroll(window, { target: { scrollTop: window.innerHeight } });
  console.log(window);

  expect(args.testScrollingCallback).toBeCalled();
  // expect(args.uploadNewCharacters).toBeCalled();
  // console.log(mainDiv.getBoundingClientRect().bottom);

  // await waitFor(() => expect(args.uploadNewCharacters).toBeCalled());
  // await waitFor(() => expect(canvas.getByTestId('loader')).toBeInTheDocument());
};
