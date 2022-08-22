import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sagaActions } from '../../store/sagas';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
  }, []);
  return <div>main</div>;
}

export default Main;
