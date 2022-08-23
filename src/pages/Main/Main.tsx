import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isElementInViewport from '../../common/utils/isElementInViewport';
import Loader from '../../components/Loader';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';
import { history } from '../../common/utils/history';

function Main() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [bottomHit, setBottomHit] = useState(false);
  const [loaderShown, setLoaderShown] = useState(false);

  const characters = useSelector((state: RootState) => state.characters);
  const nextPage = useSelector((state: RootState) => state.nextPage);

  useEffect(() => {
    if (!characters.length)
      dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport(bottomRef.current) && !bottomHit) {
        setBottomHit(true);
        setLoaderShown(true);
        // console.log('new characters', nextPage);
        window.removeEventListener('scroll', handleScroll);
        setBottomHit(false);
        dispatch({
          type: sagaActions.ADD_CHARACTERS_SAGA,
          payload: nextPage,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextPage, bottomHit]);

  useEffect(() => {
    setLoaderShown(false);
  }, [characters.length]);

  const goToCharacter = () => {
    history.push('/characters/1');
  };

  return (
    <div>
      <ul className='characters'>
        {characters.map((item) => {
          return (
            <li key={item.id} onClick={goToCharacter}>
              <p>{item.name}</p>
              <img src={item.image} />
            </li>
          );
        })}
      </ul>
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: 'transparent',
        }}
        ref={bottomRef}
      >
        {loaderShown && <Loader />}
      </div>
    </div>
  );
}

export default Main;
