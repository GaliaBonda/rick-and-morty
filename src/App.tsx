import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Episodes from './pages/Episodes/Episodes';
import Main from './pages/Main/Main';
import Statistics from './pages/Statistics/Statistics';
import Location from './pages/Location/Location';
import Character from './pages/Character/Character';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
