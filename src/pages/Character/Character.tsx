import React from 'react';
import { Outlet } from 'react-router-dom';

function Character() {
  return (
    <div className='character'>
      Character
      <Outlet />
    </div>
  );
}

export default Character;
