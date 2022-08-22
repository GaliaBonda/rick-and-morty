import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
  }, []);
  const characters = useSelector((state: RootState) => state.characters);
  return (
    <div>
      <ul className='characters'>
        {characters.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <img src={item.image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
