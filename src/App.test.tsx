import React from 'react';
// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Main from './pages/Main/Main';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import Character from './pages/Main/components/Character';
import Table from './components/Table';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

/**
 * @jest-environment node
 */

test('check main page first loaded ui', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );

  const links = screen.getAllByRole('link');
  expect(links.length).toBeGreaterThan(1);
  const characters = await screen.findAllByTestId('test-character');
  await waitFor(() => {
    expect(characters.length).toEqual(20);
  });
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
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Character
          key={0}
          name=''
          id={0}
          image=''
          clickHandler={goToCharacter}
        />
      </BrowserRouter>
    </Provider>
  );
  const character = await screen.findByTestId('test-character');
  await fireEvent.click(character);

  await waitFor(() => {
    // expect(characters.length).toBeGreaterThan(20);
    expect(goToCharacter).toHaveBeenCalled();
  });
});

test('go to character page on click', async () => {
  render(<App />);
  const characters = screen.getAllByTestId('test-character');
  userEvent.click(characters[0]);
  expect(await screen.findByText('Gender:')).not.toBeNull();
  const mainLink = screen.getByRole('link', { name: 'Main' });
  userEvent.click(mainLink);
});

test('go back on main', async () => {
  render(<App />);
  const character = await screen.findAllByTestId('test-character');
  userEvent.click(character[0]);
  const mainLink = screen.getByRole('link', { name: 'Main' });
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
  // const statistics = screen.getByRole('link', { name: 'Statistics' });
  // userEvent.click(statistics);
  // history('statistics');
  const episodes = screen.getByText('Episodes');
  userEvent.click(episodes);
  const episodesTable = screen.getByText('Character name');
  expect(episodesTable).not.toBeNull();
});

test('locations', async () => {
  render(<App />);
  // const statistics = screen.getByRole('link', { name: 'Statistics' });
  // userEvent.click(statistics);
  const locations = screen.getByText('Locations');
  userEvent.click(locations);
  const locationsTable = screen.getByText('Number of characters');
  expect(locationsTable).not.toBeNull();
});

test('sorting callback in table', async () => {
  const changeSort = jest.fn();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Table
          header={['Character name', 'Number of episodes']}
          rows={[]}
          changeSort={changeSort}
        />
      </BrowserRouter>
    </Provider>
  );
  const sorter = screen.getAllByTestId('test-sorter')[0];
  await userEvent.click(sorter);
  await waitFor(() => {
    expect(changeSort).toBeCalled();
  });
});
test('sorting', async () => {
  render(<App />);
  // const statistics = screen.getByRole('link', { name: 'Statistics' });
  // userEvent.click(statistics);
  // const locations = screen.getAllByTestId('test-link')[1];
  // await userEvent.click(locations);
  const sorter = await screen.findAllByTestId('test-sorter');
  const tableCells = await screen.findAllByTestId('test-table-cell');
  await userEvent.click(sorter[0]);
  await waitFor(() => {
    expect(screen.getAllByTestId('test-table-cell')[0].innerText).not.toEqual(
      tableCells[0].innerText
    );
  });
});
