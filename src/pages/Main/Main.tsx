import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isElementInViewport from '../../common/utils/isElementInViewport';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';

function Main() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [bottomHit, setBottomHit] = useState(false);

  const characters = useSelector((state: RootState) => state.characters);
  const nextPage = useSelector((state: RootState) => state.nextPage);

  useEffect(() => {
    dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport(bottomRef.current)) {
        setBottomHit((prevState) => (!prevState ? true : prevState));

        console.log('new characters', nextPage);
        // dispatch({
        //   type: sagaActions.ADD_CHARACTERS_SAGA,
        //   payload: nextPage,
        // });
      }
    };
    if (!bottomHit) window.addEventListener('scroll', handleScroll);
    return () => {
      // setBottomHit(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bottomHit, nextPage]);

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
      <div
        style={{ width: '100%', height: '100px', backgroundColor: 'black' }}
        ref={bottomRef}
      ></div>
    </div>
  );
}

export default Main;
