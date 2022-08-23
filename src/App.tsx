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

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='statistics' element={<Statistics />}>
          <Route path='episodes' element={<Episodes />} />
          <Route path='location' element={<Location />} />
        </Route>
        <Route path='characters' element={<Character />}>
          <Route path=':characterId' element={<Character />} />
        </Route>
        <Route path='/' element={<Main />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
