import React from 'react';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Main from './pages/Main/Main';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './store/store';
import {
  Router,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { history } from './common/utils/history';
import Character from './pages/Main/components/Character';
import { createMemoryHistory } from 'history';
import Episodes from './pages/Episodes/Episodes';
import Table from './components/Table';

afterEach(cleanup);


test('check main page first loaded ui', async () => {
  render(<Provider store={store}><HistoryRouter history={history}><Main /></HistoryRouter></Provider>);

  const links = screen.getAllByRole('link');
  expect(links.length).toBeGreaterThan(1);
  const characters = await screen.findAllByTestId('test-character');
  await waitFor(() => {
    expect(characters.length).toEqual(20);
  })
});

// test('load more characters on scroll', async () => {
//   render(<App />);

//   // const yPosition = screen.getByTestId('test-scroll-load').offsetHeight;
//   await fireEvent.scroll(window, { target: { scrollY: window.innerHeight } });
//   // const characters = await screen.findAllByTestId('test-character');
//   await waitFor(() => {
//     // expect(characters.length).toBeGreaterThan(20);
//     expect(screen.getAllByTestId('loader')).not.toBeNull();
//   });
// });
test('go to character page callback on click', async () => {
  const goToCharacter = jest.fn();
  render(<Provider store={store}><HistoryRouter history={history}><Character key={0}
    name=""
    id={0}
    image=""
    clickHandler={goToCharacter}
  /></HistoryRouter></Provider>);
  const character = await screen.findByTestId('test-character');
  await fireEvent.click(character);

  await waitFor(() => {
    // expect(characters.length).toBeGreaterThan(20);
    expect(goToCharacter).toHaveBeenCalled();
  });
});

test('go to character page on click', async () => {
  render(<App />);
  const characters = await screen.findAllByTestId('test-character');
  userEvent.click(characters[0]);
  expect(await screen.findByText('Gender:')).not.toBeNull();
});
test('go back on main', async () => {
  render(<App />);
  history.push('characters/1');
  const mainLink = screen.getByText('Main');
  userEvent.click(mainLink);
  const characters = await screen.findAllByTestId('test-character');

  expect(characters.length).toEqual(20);
});
test('links', async () => {
  render(<App />);
  const statisticsLink = screen.getByText('Statistics');
  userEvent.click(statisticsLink);
  const statisticsComponent = screen.getByTestId('test-statistics');
  expect(statisticsComponent).not.toBeNull();
  const episodes = screen.getByText('Episodes');
  expect(episodes).not.toBeNull();
  const locations = screen.getByText('Locations');
  expect(locations).not.toBeNull();
});
test('episodes', async () => {
  render(<App />);
  history.push('statistics');
  const episodes = screen.getByText('Episodes');
  userEvent.click(episodes);
  const episodesTable = screen.getByText('Character name');
  expect(episodesTable).not.toBeNull();

});

test('locations', async () => {
  render(<App />);
  history.push('statistics');
  const locations = screen.getByText('Locations');
  userEvent.click(locations);
  const locationsTable = screen.getByText('Number of characters');
  expect(locationsTable).not.toBeNull();

});

test('sorting callback in table', async () => {
  const changeSort = jest.fn();
  render(<Provider store={store}><HistoryRouter history={history}>
    <Table
      header={['Character name', 'Number of episodes']}
      rows={[]}
      changeSort={changeSort}
    />
  </HistoryRouter ></Provider >);
  const sorter = screen.getAllByTestId('test-sorter')[0];
  await userEvent.click(sorter);
  await waitFor(() => {
    expect(changeSort).toBeCalled();
  });
});
test('sorting', async () => {
  render(<App />);
  history.push('statistics');
  const locations = screen.getByText('Locations');
  await userEvent.click(locations);
  const sorter = screen.getAllByTestId('test-sorter')[0];
  const tableCells = await screen.findAllByTestId('test-table-cell');
  await userEvent.click(sorter);
  await waitFor(() => {
    expect(screen.getAllByTestId('test-table-cell')[0].innerText).not.toEqual(tableCells[0].innerText);
  });
});


