import React from 'react';
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { history } from './common/utils/history';
import Episodes from './pages/Episodes/Episodes';
import Main from './pages/Main/Main';
import Statistics from './pages/Statistics/Statistics';
import Location from './pages/Location/Location';
import Character from './pages/Character/Character';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 3em 2em;
    margin: 0;
    font-family: Aria;
    font-size: 1rem;
    max-width: 1400px;
    margin: 0 auto;
    background-color: #1998cf;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
  }
  *:focus {
    border: none;
    outline: none;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <HistoryRouter history={history}>
      <GlobalStyle />
      <Routes>
        <Route path='statistics' element={<Statistics />}>
          <Route path='episodes' element={<Episodes />} />
          <Route path='location' element={<Location />} />
        </Route>
        <Route path='characters'>
          <Route path=':characterId' element={<Character />} />
        </Route>
        <Route path='/' element={<Main />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
