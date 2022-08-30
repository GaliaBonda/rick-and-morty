import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Episodes from './pages/Episodes/Episodes';
import Main from './pages/Main/Main';
import Statistics from './pages/Statistics/Statistics';
import Location from './pages/Location/Location';
import Character from './pages/Character/Character';
import { createGlobalStyle } from 'styled-components/macro';
import { Provider } from 'react-redux';
import { store } from './store/store';

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
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
  text-decoration: none;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='statistics' element={<Statistics />}>
            <Route path='episodes' element={<Episodes />} />
            <Route path='locations' element={<Location />} />
          </Route>
          <Route path='characters'>
            <Route path=':characterId' element={<Character />} />
          </Route>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
