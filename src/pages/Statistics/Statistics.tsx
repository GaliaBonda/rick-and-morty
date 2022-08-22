import React from 'react';
import { Outlet } from 'react-router-dom';

function Statistics() {
  return (
    <div className='statistics'>
      statistics
      <Outlet />
    </div>
  );
}

export default Statistics;
