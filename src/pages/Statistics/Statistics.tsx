import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Statistics() {
  return (
    <div className='statistics'>
      <Link to='episodes'>Episodes</Link>
      Statistics
      <Outlet />
    </div>
  );
}

export default Statistics;
