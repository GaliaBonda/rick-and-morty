import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Location() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'UPDATE_LOCATIONS_SAGA' });
  });
  return <div className='location'>Location</div>;
}

export default Location;
