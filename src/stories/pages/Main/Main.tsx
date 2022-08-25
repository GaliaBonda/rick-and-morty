import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isElementInViewport from '../../../common/utils/isElementInViewport';
import Loader from '../../../components/Loader';
import { sagaActions } from '../../../store/sagas';
import { RootState } from '../../../store/store';
import { history } from '../../../common/utils/history';
import CharacterMain from './components/CharacterMain/CharacterMain';
import styled from 'styled-components/macro';
import Nav from '../../components/Nav/Nav';
import ICharacter from '../../../common/interfaces/ICharacter';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHeading = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2em;
  color: white;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
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

function Main({
  characters,
  uploadNewCharacters,
  goToCharacter,
}: { characters: ICharacter[] } & { uploadNewCharacters: () => void } & {
  goToCharacter: () => void;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [bottomHit, setBottomHit] = useState(false);
  const [loaderShown, setLoaderShown] = useState(false);

  // const characters = useSelector((state: RootState) => state.characters);
  // const nextPage = useSelector((state: RootState) => state.nextPage);

  // useEffect(() => {
  //   if (!characters.length)
  //     dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport(bottomRef.current) && !bottomHit) {
        setBottomHit(true);
        setLoaderShown(true);
        window.removeEventListener('scroll', handleScroll);
        setBottomHit(false);
        uploadNewCharacters();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bottomHit]);

  useEffect(() => {
    setLoaderShown(false);
  }, [characters.length]);

  const links = ['Statistics', 'Episodes', 'Locations'];

  return (
    <MainDiv>
      <Nav links={links} />
      <StyledHeading>Rick and Morty characters</StyledHeading>
      <StyledList>
        {characters.map((item) => {
          return (
            <CharacterMain
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
    </MainDiv>
  );
}

export default Main;
