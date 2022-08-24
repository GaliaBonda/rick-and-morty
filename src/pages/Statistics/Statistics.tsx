import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Statistics() {
  return (
    <div className='statistics'>
      <Link to='episodes'>Episodes </Link>
      <Link to='locations'>Locations</Link>
      <Outlet />
    </div>
  );
}

export default Statistics;
