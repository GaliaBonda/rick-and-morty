import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';

function Episodes() {
  const characters = useSelector((state: RootState) => state.characters);
  const nextPage = useSelector((state: RootState) => state.nextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: sagaActions.GET_ALL_CHARACTERS_SAGA,
    });

    console.log(characters);
  }, []);

  return <div className='episodes'>Episodes</div>;
}

export default Episodes;
