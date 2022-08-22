import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';

function Main() {
  const [contentHeight, setContentHeight] = useState(0);
  const bottomRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
    console.log(bottomRef.current?.offsetTop);

    setContentHeight(bottomRef.current?.offsetTop || 0);
  }, [contentHeight]);

  useEffect(() => {
    const handleScroll = () => {
      console.log('fdfgdg');
      console.log('fdfgdg', window.scrollY);

      if (window.scrollY >= contentHeight) {
        console.log('new characters');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const characters = useSelector((state: RootState) => state.characters);
  const nextPage = useSelector((state: RootState) => state.nextPage);

  return (
    <div>
      <ul className='characters' ref={bottomRef}>
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
      ></div>
    </div>
  );
}

export default Main;
