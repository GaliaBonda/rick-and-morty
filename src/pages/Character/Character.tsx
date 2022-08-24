import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import CharacterView from './components/CharacterView';

import { sagaActions } from '../../store/sagas';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import Nav from '../../components/Nav';

const StyledDiv = styled.div``;

function Character() {
  const characterId = useParams().characterId;
  const characters = useSelector((state: RootState) => state.characters);
  const { name, status, species, gender, image, id } = characters.find(
    (item) => item.id === Number(characterId)
  ) || { name: '', status: '', species: '', gender: '', image: '', id: 0 };
  // const { name, status, species, gender, image, id } = useSelector(
  //   (state: RootState) => state.character
  // );

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: sagaActions.GET_CHARACTER_SAGA, payload: characterId });
  // }, []);

  const links = [
    { link: '/', title: 'Main' },
    { link: 'statistics', title: 'Statistics' },
    { link: 'statistics/episodes', title: 'Episodes' },
    { link: 'statistics/locations', title: 'Locations' },
  ];

  return (
    <StyledDiv>
      <Nav links={links} />
      <CharacterView
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        image={image}
      ></CharacterView>
    </StyledDiv>
  );
}

export default Character;
