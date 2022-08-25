import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import CharacterView from './components/CharacterView/CharacterView';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store/store';
import Nav from '../../components/Nav/Nav';
import { sagaActions } from '../../../store/sagas';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';

const StyledDiv = styled.div``;

function Character({ character }: { character: ICharacterApi }) {
  const { name, status, species, gender, image, id } = character;
  //   const characterId = useParams().characterId;
  //   const characters = useSelector((state: RootState) => state.characters);
  //   const character = useSelector((state: RootState) => state.character);
  //   const { name, status, species, gender, image, id } =
  //     characters.find((item) => item.id === Number(characterId)) || character;

  const links = [
    { link: '/', title: 'Main' },
    { link: '/statistics', title: 'Statistics' },
    { link: '/statistics/episodes', title: 'Episodes' },
    { link: '/statistics/locations', title: 'Locations' },
  ];

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (!characters.find((item) => item.id === Number(characterId))) {
  //       dispatch({ type: sagaActions.GET_CHARACTER_SAGA, payload: characterId });
  //     }
  //   }, []);

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
      />
    </StyledDiv>
  );
}

export default Character;
