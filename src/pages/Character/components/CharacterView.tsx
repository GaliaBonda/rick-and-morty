import React from 'react';
import styled from 'styled-components/macro';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';

const StyledDiv = styled.div``;
const StyledHeading = styled.h1``;
const StyledImg = styled.img``;
const StyledParagraph = styled.p``;

function CharacterView({
  name,
  image,
  gender,
  species,
  status,
}: ICharacterApi) {
  return (
    <StyledDiv>
      <StyledHeading>{name}</StyledHeading>
      <StyledImg src={image} alt=''></StyledImg>
      <StyledParagraph>{gender}</StyledParagraph>
      <StyledParagraph>{species}</StyledParagraph>
      <StyledParagraph>{status}</StyledParagraph>
    </StyledDiv>
  );
}

export default CharacterView;
