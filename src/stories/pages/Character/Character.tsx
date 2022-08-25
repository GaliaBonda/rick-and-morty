import React from 'react';
import styled from 'styled-components/macro';
import CharacterView from './components/CharacterView/CharacterView';
import Nav from '../../components/Nav/Nav';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';

const StyledDiv = styled.div``;

function Character({ character }: { character: ICharacterApi }) {
  const { name, status, species, gender, image, id } = character;

  const links = ['Main', 'Statistics', 'Episodes', 'Locations'];

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
