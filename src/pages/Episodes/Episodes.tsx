import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';

function Episodes() {
  const characters = useSelector((state: RootState) => state.characters);
  const nextPage = useSelector((state: RootState) => state.nextPage);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (nextPage) {
  //     dispatch({
  //       type: sagaActions.ADD_CHARACTERS_SAGA,
  //       payload: nextPage,
  //     });
  //   }

  //   console.log(characters);
  // });

  return <div className='episodes'>Episodes</div>;
}

export default Episodes;
