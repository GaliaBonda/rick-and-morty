import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isElementInViewport from '../../common/utils/isElementInViewport';
import Loader from '../../components/Loader';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/store';
import { history } from '../../common/utils/history';
import Character from './components/Character';
import styled from 'styled-components/macro';

const StyledHeading = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2em;
  color: white;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3em;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;

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
      <StyledHeading>Rick and Morty characters</StyledHeading>
      <StyledList>
        {characters.map((item) => {
          return (
            <Character
              key={item.id}
              name={item.name}
              id={item.id}
              image={item.image}
              clickHandler={goToCharacter}
            />
          );
        })}
      </StyledList>
      <StyledDiv ref={bottomRef}>{loaderShown && <Loader />}</StyledDiv>
    </div>
  );
}

export default Main;
