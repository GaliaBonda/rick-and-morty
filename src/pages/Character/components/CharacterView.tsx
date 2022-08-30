import React from 'react';
import styled from 'styled-components/macro';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';
import CharacterInfo from './CharacterInfo';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6em;
  width: 100%;
  height: 100%;
`;
const StyledDiv = styled.div`
  display: flex;
  column-gap: 3em;
  background-color: #fff;
  padding: 2em 3em;
  border-radius: 20px;
  justify-content: center;
  flex-wrap: wrap;
  flex: 0 1 50%;
`;
const StyledHeading = styled.h1`
  flex: 1 0 100%;
  text-align: center;
  margin-bottom: 1.5em;
  text-transform: uppercase;
`;
const StyledImg = styled.img`
  border-radius: 20px;
  margin-bottom: 2em;
`;

function CharacterView({
  name,
  image,
  gender,
  species,
  status,
}: ICharacterApi) {
  return (
    <FlexDiv>
      <StyledDiv>
        <StyledHeading>{name}</StyledHeading>
        <StyledImg src={image} alt=''></StyledImg>
        <CharacterInfo gender={gender} species={species} status={status} />
      </StyledDiv>
    </FlexDiv>
  );
}

export default CharacterView;
